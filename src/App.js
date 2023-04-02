import "./App.css";
import Navcomp from "./components/navComp";
import Greet from "./components/propComp";
import CarouselComp from "./components/carouselComp";
function App() {
  return (
    <>
      <Navcomp />
      {/* <Greet name="Hirendra"></Greet> */}
      <CarouselComp></CarouselComp>
    </>
  );
}

export default App;
