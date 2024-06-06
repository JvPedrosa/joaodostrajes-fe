import { Hero } from "./components/Hero";
import { NewsLetter } from "./components/NewsLetter";
import { Offers } from "./components/Offers";
import { Popular } from "./components/Popular";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewsLetter />
    </div>
  );
};
