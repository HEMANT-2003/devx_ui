"use client";
import React from 'react';
import axios from 'axios';

export default function Signup() {
    const signup = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(event.target);
        const data = {
            firstname: formData.get('Firstname'),
            lastname: formData.get('Lastname'),
            password: formData.get('Password'),
            confirmPassword: formData.get('ConfirmPassword'),
            email: formData.get('Email')
        };

        try {
            // Send a POST request to your API
            const response = await axios.post('/api/Member', data);
            if (response.status === HttpStatusCode.Ok) {
                console.log('User signed up successfully:', response.data);
                // Optionally redirect the user or show a success message
            } else {
                console.error('Error signing up:', response.data);
                // Optionally show an error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            // Optionally show an error message to the user
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
                <form onSubmit={signup}>
                    <label htmlFor="Firstname" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px', color: "blueviolet" }}>Firstname</label>
                    <input type="text" id="Firstname" name="Firstname" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }} />
                    
                    <label htmlFor="Lastname" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px', color: "blueviolet" }}>Lastname</label>
                    <input type="text" id="Lastname" name="Lastname" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }} />

                    <label htmlFor="password" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px', color: "darkviolet" }}>Password</label>
                    <input type="password" id="password" name="password" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', color: "black" }} />

                    <label htmlFor="Confirm Password" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px', color: "blueviolet" }}>Confirm Password</label>
                    <input type="password" id="Confirm Password" name="Confirm Password" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }} />

                    <label htmlFor="Email" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px', color: "blueviolet" }}>Email</label>
                    <input type="email" id="Email" name="Email" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }} />

                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
