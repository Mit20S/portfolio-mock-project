import variables from "./styles/variables.module.css";
import styles from "./styles/app.module.css"
import { Link } from "react-router-dom";

function App() {
	return (
		<main>
			<section className={styles.heroSection}>
				<h3 className={styles.bigHeading}>Hello, I am Evin!</h3>
				{/* <p className={styles.summary}>A dedicated, organized and methodical individual who has good interpersonal skills, is an excellent team worker and is keen and very willing to learn and develop new skills.</p> */}
				<button><Link to="/profile">Check out more &gt;</Link></button>
			</section>
		</main>
	);
}

export default App;
