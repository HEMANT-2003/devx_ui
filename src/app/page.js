'use client';
import Login from "./page/login.js";
import Signup from "./page/signup.js";
import Link from "next/link.js";
import App from "./page/app.js";
import User from "./page/userdetails.js";

export default function Home() {
  return (

   
      <div>
      {sessionStorage.getItem('IsUserSession') === 'true' ? (
      <div>
      <div>Welcome {sessionStorage.getItem('EmailAddress')}</div>
      <div><User /></div>
        </div>
      ) : (
       <Login />
      )}
   </div>

   
  );
}
