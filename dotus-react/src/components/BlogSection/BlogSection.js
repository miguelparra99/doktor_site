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
                        <h2 style={{ color: 'black' }}>Agenda tu cita ahora</h2>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;