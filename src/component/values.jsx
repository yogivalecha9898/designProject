import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Values = () => {

    const[arr, setArray] = useState([])
    let flag = 1
    
    useEffect(() => {
        const fun = async () => {
            const fet = await fetch("http://localhost:3001/user/transaction")
            const data = await fet.json()
            setArray(data)
        }
        fun()
    }, [])

    return (
        <Value style={{background: "#FDFAF6"}}>
            <h1 style={{marginTop: "30px"}}>Contributors</h1>
            <Line />
            {arr.map(options => {
                return (
                    <div style={{background: flag === 1 ? "lightgray":"whitesmoke"}} className="table">
                        <div style={{display: "none"}}>{flag ^= 1}</div>
                        <h2><span style={{color: "gray"}}>To:</span> {options.to}</h2>
                        <h2><span style={{color: "gray"}}>From:</span> {options.from}</h2>
                        <h2><span style={{color: "gray"}}>Amount:</span> {options.amount}</h2>
                    </div>
                )
            })}
        </Value>
    )
}

export default Values

const Value = styled.div`
    // border: 1px solid black;
    width: 100%;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .table {
        width: 80%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        & h2 {
            width: 33%
        }
    }
`

const Line = styled.hr`
    width: 15%;
    margin: 30px auto;
    border: none;
    border-top: 3px solid #DEDEDE
`