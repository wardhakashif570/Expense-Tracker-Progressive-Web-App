import React from 'react';
import './App.css';
import Child from './Child.js';
import {TransactionProvider} from './transContext.js';
import firebase from './firebase';

function App() {
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })
  return (
    <TransactionProvider>
      <Child/>
    </TransactionProvider>
  );
}

export default App;
