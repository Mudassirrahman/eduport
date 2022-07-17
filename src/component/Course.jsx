import React from "react";
import {
  AiOutlineHeart,
  AiFillStar,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { BiTable } from "react-icons/bi";

const Course = () => {
  return (
    <>
    <div className="container py-5">
      <div className="text-center pb-xl-3 ">
        <h1 className="display-3 fw-bolder pb-4">Most Popular Courses</h1>
        <p className="fs-5">
          Choose from hundreds of courses from specialist organizations
        </p>
      </div>
      
        <div className="my-5 bg-custm py-2">
          <ul
            className="nav nav-pills nav-pills-bg-soft justify-content-sm-center my-3 px-3"
            id="course-pills-tab"
            role="tablist"
          >
            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0 active"
                id="course-pills-tab-1"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-1"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-1"
                aria-selected="false"
              >
                Web Design
              </button>
            </li>

            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-2"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-2"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-2"
                aria-selected="false"
              >
                Development
              </button>
            </li>

            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-3"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-3"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-3"
                aria-selected="false"
              >
                Graphic Design
              </button>
            </li>

            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-4"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-4"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-4"
                aria-selected="false"
              >
                Marketing
              </button>
            </li>

            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-5"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-5"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-5"
                aria-selected="false"
              >
                Finance
              </button>
            </li>
          </ul>
        </div>
      
      
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              <img
                src="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
                className="card-img-top"
                alt="course image"
              />

              <div className="card-body pb-0">
                <div className="d-flex justify-content-between mb-2">
                  <a href="" className="text-decoration-none bg-light text-purple">
                    All level
                  </a>
                  <a href="" className="h6 mb-0">
                    <AiOutlineHeart />
                  </a>
                </div>

                <h5 className="card-title fw-normal">
                  <a href="" className="text-decoration-none fw-bolder fs-3 text-muted" >Sketch from A to Z: for app designer</a>
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

{
  /* const Course = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="display-3 fw-bolder">Most Popular Courses</h1>
        <p className="fs-5">
          Choose from hundreds of courses from specialist organizations
        </p>
      </div>
      <div className="container">
        <div className="my-3 bg-custm py-2">
          <ul
            className="nav nav-pills nav-pills-bg-soft justify-content-sm-center my-3 px-3"
            id="course-pills-tab"
            role="tablist"
          >
            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0 active"
                id="course-pills-tab-1"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-1"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-1"
                aria-selected="false"
              >
                Web Design
              </button>
            </li>

            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-2"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-2"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-2"
                aria-selected="false"
              >
                Development
              </button>
            </li>

            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-3"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-3"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-3"
                aria-selected="false"
              >
                Graphic Design
              </button>
            </li>

            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-4"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-4"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-4"
                aria-selected="false"
              >
                Marketing
              </button>
            </li>

            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-5"
                data-bs-toggle="pill"
                data-bs-target="course-pills-tabs-5"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-5"
                aria-selected="false"
              >
                Finance
              </button>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="card mx-auto my-2 custm-cardd">
            <img
              className="card-img-top"
              src="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
            </ul>
          </div>
          <div className="card mx-auto my-2 custm-cardd">
            <img
              className="card-img-top"
              src="https://eduport.webestica.com/assets/images/courses/4by3/03.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
            </ul>
          </div>
          <div className="card mx-auto my-2 custm-cardd">
            <img
              className="card-img-top"
              src="https://eduport.webestica.com/assets/images/courses/4by3/07.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
            </ul>
          </div>
          <div className="card mx-auto my-2 custm-cardd">
            <img
              className="card-img-top"
              src="https://eduport.webestica.com/assets/images/courses/4by3/02.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course; */
}
