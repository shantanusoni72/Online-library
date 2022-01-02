import React from 'react'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, setDoc, doc } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: 'AIzaSyC1Anr8taG8opik7ggDgqUXVFLRiN-9jUU',
    authDomain: 'online-library-a0ca4.firebaseapp.com',
    projectId: 'online-library-a0ca4'
});

export default function Section2() {
    const db = getFirestore();

    const bookRef = db.collection('library').doc('cs');
    const doc = bookRef.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log('Document data:', doc.data()); //db.collection is not a function
    }

    return (
        <div>
            <h3>Books</h3>
            <p></p> Books name and details will read and shown here
        </div>
    )
}
