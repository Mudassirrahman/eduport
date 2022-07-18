const CourseMenu = () =>{
    return(
        <>
        <div className="container">
        <div className=" my-5 bg-custm py-2">
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
        </div>
            
        </>
    )
}
export default CourseMenu;