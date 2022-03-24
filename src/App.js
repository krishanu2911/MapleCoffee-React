import "./App.css";
import RoutePath from "./route/RoutePath";
import { Footer, Navbar } from "./component/index"

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutePath />
      <Footer />
    </div>
  );
}

export default App;
