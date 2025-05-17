import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Post from "./pages/Post";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blog" element={<Blog />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="blog/:id" element={<Post />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
