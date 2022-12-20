import React from 'react'
import Header from './header'
import '../App.css'
import JSDom1 from '../Img/JSDom/JSDom1.jpg'
import JSDom2 from '../Img/JSDom/JSDom2.jpg'
import JSDom3 from '../Img/JSDom/JSDom3.jpg'
import JSDom4 from '../Img/JSDom/JSDom4.jpg'
import JSDom5 from '../Img/JSDom/JSDom5.jpg'
import JSDom6 from '../Img/JSDom/JSDom6.jpg'



export default function JSDom() {
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <img src={JSDom1} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JSDom2} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JSDom3} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JSDom4} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JSDom5} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JSDom6} className="ImgCheatSheets" />
                </div>

            </div>
        </>
    )
}