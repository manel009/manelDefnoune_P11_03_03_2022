import Banner from "./banner/Banner";
import {Routes, Route} from 'react-router-dom';
import Home from "./home/Home";
import Error404 from "./error404/Error404";
import Footer from "./footer/Footer";
import About from "./about/About"
import Location from "./location/Location";


function App() {
  return (
    <div className="App">
      <Banner />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/location/:idLoc" element={<Location />}/>
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;