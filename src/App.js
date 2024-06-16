import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(null);

  const getData = async () =>{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3941b6e3c86e04b37d14ce458f58e23b`);
    let result = await response.json();
    setCity(result)
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="App">
      <div className="card-container">
        <div className="card">
          <div className="container">
          <div className="search">
            <input type="text" placeholder="Enter Your City" onChange={(event)=>setSearch(event.target.value)} />
            <button onClick={getData}>Search</button>
          </div>
          <div className="list">
            <img className="cloud" src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" alt="pic"/>
            <h3>{city?.main?.temp}</h3>
            <h4>{city?.name}</h4>
            <div className="spare">
              <h5><img className="small" src="https://cdn-icons-png.flaticon.com/128/13945/13945026.png" alt="pic"/>{city?.wind?.speed}</h5>
              <h5><img className="small" src="https://cdn-icons-png.flaticon.com/128/2676/2676047.png" alt="pic"/>{city?.main?.humidity}%</h5>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
