import React, { useState, useEffect } from "react";
import "../App.css";
//`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4d620d00c136efd3b4d8985a72192982`

 
const Navbar = () => {
    // const [city, setCity] = useState("");
    const [search, setSearch] = useState("Mumbai");
    const [name,setName] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [wind,setWind] = useState('');
    const [humidity,setHumidity] = useState('');

   
    
    // const [iconID,setIconID] = useState('');
    useEffect(()=> {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=4d620d00c136efd3b4d8985a72192982')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setName(data.name);
    setMainTemp(data.main.temp.toFixed(1));
    setWind(data.wind.speed);
    setHumidity(data.main.humidity);
})
},[])
    
   

    return (
        <>
        <div className="container">
        <div className="navbar">
            <span>Home</span>
            <span>Cities</span>
            <span>News</span>
        </div>
        <div className="weatherdetails">
        <h2>Weather Details</h2>
        <div className="details">
            {/* <h3>Cloudy</h3> */}
        <h3>Wind  {" "+"-"+"  " + wind+"km/hr"}</h3>
        <h3>Humidity{" "+"-"+"  "+humidity} </h3>
        </div>
        </div>

        
        
        <div className="temp">
           <span className="number">{mainTemp}&deg;</span> <span>{name}</span><span><i className={`wi wi-day-sunny`}></i></span>
           <div className="date"> {new Date().toLocaleString()}</div>
        </div>
         </div>
         
        <div className="cities-section">
           <h1>Cities</h1>
        </div>
        <input type="text" id="search-box" name="search" placeholder="Search city" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit"><i className="fa fa-search"></i></button>

        <div className="news-section">
           <h1>News</h1>
        </div>
        <div className="footer">
           <h1>WEATHERAPP</h1>
           <div className="footer-span">
            <div>
            <span>Home</span>
            <span>Contact us</span>
            </div>
            <div>
            <span>Cities</span>
            <span>FAQs</span>
            </div>
            <div>
            <span>News</span>
            </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;