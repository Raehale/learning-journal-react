import { postsArr } from "./data";
import { Link } from "react-router-dom";

export default function PostSnippet({ postData }) {
    const {alt, content, date, id, image, title} = postData;

    let limitedContent;
    if (content.length > 500){
        limitedContent = content.slice(0, 500).replace(/<\/?[^>]+(>|$)/g, "") + '...';
    } else {
        limitedContent = content;
    }

    return (
        <Link
            to={"blog/" + id}
            key={id}
        >
            <article key={id} className="post">
                <img src={image} alt={alt} className="post-img" />
                <div className="post-date">{ date }</div>
                <h3 className="post-title">{ title }</h3>
                <p className="post-content">{ limitedContent }</p>
            </article>
        </Link>
    );
}
