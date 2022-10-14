import Link from 'next/link';

import { Button } from '../components/button/Button';
import { CTABanner } from '../components/cta/CTABanner';
import { Section } from '../components/layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="To enjoy this features and more!"
      subtitle="Start your Free Trial."
      button={
        <Link href="/">
          <a>
            <Button xl="xl">Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
