import React from 'react'
import Header from './header'
import '../App.css'

export default function PageLoop() {

    let score = [82, 75, 48, 64, 36];


    //For
    let passedCount = 0;
    for (let i = 0; i < score.length; i++) {
        if (score[i] > 50) {
            passedCount++;
        }
    }
    console.log(passedCount);


    //For Each
    let passedCount2 = 0;
    score.forEach((score, index) => {
        if (score >= 50) {
            passedCount2++;
        }
    });
    console.log(passedCount2);

    //Map data
    const map1 = score.map(x => x * 2);
    console.log(map1);


    //Filter data
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const resultF = words.filter(word => word.length > 6);
    console.log(resultF);


    //loop object 
    const users = [
        {
            "id": 1,
            "name": "Jon",
            "email": "John@gmail.com"
        },
        {
            "id": 2,
            "name": "Sam",
            "email": "Sam@gmail.com"
        },
        {
            "id": 3,
            "name": "Dan",
            "email": "Dan@gmail.com"
        }
    ];

    const output = users.map(({ id, name, email }) => {
        return <div>
            <h2>ID: {id} </h2>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
        </div>
    });

    return (
        <>
            <Header />
            <div className="App">

                <div >
                    <h1>Loop in JavaScript</h1>
                </div>
                <div className='boxCss'>
                    <h2>Array = [82, 75, 48, 64, 36]</h2>
                </div>
                <div className='boxCss'>
                    <h2>For = {passedCount}</h2>
                </div>
                <div className='boxCss'>
                    <h2>ForEach = {passedCount2}</h2>
                </div>
                <div className='boxCss'>
                    <h2>Map = {map1 + ''}</h2>
                </div>
                <div className='boxCss'>
                    <h2>Array =[ {words + "  "}]</h2>
                    <h2>Filter = {resultF + ' '}</h2>
                </div>
                <div className='boxCss'>
                    {output}
                </div>
                <div className='boxCss'>


                </div>

            </div>
        </>


    )
}