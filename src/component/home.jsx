import { useSelector } from "react-redux"
import { motion, AnimateSharedLayout } from 'framer-motion'
import styled from 'styled-components'
import Values from "./values"
import Blank from "./blank"
import { Link } from "react-router-dom"

const Home = () => {

    const font = {
        fontFamily: "'Bonheur Royale', cursive"
    }

    const drop = {
        ini: {
            height: 0,
            visibility: "hidden"
        },
        ani: {
            height: "80px",
            visibility: "visible",
            transition: {
                delay: 0.5,
                duration: 0.5,
                delayChildren: 1,
                staggerChildren: 0.3
            }
        }
    }

    const appear = {
        ini: {
            // display: "none"
            opacity: 0
        },
        ani: {
            // display: "block",
            opacity: 1
        }
    }

    const color = {
        ini: {
            color: "#000"
        },
        ani: {
            color: "#FFB319",
            transition: {
                delay: 1.9,
                duration: 1
            }
        }
    }

    return (
        <Container>
            <Navbar
                variants={drop}
                initial="ini"
                animate="ani"
                style={{background: "#151515", fontSize: "15px", fontWeight: "bolder"}}
            >
                <motion.p variants={appear} style={{color: "#FFB319"}}>Crypto<span style={font}>Charity</span></motion.p>
                <motion.p variants={appear}><Link style={{textDecoration: "none", color: "#EEEEEE"}} to="/donate">Donate</Link></motion.p>
                <motion.p variants={appear}><Link style={{textDecoration: "none", color: "#EEEEEE"}} to="/about">About us</Link></motion.p>
            </Navbar>
            <Head variants={color} initial="ini" animate="ani">Crypto<span style={font}>Charity</span></Head>
            <Line />
            <Sec>
                <img src="/1.jpg" alt="quote" />
            </Sec>
            <Values />
            <Blank />
        </Container>
    )
}

export default Home

const Sec = styled(motion.section)`
    width: 100%;
    height: 700px;
    margin: 0 auto;
    position: relative;
    img {
        width: 100%;
        height: 100%
    }
` 

const Line = styled.hr`
    width: 15%;
    margin: 30px auto;
    border: none;
    border-top: 3px solid #DEDEDE
`

const Navbar = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
        cursor: pointer;
    }

`

const Head = styled(motion.h1)`
    font-size: 60px;
    width: 40%;
    text-align: center;
    margin: 50px auto 50px
`

const Container = styled.div`
    width: 100%;
`