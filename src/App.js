import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Vehicles from './components/Vehicles';

import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
    }

    async function fetchSpecies() {
      let res = await fetch('https://swapi.dev/api/species/?format=json');
      let data = await res.json();
      setSpecies(data.results);
    }

    async function fetchVehicles() {
      let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
      let data = await res.json();
      setVehicles(data.results);
    }

    fetchPeople();
    fetchPlanets();
    fetchFilms();
    fetchSpecies();
    fetchVehicles();
    setLoading(false);
  }, [])
  console.log('people', people);
  console.log('planets', planets);
  console.log('films', films);
  console.log('species', species);
  console.log('vehicles', vehicles);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route exact path='/people'>
                  <People data={people}/>
                </Route>
                <Route exact path='/planets'>
                  <Planets data={planets}/>
                </Route>
                <Route exact path='/films'>
                  <Films data={films}/>
                </Route>
                <Route exact path='/species'>
                  <Species data={species}/>
                </Route>
                <Route exact path='/vehicles'>
                  <Vehicles data={vehicles}/>
                </Route>
              </Switch>
            )}
        </Container>
      </Router>
    </div>
  );
}

export default App;
