import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/card';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [nextPokemons, setNextPokemons] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20`)
  const [searchResult, setSearchResult] = useState('')

  const getAllPokemons = async () => {
    const response = await fetch(nextPokemons)
    const data = await response.json()

    setNextPokemons(data.next)

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const responseObject = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const dataObject = await responseObject.json()

        setPokemons(currentList => [...currentList, dataObject])
      });
    }
    createPokemonObject(data.results)
  }


  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="App bg-gradient-to-r from-slate-500 to-slate-700">
      <h1 className='text-center text-white mb-7 font-mono'>Pokedex</h1>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setSearchResult(e.target.value)} />
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Sort Pokemon Items by Descending or Ascending</span>
        </label>
        <select className="select select-bordered">
          <option disabled selected>Pick one</option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
      <div className='pokemon-container'>
        {pokemons.filter((poke) => {
          return searchResult.toLocaleLowerCase() === '' ? poke : poke.name.toLocaleLowerCase().includes(searchResult)
        }).map((poke, index) => {
          return (
            <Card
              key={index}
              id={poke.id}
              name={poke.name}
              image={poke.sprites.other.dream_world.front_default}
              type={poke.types[0].type.name}
            />
          )
        })}

      </div>
      <button className="btn btn-secondary mt-6" onClick={() => { getAllPokemons() }}>Show More</button>
    </div>
  );
}

export default App;
