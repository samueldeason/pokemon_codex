import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (pokemonList.length == 0) {
      setPokemon();
    }
  }, []);

  const filterSearch = (e) => {
    setFilter(e.target.value.toUpperCase());
    console.log(filter);
  };

  const setPokemon = () => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((result) => {
        setPokemonList(result.pokemon);
      });
  };
  return (
    <div className="pokedex">
        <h1 className="searchlabel">Search Pokemon</h1>
      <input placeholder="ex: Pikachu" className="searchbar" type="text" onChange={filterSearch} />
      <div className="displayarea">
        {pokemonList.map((pokemon) => {
          if (pokemon.name.toUpperCase().includes(filter) || pokemon.type[0].toUpperCase().includes(filter)) {
            return (
              <Link exact to={`/pokedex/${pokemon.id}`} className="link">
                <div className="card">
                  <div className="cardcontent">
                    <div className="imghere">
                      <img src={pokemon.img} alt="" />
                    </div>
                    <div className="pokemontype">{pokemon.type[0]}</div>
                    <div className="details">
                      <h2>{pokemon.name}</h2>
                      <br />
                      <p>Height: {pokemon.height}</p>
                      <p>Weight: {pokemon.weight}</p>
                      <p>Weakness: {pokemon.weaknesses[0]}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Pokedex;
