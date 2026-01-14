import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Goals } from "@/components/Goals";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { ProposalModal } from "@/components/ProposalModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <About />
      <Services onOpenModal={openModal} />
      <Team />
      <Goals />
      <Testimonials />
      <Blog />
      <Footer onOpenModal={openModal} />
      <ProposalModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default Index;
