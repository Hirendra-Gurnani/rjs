import "./App.css";
import Navcomp from "./components/navComp";
// import Greet from "./components/propComp";
import CarouselComp from "./components/carouselComp";
import CounterComp from "./components/counterComp";
function App() {
  return (
    <>
      <Navcomp />
      {/* <Greet name="Hirendra"></Greet> */}
      <CarouselComp></CarouselComp>
      <CounterComp></CounterComp>
    </>
  );
}

export default App;
