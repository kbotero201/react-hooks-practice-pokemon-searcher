import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [imageFront, setImageFront] = useState("")
  const [imageBack, setImageBack] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    console.log("submitting form...")
    let newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: imageFront,
        back: imageBack,
      },
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      .then( data => {
        addNewPokemon(data)
      });

  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            fluid label="Name" 
            placeholder="Name" 
            name="name" />
          <Form.Input 
            value={hp}
            onChange={(e) => setHp(e.target.value) }
            fluid label="hp"
            placeholder="hp" 
            name="hp" />
          <Form.Input
            value={imageFront}
            onChange={(e) => setImageFront(e.target.value) }
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            value={imageBack}
            onChange={(e) => setImageBack(e.target.value) }
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
