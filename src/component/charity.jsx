import { useState } from "react"
import styled from "styled-components"

const Charity = () => {

    const[name, setName] = useState('')
    const[cause, setCause] = useState('')
    const[add, setAdd] = useState('')
    const[target, setTarget] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const options = {
            name,
            cause,
            target,
            public_address: add
        }
        const fet = await fetch("http://localhost:3001/charity/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        })
        if(fet.status === 400) {
            alert("There is an error")
        } else {
            alert("Your Cause has been enrolled!")
        }
        console.log(fet)
        // alert(JSON.stringify(fet))
    }

    return (
        <Char>
            <Cause className="image6">
                <Img6>
                    <img src="/6.jpg" alt="hands" />
                    <h1>Enroll your cause</h1>
                </Img6>
                <FormC onSubmit={handleSubmit}>
                    <label className="name">
                        <input value={name} type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                    </label>
                    <label className="cause">
                        <input value={cause} type="text" placeholder="Cause" onChange={e => setCause(e.target.value)}/>
                    </label>
                    <label className="address">
                        <input value={add} type="text" placeholder="Address" onChange={e => setAdd(e.target.value)}/>
                    </label>
                    <label className="target">
                        <input value={target} type="text" placeholder="Target" onChange={e => setTarget(e.target.value)}/>
                    </label>
                    <label className="submit">
                        <input type="submit" value="Submit" />
                    </label>
                </FormC>
            </Cause>
        </Char>
    )
}

export default Charity

const Char = styled.div`
    width: 100%;
    border: 1px solid black;
    height: 100vh
`
const Cause = styled.div`
    width: 100%;
    display: flex;
    height: 100%
`

const Img6 = styled.div`
    width: 60%;
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`

const FormC = styled.form`
    width: 40%;
    height: 100%;
    display: flex;
    padding: 200px 0;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: #151515;
    & label {
        width: 70%;
        height: 40px
    }
    & label input {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 0 5px;
        font-size: 15px
    }
    & label.submit {
        width: 40%
    }
    & label.submit input {
        background: #FFB319;
        font-size: 20px;
        color: #fff
    }
`