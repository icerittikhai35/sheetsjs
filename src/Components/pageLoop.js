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
            <h4>ID: {id} </h4>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
        </div>
    });


    function splitEvenOdd(numbers) {
        const evenNumbers = [];
        const oddNumbers = [];

        for (const number of numbers) {
            if (number % 2 === 0) {
                evenNumbers.push(number);
            } else {
                oddNumbers.push(number);
            }
        }

        return [evenNumbers, oddNumbers];
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [evenNumbers, oddNumbers] = splitEvenOdd(numbers);

    console.log(`Even numbers: ${evenNumbers}`);
    console.log(`Odd numbers: ${oddNumbers}`);


    //calculator


    return (
        <>
            <Header />
            <div className="App">

                <div >
                    <h1>Loop in JavaScript</h1>
                </div>

                <div className='boxCss'>
                    <h4>หา Array ที่มีค่าที่มากกว่า 50</h4>
                    <h3>Array = [82, 75, 48, 64, 36]</h3>
                    <h3>For = {passedCount.toString()}</h3>
                </div>

                <div className='boxCss'>
                    <h4>หา Array ที่มีค่าที่มากกว่า 50 ( เปลี่ยนวิธีเขียน )</h4>
                    <h3>Array = [82, 75, 48, 64, 36]</h3>
                    <h3>ForEach = {passedCount2.toString()}</h3>
                </div>

                <div className='boxCss'>
                    <h4>.map Array และทำการ X2 ค่าของ Array</h4>
                    <h3>Array = [82, 75, 48, 64, 36]</h3>
                    <h3>Map = {map1.toString()}</h3>
                </div>

                <div className='boxCss'>
                    <h4>.Filter Array และทำการหาค่าของ Array ที่มีมากกว่า6ตัวอักษร</h4>
                    <h3>data = [{words.toString()}]</h3>
                    <h3>Filter = {resultF.toString()}</h3>
                    
                </div>

                <div className='boxCss'>
                    <h4>.map Array เอาข้อมูลมาโชว์ loop object </h4>
                    {output}
                </div>

                <div className='boxCss'>
                    <h4>Loop หา เลขคู่เลขคี่</h4>
                    <h4>numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</h4>
                    <h3>{evenNumbers.toString()}</h3>
                    <h3>{oddNumbers.toString()}</h3>
                </div>

            </div>
        </>


    )
}