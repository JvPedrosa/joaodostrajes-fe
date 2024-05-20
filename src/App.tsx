import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Router } from "./app/router";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
