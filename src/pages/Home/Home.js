import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/UI/Section/Section";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <Section className="hero-section">
        <Container className="hero">
          <span className="hero__heading-label">Bot, Process, Efficiency</span>
          <h1 className="hero__heading">
            Robotic Process Automation that unifies people, process and
            technology
          </h1>
          <p className="hero__description">
            We help business leaders embrace AI-Powered Automation as they
            endeavor to visualize the future.
          </p>
        </Container>
      </Section>
    </Layout>
  );
}

export default Home;
