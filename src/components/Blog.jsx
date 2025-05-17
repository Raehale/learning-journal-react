import React from "react";
import PostSnippet from "./PostSnippet";
import { postsArr } from "./data";
import '../css/blogPosts.css';

export default function Blog({amount}) {
    const allPosts = postsArr.reverse().splice(1, postsArr.length - 1).map((post, index) => {
        if (index > amount - 1) {
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
