import React from 'react'
import Header from './header'
import '../App.css'
import Grid from '../Img/GridAndFlex/Grid.jpg'
import Flex from '../Img/GridAndFlex/flex.jpg'

  
export default function GridAndFlex() {
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <img src={Grid} className="ImgCheatSheets" />
                </div>
                <div>
                    <img src={Flex} className="ImgCheatSheets" />
                </div>
            </div>
        </>
    )
}