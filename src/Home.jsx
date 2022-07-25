import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Thapa Technical",
    image: "./images/hero.svg",
  };
  return <HeroSection {...data} />;
};

export default Home;
