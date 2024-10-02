import Recherche from "@/components/bloc/Recherche";
import Header from "@/components/bloc/Header";
import Mainweather from "@/components/weather/Mainweather";
// import { AppWrapper } from "@/context/Weather";

export default function Home() {
  return (
    <main className="m-8">
      <Header />
      <div>
        <Recherche />
      </div>
      <div>{/* <Mainweather /> */}</div>
    </main>
  );
}
