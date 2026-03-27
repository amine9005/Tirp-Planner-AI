import ContactMeAction from "@/components/ui/actions/forms/contact/ContactMe.action";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import FormLayout from "@/components/ui/layouts/Form.layout";

const ContactMePage = () => {
  return (
    <div className="hero-section">
      <BlurFade delay={0.2}>
        <FormLayout>
          <ContactMeAction />
        </FormLayout>
      </BlurFade>
    </div>
  );
};

export default ContactMePage;
