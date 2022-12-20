import React from 'react'
import Header from './header'
import '../App.css'
import JStips1 from '../Img/JsTips/JStips1.jpg'
import JStips2 from '../Img/JsTips/JStips2.jpg'
import JStips3 from '../Img/JsTips/JStips3.jpg'
import JStips4 from '../Img/JsTips/JStips4.jpg'
import JStips5 from '../Img/JsTips/JStips5.jpg'
import JStips6 from '../Img/JsTips/JStips6.jpg'
import JStips7 from '../Img/JsTips/JStips7.jpg'
import JStips8 from '../Img/JsTips/JStips8.jpg'
import JStips9 from '../Img/JsTips/JStips0.png'



export default function JStips() {
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <img src={JStips1} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JStips2} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JStips3} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JStips4} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JStips5} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JStips6} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JStips7} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JStips8} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={JStips9} className="ImgCheatSheets" />
                </div>
                <div>
  
                </div>
            </div>
        </>
    )
}