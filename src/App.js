
import './App.css';
import {db } from './config'
import {useEffect,useState} from 'react'
import Editor from './components/editor/editor'
import Sidebar from './components/sidebar/sidebar';

 
function App() {

  const [notes,setNotes]=useState('')

  useEffect(()=>{
    db.collection('notes')

    //everytime there's a change in collection , run the function inside onSnapshot
    .onSnapshot((update)=>{
      let documents=[]
      update.forEach((doc)=>{
        documents.push({...doc.data(),id:doc.id})
        //doc.data() is an object containing title, body and timestamp
       //...doc.data() will pass all key value pairs from that object
      })

      setNotes(documents)
    })
  },[])
  console.log('notes ', notes)


  return (
    <div className='app-container'>
    <Sidebar/>
    <Editor/>
    
    
    </div>
  );
}

export default App;
