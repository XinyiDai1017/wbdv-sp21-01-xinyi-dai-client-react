import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
        <div className="row">
            <div className="col-5 d-none d-md-block">
                Recent Documents
            </div>
            <div className="col-4 d-none d-md-block">
                Owned by me
                <i className="fa fa-caret-down"></i>
            </div>
            <div className="col-3" align="right">
                <i className="fas fa-folder"></i>
                &nbsp;&nbsp;
                <i className="fas fa-sort-alpha-up-alt"></i>
                &nbsp;&nbsp;
                <Link to="/courses/table">
                    <i className="fas fa-list"></i>
                </Link>
            </div>
        </div>


        {/*<h2>Course Grid {courses.length}</h2>*/}
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard course={course}/>
                )
            }
        </div>
    </div>

export default CourseGrid
