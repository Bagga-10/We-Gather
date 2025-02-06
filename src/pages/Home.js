import React from "react";
import "./Home.css";
import Carousel from "../components/Carousel";

import Footer from "../components/Footer"; // Import Footer component
import FAQ from "../components/FAQ";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to We-Gather</h1>
        <p>Your one-stop destination for all your academic needs</p>
      </div>
      {/* Features Section */}
      <div className="features">
        <h2 className="features-heading">All the Features You Need</h2>
        <p className="features-subheading">
          Discover the powerful features that make our platform essential for students
        </p>
        <div className="features-grid">
          {[ 
            { title: "Academic Updates", description: "Stay informed about important academic updates and announcements", icon: "📚" },
            { title: "Event Details", description: "Access all the details about upcoming events and activities", icon: "📅" },
            { title: "Announcements", description: "Receive important announcements from your educational institution", icon: "📢" },
            { title: "Robust Communication", description: "Seamlessly communicate with fellow students through messaging and discussion forums", icon: "💬" },
            { title: "Resource Sharing", description: "Share and access study resources with peers", icon: "📂" },
            { title: "Activity Tracker", description: "Track your academic activities and goals", icon: "📊" },
          ].map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
        {/* Carousel Section */}
        <Carousel />  {/* This will display the carousel between the features and footer */}



        {/* Home Banner Section */}
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">Stay Connected and Informed</h1>
          <span className="home-banner-sub-heading bodySmall">
            Access academic updates, event details, and announcements in one place.
            Our platform provides robust communication features to facilitate seamless
            interaction among students.
          </span>
          <button className="buttonFilled">
            <a href="learnmore.html">Learn More</a>
          </button>
        </div>
      </div>


      
      {/* FAQ Section */}
        <FAQ /> {/* FAQ will be placed below the carousel */}

        
      {/* Footer Section */}
      <Footer /> {/* Footer will be placed below the features section */}
    </div>
  );
}

export default Home;
