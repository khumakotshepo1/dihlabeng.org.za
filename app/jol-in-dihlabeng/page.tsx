import Eat from "./Eat";
import Events from "./Events";
import JolHero from "./JolHero";
import Neighbourhoods from "./Neighbourhoods";
import Stay from "./Stay";

const JolInDihlabeng = () => {
  return (
    <>
      <JolHero />

      <section className="flex flex-col justify-center items-center">
        <h1>Explore</h1>
        <Neighbourhoods />
        <Events />
        <Eat />
        <Stay />
      </section>
    </>
  );
};

export default JolInDihlabeng;
