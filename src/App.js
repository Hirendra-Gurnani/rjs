import "./App.css";
import Navcomp from "./components/navComp";
import CarouselComp from "./components/carouselComp";
// import Greet from "./components/propComp";
// import CounterComp from "./components/counterComp";
// import UserGreet from "./components/userGreet";
// import UpdatedComp from "./components/withCounter";
// import LoopComp from "./components/loopComp";
// import HoverCounterComp from "./components/HoverCounterComp";
function App() {
  return (
    <>
      <Navcomp />
      {/* <UserGreet></UserGreet> */}
      {/* <Greet name="Hirendra" sname="Gurnani"></Greet> */}
      <CarouselComp></CarouselComp>
      {/* <UpdatedComp></UpdatedComp> */}
      {/* <CounterComp></CounterComp><br />
      <HoverCounterComp></HoverCounterComp>
      <LoopComp /> */}
    </>
  );
}

export default App;