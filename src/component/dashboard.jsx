import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import styled from "styled-components"

const Dashboard = () => {

    const history = useHistory()
    const[trans, setTrans] = useState([])
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        const fun = async () => {
            const fet = await fetch("http://localhost:3001/user/transaction/me", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${user.token}`,
                    "Content-Type": "application/json"
                }
            })
            const data = await fet.json()
            setTrans(data)
        }
        fun()
    }, [])
    
    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify({
            use: false,
            token: ""
        }))
        alert("Log out successful!")
        history.push("/home")
    }

    return (
        <div style={{width: "100%"}}>
            <button style={{
                margin: "20px 0 0 40px",
                width: "120px", 
                height: "40px", 
                border: "none", 
                outline: "none",
                background: "#FFB319",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer"
            }} onClick={handleSubmit}>SignOut</button>
            <h1></h1>
            <Donations>
                {trans.map(options => {
                    return (
                        <div key={options._id}>
                            <h3>TO: {options.to}</h3>
                            <p>AMOUNT: {options.amount}</p>
                        </div>
                    )
                })}
            </Donations>
        </div>
    )
}

export default Dashboard

const Donations = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    & div {
        width: 300px;
        height: 250px;
        border: 1px solid black;
        margin: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: space-around;
        font-size: 15px;
    }
`