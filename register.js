import React , {useState} from "react";
import  "./register.css";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Register=()=>{
    const [user,setUser]=useState({
      fname:"DR.",
      mname:"",
      lname:"",
      email:"",
      phone:"",
      password:"",
      reEnterPassword:"",
      dob:"",
      Regno:"",
      gender:""
    })

    const handleChange= e => {
        const {name , value} =e.target
        console.log(user)
        setUser({
            ...user,
            [name]:value
        })
    }

    const register=()=>{
        const {fname, lname, gender, email, phone, password ,Regno ,reEnterPassword, dob}= user
        console.log(user)
        if((password !== reEnterPassword)){
          alert("password and reEnterPassword should be same")
        }
        if(email)
        {
          // var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
          var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
          if (email.match(validRegex)) {
            return true;
            
          } else {
            
          alert("Invalid email address!");
            
          return false;
            
          }
        }
        if(dob){
              let current = new Date();
              let date = new Date(dob);
              let ms1 = current.getTime();
              let ms2 = date.getTime();
              console.log(date)
              if(ms2 > ms1)
              {
                alert("please fill the past date")
              }
        }

        if(fname && dob && lname && gender&& email && phone && Regno && password && reEnterPassword)
        {
          console.log("result",password)
          if((password !== reEnterPassword)){
            alert("password and reEnterPassword should be same")
          }
            if(password.length<8){
                alert("please enter at lest 8 word password")
            }else{
            axios.post("http://localhost:9002/register",{user})
            .then( res=> alert(res.data.message))
            }
        }
        else{
            alert("please fill all the required fields")
        }
    }
    return(
       <div className="register">
  <div className="container">
    <div className="title">Doctor Registration</div>
    <div className="content">
      <div className="formm">
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name </span>
            <input type="text" name="fname" value={user.name} placeholder="Enter your Name" onChange={handleChange} required/>

          </div>
          <div className="input-box">
            <span className="details">Middle Name</span>
            <input type="text" name="mname" value={user.name} onChange={handleChange} placeholder="Enter your middle name"/>
      
          </div>
          <div className="input-box">
            <span className="details">Last Name </span>
            <input type="text" name="lname" value={user.name} onChange={handleChange} placeholder="Enter your last name" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" name="email" value={user.name} onChange={handleChange} placeholder="Enter your email" />
       
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="number" name="phone" value={user.name} onChange={handleChange} placeholder="Enter your number" required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" name="password"value={user.name} onChange={handleChange} placeholder="Enter your password" required/>
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" name="reEnterPassword" value={user.name} onChange={handleChange} placeholder="Confirm your password" required/>
          </div>
          <div className="input-box">
            <span className="details">DOB</span>
            <input type="date" name="dob" value={user.name} onChange={handleChange} required/>
            <span id="derr" className="text-danger"></span>
          </div>
          <div className="input-box">
            <span className="details">Registration number</span>
            <input type="number" name="Regno" value={user.name} onChange={handleChange} placeholder="Enter your registration No" required/>
          </div>
        </div>
        
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"  name="Gender" value="male" onChange={handleChange}></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"  name="Gender" value="female"  onChange={handleChange}></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender" name="Gender" value="Ns"  onChange={handleChange} >Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="button" onClick={register} value="Next"/>
        </div>
        </div>
    </div>
  </div>
        </div>
    )

}

export default Register
