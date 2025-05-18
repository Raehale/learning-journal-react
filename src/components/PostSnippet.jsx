import { Link } from "react-router-dom";

export default function PostSnippet({ postData }) {
    const {alt, content, date, id, image, title} = postData;

    const postImage = "/src/assets/images/posts" + image;
    import(postImage);

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
                <img src={"/src/assets/images/posts" + image} alt={alt} className="post-img" />
                <div className="post-date">{ date }</div>
                <h3 className="post-title">{ title }</h3>
                <p className="post-content">{ limitedContent }</p>
            </article>
        </Link>
    );
}
