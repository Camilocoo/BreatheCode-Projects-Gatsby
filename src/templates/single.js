import React from "react";
import { Link } from "gatsby";
import { MarkdownParser, Icon } from "@breathecode/ui-components";
import "../styles/home.css";

const Single = ({ pageContext }) => (
    <div>
        <div className="row p-4">
            <div className="col-12 col-md d-flex">
                <img
                    className="img-fluid p-2 d-none d-lg-block"
                    src="https://ucarecdn.com/dbe55247-376b-4b81-988e-7dd95f4233b5/-/resize/50x/"
                />
                <p className="h1 mt-2"> { pageContext.title }</p>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-sm-start justify-content-md-end d-none d-lg-block">
                <div className="row d-flex align-items-baseline d-none d-lg-block">
                    <div className="col align-self-center d-none d-lg-block ">
                        <Link  className="btn btn-outline-secondary btn-lg d-none d-lg-block " to="/home">
                            
                                Browse all projects
                           
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row p-4">
                <div className="col-12 col-md-6 col-lg-6 col-xl-7 ">
                    <MarkdownParser source={pageContext.markdown} />
                </div>
                <div className="col-12 col-md-6 col-lg-  col-xl-5">
                    <div className="row p-1 sticky-top mt-2">
                        <div className="col">
                            <div className="card ">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold font-italic h4">Goal</h5>
                                    <h6 className="card-subtitle mb-2 text-muted font-italic mb-3 lead">
                                       {pageContext.description}
                                    </h6>
                                    <div className="row border-bottom p-1">
                                        <div className="col-5 ">Difficulty</div>
                                        <div className="col-7 d-flex justify-content-end">{pageContext.difficulty}</div>
                                    </div>
                                    <div className="row border-bottom p-1">
                                        <div className="col-6 ">Video available:</div>
                                        <div className="col-6 d-flex justify-content-end ">{pageContext["video-path"]?"Available":"Not available"}</div>
                                    </div>
                                    <div className="row border-bottom p-1">
                                        <div className="col-6 ">Project average duration</div>
                                        <div className="col-6 d-flex justify-content-end">{pageContext.duration}</div>
                                    </div>
                                    <div className="row border-bottom p-1">
                                        <div className="col-5">Technologies: </div>
                                        <div className="col-7 d-flex justify-content-end ">{pageContext.technology}</div>
                                    </div>

                                    <h6 className="card-subtitle mb-2 text-muted mt-2 lead">{pageContext.talents?"Skills":" "}</h6>
                                    <ul className="list">
                                       {pageContext.talents?pageContext.talents.map((t,i)=>{
                                            return(
                                            <li key={i}>{t.badge}</li>
                                            );
                                       }):""}
                                    </ul>
                                    <div className="row text-center">
                                        <div className="col-6">
                                             {pageContext.demo? <a
                                                href={pageContext.demo}
                                                className="btn btn-outline-primary btn-md px-4 w-100 ">
                                                Live Demo
                                            </a>:" "}

                                        </div>
                                        <div className="col-6">

                                            {pageContext["video-id"]?<a
                                                href={"https://projects.breatheco.de/d/"+pageContext.slug+"#video"}
                                                className="btn btn-outline-success btn-md px-4 w-100 ">
                                                Watch Video
                                            </a>:" "}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Single;