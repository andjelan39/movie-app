import React from "react";
import "../style/Movies.css";
import Blade from "../img/bladerunner.jpg";
import Trainspotting from "../img/trainspotting.jpg";
import Manhunter from "../img/manhunter.jpg";
import Bateman from "../img/bateman.jpg";

const Movies = () => {
  return (
    <div className="container">
      <div className="movies">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={Blade} className="card-img" alt="" />
              <div className="card-body">
                <h1 className="card-title">Blade Runner 2049</h1>
                <p className="card-sub-title">Director: Denis Villeneuve</p>
                <p className="card-sub-title">
                  Cast: Ryan Gosling, Harrison Ford, Ana de Armas
                </p>
                <p className="card-info">
                  Officer K (Ryan Gosling), a new blade runner for the Los
                  Angeles Police Department, unearths a long-buried secret that
                  has the potential to plunge what's left of society into chaos.
                  His discovery leads him on a quest to find Rick Deckard
                  (Harrison Ford), a former blade runner who's been missing for
                  30 years.
                </p>
                <button className="card-btn">Details</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={Manhunter} className="card-img" alt="" />
              <div className="card-body">
                <h1 className="card-title">Manhunter</h1>
                <p className="card-sub-title">Director: Michael Mann</p>
                <p className="card-sub-title">
                  Cast: William Petersen, Brian Cox
                </p>
                <p className="card-info">
                  Will Graham is a former FBI criminal profiler who has retired
                  following a mental breakdown after being attacked by a
                  cannibalistic serial killer, Dr. Hannibal Lecktor, whom he
                  captured. Graham is approached at his Florida home by his
                  former FBI superior Jack Crawford, who is seeking help with a
                  new serial killer case.
                </p>
                <button className="card-btn">Details</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={Trainspotting} className="card-img" alt="" />
              <div className="card-body">
                <h1 className="card-title">Trainspotting</h1>
                <p className="card-sub-title">Director: Danny Boyle</p>
                <p className="card-sub-title">
                  Cast: Ewan McGregor, Jonny Lee Miller, Ewen Bremner
                </p>
                <p className="card-info">
                  A wild, freeform, Rabelaisian trip through the darkest
                  recesses of Edinburgh low-life, focusing on Mark Renton and
                  his attempt to give up his heroin habit, and how the latter
                  affects his relationship with family and friends: Sean Connery
                  wannabe Sick Boy, dimbulb Spud and a psycho Begbie.
                </p>
                <button className="card-btn">Details</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={Bateman} className="card-img" alt="" />
              <div className="card-body">
                <h1 className="card-title">American Psycho</h1>
                <p className="card-sub-title">Director: Mary Harron</p>
                <p className="card-sub-title">
                  Cast: Christian Bale, Willem Dafoe, Chloë Sevigny
                </p>
                <p className="card-info">
                  In New York City in 1987, a handsome, young urban
                  professional, Patrick Bateman, lives a second life as a
                  gruesome serial killer by night. The cast is filled by the
                  detective, the fiance, the mistress, the coworker, and the
                  secretary. This is a biting, wry comedy examining the elements
                  that make a man a monster.
                </p>
                <button className="card-btn">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
