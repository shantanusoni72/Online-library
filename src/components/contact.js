import React from 'react'
import { useState } from 'react'
import { initializeApp } from "firebase/app"
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: 'AIzaSyC1Anr8taG8opik7ggDgqUXVFLRiN-9jUU',
    authDomain: 'online-library-a0ca4.firebaseapp.com',
    projectId: 'online-library-a0ca4'
  });

function feedback() {
    document.getElementById("stat").innerHTML = "You feedback is successfully submitted."
}

function setToFirestore() {
    const db = getFirestore()
    const email = document.getElementById("email").value;
    const message = document.getElementById("msg").value;
    if (email != "" && message != "") {
        try {
            const docRef = addDoc(collection(db, "feedback"), {
                Email: email,
                ID: Math.floor(Math.random() * 1000),
                Message: message
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    feedback()
}

export default function Contact() {
    return (
        <>
            <br /><br /><br />
            <div style={{ height: 300, width: 300, marginLeft: 645, marginRight: 300 }}>
                <div>
                    <div class="feedback">
                        <h3>Feedback Form</h3><br />
                        <input id="email" type="email" class="form-control" placeholder="name@example.com" />
                        <br />
                        <textarea id="msg" class="form-control" rows="3" placeholder="Desribe your query/suggestion"></textarea><br />
                        <button onClick={() => setToFirestore()} class="btn btn-primary">Submit</button>
                        <br /><br /><br />
                        <h6 id='stat' style={{ color: "green" }}></h6>
                    </div>
                </div>
            </div>
        </>
    )
}
