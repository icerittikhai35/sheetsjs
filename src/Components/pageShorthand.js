import React from 'react'
import Header from './header'
import '../App.css'
import ShorthandCSS1 from '../Img/ShorthandCSS/ShorthandCSS1.jpg'
import ShorthandCSS2 from '../Img/ShorthandCSS/ShorthandCSS2.jpg'
import ShorthandCSS3 from '../Img/ShorthandCSS/ShorthandCSS3.jpg'
import ShorthandCSS4 from '../Img/ShorthandCSS/ShorthandCSS4.jpg'
import ShorthandCSS5 from '../Img/ShorthandCSS/ShorthandCSS5.jpg'
import ShorthandCSS6 from '../Img/ShorthandCSS/ShorthandCSS6.jpg'
import ShorthandCSS7 from '../Img/ShorthandCSS/ShorthandCSS7.jpg'



    

export default function ShorthandCSS() {
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <img src={ShorthandCSS1} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ShorthandCSS2} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ShorthandCSS3} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ShorthandCSS4} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ShorthandCSS5} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ShorthandCSS6} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ShorthandCSS7} className="ImgCheatSheets" />
                </div>

            </div>
        </>
    )
}