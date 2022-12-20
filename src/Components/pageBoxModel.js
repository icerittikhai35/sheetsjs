import React from 'react'
import Header from './header'
import '../App.css'
import BoxModel1 from '../Img/BoxModel/BoxModel1.jpg'
import BoxModel2 from '../Img/BoxModel/BoxModel2.jpg'
import BoxModel3 from '../Img/BoxModel/BoxModel3.jpg'
import BoxModel4 from '../Img/BoxModel/BoxModel4.jpg'





export default function BoxModel() {
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <img src={BoxModel1} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={BoxModel2} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={BoxModel3} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={BoxModel4} className="ImgCheatSheets" />
                </div>

            </div>
        </>
    )
}