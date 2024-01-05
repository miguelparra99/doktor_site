import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {
    return (
        <section className={`wpo-blog-section section-padding ${props.blClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <span>Latest New s & Article</span>
                            <h2>Let’s see latest news & article</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        {blogs.slice(0, 3).map((blog, bl) => (
                            <div className="col-lg-4 col-md-6 col-12" key={bl}>
                                <Slide direction="up" duration={blog.animation} triggerOnce="true">
                                    <div className="blog-single">
                                        <a href="blog-single.html" className="blog-btn">{blog.thumb}</a>
                                        <div className="blog-single-img">
                                            <img src={blog.screens} alt="" />
                                        </div>
                                        <div className="blog-single-text">
                                            <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                            <p>{blog.description}</p>
                                            <span>{blog.create_at}</span>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;