import React from "react";

function About() {
  return (
    <section class="page-section bg-primary text-white mb-0" id="about">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-white">
          About Me
        </h2>

        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <div class="row">
          <div class="col-lg-4 ms-auto">
            <p class="lead">
              👋 Hello! 💻 I am 1st-year Computer Science Undergraduate Student
              at Graphic Era University, Dehradun. 👨‍💻 I am interested in Web,
              Designing, and Open-source. 🖼️ And currently working as a Web
              Designer.
            </p>
          </div>
          <div class="col-lg-4 me-auto">
            <p class="lead">
              Youtuber | Tech Enthusiast | Web Developer | Open-Source
              Contributor | Digital-Designer | Video Editor | Photo Editor |
              UI/UX Designer ⭐️ I am a Quick learner & quickly adapt to new
              technology. ➡️ YouTuber (@thehustlers)
            </p>
          </div>
        </div>

        <div class="text-center mt-4">
          <a
            class="btn btn-xl btn-outline-light"
            href="https://www.linkedin.com/in/ananya-vishnoi-5980531b3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADGpnIQB4CobaNKlBYIYl-t4hcS0SRgTHb0,1635457324247)/"
          >
            <i class="fas fa-download me-2"></i>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
