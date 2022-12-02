import "./App.css";
import BrowserRouter from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/footer/footer";
import Section from "./components/section/section";
import screenshot1 from "./assets/imgs/screenshot-1.jpg";
import screenshot2 from "./assets/imgs/screenshot-2.jpg";
import screenshot3 from "./assets/imgs/screenshot-3.jpg";
import { useState } from "react";

function App() {
  // state that shows contact page content when contact variable is true
  const [Contact, setContact] = useState(false);
  return (
      <div className="App">
        <Navbar />
        <Section
          title="Welcome to Websnap"
          text="Generating variations of link images for social media is a pain.
         Websnap captures your pages content and creates amazing and individual social share cards — fully automated. No more creating images manually."
          image={screenshot1}
        />
        <h1 className="midtitle">
          Generate stunning social cards dynamically.
        </h1>
        <Section
          title="Get social cards right."
          text="A bad social card image can seriously hurt your content's performance on social media.
         An image that features the right content can bring up to 150% more conversions and interactions for your webpage than a social card with no or the wrong image. Your customers will be thrilled!"
          image={screenshot2}
          reversed
        />
        <h1 className="midtitle">
          Choose from our presets or create your own template!
        </h1>
        <Section
          title="Automate everything"
          text="Websnap captures your page’s content in the background to fill a template of your choice and generates a beautiful social card — fully automated.
         Once set up, you get amazing social cards with no effort. No more creating images manually."
          image={screenshot3}
        />
        <Footer />
      </div>
  );
}

export default App;
