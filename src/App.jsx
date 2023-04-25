import { useEffect } from 'react';
import { useState } from 'react';
import DropDown from './DropDown';
import InputSearch from './InputSearch';
import List from './List';
import data from './assets/data.json';
import '@picocss/pico';

export default function App() {
  const [digimons, setDigimons] = useState([]);
  const [filteredOption, setFilteredOption] = useState(null);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(response => response.json())
      .then(data => setDigimons(data))
      .catch(error => console.log(error));
  }, []);

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  return (
    <div className="container">
      <DropDown label="Filter By Level:" placeHolder="Select option..." options={data.level} eventHandler={setFilteredOption}/>
      <InputSearch label="Filter By Name:" placeholder="Typing a name..." value={nameFilter} eventHandler={handleNameFilterChange}/>
      <List items={digimons.filter((digimon) => {
          const byName = digimon.name.toLowerCase().includes(nameFilter.toLowerCase());
          const byLevel = !filteredOption || digimon.level === filteredOption;
          return byName && byLevel;
      })} />
    </div>
  )
}

// DOUBT: !filteredOption || digimon.level === filteredOption && digimon.name.toLowerCase().includes(nameFilter.toLowerCase())
// why only work together?