import React from 'react'
import Header from './header'
import '../App.css'
import ThemeWeb1 from '../Img/ThemeWeb/ThemeWeb1.jpg'
import ThemeWeb2 from '../Img/ThemeWeb/ThemeWeb2.jpg'
import ThemeWeb3 from '../Img/ThemeWeb/ThemeWeb3.jpg'
import ThemeWeb4 from '../Img/ThemeWeb/ThemeWeb4.jpg'
import ThemeWeb5 from '../Img/ThemeWeb/ThemeWeb5.jpg'
import ThemeWeb6 from '../Img/ThemeWeb/ThemeWeb6.jpg'



export default function ThemeWeb() {
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <img src={ThemeWeb1} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ThemeWeb2} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ThemeWeb3} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ThemeWeb4} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ThemeWeb5} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={ThemeWeb6} className="ImgCheatSheets" />
                </div>

            </div>
        </>
    )
}