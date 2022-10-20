import "./App.css";

import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { NavBar } from "./components";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
