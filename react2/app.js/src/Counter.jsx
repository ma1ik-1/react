import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [history, setHistory] = useState([])
    // const [no, setNo] = useState("second num")
    // const [lastLine, setLastLine] = useState("previous line")

    const change = (e) => {
        //const newNumber = e.target.value
        const a = Number.parseInt(e.target.innerText)
        // setHistory(count)
        // setNo(num)
        // setLastLine(`${history} + ${no} = ${count}`)
        setHistory([`${count} ${a > 0 ? "+" : ""} ${a} = ${count + a}`, ...history])
        setCount(count + a)
    }

    return (
        <>
        
        <h2 id="counter-h2">Counter:</h2>
        <input id = "counter-input" value={count}/>
        <button id = "counter-button" onClick={change}> -5 </button>
        <button id = "counter-button" onClick={change}> -1 </button>
        <button id = "counter-button" onClick={change}> +1 </button>
        <button id = "counter-button" onClick={change}> +5 </button>
        

        {/* <label id = "lblHistory">History: </label> */}
        {/* <p>{history} + {no} = {count}</p>
        <p>{lastLine}</p> */}


        <div id = "history">
        <h2>History</h2>
            {history.map((i) => (
                <p>{i}</p>
            ))}
        </div>

        </>
    )
} 

export default Counter;