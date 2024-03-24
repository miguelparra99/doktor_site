import React from "react";
import locations from '../../api/locations'
import { Slide } from "react-awesome-reveal";

const LocationsSection = (props) => {
    return (
        <section className={`wpo-blog-section section-padding ${props.blClass}`}>
            <div className="container">
                <div className="blog-wrap">
                    <div className="row">
                        {locations.slice(0, 3).map((location, bl) => (
                            <div className="col-lg-4 col-md-6 col-12" key={bl}>
                                <Slide direction="up" duration={location.animation} triggerOnce="true">
                                    <div className="blog-single">
                                        <h3>{location.thumb}</h3>
                                        <div className="blog-single-img">
                                            <img src={location.screens} alt="" />
                                        </div>
                                        <div className="blog-single-text">
                                            <h3><a href={"https://www.google.com/maps/place/"+location.slug} target="_blank" rel="noreferrer">{location.title}</a></h3>
                                            <p>{location.description}</p>
                                            <p>Contacto:{location.phone}</p>
                                            <p>Google Maps: <a href={"https://www.google.com/maps/place/"+location.slug} target="_blank" rel="noreferrer"><img src={location.point} alt=""/></a></p>
                                            <span>{location.atentionHours}</span>
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

export default LocationsSection;