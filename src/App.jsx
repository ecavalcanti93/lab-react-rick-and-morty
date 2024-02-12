import { Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:characterId" element={<CharacterDetailsPage />} />
        </Routes>
      </div>
    </>

  )
}

export default App;
