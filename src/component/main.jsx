import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { trigger, push } from './actions/actions'
import { useHistory } from 'react-router'
// import "1.jpg"

const Main = () => {

    const start = useSelector(state => state.Animate) //getting the initia state, wether to animate or not
    const his = useSelector(state => state.Push)
    const dispatch = useDispatch() //dispatch the function
    const history = useHistory() //for changing the route

    const font = {
        fontFamily: "'Bonheur Royale', cursive"
    }

    const expand = {
        ini: {
            width: "30%"
        },
        ani: {
            width: "100%",
            height: "700px",
            transition: {
                delay: 0.1,
                duration: 0.5
            }
        }
    }

    const handle = () => {
        const obj = {
            his: history,
            toPush: "/home"
        }
        dispatch(trigger())
        const time = setTimeout(() => {
            dispatch(push(obj))
            clearTimeout(time)
        }, 600)
    }

    return (
        <Container>
            <Head>Crypto<span style={font}>Charity</span></Head>
            <Line />
            <Sec
                whileTap={{
                    scale: start ? 1 : 0.95
                }}
                onClick={handle}
                variants={expand}
                initial="ini"
                animate={start ? "ani":""}
            >
                <img src="/1.jpg" alt="quote"></img>
            </Sec>
            <Lower>CryptoCharity</Lower>
        </Container>
    )
}

export default Main

const Line = styled.hr`
    width: 15%;
    margin: 30px auto;
    border: none;
    border-top: 3px solid #DEDEDE
`

const Sec = styled(motion.section)`
    width: 30%;
    height: 300px;
    margin: 0 auto;
    cursor: pointer;
    position: relative;
    img {
        width: 100%;
        height: 100%
    }
` 

const Head = styled.h1`
    font-size: 60px;
    width: 40%;
    text-align: center;
    margin: 50px auto 50px
    // border: 1px solid black
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    // border: 10px solid red;
`

const Lower = styled.div`
    width: 30%;
    height: 25px;
    border: 1px solid #DDDDDD;
    color: #A0C1B8;
    border-radius: 5px;
    letter-spacing: 25px;
    padding-left: 9px;
    margin: 10px auto
`