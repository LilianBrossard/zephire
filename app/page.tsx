import Recherche from "../components/bloc/Recherche";
import Header from "../components/bloc/Header";

export default function Home() {
  return (
    <main className="m-8">
      <Header />
      <div>
        <Recherche />
      </div>
    </main>
  );
}
