import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home () {
      let items = JSON.parse(localStorage.getItem("details"));
  const  [result, setStudents] =useState(items);
  
  const removeStudent = (index) => {
    console.log(index);
       let arr=items.filter((value)=>{
         return value.name !== index.name;
       })
 console.log(arr);
    setStudents(arr);

    localStorage.setItem("details", JSON.stringify(arr));
  };


  return (
    <div>
      
      <Link className='link' to="/Add"> Enter the next student details :</Link>

      {result.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.name}</p>
            <p>{value.Collage}</p>
            <p>{value.Batch}</p>

            <button>edit</button>

            <button onClick={() => removeStudent(value)}>remove</button>
          </div>
        )
      })}
    </div>
  )
}
export default Home;