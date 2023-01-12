import { useState, useEffect } from 'react';
import '../App.css';

export default function APIFood() {
    const [data, setData] = useState(null)

    const fetchData = async () => {
      //ยิง Res ขอข้อมูลในลิงค์API
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      //แปลงข้อมูลAPIมาเป็นรูปแบบJson
      const convertData = await res.json();
      //แปลงข้อมูลAPIมาเป็นรูปแบบJsonแล้ว ใช้Fuction setData นำข้อมูลในตัวแปร convertData ไปไว้ใน data
      setData(convertData);
      console.log(convertData);
    }
  
    useEffect(() => {
   
      fetchData();
    }, []);

    return (
        <div className="App">
            {/* นำข้อมูลมา.map เพื่อ loop ข้อมูลออกมา */}
            {data.map(val => (
                <div className='info' key={val.id}>
                    <h3>{val.title}</h3>
                    <img src={val.thumbnailUrl} alt={val.title} />
                </div>
            ))}
        </div>
    )
}