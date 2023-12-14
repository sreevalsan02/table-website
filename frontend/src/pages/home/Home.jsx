import "./home.css"
import { useEffect, useRef } from "react";
import Typed from 'typed.js'
import animationData from "../../images/animate4.json"
import Lottie from "lottie-react"

function Autotype() {
    const el = useRef("");

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Tabular <br> Data Extraction. ^1000',
                'Tabular Classification. ^1000'],
            typeSpeed: 50,
            backSpeed: 40,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div>
            <div className="auto">
                <span ref={el}></span>
            </div>
        </div>
    )
}

export default function Home() {

    return (
        <>

            <div className="body1">

                <div className="first-half divtype1">
                    <div className="header ">
                        <h1 className="head1">Tabular Data Extraction</h1>

                    </div>


                    <div className="first-left">
                        {/* <img src="gif2.gif" alt="" /> */}
                        <Lottie
                            loop={true}

                            animationData={animationData} />
                    </div>
                    <div className="first-right"><Autotype /></div>


                </div>

                <div className="second-half divtype1">
                    <button className="btn1">upload image</button>
                </div>
            </div>


        </>
    )
}