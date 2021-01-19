import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  function addNewPokemon(newPokemon){
    setPokemon([...pokemon, newPokemon])
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((resp) => resp.json())
    .then( (data) => setPokemon(data))
  },[])


  let filteredSearch = pokemon.filter( (poke) => 
    poke.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={filteredSearch} />
    </Container>
  );
}

export default PokemonPage;
