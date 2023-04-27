import { useState } from "react"

const Converter = () => {
    const [miles, setMiles] = useState(0)
    const [km, setKM] = useState(0);

    const changeMiles = (e) => {
        const newMiles = e.target.value
        setMiles(newMiles)
        setKM(newMiles * 1.609344)
    }


    return (
        <>
        <label> Miles: </label>
        <input type = "number" value={miles} onChange = {changeMiles}/>
        <label> Kilometres: </label>
        <input type = "number" value={km} onChange = {changeMiles} />
        </>
    )
}

export default Converter;