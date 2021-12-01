import React, {useEffect, useState} from 'react'
import '../css/mainbox.css'
import  { main } from '../data/main'

export default function MainBox() {
    const [confirmed, setconfirmed] = useState(0)
    const [recovered, setrecovered] = useState(0)
    const [deaths, setdeaths] = useState(0);

    const date = new Date().toDateString()
    
    useEffect(() => {
        const maindata = async () => {
            const res = await main()
            const data = res.data
            setconfirmed(data.confirmed.value)
            setrecovered(data.recovered.value)
            setdeaths(data.deaths.value)
        }
        maindata()
    }, [])
    return (
        <>
        <div className="top_box">
            <div id="inside_top_box1" className="inside_top_box">
                <p className="head">Confirmed Cases</p>
                <p className="para">{confirmed}</p> 
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
        </>
    )
}
