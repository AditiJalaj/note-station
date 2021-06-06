
import './App.css';
import {db } from './config'
import {useEffect,useState} from 'react'
import Editor from './components/editor/editor'
import Sidebar from './components/sidebar/sidebar';

 
function App() {

  const [notes,setNotes]=useState([])
  const [selectedNote,setSelectedNote]=useState(null)
  const [selectedNoteIndex,setSelectedNoteIndex]=useState(null)

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
    <>
    <nav className='title'>NOTE-STATION</nav>
    
    <div className='app-container'>
    
    <Sidebar notes={notes}  selectedNoteIndex={selectedNoteIndex}/>
    <Editor/>
    </div>
    </>
  );
}

export default App;
