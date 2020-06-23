import React, { Component } from 'react';
import './App.scss';
import CardList from './components/CardList';
import FilterBox from './components/FilterBox';
import Header from './components/Header';
import * as API from './util/API';
import * as Reduce from './util/Reduce';
import * as Format from './util/Format';

class App extends Component {
  state = {
    contentIsLoaded: false,
    defaultList: [],
    currentList: [],
  };

  componentDidMount() {
    this.setList();
  }

  async setList() {
    const attachPkmnDetails = async (pkmn) => {
      const details = await API.getPkmnDetails(pkmn.url);
      
      return Format.pkmnDetails(details);
    };
    
    const list = await API.getPkmnList();
    const detailledList = await Promise.all(list.map(attachPkmnDetails));
    
    this.setState({
      defaultList: detailledList,
      currentList: detailledList.filter(pkmn => pkmn.id <= 151),
      contentIsLoaded: true
    });
  }

  handleFilters = (filters) => {
    const list = [ ...this.state.defaultList ];

    const genSteps = [0, 151, 251, 386, 494, 649, 721, 807];

    const filterEnum = {
      name: (pkmn) => pkmn.name.includes(filters.name),
      hp: (pkmn) => pkmn.stats[0].value >= filters.hp,
      att: (pkmn) => pkmn.stats[1].value >= filters.att,
      def: (pkmn) => pkmn.stats[2].value >= filters.def,
      sAtt: (pkmn) => pkmn.stats[3].value >= filters.sAtt,
      sDef: (pkmn) => pkmn.stats[4].value >= filters.sDef,
      spe: (pkmn) => pkmn.stats[5].value >= filters.spe,
      statSum: (pkmn) => Reduce.statSum(pkmn.stats) >= filters.statSum,
      types: (pkmn) => Reduce.hasTypes(pkmn, filters.types),
      gen: (pkmn) => {
        const g = Number.parseInt(filters.gen);
        const id = Number.parseInt(pkmn.id);

        return g === 0 || (id > genSteps[g-1] && id <= genSteps[g]);
      }
    };

    const applyFilters = (pkmn) => {
      const truthyValues = (acc, curr) => acc && curr(pkmn);

      return filterFunctions.reduce(truthyValues, filterFunctions[0]);
    }

    const filterFunctions = Object.keys(filters).map((filterName) => filterEnum[filterName]);
    const filteredList = list.filter(applyFilters);

    this.setState({ currentList: filteredList });
  };

  render() {
    return (
      <>
        <Header />
        <FilterBox onSubmit={this.handleFilters}  />
        <CardList list={this.state.currentList} isReady={this.state.contentIsLoaded} />
        <div className="github">
          <a href="https://github.com/gregoryalbouy/react-dex" title="Github">github</a>
          <img src="./assets/github.svg" alt="Github" />
        </div>
      </>
    );
  }
}

export default App;