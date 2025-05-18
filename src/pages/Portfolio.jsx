import { projectsArr } from "../components/data";
import ProjectSnippet from "../components/ProjectSnippet";
import Blog from "../components/Blog";

export default function Portfolio() {
    const projectsHtml = projectsArr.slice().reverse().map((project, index) => {
        return (<ProjectSnippet projectData={project} key={index} />);
    });

    return (
        <>
            <main>
                <h1 className="portfolio-title title">My Portfolio</h1>
                <section className="portfolio-section" id="portfolioSection">
                    { projectsHtml }
                </section>
                <div className="recent-posts">
                    <h2 className="recent-posts-header">Recent Posts</h2>
                    <div className="three-recent-posts posts" id="threeRecentPosts">
                        <Blog amount={3} />
                    </div>
                </div>
            </main>
        </>
    );
}
