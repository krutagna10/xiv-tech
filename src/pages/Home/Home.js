import Layout from "../../layout/Layout";
import data from "./data";
import Section from "../../components/UI/Section/Section";
import Container from "../../components/UI/Container/Container";
import "./Home.css";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <Layout>
      <Section className="hero-section">
        <Container className="hero">
          <h1 className="hero__title">Let's Collaborate</h1>
          <div className="hero__cards flow">
            {data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

export default Home;
