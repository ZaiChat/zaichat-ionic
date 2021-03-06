import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, addMessage } from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, query, orderBy, limitToLast } from 'firebase/firestore'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// Initialize Firebase

const app = initializeApp({

  apiKey: "AIzaSyB5Wz8s7NGkPA4AydXytGkJYNbhNXM1Jj0",

  authDomain: "zaichat-lavrovvv.firebaseapp.com",

  databaseURL: "https://zaichat-lavrovvv-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "zaichat-lavrovvv",

  storageBucket: "zaichat-lavrovvv.appspot.com",

  messagingSenderId: "729286463893",

  appId: "1:729286463893:web:c81588f5bdffc3b324269c"

});

const db = getFirestore();

const snapshot =
  getDocs(
    query(
      collection(db, 'messages', 'default', 'messages'),
      orderBy('createdAt'),
      limitToLast(100),
    )
  )
  .then((result) => {
    result.docChanges().forEach((change) => {
      const text: string = change.doc.get('text')
      store.dispatch(addMessage(text))
    })
  });