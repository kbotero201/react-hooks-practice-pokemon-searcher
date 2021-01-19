import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon: {name, hp, sprites} }) {

  const [isFront, setIsFront] = useState(true)
  
  function handleClick(){
    setIsFront((isFront) => setIsFront(!isFront))
  }
  
  
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={isFront? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
