import { useEffect } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import { SITE } from '../../config/site';
import PageShell from '../../components/PageShell';


const items = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE.supportEmail,
    href: `mailto:${SITE.supportEmail}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: SITE.supportPhone,
    href: `tel:${SITE.supportPhone.replace(/\s/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Registered address',
    value: `${SITE.legalName}, ${SITE.address}`,
  },
  {
    icon: Clock,
    label: 'Support hours',
    value: SITE.supportHours
  },
];

const Contact = () => {
  useEffect(() => {
    document.title = `Contact | ${SITE.brand}`;
  }, []);

  return (
    <PageShell>
      <section className='mx-auto max-w-3xl px-6 pb-24 sm:px-8'>
        <h1 className='f-display text-3xl sm:text-4xl'>
          CONTACT <span className='text-[#C6F135]'>US</span>
        </h1>
        <p className='f-body mt-4 text-white/60'>
          Questions about your account, a payment or a refund? Write to us and
          include your registered email and, for payments, the order id. We
          reply within 2 business days.
        </p>

        <div className='mt-10 grid gap-4 sm:grid-cols-2'>
          {items.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className='rounded-xl border border-white/10 bg-[#111] p-5'>
              <Icon className='h-6 w-6 text-[#C6F135]' />
              <p className='f-body mt-3 text-xs uppercase tracking-wide text-white/40'>
                {label}
              </p>

              {href ? (
                <a
                  href={href}
                  className='f-body mt-1 block break-words text-white transition-colors hover:text-[#C6F135]'
                >
                  {value}
                </a>
              ) : (
                <p className='f-body mt-1 break-words text-white'>{value}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
