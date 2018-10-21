import AboutFeatures from "./AboutFeatures";
import AboutMain from "./AboutMain";
import bgVideo from "../assets/videos/bgVideo.mp4";
const About = () => {
  return (
    <section id="about">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
          <source src={bgVideo} type="video/webm" />
        </video>
      </div>
      <AboutFeatures />
      <AboutMain />
    </section>
  );
};

export default About;
