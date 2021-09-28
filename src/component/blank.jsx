import { useState } from "react"
import styled from "styled-components"
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"

const Blank = () => {

    const{ ref, inView, entry } = useInView()
    console.log(inView)

    const font = {
        fontFamily: "'Bonheur Royale', cursive"
    }

    const head = {
        ini: {
            opacity: 0,
            top: "100px"
        },
        ani: {
            opacity: 1,
            top: 0,
            transition: {
                delay: 0.5,
                duration: 0.5
            }
        }
    }

    const stagger={
        ani: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.3
            }
        }
    }

    const letter = {
        ini: {
            opacity: 0,
            top: "10px"
        },
        ani: {
            opacity: 1,
            top: 0
        }
    }

    const[arr] = useState([
        {
            img: "2.jpg",
            short: "This is charity"
        },
        {
            img: "3.jpg",
            short: "This is charity"
        },
        {
            img: "4.jpg",
            short: "This is charity"
        },
        {
            img: "5.png",
            short: "This is charitym Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        },
        {
            img: "5.png",
            short: "This is charity"
        }
    ])

    return (
        <Div ref={ref} style={{position: "relative", background: "#000000"}}>
            {/* {arr.map(obj => {
                return <Cards img={obj.img} para={obj.short}/>
            })} */}
            <section style={{display: "flex", alignItems: "center"}}>
                <motion.div variants={stagger} initial="ini" animate={inView ? "ani": ""} className="name" style={{width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <motion.p lang="hi" variants={letter} style={{margin: "10px 0", position: "relative"}}>ABHISHEK TIWARI</motion.p>
                    <motion.p variants={letter} style={{margin: "10px 0", position: "relative"}}>GAURAV BALASAHEB DIGHE</motion.p>
                    <motion.p variants={letter} style={{margin: "10px 0", position: "relative"}}>NNK KANHU AGRAWALLA</motion.p>
                    <motion.p variants={letter} style={{margin: "10px 0", position: "relative"}}>YOGI JAYPRAKASH VALECHA</motion.p>
                </motion.div>
                <hr style={{transform: "rotate(90deg)", width: "20%", border: "none", borderTop: "1px solid gray"}}/>
                <div className="logo" style={{width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <motion.h1 
                        style={{fontSize: "60px", color: "#FFB319", position: "relative", top: "100px"}}
                        variants={head}
                        initial="ini"
                        animate={inView ? "ani": ""}
                    >
                        Cryto<span style={font}>Charity</span>
                    </motion.h1>
                </div>
            </section>
        </Div>
    )
}

const Cards = ({ img, para }) => {
    return (
        <Card>
            <img src={img} alt={para} />
            <p style={{position: "absolute"}}>{para}</p>
        </Card>
    )
}

export default Blank

const Card = styled.div`
    // margin: 40px 20px;
    width: 500px;
    height: 400px;
    position: relative;
    margin: 20px auto;
    img {
        width: 100%;
        height: 100%
    }
    p {
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        width: 100%;
        height: 25%;
        bottom: 0;
        font-size: 20px;
        padding: 5px;
        color: #fff
    }
`

const Div = styled.div`
    width: 100%;
    height: 400px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    section {
        width: 70%;
        height: 70%
    }
`