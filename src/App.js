import "./App.css";
import End from "./components/End/End";
import Middle from "./components/Middle/Middle";
import Products from "./components/Products/Products";
import { Slider } from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";
import Tryon from "./components/Tryon/Tryon";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <Middle/>
      <Slider/>
      <Tryon/>
      <Products/>
      <Testimonials/>
      <End/> 
    </div>
  );
}

export default App;
