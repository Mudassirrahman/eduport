import React from "react";
const Form = () => {
    return(
        <>
        
        <div className="container">
        <div className="my-5 py-lg-5 text-center">
            <h1>Register Today !</h1>
        </div>
<form>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input autoComplete="false"  type="text" id="form3Example1" class="form-control" />
        <label class="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input autoComplete="false"  type="text" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  
  <div class="form-outline mb-4">
    <input autoComplete="false"  type="email" id="form3Example3" class="form-control" />
    <label class="form-label" for="form3Example3">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input autoComplete="false"  type="password" id="form3Example4" class="form-control" />
    <label class="form-label" for="form3Example4">Password</label>
  </div>

  
  <div class="form-check d-flex justify-content-center mb-4">
    <input autoComplete="false"  class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Subscribe 
    </label>
  </div>

<div className="d-flex justify-content-center">
<button type="submit" class="btn btn-primary px-5 py-2">Sign up</button>
</div>
  

  
 
</form>
</div>
        </>
    )
}
export default Form;