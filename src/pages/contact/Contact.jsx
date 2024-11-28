import ContactAddress from './contactComponent/ContactAddress';
import ContactForm from './contactComponent/ContactForm';

function Contact() {
  return (
    <div>
      {/* contact form   */}
      <ContactForm />
      {/* Address */}
      <ContactAddress />
    </div>
  );
}

export default Contact;
