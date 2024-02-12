import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <h1>Characters</h1>
      <div className="container">
      {characters.map((character) => (
        <div key={character.id}>
            <div className="cards">
              <img src={character.image} alt={character.name} style={{ height: "200px" }}/>
              <p>{character.name}</p>
          <Link className="botao" to={"/characters/" + character.id}>
              <button>Details</button>
          </Link>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default CharactersList;
