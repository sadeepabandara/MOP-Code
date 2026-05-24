import dynamic from "next/dynamic";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dashboard from "../../components/Dashboard";

// Lazy load everything below the fold — speeds up first paint significantly
const Chatbot = dynamic(() => import("../chatbot/chatbot"), { ssr: false });
const ContactUsSection = dynamic(() => import("@/components/ContactUsSection"));
const BackToTopButton = dynamic(() => import("@/components/BackToTopButton"), { ssr: false });
const PartnersSection = dynamic(() => import("@/components/PartnersSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const Insights = dynamic(() => import("@/components/Insights"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));

const Home = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <Insights />
      <TestimonialsSection />
      <FAQSection />
      <ContactUsSection />
      <PartnersSection />
      <BackToTopButton />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Home;
