import { Link } from "react-router-dom";
import "../css/project.css";

export default function ProjectSnippet({ projectData }) {
    const { name, github, link, screenshot, description, id, tags, size, date } = projectData;
    let htmlTags = [];
    htmlTags = (tags).map(function(tag){
        return `<span class="${tag.toLowerCase()}-tag tag">${tag}</span>`;
    }).join('');

    return (
            <article className={"portfolio-item " + size} style={{backgroundImage: "/src/assets/images/projects" + screenshot}}>
                <Link
                    to={"../project/" + id}
                    key={id}
                >
                    <img src={"/src/assets/images/projects" + screenshot} alt={name} className="portfolio-image" />
                    <div className="project-content">
                        <div className="project-title">{name}</div>
                        <div className="project-tags" dangerouslySetInnerHTML={{__html: htmlTags}}></div>
                    </div>
                </Link>
            </article>
        );
}
