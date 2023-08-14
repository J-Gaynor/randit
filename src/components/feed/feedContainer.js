import React, { useState, useEffect } from "react";
import './feed.css';
import Feed from "./feed";

const FeedContainer = () => {
    // Declare a posts and setter variables.
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchRedditPosts();
    }, [posts]); // Empty dependency array indicates it runs only once    

    const fetchRedditPosts = async () => {
        try {
            const response = await fetch('https://www.reddit.com/subreddits.json');
            const data = await response.json();

            const subredditList = data.data.children.map(child => child.data);
            const sfwSubreddits = subredditList.filter((subreddit) => !subreddit.over18);
            generatePost(sfwSubreddits)
        } catch (error) {
            alert(`Unable to fetch subreddits at this time, please try again later. \n Error: ${error}`)
        }
    }
        
    const generatePost = async sfwSubreddits => {
        const randomPosts = []

        for (let i = 0; i < 10; i++) {
            const subIndex = Math.floor(Math.random() * sfwSubreddits.length);
            const subreddit = sfwSubreddits[subIndex];
            try {
                //Get the top posts from the past week
                const response = await fetch(`https://www.reddit.com/r/${subreddit.display_name}/top.json?t=week`);
                const data = await response.json();
                const postsList = data.data.children.map(child => child.data);
                const postIndex = Math.floor(Math.random() * postsList.length);
                const post = postsList[postIndex]
                randomPosts.push(post)
            } catch (error) {
                alert(`Unable to fetch posts at this time, please try again later.\nError: ${error}`)
            }
        }
        setPosts(randomPosts)
        console.log(randomPosts)
    }


    return (
        <Feed posts={posts} />
    )
}

export default FeedContainer;