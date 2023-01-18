import variables from "./styles/variables.module.css";
import styles from "./styles/app.module.css"
import Professional from "./components/Professional";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Professional></Professional>
    </div>
  );
}

export default App;
