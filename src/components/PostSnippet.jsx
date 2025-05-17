import React from "react";
import { Link } from "react-router-dom"

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
            // state={{
            //     search: `?${searchParams.toString()}`,
            //     type: typeFilter
            // }}
        >
            <article key={id} className="hero-post">
                <img src={image} alt={alt} class="post-img" />
                <div class="post-date">{ date }</div>
                <h3 class="post-title">{ title }</h3>
                <p class="post-content">{ limitedContent }</p>
            </article>
        </Link>
    );
}
