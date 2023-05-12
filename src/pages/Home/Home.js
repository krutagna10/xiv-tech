import Layout from "../../layout/Layout";
import robotImage from "../../assets/robot-image.jpg";
import data from "./data";
import Section from "../../components/UI/Section/Section";
import Container from "../../components/UI/Container/Container";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <Section className="hero-section">
        <Container className="hero">
          <h1>Let's Collaborate</h1>
          <div className="hero__cards">
            {data.map((item, index) => (
              <div className="card grid" key={index}>
                <div className="card__content">
                  <h3 className="card__heading">{item.title}</h3>
                  <p className="card__description">{item.description}</p>
                  <Link className="card__link" to={item.linkPath}>
                    {item.linkText} ->
                  </Link>
                </div>
                <div className="card__image-wrapper">
                  <img
                    className="card__image"
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

export default Home;
