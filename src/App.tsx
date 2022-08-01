import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeRoute from "./components/HomeRoute";
import ListStoriesRoute from "./components/ListStoriesRoute";
import ViewStoryRoute from "./components/ViewStoryRoute";
import CreateStoryRoute from "./components/CreateStoryRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/stories" element={<ListStoriesRoute />} />
          <Route path="/stories/:id" element={<ViewStoryRoute />} />
          <Route path="/create-story" element={<CreateStoryRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
