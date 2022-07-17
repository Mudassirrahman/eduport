
import React from "react";
const Form = () => {

    return(
        <>
        
        <div className="container">
        <div className="my-5 py-lg-5 text-center">
            <h1>Register Today !</h1>
        </div>
<form>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input autoComplete="false"  type="text" id="form3Example1" className="form-control" />
        <label className="form-label" htmlFor="form3Example1">First name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input autoComplete="false"  type="text" id="form3Example2" className="form-control" />
        <label className="form-label" htmlFor="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  
  <div className="form-outline mb-4">
    <input autoComplete="false"  type="email" id="form3Example3" className="form-control" />
    <label className="form-label" htmlFor="form3Example3">Email address</label>
  </div>

  
  <div className="form-outline mb-4">
    <input autoComplete="false"  type="password" id="form3Example4" className="form-control" />
    <label className="form-label" htmlFor="form3Example4">Password</label>
  </div>

  
  <div className="form-check d-flex justify-content-center mb-4">
    <input autoComplete="false"  className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label className="form-check-label" htmlFor="form2Example33">
      Subscribe 
    </label>
  </div>

<div className="d-flex justify-content-center">
<button type="submit" className="btn btn-primary px-5 py-2">Sign up</button>
</div>
  

  
 
</form>
</div>
        </>
    )
}
export default Form;