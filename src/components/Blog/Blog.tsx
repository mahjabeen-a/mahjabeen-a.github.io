import "./Blog.css";
import { Link } from "react-router-dom";
import { recentBlogsData } from "../../data/BlogData";

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <div className="blog__header">
                <h2 className="section__title">Latest Posts</h2>
                <Link to="/blogs">
                    <h3 className="view__all">View all →</h3>
                </Link>
            </div>

            <div className="blog__container grid">
                {recentBlogsData.map(({ id, category, thumbnail, title, date, author, url }) => {
                    return (
                        <a href={url}  key={id}>
                            <div className="blog__card">
                                <div className="blog__thumb">
                                    <span className="blog__category">{category}</span>
                                    <img src={thumbnail} alt="" className="blog__img" />
                                </div>
                                <div className="blog__details">
                                    <h3 className="blog__title">{title}</h3>
                                    <div className="blog__meta">
                                        <span>{date}</span>
                                        <span className="blog__dot">.</span>
                                        <span>{author}</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                    );
                })}
            </div>
        </section>
    );
}

export default Blog;