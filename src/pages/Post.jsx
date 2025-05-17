import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { postsArr } from "../components/data";

export default function Post() {
    const [post, setPost] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const locationArr = useLocation().pathname.split('/');
    const postId = locationArr[locationArr.length - 1];

    React.useEffect(() => {
        setLoading(true);
        try {
            setPost(postsArr.find(obj => obj.id === postId));
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [postId]);
        
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const { date, title, content, image, alt, id } = post;
    return (
        <article className="selected-post-content">
            <div className="selected-post">
                <div className="selected-post-date">{date}</div>
                <h2 className="selected-post-title title">{title}</h2>
                <img src={"/images/posts" + image} alt={alt} className="selected-post-img" />
                <p className="selected-post-content">{content}</p>
            </div>
        </article>
    );
}
