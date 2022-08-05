import React from "react";
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram , AiOutlineTwitter ,AiOutlineLinkedin} from "react-icons/ai"

const Footer = ()=>{
    return(
        <>
<footer className="pt-5 mt-5 bg-light">
	<div className="container">
		
		<div className="row g-4">

			
			<div className="col-lg-3">
				
				<a  className="me-0" href="index.html">
					<img className="dark-mode-item h-40px" height="40px" src="https://eduport.webestica.com/assets/images/logo.svg" alt="logo" />
				</a>
				<p className="my-3">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
				
				<ul className="list-inline mb-0 mt-3">
					<li className="list-inline-item"> <a href="" className="btn btn-white btn-sm shadow px-2 text-facebook" ><FiFacebook className="fs-4" /></a> </li>
					<li className="list-inline-item"> <a href="" className="btn btn-white btn-sm shadow px-2 text-instagram" ><AiOutlineInstagram className="fs-4" /></a> </li>
					<li className="list-inline-item"> <a href="" className="btn btn-white btn-sm shadow px-2 text-twitter" ><AiOutlineTwitter className="fs-4" /></a> </li>
					<li className="list-inline-item"> <a href="" className="btn btn-white btn-sm shadow px-2 text-linkedin" ><AiOutlineLinkedin className="fs-4" /></a> </li>
				</ul>
			</div>
			

			
			<div className="col-lg-6">
				<div className="row g-4">
					
					<div className="col-6 col-md-4">
						<h5 className="mb-2 mb-md-4">Company</h5>
						<ul className="nav flex-column">
							<li className="nav-item"><a href="" className="nav-link" >About us</a></li>
							<li className="nav-item"><a href="" className="nav-link" >Contact us</a></li>
							<li className="nav-item"><a href="" className="nav-link" >News and Blogs</a></li>
							<li className="nav-item"><a href="" className="nav-link" >Library</a></li>
							<li className="nav-item"><a href="" className="nav-link" >Career</a></li>
						</ul>
					</div>
									
					
					<div className="col-6 col-md-4">
						<h5 className="mb-2 mb-md-4">Community</h5>
						<ul className="nav flex-column">
							<li className="nav-item"><a href="" className="nav-link" >Documentation</a></li>
							<li className="nav-item"><a href="" className="nav-link" >Faq</a></li>
							<li className="nav-item"><a href="" className="nav-link" >Forum</a></li>
							<li className="nav-item"><a href="" className="nav-link" >Sitemap</a></li>
						</ul>
					</div>

					
					<div className="col-6 col-md-4">
						<h5 className="mb-2 mb-md-4">Teaching</h5>
						<ul className="nav flex-column">
							<li className="nav-item"><a href="" className="nav-link" >Become a teacher</a></li>
							<li className="nav-item"><a href="" className="nav-link" >How to guide</a></li>
							<li className="nav-item"><a href="" className="nav-link" >Terms &amp; Conditions</a></li>
						</ul>
					</div>
				</div>
			</div>
		

			
			<div className="col-lg-3">
				<h5 className="mb-2 mb-md-4">Contact</h5>
				
				<p className="mb-2">
					Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
					<span className="d-block small">(9:AM to 8:PM IST)</span>
				</p>

				<p className="mb-0">Email:<span className="h6 fw-light ms-2">example@gmail.com</span></p>

				<div className="row g-2 mt-2">
					
					<div className="col-6 col-sm-4 col-md-3 col-lg-6">
						<a href="" > <img src="https://eduport.webestica.com/assets/images/client/google-play.svg" alt="" /> </a>
					</div>
					
					<div className="col-6 col-sm-4 col-md-3 col-lg-6">
						<a href="" > <img src="https://eduport.webestica.com/assets/images/client/app-store.svg" alt="app-store" /> </a>
					</div>
				</div> 
			</div> 
		
		</div>

	
		<hr className="mt-4 mb-0" />

		
		<div className="py-3">
			<div className="container px-0">
				<div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
					
					<div className="text-primary-hover"> Copyrights <a href=""  className="text-body">©2021 Eduport</a>. All rights reserved. </div>
				
					<div className=" mt-3 mt-md-0">
						<ul className="list-inline mb-0">
							<li className="list-inline-item">
							
								<div className="dropup mt-0 text-center text-sm-end">
									<a href="" className="dropdown-toggle nav-link"  role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
										<i className="fas fa-globe me-2"></i>Language
									</a>
									<ul className="dropdown-menu min-w-auto" aria-labelledby="languageSwitcher">
										<li><a href="" className="dropdown-item me-4" ><img className="fa-fw me-2" src="assets/images/flags/uk.svg" alt="" />English</a></li>
										<li><a href="" className="dropdown-item me-4" ><img className="fa-fw me-2" src="assets/images/flags/gr.svg" alt="" />German </a></li>
										<li><a href="" className="dropdown-item me-4" ><img className="fa-fw me-2" src="assets/images/flags/sp.svg" alt="" />French</a></li>
									</ul>
								</div>
							</li>
							<li className="list-inline-item"><a href="" className="nav-link" >Terms of use</a></li>
							<li className="list-inline-item"><a href="" className="nav-link pe-0" >Privacy policy</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

        {/* <footer className="bd-footer py-5 mt-5 bg-light">
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-3 mb-3">
        <a href="" className="text-decoration-none d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"/></svg>
          <span className="fs-5">Bootstrap</span>
        </a>
        <ul className="list-style-none small text-muted">
          <li className="mb-2">Designed and built with all the love in the world by the <a href="" className="text-decoration-none" href="/docs/5.0/about/team/" >Bootstrap team</a> with the help of <a href="" className="text-decoration-none" href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
          <li className="mb-2">Code licensed <a href="" className="text-decoration-none" href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="" className="text-decoration-none" href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
          <li className="mb-2">Currently v5.0.2.</li>
          <li className="mb-2">Analytics by <a href="" className="text-decoration-none" href="https://usefathom.com/ref/ADZSBE" target="_blank" rel="noopener">Fathom</a>.</li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="" className="text-decoration-none" href="/">Home</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="/docs/5.0/">Docs</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="/docs/5.0/examples/">Examples</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://themes.getbootstrap.com/">Themes</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://blog.getbootstrap.com/">Blog</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>Guides</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="" className="text-decoration-none" href="/docs/5.0/getting-started/">Getting started</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="/docs/5.0/examples/starter-template/">Starter template</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="/docs/5.0/getting-started/webpack/">Webpack</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="/docs/5.0/getting-started/parcel/">Parcel</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>Projects</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://github.com/twbs/icons">Icons</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://github.com/twbs/rfs">RFS</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://github.com/twbs/bootstrap-npm-starter">npm starter</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>Community</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://opencollective.com/bootstrap">Open Collective</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://bootstrap-slack.herokuapp.com/">Slack</a></li>
          <li className="mb-2"><a href="" className="text-decoration-none" href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer> */}

            {/* <section className="section-no-border pb-3">

    <footer className="page-footer font-small mdb-color pt-4">

      
      <div className="container text-center text-md-left">

        
        <div className="row text-center text-md-left mt-3 pb-3">

          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur
              adipisicing elit.</p>
          </div>
          

          <hr className="w-100 clearfix d-md-none" />

          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="" className="text-decoration-none" href="#!">MDBootstrap</a>
            </p>
            <p>
              <a href="" className="text-decoration-none" href="#!">MDWordPress</a>
            </p>
            <p>
              <a href="" className="text-decoration-none" href="#!">BrandFlow</a>
            </p>
            <p>
              <a href="" className="text-decoration-none" href="#!">Bootstrap Angular</a>
            </p>
          </div>
          

          <hr className="w-100 clearfix d-md-none" />

          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
            <p>
              <a href="" className="text-decoration-none" href="#!">Your Account</a>
            </p>
            <p>
              <a href="" className="text-decoration-none" href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="" className="text-decoration-none" href="#!">Shipping Rates</a>
            </p>
            <p>
              <a href="" className="text-decoration-none" href="#!">Help</a>
            </p>
          </div>

          
          <hr className="w-100 clearfix d-md-none" />

          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          

        </div>
       */}

        {/* <hr />

        
        <div className="row d-flex align-items-center">

          
          <div className="col-md-7 col-lg-8">

            
            <p className="text-center text-md-left">© 2020 Copyright:
              <a href="" className="text-decoration-none" href="/">
                <strong> MDBootstrap.com</strong>
              </a>
            </p>

          </div>
          

          
          <div className="col-md-5 col-lg-4 ml-lg-0">

            
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="" className="text-decoration-none" className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="text-decoration-none" className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="text-decoration-none" className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="text-decoration-none" className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
          

        </div> */}
        

      {/* </div>
     

    </footer>
    
  </section> */}
        </>
    )
}

export default Footer;