import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import {db,auth } from './Firebase';


const Login = () => {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const history = useHistory();
  const SingInhandeler = (e) => {
    e.preventDefault();
    //firebase login api
    auth.signInWithEmailAndPassword(email,password)
    .then(res=>history.push('/'))
    .catch(error=>alert(error.message))
  }
  const Registerhandeler = (e) => {
    e.preventDefault();
    //firebase register api
    auth.createUserWithEmailAndPassword(email,password).then(res=>{
      // console.log(res)
      if(res){
        history.push('/')
      }
    }).catch(error=>alert(error.message))
  }
  return (
    <div className="Login">
      <Link to="/">
    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt="" className="Login_image"/>
      </Link>
      <div className="Login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={(e) => {
            setemail(e.target.value)
          }}/>
          <h5>Password</h5>
          <input type="password" onChange={(e) => {
            setpassword(e.target.value)
          }}/><br/>
        <button className="Login_SingInbutton" onClick={SingInhandeler}>SignIn</button>
        </form>
        <p>
          By Singing-in you agree to Amazon's
          Condition of Use & Sale.Please see our Privecy Notice,
           out Cookies Notice and  out Interest-Based Ads
        </p>
        <button className="Login_RegisterButton" onClick={Registerhandeler}>Create your account</button>
      </div>
    </div>
  )
}

export default Login
