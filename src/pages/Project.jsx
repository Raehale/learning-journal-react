import React from "react";
import { useLocation } from "react-router-dom";
import { projectsArr } from "../components/data";
import "../css/project.css";

export default function Project() {
    const [project, setProject] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const locationArr = useLocation().pathname.split('/');
    const projectId = locationArr[locationArr.length - 1];

    React.useEffect(() => {
        setLoading(true);
        try {
            setProject(projectsArr.find(obj => obj.id == projectId));
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [projectId]);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const { name, github, link, screenshot, description, id, tags, size, date } = project;

    let tagsHtml = [];
    tagsHtml = tags.map(tag => {
        return `<span class="${tag.toLowerCase()}-tag tag">${tag}</span>`;
    }).join('');

    return (
        <>
            <article className="selected-project-content">
                <div className="selected-post">
                    <div className="selected-post-date">{date}</div>
                    <a href={link} target="_blank" alt={name}>
                        <h2 className="selected-post-title title">{name}</h2>
                    </a>
                    <img src={"/src/assets/images/projects" + screenshot} alt={name} className="selected-project-img" />
                    <div className="portfolio-body">
                        <p className="post-content">{description}</p>
                        <a href={github} target="_blank" alt={"The github repository for " + name} className="project-github">
                            Github Repository for {name}
                        </a>
                        <div className="project-tags" dangerouslySetInnerHTML={{__html: tagsHtml}}></div>
                    </div>
                </div>
            </article>
        </>
    );
}
