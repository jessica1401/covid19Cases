import React, { useEffect, useState } from "react";
import "../css/indiastatus.css";
import axios from "axios";
import { TextField } from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

export default function IndiaStatus() {
  const [confirmend, setconfirmend] = useState(0);
  const [deaths, setdeaths] = useState(0);
  const [recovered, setrecovered] = useState(0);
  const [inputValue, setinputValue] = useState("")
  const [disp, setdisp] = useState("none")
  const [arr, setArr] = useState([])

  const date = new Date().toDateString();
  useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.get(
          "https://api.covid19india.org/data.json"
        );
        const data = response.data.statewise;
        setconfirmend(data[0].confirmed);
        setdeaths(data[0].deaths);
        setrecovered(data[0].recovered);
        let arr1 = []
        for(let i = 1; i < data.length; i++) {
          arr1[i-1] = data[i]
        }
        setArr(arr1)
      } catch (e) {
        console.log(e);
      }
    };
    get();
  });

  const inputChange = (event) => {
    setinputValue(event.target.value)
    
  }

  const pressEnter = (event) => {
    if(event.key === "Enter") {
      setinputValue("")
      setdisp("block")
      func()
    }
  }

  const func = () => {
    const value = inputValue;
    let flag = 1;
    for(let i = 0; i< arr.length ; i++) {
      if(arr[i].state.toLowerCase().trim() === value.toLowerCase().trim()) {
        document.getElementById('sat_name').innerText = `State Name: ${arr[i].state}`
        document.getElementById('active').innerText = `Active Cases: ${arr[i].active}`
        document.getElementById('confirmed').innerText = `Confirmed Cases: ${arr[i].confirmed}`
        document.getElementById('recovered').innerText = `Recovered Cases: ${arr[i].recovered}`
        document.getElementById('deaths').innerText = `Total Deaths: ${arr[i].deaths}`
        flag = 1;
        break;
      }
      else {
        flag = 0
      }
    }

    if(flag === 0) {
      document.getElementById('sat_name').innerText = "No Such State Found"
      document.getElementById('active').innerText = ``
        document.getElementById('confirmed').innerText = ``
        document.getElementById('recovered').innerText = ``
        document.getElementById('deaths').innerText = ``
    }
  }
  return (
    <>
      <div className="main_div">
        <div className="width top_box">
          <div id="inside_top_box1" className="inside_top_box">
            <p className="head">Confirmed Cases</p>
            <p className="para">{confirmend}</p>
            <p>Last Updated: {date}</p>
          </div>
          <div id="inside_top_box3" className="inside_top_box">
            <p className="head">Total Deaths</p>
            <p className="para">{deaths}</p>
            <p>Last Updated: {date}</p>
          </div>
          <div id="inside_top_box2" className="inside_top_box">
            <p className="head">Recovered Cases</p>
            <p className="para">{recovered}</p>
            <p>Last Updated: {date}</p>
          </div>
        </div>

        <div className="input">
          <TextField autoComplete="off" value={inputValue} onKeyDown={pressEnter} onChange={inputChange} id="filled-basic" label="Enter Name of State" variant="filled" />
          <button onClick={func} className="search_btn"><SearchRoundedIcon  className="searchIcon"></SearchRoundedIcon></button>
        </div>

        <div id="find_state" style={{display: disp, color: 'white'}}>
          <div id="sat_name"></div>
          <p id="active"></p>
          <p id="confirmed"></p>
          <p id="recovered"></p>
          <p id="deaths"></p>
        </div>

        <div className="data_of_states">
          <ol>
            {arr.map((one, index) => {
              return <div className="each_state" key={index}>
                <p className="state_name">{one.state}</p>
                <p>Active Cases: {one.active}</p>
                <p>Confirmed cases: {one.confirmed}</p>
                <p>Recovered Cases: {one.recovered}</p>
                <p>Total Deaths: {one.deaths}</p>
              </div>
            })}
          </ol>
        </div>

      </div>
    </>
  );
}
