import React from "react";
import "../style/Header.css";
import DunePoster from "../img/duneposter.png";

function Header() {
  return (
    <div>
      <div className="image">
        <img className="image__img" src={DunePoster} alt="" />
        <div className="headline">
          <h1>
            DISCOVER A WORLD <br />
            OF BLOCKBUSTERS, <br />
            CLASSICS AND HIDDEN GEMS
          </h1>
          <p>
            With Flicks, movie night has never been easier. Enjoy stunning
            high-definition picture quality and crystal-clear sound, making you
            feel like you're right in the middle of the action. Create your
            account NOW and indulge in endless entertainment.
          </p>
          <a href="#"><button>Register</button></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
