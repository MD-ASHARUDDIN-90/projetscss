import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import {useSetRecoilState} from 'recoil'
import {desitnationID} from './Recoil'

export default function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const nav = useNavigate();
  const setDestId = useSetRecoilState(desitnationID)
  function handleClick() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '43e138d2a8mshdd5783f8629f9afp105103jsnfac1b0bd9c7a',
        'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
      },
    };

    fetch(
      `https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=${value}&languagecode=en-us`,
      options
    )
      .then((response) => response.json())
      .then((response) => setList(response))
      .catch((err) => console.error(err));
  }

  function handleHotelFetch(x) {
    console.log(x, 'details of element');
    setDestId(x)
    nav('/hotelbooking');
  }

  return (
    <div>
      <h3>Search place to find  Hotel</h3>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="search place"
      />
      <button onClick={handleClick}>Search</button>
      <div>
        {list.map((x) => (
          <div
            onClick={() => handleHotelFetch(x)}
            style={{ backgroundColor: 'grey' }}
          >
            <p>{x.name}</p>
            <p>{x.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
