import HomeHero from "./HomeHero";
import Loadshedding from "./components/Loadshedding";

const Home = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Loadshedding />
      <HomeHero />
    </>
  );
};

export default Home;
