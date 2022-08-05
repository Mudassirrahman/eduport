import React from "react";
import { Link } from "react-router-dom";

// import "../adminPortal.css"

export default function AdminPortal() {
  return (
    <>
      <div id="viewport">
        <div id="sidebar">
          <header>
            <Link to="/" class="navbar-brand">
              <img
                class="navbar-brand-item"
                src="https://eduport.webestica.com/assets/images/logo-light.svg"
                alt=""
              />
            </Link>
          </header>
          <div class="offcanvas-body sidebar-content d-flex flex-column bg-dark">
            <ul class="navbar-nav flex-column" id="navbar-sidebar">
              <li class="nav-item">
                <a href="admin-dashboard.html" class="nav-link active">
                  <i class="bi bi-house fa-fw me-2"></i>Dashboard
                </a>
              </li>

              <li class="nav-item ms-2 my-2">Pages</li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapsepage"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsepage"
                >
                  <i class="bi bi-basket fa-fw me-2"></i>Courses
                </a>

                <ul
                  class="nav collapse flex-column"
                  id="collapsepage"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="admin-course-list.html">
                      All Courses
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="admin-course-category.html">
                      Course Category
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="admin-course-detail.html">
                      Course Detail
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                {" "}
                <a class="nav-link" href="admin-student-list.html">
                  <i class="fas fa-user-graduate fa-fw me-2"></i>Students
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapseinstructors"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseinstructors"
                >
                  <i class="fas fa-user-tie fa-fw me-2"></i>Instructors
                </a>

                <ul
                  class="nav collapse flex-column"
                  id="collapseinstructors"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="admin-instructor-list.html">
                      Instructors
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="admin-instructor-detail.html">
                      Instructor Detail
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="admin-instructor-request.html">
                      Instructor requests
                      <span class="badge text-bg-success rounded-circle ms-2">
                        2
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                {" "}
                <a class="nav-link" href="admin-review.html">
                  <i class="far fa-comment-dots fa-fw me-2"></i>Reviews
                </a>
              </li>

              <li class="nav-item">
                {" "}
                <a class="nav-link" href="admin-earning.html">
                  <i class="far fa-chart-bar fa-fw me-2"></i>Earnings
                </a>
              </li>

              <li class="nav-item">
                {" "}
                <a class="nav-link" href="admin-setting.html">
                  <i class="fas fa-user-cog fa-fw me-2"></i>Admin Settings
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapseauthentication"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseauthentication"
                >
                  <i class="bi bi-lock fa-fw me-2"></i>Authentication
                </a>

                <ul
                  class="nav collapse flex-column"
                  id="collapseauthentication"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="sign-up.html">
                      Sign Up
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="sign-in.html">
                      Sign In
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="forgot-password.html">
                      Forgot Password
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="admin-error-404.html">
                      Error 404
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item ms-2 my-2">Documentation</li>

              <li class="nav-item">
                {" "}
                <a class="nav-link" href="docs/index.html">
                  <i class="far fa-clipboard fa-fw me-2"></i>Documentation
                </a>
              </li>

              <li class="nav-item">
                {" "}
                <a class="nav-link" href="docs/changelog.html">
                  <i class="fas fa-sitemap fa-fw me-2"></i>Changelog
                </a>
              </li>
            </ul>

            <div class="px-3 mt-auto pt-3">
              <div class="d-flex align-items-center justify-content-between text-primary-hover">
                <a
                  class="h5 mb-0 text-body"
                  href="admin-setting.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Settings"
                >
                  <i class="bi bi-gear-fill"></i>
                </a>
                <a
                  class="h5 mb-0 text-body"
                  href="index.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Home"
                >
                  <i class="bi bi-globe"></i>
                </a>
                <a
                  class="h5 mb-0 text-body"
                  href="sign-in.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Sign out"
                >
                  <i class="bi bi-power"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Content --> */}
      <div id="content">
        <div class="con">
          <div class="page-content">
            <nav class="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
              <div class="container-fluid p-0">
                <div class="d-flex align-items-center w-100">
                  <div class="d-flex align-items-center d-xl-none">
                    <a class="navbar-brand" href="index.html">
                      <img
                        class="light-mode-item navbar-brand-item h-30px"
                        src="assets/images/logo-mobile.svg"
                        alt=""
                      />
                      <img
                        class="dark-mode-item navbar-brand-item h-30px"
                        src="assets/images/logo-mobile-light.svg"
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="navbar-expand-xl sidebar-offcanvas-menu">
                    <button
                      class="navbar-toggler me-auto"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasSidebar"
                      aria-controls="offcanvasSidebar"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      data-bs-auto-close="outside"
                    >
                      <i
                        class="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip"
                        data-bs-target="#offcanvasMenu"
                      >
                        {" "}
                      </i>
                    </button>
                  </div>

                  <div class="navbar-expand-lg ms-auto ms-xl-0">
                    <button
                      class="navbar-toggler ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarTopContent"
                      aria-controls="navbarTopContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-animation">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </button>

                    <div
                      class="collapse navbar-collapse w-100"
                      id="navbarTopContent"
                    >
                      <div class="nav my-3 my-xl-0 flex-nowrap align-items-center">
                        <div class="nav-item w-100">
                          <form class="position-relative">
                            <input
                              class="form-control pe-5 bg-secondary bg-opacity-10 border-0"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />
                            <button
                              class="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                              type="submit"
                            >
                              <i class="fas fa-search fs-6 text-primary"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ms-xl-auto">
                    <ul class="navbar-nav flex-row align-items-center">
                      <li class="nav-item ms-2 ms-md-3 dropdown">
                        <a
                          class="btn btn-light btn-round mb-0"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-auto-close="outside"
                        >
                          <i class="bi bi-bell fa-fw"></i>
                        </a>

                        <span class="notif-badge animation-blink"></span>

                        <div class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                          <div class="card bg-transparent">
                            <div class="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                              <h6 class="m-0">
                                Notifications{" "}
                                <span class="badge bg-danger bg-opacity-10 text-danger ms-2">
                                  2 new
                                </span>
                              </h6>
                              <a class="small" href="#">
                                Clear all
                              </a>
                            </div>
                            <div class="card-body p-0">
                              <ul class="list-group list-unstyled list-group-flush">
                                <li>
                                  <a
                                    href="#"
                                    class="list-group-item-action border-0 border-bottom d-flex p-3"
                                  >
                                    <div class="me-3">
                                      <div class="avatar avatar-md">
                                        <img
                                          class="avatar-img rounded-circle"
                                          src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                                          alt="avatar"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <p class="text-body small m-0">
                                        Congratulate <b>Joan Wallace</b> for
                                        graduating from{" "}
                                        <b>Microverse university</b>
                                      </p>
                                      <u class="small">Say congrats</u>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    class="list-group-item-action border-0 border-bottom d-flex p-3"
                                  >
                                    <div class="me-3">
                                      <div class="avatar avatar-md">
                                        <img
                                          class="avatar-img rounded-circle"
                                          src="assets/images/avatar/02.jpg"
                                          alt="avatar"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <h6 class="mb-1">
                                        Larry Lawson Added a new course
                                      </h6>
                                      <p class="small text-body m-0">
                                        What's new! Find out about new features
                                      </p>
                                      <u class="small">View detail</u>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    class="list-group-item-action border-0 border-bottom d-flex p-3"
                                  >
                                    <div class="me-3">
                                      <div class="avatar avatar-md">
                                        <img
                                          class="avatar-img rounded-circle"
                                          src="assets/images/avatar/05.jpg"
                                          alt="avatar"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <h6 class="mb-1">
                                        New request to apply for Instructor
                                      </h6>
                                      <u class="small">View detail</u>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    class="list-group-item-action border-0 border-bottom d-flex p-3"
                                  >
                                    <div class="me-3">
                                      <div class="avatar avatar-md">
                                        <img
                                          class="avatar-img rounded-circle"
                                          src="assets/images/avatar/03.jpg"
                                          alt="avatar"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <h6 class="mb-1">
                                        Update v2.3 completed successfully
                                      </h6>
                                      <p class="small text-body m-0">
                                        What's new! Find out about new features
                                      </p>
                                      <small class="text-body">5 min ago</small>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div class="card-footer bg-transparent border-0 py-3 text-center position-relative">
                              <a href="#" class="stretched-link">
                                See all incoming activity
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="nav-item ms-2 ms-md-3 dropdown">
                        <a
                          class="avatar avatar-sm p-0"
                          href="#"
                          id="profileDropdown"
                          role="button"
                          data-bs-auto-close="outside"
                          data-bs-display="static"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                            alt="avatar"
                          />
                        </a>

                        <ul
                          class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                          aria-labelledby="profileDropdown"
                        >
                          <li class="px-3">
                            <div class="d-flex align-items-center">
                              <div class="avatar me-3 mb-3">
                                <img
                                  class="avatar-img rounded-circle shadow"
                                  src="assets/images/avatar/01.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <div>
                                <a class="h6 mt-2 mt-sm-0" href="#">
                                  Lori Ferguson
                                </a>
                                <p class="small m-0">example@gmail.com</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            {" "}
                            <hr class="dropdown-divider" />
                          </li>

                          <li>
                            <a class="dropdown-item" href="#">
                              <i class="bi bi-person fa-fw me-2"></i>Edit
                              Profile
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              <i class="bi bi-gear fa-fw me-2"></i>Account
                              Settings
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              <i class="bi bi-info-circle fa-fw me-2"></i>Help
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item bg-danger-soft-hover"
                              href="#"
                            >
                              <i class="bi bi-power fa-fw me-2"></i>Sign Out
                            </a>
                          </li>
                          <li>
                            {" "}
                            <hr class="dropdown-divider" />
                          </li>

                          <li>
                            <div class="modeswitch-wrap" id="darkModeSwitch">
                              <div class="modeswitch-item">
                                <div class="modeswitch-icon"></div>
                              </div>
                              <span>Dark mode</span>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            <div class="page-content-wrapper border" />

            <div class="row">
              <div class="col-12 mb-3">
                <h1 class="h3 mb-2 mb-sm-0">Dashboard</h1>
              </div>
            </div>

            <div class="row g-4 mb-4">
              <div class="col-md-6 col-xxl-3">
                <div class="card card-body bg-warning bg-opacity-15 p-4 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h2
                        class="purecounter mb-0 fw-bold"
                       
                      >
                        1985
                      </h2>
                      <span class="mb-0 h6 fw-light">Completed Courses</span>
                    </div>

                    <div class="icon-lg rounded-circle bg-warning text-white mb-0">
                      <i class="fas fa-tv fa-fw"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-xxl-3">
                <div class="card card-body bg-purple bg-opacity-10 p-4 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h2
                        class="purecounter mb-0 fw-bold"
                      >
                        1600
                      </h2>
                      <span class="mb-0 h6 fw-light">Enrolled Courses</span>
                    </div>

                    <div class="icon-lg rounded-circle bg-purple text-white mb-0">
                      <i class="fas fa-user-tie fa-fw"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-xxl-3">
                <div class="card card-body bg-primary bg-opacity-10 p-4 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h2
                        class="purecounter mb-0 fw-bold"
                       
                      >
                        1235
                      </h2>
                      <span class="mb-0 h6 fw-light">Course In Progress</span>
                    </div>

                    <div class="icon-lg rounded-circle bg-primary text-white mb-0">
                      <i class="fas fa-user-graduate fa-fw"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-xxl-3">
                <div class="card card-body bg-success bg-opacity-10 p-4 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <div class="d-flex">
                        <h2
                          class="purecounter mb-0 fw-bold"
                          
                        >
                          845
                        </h2>
                        <span class="mb-0 h2 ms-1">hrs</span>
                      </div>
                      <span class="mb-0 h6 fw-light">Total Watch Time</span>
                    </div>

                    <div class="icon-lg rounded-circle bg-success text-white mb-0">
                      <i class="bi bi-stopwatch-fill fa-fw"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-4 mb-4">
              <div class="col-xxl-8">
                <div class="card shadow h-100">
                  <div class="card-header p-4 border-bottom">
                    <h5 class="card-header-title">Earnings</h5>
                  </div>

                  <div class="card-body">
                    <div id="ChartPayout"></div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-4">
                <div class="card shadow h-100">
                  <div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                    <h5 class="card-header-title">Support Requests</h5>
                    <a href="#" class="btn btn-link p-0 mb-0">
                      View all
                    </a>
                  </div>

                  <div class="card-body p-4">
                    <div class="d-flex justify-content-between position-relative">
                      <div class="d-sm-flex">
                        <div class="avatar avatar-md flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/09.jpg"
                            alt="avatar"
                          />
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-0">
                            <a href="#" class="stretched-link">
                              Lori Stevens
                            </a>
                          </h6>
                          <p class="mb-0">
                            New ticket #759 from Lori Stevens for General
                            Enquiry
                          </p>
                          <span class="small">8 hour ago</span>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div class="d-flex justify-content-between position-relative">
                      <div class="d-sm-flex">
                        <div class="avatar avatar-md flex-shrink-0">
                          <div class="avatar-img rounded-circle bg-purple bg-opacity-10">
                            <span class="text-purple position-absolute top-50 start-50 translate-middle fw-bold">
                              DB
                            </span>
                          </div>
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-0">
                            <a href="#" class="stretched-link">
                              Dennis Barrett
                            </a>
                          </h6>
                          <p class="mb-0">
                            Comment from Billy Vasquez on ticket #659
                          </p>
                          <span class="small">8 hour ago</span>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <div class="d-flex justify-content-between position-relative">
                      <div class="d-sm-flex">
                        <div class="avatar avatar-md flex-shrink-0">
                          <div class="avatar-img rounded-circle bg-orange bg-opacity-10">
                            <span class="text-orange position-absolute top-50 start-50 translate-middle fw-bold">
                              WB
                            </span>
                          </div>
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-0">
                            <a href="#" class="stretched-link">
                              Dennis Barrett
                            </a>
                          </h6>
                          <p class="mb-0">
                            <b>Webestica</b> assign you a new ticket for{" "}
                            <b>Eduport theme</b>
                          </p>
                          <span class="small">5 hour ago</span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between position-relative">
                      <div class="d-sm-flex">
                        <div class="avatar avatar-md flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/04.jpg"
                            alt="avatar"
                          />
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-0">
                            <a href="#" class="stretched-link">
                              Dennis Barrett
                            </a>
                          </h6>
                          <p class="mb-0">
                            Thanks for contact us with your issues.
                          </p>
                          <span class="small">9 hour ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-4">
              <div class="col-lg-6 col-xxl-4">
                <div class="card shadow h-100">
                  <div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                    <h5 class="card-header-title">Top Instructors</h5>
                    <a href="#" class="btn btn-link p-0 mb-0">
                      View all
                    </a>
                  </div>

                  <div class="card-body p-4">
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                        <div class="avatar avatar-md flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/09.jpg"
                            alt="avatar"
                          />
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-1">
                            Lori Stevens
                            <i class="bi bi-patch-check-fill text-info small ms-1"></i>
                          </h6>
                          <ul class="list-inline mb-0 small">
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-book text-purple me-1"></i>25
                              Courses
                            </li>
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-star text-warning me-1"></i>
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>

                      <a href="#" class="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    <hr />

                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                        <div class="avatar avatar-md flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/03.jpg"
                            alt="avatar"
                          />
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-1">Dennis Barrett</h6>
                          <ul class="list-inline mb-0 small">
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-book text-purple me-1"></i>18
                              Courses
                            </li>
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-star text-warning me-1"></i>
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>

                      <a href="#" class="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    <hr />

                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                        <div class="avatar avatar-md flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt="avatar"
                          />
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-1">
                            Jacqueline Miller
                            <i class="bi bi-patch-check-fill text-info small ms-1"></i>
                          </h6>
                          <ul class="list-inline mb-0 small">
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-book text-purple me-1"></i>21
                              Courses
                            </li>
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-star text-warning me-1"></i>
                              4.8/5.0
                            </li>
                          </ul>
                        </div>
                      </div>

                      <a href="#" class="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    <hr />

                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                        <div class="avatar avatar-md flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/04.jpg"
                            alt="avatar"
                          />
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-1">Billy Vasquez</h6>
                          <ul class="list-inline mb-0 small">
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-book text-purple me-1"></i>15
                              Courses
                            </li>
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-star text-warning me-1"></i>
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>

                      <a href="#" class="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    <hr />

                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                        <div class="avatar avatar-md flex-shrink-0">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt="avatar"
                          />
                        </div>

                        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 class="mb-1">
                            Amanda Reed
                            <i class="bi bi-patch-check-fill text-info small ms-1"></i>
                          </h6>
                          <ul class="list-inline mb-0 small">
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-book text-purple me-1"></i>29
                              Courses
                            </li>
                            <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i class="fas fa-star text-warning me-1"></i>
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>

                      <a href="#" class="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-xxl-4">
                <div class="card shadow h-100">
                  <div class="card-header border-bottom p-4">
                    <h5 class="card-header-title">Notice board</h5>
                  </div>

                  <div class="card-body p-4">
                    <div class="custom-scrollbar h-300px">
                      <div class="d-flex justify-content-between position-relative">
                        <div class="d-sm-flex">
                          <div class="icon-lg bg-purple bg-opacity-10 text-purple rounded-2 flex-shrink-0">
                            <i class="fas fa-user-tie fs-5"></i>
                          </div>

                          <div class="ms-0 ms-sm-3 mt-2 mt-sm-0">
                            <h6 class="mb-0">
                              <a href="#" class="stretched-link">
                                Join New Instructor
                              </a>
                            </h6>
                            <p class="mb-0">
                              Amongst moments do in arrived Fat weddings
                              believed prospect
                            </p>
                            <span class="small">5 min ago</span>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div class="d-flex justify-content-between position-relative">
                        <div class="d-sm-flex">
                          <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-2 flex-shrink-0">
                            <i class="fas fa-book-open fs-5"></i>
                          </div>

                          <div class="ms-0 ms-sm-3 mt-2 mt-sm-0">
                            <h6 class="mb-0">
                              <a href="#" class="stretched-link">
                                Update New Course
                              </a>
                            </h6>
                            <p class="mb-0">
                              Arrived Fat weddings believed prospect
                            </p>
                            <span class="small">4 hour ago</span>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div class="d-flex justify-content-between position-relative">
                        <div class="d-sm-flex">
                          <div class="icon-lg bg-info bg-opacity-10 text-info rounded-2 flex-shrink-0">
                            <i class="fas fa-book fs-5"></i>
                          </div>

                          <div class="ms-0 ms-sm-3 mt-2 mt-sm-0">
                            <h6 class="mb-0">
                              <a href="#" class="stretched-link">
                                Update Syllabus
                              </a>
                            </h6>
                            <p class="mb-0">
                              Arrived Fat weddings believed prospect
                            </p>
                            <span class="small">2 days ago</span>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div class="d-flex justify-content-between position-relative">
                        <div class="d-sm-flex">
                          <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-2 flex-shrink-0">
                            <i class="fas fa-globe fs-5"></i>
                          </div>

                          <div class="ms-0 ms-sm-3 mt-2 mt-sm-0">
                            <h6 class="mb-0">
                              <a href="#" class="stretched-link">
                                Update New Feature
                              </a>
                            </h6>
                            <p class="mb-0">
                              Arrived Fat weddings believed prospect
                            </p>
                            <span class="small">3 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer border-top">
                    <div class="alert alert-success d-flex align-items-center mb-0 py-2">
                      <div>
                        <small class="mb-0">45 more notices listed</small>
                      </div>
                      <div class="ms-auto">
                        <a class="btn btn-sm btn-success-soft mb-0" href="#!">
                          {" "}
                          View all{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-xxl-4">
                <div class="card shadow h-100">
                  <div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                    <h5 class="card-header-title">Traffic Sources</h5>
                    <a href="#" class="btn btn-link p-0 mb-0">
                      View all
                    </a>
                  </div>

                  <div class="card-body p-4">
                    <div class="col-sm-6 mx-auto">
                      <div id="ChartTrafficViews"></div>
                    </div>

                    <ul class="list-group list-group-borderless mt-3">
                      <li class="list-group-item">
                        <i class="text-primary fas fa-circle me-2"></i>Create a
                        Design System in Figma
                      </li>
                      <li class="list-group-item">
                        <i class="text-success fas fa-circle me-2"></i>The
                        Complete Digital Marketing Course - 12 Courses in 1
                      </li>
                      <li class="list-group-item">
                        <i class="text-warning fas fa-circle me-2"></i>Google
                        Ads Training: Become a PPC Expert
                      </li>
                      <li class="list-group-item">
                        <i class="text-danger fas fa-circle me-2"></i>Microsoft
                        Excel - Excel from Beginner to Advanced
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
