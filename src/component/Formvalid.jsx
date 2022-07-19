import Validation from "./Validation";
function Formvalid() {

    //Final submit function
    const formLogin = () => {
  
      console.log("Callback function when form is submitted!");
      console.log("Form Values ", values);
    }
  
    //Custom hook call
    const {handleChange, values,errors,handleSubmit} =  Validation(formLogin);
  
  
    return (
      <div className="App container d-flex my-5 ">
        <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}   />
        {
          errors.email && <h3>{errors.email}</h3>
        }
        <input minLength='8' type="password" name="password" placeholder="password"  onChange={handleChange}   />
        {
          errors.password && <h3>{errors.password}</h3>
  
        }
        <input type="text" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
        {
          errors.username && <h3>{errors.username}</h3>
  
        }
        <input type="submit" value="Submit" className="submit"  />
        </form>
  
      </div>
    );
  }
  
  export default Formvalid;