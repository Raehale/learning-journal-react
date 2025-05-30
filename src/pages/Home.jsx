import Hero from "../components/Hero";
import Blog from "../components/Blog";

export default function Home() {
    return (
        <>
            <Hero />
            <Blog amount={6} home={true} />
        </>
    );
}
