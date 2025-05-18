import React from "react"
import { postsArr } from "./data.js"
import '../css/hero.css'

export default function Hero() {
    const mostRecentPost = postsArr.at(-1);
    const mostRecentPostsImage = "/src/assets/images/posts" + mostRecentPost.image
    const heroStyle = {
        backgroundImage: "url(" + mostRecentPostsImage + ")"
    }

    import(mostRecentPostsImage);

    function removeTags(str) {
        if ((str === null) || (str === '')) {
            return false;

        } else {
            str = str.toString();

            return str.replace(/(<([^>]+)>)/ig, '');
        }
    }

    const contentString = removeTags(mostRecentPost.content)

    let heroContent = '';
    if (contentString.length > 700) {
        heroContent = contentString.slice(0, 700) + '...';
    } else {
        heroContent = contentString;
    }

    import(mostRecentPostsImage)

    return (
        <section style={heroStyle} data-postid={mostRecentPost.id}>
            <a href={"/html/post.html?id=" + mostRecentPost.id} className="hero_post">
                <div className="hero_header_content" data-postid={mostRecentPost.id}>
                    <div className="hero_date" data-postid={mostRecentPost.id}>
                        {mostRecentPost.date}
                    </div>
                    <h2 className="hero_title" data-postid={mostRecentPost.id}>
                        {mostRecentPost.title}
                    </h2>
                    <p className="hero_content" data-postid={mostRecentPost.id}>
                        {heroContent}
                    </p>
                </div>
            </a>
        </section>
    )
}