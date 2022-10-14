import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../components/layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Whatsapp Buzzer Lte"
    description="A business marketing tool for the 21st century marketers!"
  >
    <VerticalFeatureRow
      title="Bulk SMS"
      description="Easiest way to send a bulky message from your Vcard/Excel sheet to whatsapp contacts without having them saved on your phone!"
      image="/assets/images/feature2.svg"
      imageAlt="Bulk Messaging"
      reverse
    />
    <VerticalFeatureRow
      title="Message scheduling"
      description="sit back and watch your messages being sent at a convinence."
      image="/assets/images/feature3.svg"
      imageAlt="Schedule"
    />
  </Section>
);

export { VerticalFeatures };
