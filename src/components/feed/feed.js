import './feed.css';
import Error from '../error/error';

const Feed = ({ posts, error }) => {
    return (
        <div id='post-box'>
            <div id="post-container">
                <div>
                    {error && <Error error={error} />}
                </div>
                {posts.map(post => (
                    <div key={post.id} className='post'>
                        <a href={`https://www.reddit.com${post.permalink}`} target='_blank'><h2 id='post-title'>{post.title}</h2></a>
                        {post.url_overridden_by_dest && post.post_hint === "image" && !post.is_video && !post.media_metadata && (
                            <img className='post-media' src={post.url_overridden_by_dest} alt={post.title} />
                        )}
                        {post.is_video && post.media.reddit_video.fallback_url &&  (
                            <video controls
                                title={`Embedded Media ${post.index}`}
                                src={post.media.reddit_video.fallback_url}
                                allowFullScreen
                                className="post-media"
                            />
                        )}
                    </div>
                ))}
            </div>            
        </div>

    )
}

export default Feed;