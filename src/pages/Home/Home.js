import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import heroImage from "../../assets/home/hero-image.jpg";
import Section from "../../components/UI/Section/Section";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <Section className="hero-section">
        <Container className="hero flow">
          <div className="hero__content flow">
            <span className="hero__heading-label">
              Bot, Process, Efficiency
            </span>
            <h1 className="hero__heading">
              Robotic Process Automation that unifies people, process and
              technology
            </h1>
            <p className="hero__description">
              We help business leaders embrace AI-Powered Automation as they
              endeavor to visualize the future.
            </p>
          </div>
          <div className="hero__image-wrapper">
            <img src={heroImage} alt="girl reading from a board" />
          </div>
        </Container>
      </Section>
      <Section className="process-section">
        <Container className="process">
          <span className="process__heading-label">Our Proven Process</span>
          <h2>Align Design Refine</h2>
        </Container>
      </Section>
    </Layout>
  );
}

export default Home;
