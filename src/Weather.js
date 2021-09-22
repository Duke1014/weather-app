import React, {useState, useEffect} from 'react'

export default function Weather( {userData, setUserData} ) {
    
    const [weather, setWeather] = useState({})
    const [currentLocation, setCurrentLocation] = useState("New York City")
    const [search, setSearch] = useState("")
    const [error, setError] = useState('')

    useEffect(() => {
        console.log(`https://goweather.herokuapp.com/weather/${currentLocation}`)
        fetch(`https://goweather.herokuapp.com/weather/${currentLocation}`)
            .then((r) => r.json())
            .then((data) => {
                if (data.message) {
                    console.log("Error")
                    setError(data.message)
                } else {
                    setError('')
                    setWeather(data)
                }
            })
    }, [currentLocation])

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Searching City ...")
        setCurrentLocation(search)
    }

    const handleAdd = () => {
        console.log("Add button clicked")
        fetch(`http://localhost:3000/users/${userData.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({location: [...userData.location, currentLocation]})
        }).then(r => r.json()).then((data) => {
            console.log(data)
            setUserData(data)
        })
    }

    const changeLocation = (e) => {
        setCurrentLocation(e.target.value)
    }
    
    const currentLocationElements = userData.location.map((loc)=> {
        return <li key={loc}>
            <button 
                onClick={changeLocation} 
                value={loc}>
                {loc}
            </button>
        </li>
    })

    const inTheList = userData.location.find((loc)=>{
        return loc === currentLocation
    })

    return (
        <div>
            <div className="weather">
                <div className="location">
                    <h2>{currentLocation}</h2>
                </div>
                { error ? <div><p>{error}</p></div>
                :   <>  <div className="temperature">
                            Temp: {weather.temperature}
                        </div>
                        <div className="wind">
                            Wind: {weather.wind}
                        </div>
                        <div className="description">
                            {weather.description}
                        </div>
                        { inTheList ? null :
                        <button onClick={handleAdd}>Add</button> }
                    </>}
                </div>
            <br></br>
            <div className="search-box">
                <form className="search-form" onSubmit={handleSubmit}>
                    <label>Search a city:</label>
                    <input 
                        type="text"
                        value={search}
                        className="search-bar"
                        placeholder="Enter City Here" 
                        onChange={e => setSearch(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        className="submit" 
                        value="Search" 
                    />   
                </form>
            </div>
            <div className="locations">
            { userData.location ? <div>Your saved locations: <br></br>
                 {currentLocationElements}</div> : <></> }
            </div>
        </div>
    )
}