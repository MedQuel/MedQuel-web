import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';

import type { Plan } from '../lib/api';
import { formatInr, monthsOf, perMonthPaise, savingsPercent } from '../lib/format';


interface PlanCardProps {
  plan: Plan;
  allPlans: Plan[];
  highlighted?: boolean;
  featureLimit?: number;
  action: ReactNode;
}

const PlanCard = ({ plan, allPlans, highlighted = false, featureLimit, action }: PlanCardProps) => {
  const savings = savingsPercent(plan, allPlans);
  const months = monthsOf(plan);
  const shown = featureLimit ? plan.features.slice(0, featureLimit) : plan.features;
  const hidden = plan.features.length - shown.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative flex flex-col overflow-hidden rounded-xl bg-[#111] p-6 ${
        highlighted ? 'border-2 border-[#C6F135]' : 'border border-white/10'
      }`}
    >
      {plan.badge && (
        <div className='f-body absolute right-0 top-0 bg-[#C6F135] px-4 py-1 text-xs font-bold uppercase text-black'>
          {plan.badge}
        </div>
      )}

      <div className='mb-6 mt-2 flex items-center gap-3'>
        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#C6F135]/15'>
          <Crown className='h-6 w-6 text-[#C6F135]' />
        </div>

        <div>
          <h3 className='f-body text-xl font-semibold text-white'>
            {plan.name}
          </h3>
          <p className='f-body text-sm text-white/50'>
            {plan.tagline ?? `${months} month${months > 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      <div className='mb-1'>
        <span className='f-display text-3xl'>{formatInr(plan.pricePaise)}</span>
        <span className='f-body text-sm text-white/50'>
          {' '}
          /
          {months === 1 ? 'month' : months === 12 ? 'year' : `${months} months`}
        </span>
      </div>

      <p className='f-body mb-6 min-h-[20px] text-xs text-white/40'>
        {months > 1 ? `${formatInr(perMonthPaise(plan))}/month` : 'Billed once, no auto-renew'}
        {savings > 0 && (
          <span className='ml-2 font-semibold text-[#C6F135]'>
            Save {savings}%
          </span>
        )}
      </p>

      <ul className='mb-6 space-y-3'>
        {shown.map((feature) => (
          <li key={feature} className='flex items-start gap-3'>
            <Check className='mt-0.5 h-5 w-5 flex-shrink-0 text-[#C6F135]' />
            <span className='f-body text-sm text-white/60'>{feature}</span>
          </li>
        ))}

        {hidden > 0 && (
          <li className='f-body pl-8 text-sm text-white/40'>+ {hidden} more</li>
        )}
      </ul>

      <div className='mt-auto'>{action}</div>
    </motion.div>
  );
};

export default PlanCard;
