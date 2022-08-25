import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katie from "./img/katie_zaferes.png";
import wedding from "./img/wedding_photography.png";
import biking from "./img/mountain_bike.png";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="flex flex-wrap m-6 gap-4">
        <Card
          img={katie}
          rating="5.0"
          title="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img={wedding}
          rating="5.0"
          title="Learn wedding photography"
          price="125"
        />
        <Card
          img={biking}
          rating="4.8"
          title="Group Mountain Biking"
          price="50"
        />
      </section>
    </div>
  );
}

export default App;
