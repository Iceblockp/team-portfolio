import ContactForm from "@/components/pages/ContactForm";
import Header from "@/components/pages/Header";
import Hero from "@/components/pages/Hero";
import ProjectsShowcase from "@/components/pages/ProjectShowCase";
import ServicesSection from "@/components/pages/ServiceSection";
import SkillsSection from "@/components/pages/SkillSection";
import TeamSection from "@/components/pages/TeamSection";
import TestimonialsSection from "@/components/pages/TestimonialsSection";
import WorkProcessSection from "@/components/pages/WorkProcessSection";


export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main>
                <Hero />
                <ServicesSection />
                <WorkProcessSection />
                <TeamSection />
                <ProjectsShowcase />
                <TestimonialsSection />
                <SkillsSection />
                <ContactForm />
            </main>
        </div>
    )
}

