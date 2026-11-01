import { useEffect } from 'react';

import { SITE } from '../../config/site';
import PageShell from '../../components/PageShell';


export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageProps {
  title: string;
  intro?: string;
  sections: LegalSection[];
}

const LegalPage = ({ title, intro, sections }: LegalPageProps) => {
  useEffect(() => {
    document.title = `${title} | ${SITE.brand}`;
  }, [title]);

  return (
    <PageShell>
      <article className='mx-auto max-w-3xl px-6 pb-24 sm:px-8'>
        <h1 className='f-display text-3xl sm:text-4xl'>
          {title.toUpperCase()}
        </h1>
        <p className='f-body mt-3 text-sm text-white/40'>
          Last updated: {SITE.lastUpdated}
        </p>

        {intro && <p className='f-body mt-6 text-white/70'>{intro}</p>}

        <div className='mt-10 space-y-10'>
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className='f-body text-xl font-semibold text-[#C6F135]'>
                {index+1}. {section.heading}
              </h2>

              {section.paragraphs?.map((text) => (
                <p key={text} className='f-body mt-3 leading-relaxed text-white/65'>
                  {text}
                </p>
              ))}

              {section.bullets && (
                <ul className='f-body mt-3 list-disc space-y-2 pl-6 text-white/65 marker:text-[#C6F135]'>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </PageShell>
  );
};

export default LegalPage;
