import React, { useState, useEffect } from "react";
import './feed.css';
import Feed from "./feed";

const FeedContainer = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Set initial loading state
    const [error, setError] = useState();
    const [subreddits, setSubreddits] = useState([]);

    const fetchPosts = async(subreddits) => {
        console.log(subreddits)
        const subIndex = generateIndex(subreddits);
        const subreddit = subreddits[subIndex];
        try {
            const response = await fetch(`https://www.reddit.com/r/${subreddit.display_name}/top.json?t=week`);
            const data = await response.json();
            const postsList = data.data.children.map(child => child.data);
            const filteredPostsList = postsList.filter((post) => !post.over18)
            const postIndex = generateIndex(filteredPostsList);
            const post = filteredPostsList[postIndex];
            setPosts(prevPosts => [...prevPosts, post]);
        } catch (error) {
            const errorMessage = `Cannot load posts at this time, API limit reached. Please try again later.`
            setError(errorMessage);
        }
        setLoading(false); // Set loading state to false after all posts are fetched
    }

    useEffect(() => {
        fetchSubreddits()
    }, []);

    useEffect(() => {
        if (subreddits.length > 0 && posts.length < 9) {
            fetchPosts(subreddits);
        }
    }, [subreddits, posts, fetchPosts]);

    const generateIndex = arr => {
        return (Math.floor(Math.random() * arr.length));
    };

    const fetchSubreddits = async() => {
        try {
            const response = await fetch('https://www.reddit.com/subreddits.json');
            const data = await response.json();
            const subredditList = data.data.children.map(child => child.data);
            const sfwSubreddits = subredditList.filter((subreddit) => !subreddit.over18);
            setSubreddits(sfwSubreddits);
        } catch (error) {
            const errorMessage = `Cannot load subreddits at this time, API limit reached. Please try again later.`
            setError(errorMessage);
        }
    }
    return (
        <Feed posts={posts} loading={loading} error={error} /> // Pass loading state to the Feed component
    )
}

export default FeedContainer;