import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/UI/Section/Section";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <Section className="hero-section">
        <Container>This is home page</Container>
      </Section>
    </Layout>
  );
}

export default Home;
