import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Movies from "./components/movies";

import "./styles/index.scss";

function App() {
  return (
    <div id="grid-container">
      <Header />
      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
