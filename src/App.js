import variables from "./styles/variables.module.css";
import styles from "./styles/app.module.css"
import Education from "./components/Education";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Education></Education>
    </div>
  );
}

export default App;
