
import './App.css';
import {db} from './config'
import {useEffect,useState} from 'react'
import Editor from './components/editor/editor'
import Sidebar from './components/sidebar/sidebar';

 
function App() {

  const [notes,setNotes]=useState([])
  const [selectedNote,setSelectedNote]=useState(null)
  const [selectedNoteIndex,setSelectedNoteIndex]=useState(null)

 /* selecting note by passing the below to sidebaritem via sidebar comp
   console showing the note and index set to prev clicked note   */

  const selectNote=(index,note)=>{
    setSelectedNoteIndex(index)
    setSelectedNote(note)
    console.log('invoked selectNote is',selectedNote)
  }

console.log('selected notes is', selectedNote)


//to get notes from firebase after component pushed to DOM
  useEffect(()=>{
    db.collection('notes')
    .orderBy('timestamp','desc')
    //everytime there's a change in collection , run the function inside onSnapshot
    .onSnapshot((update)=>{
      let documents=[]
      update.forEach((doc)=>{
        documents.push({...doc.data(),id:doc.id})

        /*doc.data() is an object containing title, body and timestamp
          ...doc.data() will pass all key value pairs from that object */

      })
      setNotes(documents)
    })
  },[])
  console.log('notes ', notes)

 
  return (
    <>
    <nav className='title'>NOTE-STATION</nav>
    <div className='app-container'>
    
    <Sidebar 
    notes={notes} 
    selectNote={selectNote}
    selectedNote={selectedNote}
    setSelectedNote={setSelectedNote}
    setSelectedNoteIndex={setSelectedNoteIndex}
    selectedNoteIndex={selectedNoteIndex}/>
    

    { selectedNote && <Editor
      notes={notes}
      selectedNote={selectedNote}
    selectedNoteIndex={selectedNoteIndex} />}

    </div>
    </>
  );
}

export default App;
