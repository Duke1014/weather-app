import React, {useState, useEffect} from 'react'

export default function Weather( ) {
    
    const [weather, setWeather] = useState({})
    const [location, setLocation] = useState("Houston")
    const [newLocation, setNewLocation] = useState("")
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`https://goweather.herokuapp.com/weather/${location}`)
            .then((r) => r.json())
            .then((data) => {
                if (data.message) {
                    setError(data.message)
                } else {
                    setWeather(data)
                }
            })
    }, [location])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target)
        setLocation(newLocation)
    }

    return (
        <div>
            <div className="weather">
                <div className="location">
                    <h2>{location}</h2>
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
                    </>}
                </div>
            <div className="search-box">
                <form onSubmit={handleSubmit}>
                    <label>Search a city:</label>
                    <input 
                        type="text"
                        value={newLocation}
                        className="search-bar"
                        placeholder="Enter City Here" 
                        onChange={e => setNewLocation(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        className="submit" 
                        value="Search" 
                    />   
                </form>
            </div>
        </div>
    )
}
