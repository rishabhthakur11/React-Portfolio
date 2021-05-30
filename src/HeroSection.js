import React from "react";
import Avatar from "avataaars";

function HeroSection() {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <Avatar
          avatarStyle="Circle"
          topType="LongHairStraight"
          accessoriesType="Blank"
          hairColor="BrownDark"
          facialHairType="Blank"
          clotheType="BlazerShirt"
          eyeType="Default"
          eyebrowType="Default"
          mouthType="Default"
          skinColor="Light"
        />

        <h1 className="masthead-heading text-uppercase mb-0">Ananya Vishnoi</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <p className="masthead-subheading font-weight-light mb-0">
          Web Developer | Open-Source Contributor | Digital-Designer | Photo
          Editor | UI/UX Designer
        </p>
      </div>
    </header>
  );
}

export default HeroSection;
