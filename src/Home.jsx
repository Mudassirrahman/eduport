import React from "react";
import Course from "./component/Course";
import DashBord from "./component/DashBord";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import TrendCours from "./component/TrendCours";
import FormInput from "./component/FormInput";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashBord />
      <Course />
      <TrendCours />
      <FormInput />
      <Footer />
    </>
  );
}
