import React from "react";
import PostSnippet from "./PostSnippet";
import { postsArr } from "./data";
import '../css/blogPosts.css';

export default function Blog() {
    const allPosts = postsArr.slice().reverse().map((post, index) => {
        if (index > 5) {
            return;
        } else {
            return (
                <PostSnippet 
                    postData={ post }
                    key={ post.id }
                />
            );
        }
    });

    return (
        <section className="posts">
            { allPosts }
        </section>
    );
}
