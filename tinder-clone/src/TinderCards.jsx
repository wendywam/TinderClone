import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

export default function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: "Kanye West ",
      url: "https://media.voguebusiness.com/photos/5ef6493adf1073db3375835d/master/pass/kanye-west-gap-news-voguebus-mert-alas-and-marcus-piggott-june-20-story.jpg",
    },
    {
      name: "Baby Keem",
      url: "https://i.guim.co.uk/img/media/ac824335be0926fa1de633a0aa8313a0edc235a4/0_273_4096_2459/master/4096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=286be8091d9f3f986a9ec326135850d8",
    }

  ]); 

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete); 
    //setLastDirection(direction);
  } 

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
            <div style={{ backgroundImage: "url(" + person.url + ")"}} className="card">
              <h3>{person.name}</h3>
            </div>

        </TinderCard>))}
      </div>
    </div>
  )
}
