import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor &amp; Motion Graphics Designer</h4>
                <h5>Nucgnex Life Sciences</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Edited podcasts, created brand intro videos, storytelling motion graphics, and product ads. Designed 3D product visualizations for Amazon and Flipkart.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Executive</h4>
                <h5>Marketyser Global Consulting LLP</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on SEO, social media management, and content creation. Produced motion graphics, animations, and video content for marketing campaigns.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
