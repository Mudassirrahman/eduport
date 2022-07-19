import Course from "./component/Course";
import Footer from "./component/Footer";
import FormInput from "./component/FormInput";
import Formvalid from "./component/Formvalid";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import TrendCours from "./component/TrendCours";


function App() {
  return (
    <>
     <Navbar /> 
     <Hero />
     <Course />
     <TrendCours />
     <FormInput />
     {/* <Formvalid /> */}
     <Footer />
     
     
    </>
  );
}

export default App;
