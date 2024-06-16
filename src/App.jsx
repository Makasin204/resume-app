import "./css/reset.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About_me from "./components/About_me/About_me";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Animation from "./components/Animation/Animation";

export default function App() {
  return (
    <div>
      <Animation />
      <Header />
      <main>
        <Hero />
        <About_me />
        <Resume />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}




