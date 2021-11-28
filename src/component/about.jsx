import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router'

const About = () => {

    const[showSU, setShowSU] = useState(true)
    const font = {
        fontFamily: "'Bonheur Royale', cursive",
    }

    return (
        <Ab>
            <Image7>
                <Head style={{color: "#FFB319"}}>Crypto<span style={font}>Charity</span></Head>
            </Image7>
            <Enter>
                {
                    showSU ? 
                    <div className="fill">
                        <SignUp setShowSU={setShowSU}/>
                        <p style={{cursor: "pointer"}}>Already a User? <b onClick={() => setShowSU(false)}>SignIn</b></p>
                    </div>
                    :
                    <div className="fill">
                        <SignIn />
                        <p style={{cursor: "pointer"}}>New here? <b onClick={() => setShowSU(true)}>SignUp</b></p>
                    </div>
                }
            </Enter>
        </Ab>
    )
}

const SignIn = () => {

    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')
    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault()
        const options = { 
            email, 
            password: pass
        }
        const fet = await fetch("http://localhost:3001/user/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        })
        if(fet.status === 400) alert("There is an error")
        else {
            const data = await fet.json()
            localStorage.setItem("user", JSON.stringify({
                use: true,
                token: data.token
            }))
            alert("Log in Successful")
            history.push("/home")
        }
    }

    return (
        <FormFill onSubmit={handleSubmit}>
            <label><h1>Sign In</h1></label>
            <label>
                <input
                    style={{opacity: "0.2", cursor: "not-allowed"}}
                    type="text" placeholder="Username" readOnly
                />
            </label>
            <label>
                <input value={email} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                <input value={pass} type="password" placeholder="Password" onChange={e => setPass(e.target.value)}/>
            </label>
            <label>
                <input
                    style={{opacity: "0.2", cursor: "not-allowed"}}
                    type="text" placeholder="Address" readOnly
                />
            </label>
            <label className="submit">
                <input type="submit"  value="SIGN IN"/>
            </label>
        </FormFill>
    )
}

const SignUp = ({ setShowSU }) => {

    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')
    const[add, setAdd] = useState('') 
    const[username, setUsername] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const options = {
            name: username, 
            email, 
            password: pass,
            public_address: add
        }
        const fet = await fetch("http://localhost:3001/user/register", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        })
        if(fet.status === 400) alert("There is an error!")
        else {
            console.log("hola")
            setShowSU(false)
        }
        console.log(fet)
    }

    return (
        <FormFill onSubmit={handleSubmit}>
            <label><h1>Sign Up</h1></label>
            <label>
                <input value={username} type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                <input value={email} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                <input value={pass} type="password" placeholder="Password" onChange={e => setPass(e.target.value)}/>
            </label>
            <label>
                <input value={add} type="text" placeholder="Address" onChange={e => setAdd(e.target.value)}/>
            </label>
            <label className="submit">
                <input type="submit"  value="SIGN UP"/>
            </label>
        </FormFill>
    )
}

export default About

const Ab = styled.div`
    width: 100;
    height: 100vh;
    border: 1px solid black;
    display: flex;
`

const Image7 = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center
`

const Enter = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #151515;
    color: #fff;
    & div {
        width: 70%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around
    }
`

const FormFill = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & label {
        margin: 10px 0;
        width: 70%;
        height: 30px;
        & input {
            width: 100%;
            height: 100%;
            padding: 0 5px;
            outline: none;
            border: none;
            border-radius: 5px
        }
        &.submit {
            width: 50%;
            & input {
                border: none;
                outline: none;
                background: #FFB319;
                border-radius: 5px;
                color: #fff;
                font-size: 17px;
                cursor: pointer
            }
        }
    }
`

const Head = styled.h1`
    font-size: 80px;
    text-align: center;
    margin: 50px auto 50px;
`