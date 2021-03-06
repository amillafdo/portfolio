import React, { useState } from 'react'
import "./contacts.scss"

export default function Contacts() {

    const[message,setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className='contacts' id='contact'>

            <div className='left'>
                <img src='assets/shake.svg' alt=''/>
            </div>
            <div className='right'>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email'/>

                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks, I'll Reply ASAP!</span> }

                </form>
            </div>
            
        </div>
    )
}
