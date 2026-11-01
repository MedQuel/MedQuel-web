import { auth } from './firebase';
import { env } from '../config/env';


export class ApiError extends Error {
  code: string;
  constructor(message: string, code: string) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
  }
}

export interface Plan {
  planId: string;
  name: string;
  tagline: string | null;
  badge: string | null;
  durationDays: number;
  pricePaise: number;
  currency: string;
  features: string[];
  sortOrder: number;
}

export interface PaymentOrder {
  orderId: string;
  keyId: string;
  amount: number;
  currency: string;
  planId: string;
  planName: string;
  prefillName: string | null;
  prefillEmail: string | null;
}
export interface VerifyPaymentResult {
  status: 'activated' | 'pending';
  isPremium: boolean;
  premiumExpiresAt: string | null;
  premiumPlanId: string | null;
}
export interface PaymentStatus {
  orderId: string;
  status: string;
  planId: string;
  isPremium: boolean;
  premiumExpiresAt: string | null;
}

export interface PremiumStatus {
  state: string;
  isPremium: boolean;
  planId: string | null;
  planName: string | null;
  planDurationDays: number | null;
  premiumExpiresAt: string | null;
  daysRemaining: number | null;
  lastPurchasedAt: string | null;
}

export interface Me {
  displayName: string;
  email: string;
  isPremium: boolean;
  premiumExpiresAt: string | null;
  premiumPlanId: string | null;
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string; extensions?: { code?: string } }[];
}


async function gql<T>(query: string, variables: Record<string, unknown> = {}, requireAuth = true): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (requireAuth) {
    const user = auth.currentUser;
    if (!user) throw new ApiError('Please sign in to continue.', 'UNAUTHENTICATED');

    headers.Authorization = `Bearer ${await user.getIdToken()}`;
  }

  let response: Response;
  try {
    response = await fetch(env.apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
  } catch {
    throw new ApiError('Network error. Check your connection and try again.', 'NETWORK');
  }

  let body: GraphQLResponse<T>;
  try {
    body = (await response.json()) as GraphQLResponse<T>;
  } catch {
    throw new ApiError('Unexpected response from the server.', 'BAD_RESPONSE');
  }

  if (body.errors?.length) {
    const first = body.errors[0]!;
    throw new ApiError(first.message, first.extensions?.code ?? 'UNKNOWN');
  }
  if (!body.data) throw new ApiError('Empty response from the server.', 'BAD_RESPONSE');

  return body.data;
}

export async function fetchPlans(): Promise<Plan[]> {
  const data = await gql<{ getPlans: Plan[] }>(
    `query {
      getPlans {
        planId
        name
        tagline
        badge
        durationDays
        pricePaise
        currency
        features
        sortOrder
      }
    }`,
    {},
    false
  );

  return data.getPlans;
}

export async function fetchMe(): Promise<Me> {
  const data = await gql<{ me: Me }>(
    `query {
      me {
        displayName
        email
        isPremium
        premiumExpiresAt
        premiumPlanId
      }
    }`
  );

  return data.me;
}

export async function fetchPremiumStatus(): Promise<PremiumStatus> {
  const data = await gql<{ getPremiumStatus: PremiumStatus }>(
    `query {
      getPremiumStatus {
        state
        isPremium
        planId
        planName
        planDurationDays
        premiumExpiresAt
        daysRemaining
        lastPurchasedAt
      }
    }`
  );

  return data.getPremiumStatus;
}

export async function initiatePayment(planId: string): Promise<PaymentOrder> {
  const data = await gql<{ initiatePayment: PaymentOrder }>(
    `mutation($planId: ID!) {
      initiatePayment(planId: $planId) {
        orderId
        keyId
        amount
        currency
        planId
        planName
        prefillName
        prefillEmail
      }
    }`,
    { planId }
  );

  return data.initiatePayment;
}

export async function verifyPayment(input: {
  orderId: string;
  paymentId: string;
  signature: string;
}): Promise<VerifyPaymentResult> {
  const data = await gql<{ verifyPayment: VerifyPaymentResult }>(
    `mutation($input: VerifyPaymentInput!) {
      verifyPayment(input: $input) {
        status
        isPremium
        premiumExpiresAt
        premiumPlanId
      }
    }`,
    { input }
  );

  return data.verifyPayment;
}

export async function fetchPaymentStatus(orderId: string): Promise<PaymentStatus> {
  const data = await gql<{ getPaymentStatus: PaymentStatus }>(
    `query($orderId: ID!) {
      getPaymentStatus(orderId: $orderId) {
        orderId
        status
        planId
        isPremium
        premiumExpiresAt
      }
    }`,
    { orderId }
  );

  return data.getPaymentStatus;
}
