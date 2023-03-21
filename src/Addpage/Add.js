import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Add= () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [Collage, setCollage] = useState("");
    const [Batch, setBatch] = useState("");
    const [arr, setArr] = useState([]);
    console.log(arr);

    const [WrongMsg, setWrongMsg] = useState(false);



    const handleInput = (event) =>{
           
      if(event.target.name === "name"){
         setName(event.target.value);
      }
      else if(event.target.name === "Collage"){
        setCollage(event.target.value);
     }
     else{
      setBatch(event.target.value);
   }
  }

    const handleSubmit = (event) =>{
        event.preventDefault();
    if(name === "" || Collage === "" || Batch === ""){
        setWrongMsg(true);
    }  
    else{

    }
        let arr1= {
            name: name,
            Collage: Collage,
            Batch:Batch,
        };
        console.log(arr1);
        setArr([...arr, arr1]);
        
        setName("")
        setCollage("")
        setBatch("")
        };
        useEffect(()=>{
          if(arr.length!=0){
            localStorage.setItem("details", JSON.stringify(arr) );
            console.log(arr);
          }
        },[arr])
       
  return (
    <div>
        <div>
             <h1>Student Details:</h1>
        <form  onSubmit={handleSubmit}>

            <label > Name:</label><br/>
                <input name="name" value={name}  placeholder='Enter Your Name' autoComplete='off' onChange={handleInput} /><br/>
                {WrongMsg && name === "" && <p style={{ color: "red" }}> Student Name is required*</p>}<br/>

            <label>Collage:</label><br/>
                <input name="Collage" value={Collage}  placeholder='Enter Your Collage' autoComplete='off' onChange={handleInput} /><br/>
                {WrongMsg && Collage === "" && <p style={{ color: "red" }}>  Collage name is required*</p>}<br/>

            <label>Batch:</label> <br/>
                <input name="Batch" value={Batch} placeholder='Enter Your Batch' autoComplete='off' onChange={handleInput} /><br/>
                {WrongMsg && Batch === "" && <p style={{ color: "red" }}> Batch details is required*</p>}<br/>

            <input type="submit"  id="btn1" /><br/>

            <Link to="/Home">Student Details</Link>
      
        </form>
        </div>
    </div>
  )
}

export default Add;