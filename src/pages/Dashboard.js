import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardHero from "../components/DashboardHero";
import DashboardFeatures from "../components/DashboardFeatures";
import DashboardTestimonials from "../components/DashboardTestimonials";
import DashboardFooter from "../components/DashboardFooter";

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <DashboardHeader />
      <DashboardHero />
      <DashboardFeatures />
      <DashboardTestimonials />
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
