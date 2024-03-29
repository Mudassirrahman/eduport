import React from "react";
import {AiFillCheckCircle } from "react-icons/ai"
import {BsFillPlayFill} from "react-icons/bs"
import {FaRegEnvelope} from "react-icons/fa"

const Hero = () => {
  return (
    <>
      <div className="container hero-sec  ">
        <div className="row align-items-center g-5">
          <div className="col-sm-5 col-lg-5 col-xl-6 position-relative z-index-1 text-center text-lg-start mb-5 mb-sm-0">
            <h1 className="mb-0 font-sizeMedia display-6">
              Limitless learning at your 
              <span className="position-relative ps-2">
                fingertips 
                <span className="position-absolute top-50 start-50 custm-position translate-middle ms-3">
                  <svg
                    className="fill-warning"
                    enableBackground="new 0 0 366 62.1"
                    viewBox="0 0 366 62.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-warning"
                      d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="my-4 lead">
              Online learning and teaching marketplace with 5K+ courses & 10M
              students. Taught by experts to help you acquire new skills.
            </p>

            <ul className="list-inline position-relative justify-content-center justify-content-lg-start mb-4">
              <li className="list-inline-item me-2">
                {/* {" "} */}
                <AiFillCheckCircle />

               <span> Learn with
                experts </span> 
    
              </li>
              <li className="list-inline-item me-2">
                {/* {" "} */}
                <AiFillCheckCircle /> 
                <span> Get
                certificate  </span> 
              </li>
              <li className="list-inline-item">
                {/* {" "} */}
                <AiFillCheckCircle />
                <span> Get membership </span> 
              </li>
            </ul>

            <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start">
              <a
                href="#"
                className="btn btn-lg btn-danger me-2 mb-4 mb-sm-0"
              >
                Get Started
              </a>

              <a
                data-glightbox
                data-gallery="office-tour"
                href="https://www.youtube.com/embed/tXHviS-4ygo"
                className="ms-0 ms-sm-4 d-block"
              >
                <div className="btn btn-primary mb-0 me-3 align-middle text-center d-inline-block fs-3 rounded-circle ">
                  {/* {" "} */}
                  <BsFillPlayFill   />
              
                </div>
                <div className="align-middle d-inline-block">
                  <h6 className="mb-0 fw-normal">Watch video</h6>
                </div>
              </a>
            </div>
          </div>
       
          {/* <div className="col-lg-6  col-xl-6 col-sm-6  text-center"> */}
          <div className="col-sm-5 col-lg-7 col-xl-6  text-center position-relative">
          <figure className="position-absolute hero-mainSvg bottom-0 start-0  mt-4 mb-0">
					<svg className="hero-mainSvg"  viewBox="0 0 554 544">
						<path className="fill-primary" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z" />
					</svg>
				</figure>
        <div className="imag-hero">
					<img  src="https://eduport.webestica.com/assets/images/element/07.png" alt="" />
				</div>
        <div>
        <div className="p-3 bg-blur border border-light shadow rounded-3 position-absolute bottom-0 z-index-9 d-none d-xl-block mb-5 ms-5">
					<div className="d-flex justify-content-between align-items-center">
						
						<span className="icon-lg bg-warning p-2 rounded-circle"><FaRegEnvelope className="text-white fs-2  " /></span>
						
						<div className="text-start ms-3">
							<h6 className="mb-0 text-white">Congratulations <span className="ms-4"><AiFillCheckCircle  className="text-success fs-5"/></span></h6>
							<p className="mb-0 small text-white">Your admission completed</p>
						</div>
					</div>
				</div>
        <div className="p-3 bg-success hero-custm d-inline-block shadow-lg position-absolute  translate-middle-y mt-n7 z-index-1 d-none d-md-block rounded-3">
					<p className="text-white d-flex justify-content-end f-size">Our daily new students</p>
					<ul className="avatar-group d-flex align-content-center justify-content-end mb-0">
						<li className="avatar avatar-sm list-unstyled">
							<img className="avatar-imag rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/01.jpg" alt="avatar" />
						</li>
						<li className="avatar avatar-sm list-unstyled">
							<img className="avatar-imag rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/02.jpg" alt="avatar" />
						</li>
						<li className="avatar avatar-sm  list-unstyled">
							<img className="avatar-imag rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/03.jpg" alt="avatar" />
						</li>
						<li className="avatar avatar-sm list-unstyled">
							<img className="avatar-imag rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/04.jpg" alt="avatar" />
						</li>
						<li className="avatar avatar-sm list-unstyled">
							<div className="avatar-imag rounded-circle border-white bg-primary">
								<span className="text-white position-absolute custm-align translate-middle small">1K+</span>
							</div>
						</li>
					</ul>
				</div>
        </div>
        </div>
        </div>
      
      </div>
    </>
  );
};

export default Hero;
