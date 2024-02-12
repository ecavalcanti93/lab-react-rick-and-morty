import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="box">
      <div className="text-welcome">
        <h2 >Welcome to Rick and Morty Universe!</h2>
      </div>
      <button className="linkbtn"><Link className="btnstyle" to="/characters">All Characters</Link></button>
    </div>
  );
}

export default HomePage;
