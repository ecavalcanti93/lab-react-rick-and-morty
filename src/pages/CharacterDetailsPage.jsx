import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/";

function CharacterDetailsPage() {
  const [detailedCharacter, setDetailedCharacter] = useState({});
  const { characterId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL + characterId)
      .then((response) => {
        setDetailedCharacter(response.data);
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
      });
  }, [characterId]);

  const { image, name, status, species, origin, location, episode } =
    detailedCharacter;

  const allEpisodes = episode ? episode.length : 0;

  return (
    <div>
      <Navbar />
      {
       detailedCharacter && <>
          <div className="text">
            <h1>Character Details</h1>
          </div>
          <div className="card-detailed">
            <img src={image} alt={name} />
            <ul>
              <li>
                Name:{""} {name}
              </li>
              <li>
                Status:{""} {status}
              </li>
              <li>
                Species:{""} {species}
              </li>
              <li>
                Origin:{""} {origin?.name}
              </li>
              <li>
                Location:{""} {location?.name}
              </li>
              <li>Episode:{allEpisodes}</li>
              <button onClick={() => navigate(-1)}>Back</button>
            </ul>
          </div>
        </>
      }
    </div>
  );
}

export default CharacterDetailsPage;
