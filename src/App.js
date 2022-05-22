import "./styles.css";
import Card from "./components/Card";
export default function App() {
  return (
    <div className="App">
      <Card
        date={"28/10/2020"}
        logoo={"amazon"}
        heading={"Amazon Gift"}
        subhead={"Pay"}
        device={"Desktop-mobile"}
        color={"orange"}
      />
      <Card
        date={"17 Sep 2020"}
        logoo={"apple"}
        heading={"Apple Gift"}
        subhead={"Payment"}
        device={"Desktop-mobile"}
        color={"grey"}
      />
    </div>
  );
}
