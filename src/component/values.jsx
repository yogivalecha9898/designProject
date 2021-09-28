import { useState } from 'react'
import styled from 'styled-components'

const Values = () => {

    const[arr] = useState([
        {
            "head": "Direct Impact",
            "short": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
            "head": "Direct Impact",
            "short": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
            "head": "Direct Impact",
            "short": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        }
    ])

    return (
        <Value style={{background: "#FDFAF6"}}>
            <div style={{width: "100%", height: "25%", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Our Values</h1></div>
            <div style={{width: "100%", height: "75%", display: "flex"}}>
                {arr.map((obj) => {
                    return <Comp heading={obj.head} para={obj.short} />
                })}
            </div>  
        </Value>
    )
}

const Comp = ({ heading, para }) => {
    return (
        <div style={{textAlign: "center", padding: "0 20px 0 20px", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
            <h1>{heading}</h1>
            <p>{para}</p>
        </div>
    )
}

export default Values

const Value = styled.div`
    // border: 1px solid black;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column
`