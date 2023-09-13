import Image from "next/image";
import HomeHero from "./HomeHero";
import Loadshedding from "./components/Loadshedding";

const Home = () => {
  return (
    <>
      <Loadshedding />
      <HomeHero />
    </>
  );
};

export default Home;
