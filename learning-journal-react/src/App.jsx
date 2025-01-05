import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import './css/index.css'

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Blog />
			</main>
			<Footer />
		</>
	)
}

export default App
