import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;
    const readingTime = readingTimeHelper(post);
    const postedDate = new Date(post.published_at);

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {post.feature_image && (
                    <div
                        className="post-card-image"
                        style={{
                            backgroundImage: `url(${post.feature_image})`,
                        }}
                    ></div>
                )}
            </header>
            <section className="post-card-excerpt">
                {postedDate.toLocaleDateString("en-US")}
                <h2 className="post-card-title">{post.title}</h2>
                <div className="post-card-actual-excerpt">{post.excerpt}</div>
            </section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    {post.tags && (
                        <div className="post-card-tags">
                            <Tags
                                post={post}
                                visibility="public"
                                autolink={false}
                            />
                        </div>
                    )}
                </div>
                <div className="post-card-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer>
        </Link>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        published_at: PropTypes.string,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default PostCard;
