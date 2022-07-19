import React from "react";
import {AiOutlineHeart,AiFillStar,AiOutlineClockCircle,} from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { BiTable } from "react-icons/bi";
import CourseMenu from "./CourseMenu";

const Course = () => {
  return (
    <>
      <div className="container course-custmMain py-5">
        <div className="text-center pb-xl-3 ">
          <h1 className="display-3 fw-bolder pb-4">Most Popular Courses</h1>
          <p className="fs-5">
            Choose from hundreds of courses from specialist organizations
          </p>
        </div>

      <CourseMenu />

        <div className="row">
          <div className="col-sm-12 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              <img
                src="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
                className="card-img-top"
                alt="course image"
              />

              <div className="card-body pb-0">
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href=""
                    className="text-decoration-none bg-light text-purple"
                  >
                    All level
                  </a>
                  <a href="" className="h6 mb-0">
                    <AiOutlineHeart />
                  </a>
                </div>

                <h5 className="card-title fw-normal">
                  <a
                    href=""
                    className="text-decoration-none fw-bolder fs-3 text-muted"
                  >
                    Sketch from A to Z: for app designer
                  </a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Proposal indulged no do sociable he throwing settling.
                </p>

                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <BsStarHalf className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 fs-5  h6 fw-light mb-0">
                    4.0/5.0
                  </li>
                </ul>
              </div>

              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <AiOutlineClockCircle className="text-danger me-2" />
                    12h 56m12h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-danger me-2"></i>
                    <BiTable className="text-danger me-2" />
                    15 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              <img
                src="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
                className="card-img-top"
                alt="course image"
              />

              <div className="card-body pb-0">
                <div className="d-flex justify-content-between mb-2">
                  <a href="" className=" bg-purple bg-opacity-10 text-purple">
                    All level
                  </a>
                  <a href="" className="h6 mb-0">
                    <AiOutlineHeart />
                  </a>
                </div>

                <h5 className="card-title fw-normal">
                  <a href="">Sketch from A to Z: for app designer</a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Proposal indulged no do sociable he throwing settling.
                </p>

                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <BsStarHalf className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 fs-5  h6 fw-light mb-0">
                    4.0/5.0
                  </li>
                </ul>
              </div>

              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <AiOutlineClockCircle className="text-danger me-2" />
                    12h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-danger me-2"></i>
                    <BiTable className="text-danger me-2" />
                    15 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              <img
                src="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
                className="card-img-top"
                alt="course image"
              />

              <div className="card-body pb-0">
                <div className="d-flex justify-content-between mb-2">
                  <a href="" className="bg-purple bg-opacity-10 text-purple">
                    All level
                  </a>
                  <a href="" className="h6 mb-0">
                    <AiOutlineHeart />
                  </a>
                </div>

                <h5 className="card-title fw-normal">
                  <a href="">Sketch from A to Z: for app designer</a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Proposal indulged no do sociable he throwing settling.
                </p>

                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <BsStarHalf className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 fs-5  h6 fw-light mb-0">
                    4.0/5.0
                  </li>
                </ul>
              </div>

              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <AiOutlineClockCircle className="text-danger me-2" />
                    12h 56m12h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-danger me-2"></i>
                    <BiTable className="text-danger me-2" />
                    15 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              <img
                src="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
                className="card-img-top"
                alt="course image"
              />

              <div className="card-body pb-0">
                <div className="d-flex justify-content-between mb-2">
                  <a href="" className="bg-purple bg-opacity-10 text-purple">
                    All level
                  </a>
                  <a href="" className="h6 mb-0">
                    <AiOutlineHeart />
                  </a>
                </div>

                <h5 className="card-title fw-normal">
                  <a href="">Sketch from A to Z: for app designer</a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Proposal indulged no do sociable he throwing settling.
                </p>

                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <AiFillStar className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <BsStarHalf className=" fs-4 text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 fs-5  h6 fw-light mb-0">
                    4.0/5.0
                  </li>
                </ul>
              </div>

              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <AiOutlineClockCircle className="text-danger me-2" />
                    12h 56m12h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-danger me-2"></i>
                    <BiTable className="text-danger me-2" />
                    15 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
