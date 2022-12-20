import React from 'react'
import Header from './header'
import '../App.css'
import UXUI1 from '../Img/UX-UI/UX-UI1.jpg'
import UXUI2 from '../Img/UX-UI/UX-UI2.jpg'
import UXUI3 from '../Img/UX-UI/UX-UI3.jpg'
import UXUI4 from '../Img/UX-UI/UX-UI4.jpg'
import UXUI5 from '../Img/UX-UI/UX-UI5.jpg'
import UXUI6 from '../Img/UX-UI/UX-UI6.jpg'
import UXUI7 from '../Img/UX-UI/UX-UI7.jpg'



    

export default function UXUI() {
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <img src={UXUI1} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={UXUI2} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={UXUI3} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={UXUI4} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={UXUI5} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={UXUI6} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={UXUI7} className="ImgCheatSheets" />
                </div>

            </div>
        </>
    )
}