import React from "react";

export default function PostSnippet({ postData }) {
    const {alt, content, date, id, image, title} = postData;

    let limitedContent;
    if (content.length > 500){
        limitedContent = content.slice(0, 500).replace(/<\/?[^>]+(>|$)/g, "") + '...';
    } else {
        limitedContent = content;
    }

    return (
        <a href={"/html/post.html?id=" + id} class="hero-post">
            <article class="post" data-postid={id}>
                <img src={"src/assets/images/posts" + image} alt={alt} class="post-img" data-postid={id} />
                <div class="post-date" data-postid={id}>{ date }</div>
                <h3 class="post-title" data-postid={id}>{ title }</h3>
                <p class="post-content" data-postid={id}>{ limitedContent }</p>
            </article>
        </a>
    );
}
