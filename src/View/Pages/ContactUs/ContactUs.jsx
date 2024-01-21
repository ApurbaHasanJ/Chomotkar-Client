import { Helmet } from "react-helmet-async";
import ContactInfo from "./Components/ContactInfo";
// import ContactForm from "./Components/ContactForm";

const ContactUs = () => {
  return (
    <div className="mb-16">
      <Helmet>
        <title>Contact Us | Chomotkar</title>
      </Helmet>
      <ContactInfo />
      {/* <ContactForm /> */}
    </div>
  );
};

export default ContactUs;
