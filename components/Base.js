import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { Meta } from '../components/layout/Meta';
import siteMetadata from '../utils/siteMetadata';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HeroOneButton } from './hero/HeroOneButton';
import { Section } from './layout/Section';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={siteMetadata.title} description={siteMetadata.description} />
    <Hero />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern messaging tool\n'}
            <span className="text-primary-500">
              <Typewriter
                options={{
                  strings: 'Whatsapp Buzzer',
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </>
        }
        description="The easiest way to send bulk message to whatsapp and schedule messages"
        button={<a>Start today!</a>}
      />
    </Section>
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
