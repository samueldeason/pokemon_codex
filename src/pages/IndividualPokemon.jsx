import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const IndividualPokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const [evolution, setEvolution] = useState({})
    let id = parseInt(useParams().id);

    useEffect(() => {
        if(pokemon.id === undefined){
            getPokemon()


        }
        console.log(pokemon)
            
      });
      

    const getPokemon = () => {
      fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
        { mode: "cors" }
      )
        .then((response) => response.json())
        .then((result) => {
            setPokemon(result.pokemon[id - 1]);
          
        });
    };

    const history = useHistory();
    const {height, weight, name} = pokemon

    return(
        <section className="individualpage"> 
                <button onClick={history.goBack} className="backbtn">Go Back</button>
              <div className="imghere2">
                <img src={pokemon.img} alt="Loading..." />
              </div>
              <div className="details2">
                <h2>{name}</h2>
                <div className="pokemontype1">{pokemon.type + " "}</div>

                <br/>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Weakness: {pokemon.weaknesses + " "}</p>
                <p>Average spawns: {pokemon.avg_spawns}</p>

              
          </div>
        </section>
    )
}
export default IndividualPokemon