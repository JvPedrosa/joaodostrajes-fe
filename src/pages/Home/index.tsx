import { Hero } from "../../components/Hero";
import { NewCollections } from "../../components/NewCollections";
import { Offers } from "../../components/Offers";
import { Popular } from "../../components/Popular";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};
