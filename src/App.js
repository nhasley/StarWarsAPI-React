import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {CardDeck} from './Components/CardDeck/CardDeck'
import './App.css';

class App extends Component {
  state = {
    results: []
  }

  componentDidMount = () => {
    getAllShips().then(results => {
      this.setState({
        results: results.results
      })
    })
  }

render() {
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <CardDeck 
        state={this.state.results}
        />
      )} />
    </Switch>
  )
}
}

export default App;

async function getAllShips(){
  const initialFetch = await fetch('https://swapi.co/api/starships/')
  const fetchJSON = await initialFetch.json()
  return await fetchJSON
}