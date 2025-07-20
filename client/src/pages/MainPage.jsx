import React from "react";
import Home from "../Components/Home";
import JobsCategories from "../Components/JobsCategories";
import NewJobs from "../Components/NewJobs";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
export default function MainPage() {
  return (
    <section>
      <Home  />
      <JobsCategories />
      <NewJobs />
      <Banner />
      <HowItWorks />
    </section>
  );
}
