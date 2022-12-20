import React from 'react'
import Header from './header'
import '../App.css'
import ButtonCSS1 from '../Img/ButtonCSS/ButtonCSS1.jpg'
import ButtonCSS2 from '../Img/ButtonCSS/ButtonCSS2.jpg'
import ButtonCSS3 from '../Img/ButtonCSS/ButtonCSS3.jpg'
import ButtonCSS4 from '../Img/ButtonCSS/ButtonCSS4.jpg'




    

export default function ButtonCSS() {
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <img src={ButtonCSS1} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ButtonCSS2} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ButtonCSS3} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ButtonCSS4} className="ImgCheatSheets" />
                </div>


            </div>
        </>
    )
}