import React from 'react'
import './course-editor.css'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <div>
            <h2>
                <Link to="/courses/table">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor
                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right"></i>
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h2>
        </div>
        <nav class="navbar-expand-lg navbar">
            <div class="container-fluid">
                <a class="nav-link col-3 top-text-first" href="#">
                    <i class="fas fa-times col-2"></i>
                    &nbsp;
                    CS5610 - WebDev
                </a>

                <div class="collapse navbar-collapse col-9" id="navbarSupportedContent" align="center">
                    <ul class="navbar-nav me-auto lg-0">
                        <li class="nav-item col-3">
                            <a class="nav-link top-text" aria-current="page" href="#">
                                Build
                            </a>
                        </li>
                        <li class="nav-item col-3">
                            <a class="nav-link top-text active" href="#">Pages</a>
                        </li>
                        <li class="nav-item col-3">
                            <a class="nav-link top-text" href="#">Theme</a>
                        </li>
                        <li class="nav-item col-3">
                            <a class="nav-link top-text" href="#" tabindex="-1" aria-disabled="true">Store</a>
                        </li>
                        <li class="nav-item col-3">
                            <a class="nav-link top-text" href="#" tabindex="-1" aria-disabled="true">Apps</a>
                        </li>
                        <li class="nav-item col-3">
                            <a class="nav-link top-text" href="#" tabindex="-1" aria-disabled="true">Settings</a>
                        </li>
                        <li class="nav-item col-2">
                            <a class="nav-link top-text" href="#" tabindex="-1" aria-disabled="true">
                                <i class="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container-fluid ">
            <div class="row">
                <div class="col-3 modules-bg">
                    <ul class="list-group">
                        <a class="list-group-item active">
                            Module 1 - jQuery
                            <i class="fas fa-times float-right" ></i>
                        </a>
                        <a class="list-group-item">
                            Module 2 - React
                            <i class="fas fa-times float-right" ></i>
                        </a>
                        <a class="list-group-item">
                            Module 3 - Redux
                            <i class="fas fa-times float-right" ></i>
                        </a>
                        <a class="list-group-item">
                            Module 4 - Native
                            <i class="fas fa-times float-right" ></i>
                        </a>
                        <a class="list-group-item">
                            Module 5 - Angular
                            <i class="fas fa-times float-right" ></i>
                        </a>
                        <a class="list-group-item">
                            Module 6 - Node
                            <i class="fas fa-times float-right" ></i>
                        </a>
                        <a class="list-group-item">
                            Module 7 - Mongo
                            <i class="fas fa-times float-right" ></i>
                        </a>
                        <div class="add-module-list">
                            <i class="fas fa-plus plus-module float-right" ></i>
                        </div>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <br/>

                <div class="col-9 topics">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link topic-text" href="#">Topic 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link topic-text topic-active" href="#">Topic 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link topic-text" href="#">Topic 3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link topic-text" href="#" tabindex="-1" aria-disabled="true">Topic 4</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link topic-text" href="#" tabindex="-1" aria-disabled="true">
                                <i class="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>

                    <div class="col-12 text-right">
                        <button class="btn btn-success">Save</button>
                        Preview
                        <i class="fas fa-toggle-off"></i>
                    </div>
                    <a type="button"
                       class="btn btn-outline-danger"
                       href="../index.html">
                        Cancel
                    </a>
                </div>
            </div>

        </div>
    </div>

export default CourseEditor