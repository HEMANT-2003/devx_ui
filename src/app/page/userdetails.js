
"use client";

import axios from 'axios';
import { Nunito } from 'next/font/google';
import React, { useState, useEffect } from 'react';

export default function UserDetails() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    

    // Function to fetch user details
    const fetchData = async (email) => {
        try {
            const result = await axios.get(`/api/Member/UserDetails?email=${email}`);
            if (result.data != null) {
                const dataStr = result.data.replace(/ObjectId\("([^"]+)"\)/g, '"$1"');
                const data = JSON.parse(dataStr);
                
                console.log("Login successful");
                console.log(data.Firstname);
                console.log(data.Lastname);
                console.log(data.Mobile);
                console.log(data.Email);
              

                // Update state with fetched data
                setFirstname(data.Firstname);
                setLastname(data.Lastname);
                setMobile(data.Mobile);
                setEmail(data.Email);
                setToken(data.Token);
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    useEffect(() => {
        const emailAddress = sessionStorage.getItem('EmailAddress');
        if (emailAddress) {
            fetchData(emailAddress);
        } else {
            console.error("Email address not found in sessionStorage.");
        }
    }, []);

    return (
        <div>
            <label>First Name: {firstname} </label>
            <label>Last Name: {lastname} </label>
            <label>Mobile: {mobile} </label>
            <label>Email: {email} </label>
        </div>
    );
}
