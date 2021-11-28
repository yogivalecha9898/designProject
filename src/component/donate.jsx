import { useEffect, useState } from "react"
import styled from "styled-components"

const Donate = () => {

    const[arr, setArr] = useState([])
    const user = JSON.parse(localStorage.getItem("user"))
    const[me, setMe] = useState({})
    const[add, setAddress] = useState('')
    const[p_add, setPAdd] = useState('')
    const[id, setId] = useState('')
    const[amount, setAmount] = useState('')

    useEffect(() => {
        const fun = async () => {
            const fet = await fetch("http://localhost:3001/charity/all")
            if(fet.status === 400) {
                alert("There is an error")
            } else {
                const data = await fet.json()
                setArr(data)
                console.log(data)
            }
        }
        fun()
    }, [])

    useEffect(() => {
        const fun = async () => {
            console.log(user.token)
            const fet = await fetch("http://localhost:3001/user/me", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${user.token}`,
                    "Content-Type": "application/json"
                }
            })
            if(fet.status === 400) {
                alert("There is an error")
            } else {
                const data = await fet.json()
                console.log(data.user.public_address)
                setPAdd(data.user.public_address)
                setMe(data.user)
            }
        }
        if(user.use) fun()
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()
        const options = {
            sender_name: me.name,
            to: id,
            from: user.use ? p_add:add, 
            amount
        }
        console.log(options)
        const fet = await fetch("http://localhost:3001/user/transaction", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        })
        if(fet.status === 400) {
            console.log(fet)
            alert("There is an error")
        }
        else {
            const data = await fet.json()
            console.log(data)
            alert("Transaction Successful!")
            setId("")
        }
    }

    return (

        <Don>
            <HeadLine>
                <h1>Pledge to a healthy cause!</h1>
                <Line />
            </HeadLine>
            <Donations>
                {arr.map(options => {
                    return options.target > 0 ? (
                        <div key={options._id}>
                            <h3>{options.name}</h3>
                            <h4>{options.cause}</h4>
                            <p>{options.target}</p>
                            <button onClick={() => {
                                if(id === options.public_address) setId("")
                                else setId(options.public_address)
                            }}>Donate</button>
                            {
                                id === options.public_address ? 
                                <div className="absoForm">
                                    <form onSubmit={handleSubmit}>
                                        <label className="to">
                                            <input type="text" value={options.public_address} readOnly={true}/>
                                        </label>
                                        <label className="from">
                                            <input type="text" placeholder="Public Address" onChange={e => setAddress(e.target.value)} value={user.use ? p_add : add} readOnly={user.use} />
                                        </label>
                                        <label>
                                            <input type="text" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)}/>
                                        </label>
                                        <label className="submit">
                                            <input type="submit" value="Submit"/>
                                        </label>
                                    </form>
                                </div>
                                :
                                <></>
                            }
                        </div>
                    )
                    :
                    <></>
                })}
            </Donations>
        </Don>
    )
}

export default Donate

const Don = styled.div`
    width: 100%;

`
const HeadLine = styled.div`
    width: 100%;
    padding: 20px;
    text-align: center;
    color: #FFB319
`

const Line = styled.hr`
    width: 15%;
    margin: 30px auto;
    border: none;
    border-top: 3px solid #DEDEDE;
    color: #FFB319
`

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
        font-size: 20px;
        position: relative;
        & button {
            width: 100px;
            height: 30px;
            outline: none;
            border: none;
            color: #fff;
            border-radius: 5px;
            background: #FFB319;
            font-size: 17px;
            cursor: pointer
        }
        &.absoForm {
            height: 70%;
            position: absolute;
            width: 100%;
            left: -20px;
            top: -20px;
            background: #151515;
            & form {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                & label {
                    width: 80%;
                    height: 25px;
                    margin: 5px 0
                }
                & label input{
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    border-radius: 5px;
                    padding: 0 5px 
                }
                & label.submit {
                    width: 40%;
                    & input {
                        color: #fff;
                        background: #FFB319;
                        font-size: 17px;
                        cursor: pointer
                    }
                }
            }
        }
    }
`