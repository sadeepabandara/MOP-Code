import dynamic from "next/dynamic";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dashboard from "../../components/Dashboard";
import Insights from "@/components/Insights";
import { supabase } from "@/library/supabaseClient";

// Lazy load everything below the fold — speeds up first paint significantly
const Chatbot = dynamic(() => import("../chatbot/chatbot"));
const ContactUsSection = dynamic(() => import("@/components/ContactUsSection"));
const BackToTopButton = dynamic(() => import("@/components/BackToTopButton"));
const PartnersSection = dynamic(() => import("@/components/PartnersSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));

const Home = async () => {
  const [recentResult, categoriesResult] = await Promise.all([
    supabase
      .from("usecases")
      .select(`
        id,
        title,
        description,
        cover_img,
        created_at,
        usecase_tags (
          tags (
            id,
            name,
            slug
          )
        )
      `)
      .order("created_at", { ascending: false })
      .limit(4),
    supabase
      .from("categories")
      .select("id, category_name, description, cover_img")
      .order("category_name", { ascending: true }),
  ]);

  const recentUseCases = (recentResult.data ?? []).map(({ usecase_tags, ...rest }) => ({
    ...rest,
    tags: (usecase_tags as unknown as Array<{ tags: { id: number; name: string; slug: string } | null }>)
      .map((row) => row.tags)
      .filter(Boolean),
  }));
  const homeCategories = categoriesResult.data ?? [];

  return (
    <div>
      <Header />
      <Dashboard
        initialRecentUseCases={recentUseCases}
        initialHomeCategories={homeCategories}
      />
      <Insights initialCategories={homeCategories} />
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
