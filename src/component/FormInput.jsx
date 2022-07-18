import React, { useState } from "react";
const Form = () => {
  const [info, setInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const InfoHandler = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const submitInfo = () => {
    console.log(info);
  };
  return (
    <>
      <div className="container">
        <div className="my-5 py-lg-5 text-center">
          <h1>Register Today !</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  name="fName"
                  value={info.fName}
                  type="text"
                  className="form-control"
                  onChange={InfoHandler}
                  required
                />
                <label className="form-label">First name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  name="lName"
                  value={info.lName}
                  type="text"
                  className="form-control"
                  onChange={InfoHandler}
                  required
                />
                <label className="form-label">Last name</label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              value={info.email}
              name="email"
              type="email"
              className="form-control"
              onChange={InfoHandler}
              required
            />
            <label className="form-label">Email address</label>
          </div>

          <div className="form-outline mb-4">
            <input
              value={info.password}
              name="password"
              type="password"
              className="form-control"
              onChange={InfoHandler}
              required
            />
            <label className="form-label">Password</label>
          </div>
          <div className="form-outline mb-4">
            <input
              value={info.confirmPassword}
              name="confirmPassword"
              type="password"
              className="form-control"
              onChange={InfoHandler}
              required
            />
            <label className="form-label">Confirm Password</label>
          </div>

          {/* <div className="form-check d-flex justify-content-center mb-4">
            <input
          
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example33"
              checked
            />
            <label className="form-check-label" >
              Subscribe
            </label>
          </div> */}

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              onClick={submitInfo}
              className="btn btn-primary px-5 py-2"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
