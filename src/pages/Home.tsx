import Header from "@/Header"
import Hero from "@/Hero";
import PageTransition from "@/components/page-transition";

export default function Home() {

    return (
        <PageTransition>
            <Header />
            <Hero />
        </PageTransition>
    );
}
