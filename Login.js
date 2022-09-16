import { useForm } from "react-hook-form";
import {Login1} from "./Login1.css"
import React from "react";


function Login() {
 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (e) => {
    alert("Welcome To BookMyBus")
  };

  return (

      <div className="container" style={{paddingTop:"50px"}}>
        
        <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div >
          <div className="row">
           <div className="col-6">
           
           </div>
           
            <div className="col-4" >
              <div className="card" style={{padding:'20px'}}>
            <h3 >LOGIN</h3><br/>
            <span>

<a href="https://www.facebook.com/" className="btn btn-danger ml-3"><i class="fa fa-facebook" ></i></a>
<a href="https://twitter.com/login/" className="btn btn-info ml-3"><i class="fa fa-twitter" ></i></a>
</span><br/>
              <label><b>Email</b> </label>
             <input className="form-control" type="email"{...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/ })} placeholder="Your email.." />
              {errors.email && <p className="error">Please enter valid Email !</p>}
            
          
          
           <div className="mb-3">
              <label ><b>Password</b></label>
           
              <input className="form-control" type="password" {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ })} placeholder="Your password.." />
              {errors.password && <p className="error">Please enter valid Password !</p>}
            </div>
            <div class="remember-me--forget-password">

<label>
<input type="checkbox" name="item" unchecked />
<span class="text-checkbox" style={{color:'cyan'}}> Remember me</span>
</label><br/>
<a href="https://mail.google.com/mail/">Forget Password ?</a>
</div>
          <div className='mb-3'><br/>
            <button type='submit' className='btn btn-success'>Login</button>
            </div>
          </div>
          <div className="col">
          </div>
          </div>
          </div>
          </div>
        </form>
      </div>
      </div>
      
     
  );
}

export default Login;


