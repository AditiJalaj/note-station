import {withStyles} from '@material-ui/core/styles'
import styles from './sidebarstyles'
import List from '@material-ui/icons/List'
import {Divider, Button} from '@material-ui/core'
import SidebarItem from '../sidebaritem/sidebaritem'
import {useState} from 'react'
import {db,createdAt} from '../../config'

const Sidebar = ({notes,classes,selectNote,selectedNote,setSelectedNoteIndex,setSelectedNote,selectedNoteIndex}) => {

    const [addNote,setAddNote]=useState(false)
    const [noteTitle,setNoteTitle]=useState(null)

    
    const newNoteButtonClicked=()=>{
        setAddNote(!addNote)
        console.log("NEW NOTE BTN CLICKED")
    }

    const submitHandler=()=>{
            db.collection('notes')
            .add({title:noteTitle,
                body:'',
                timestamp:createdAt
            })
            .then(()=>{
                alert(`Added : ${noteTitle} `) 
            })
            .then(()=>{
                setAddNote(false)
                setNoteTitle(null)
            })
            

            //const newID=just added's note Id
            //grabbing the id of just added note
           // const newNoteIndex=notes.indexOf(notes.filter((note)=>{note.id===newID})[0])

            //updating the currently selected note w the just added note
            //setSelectedNote(notes[newNoteIndex])

          // console.log('should show new note ',selectedNote)

    }

    return ( 
        <div className={classes.sidebarContainer}>
        <Button 
        onClick={newNoteButtonClicked}
        className={classes.newNoteBtn}>{ addNote ? 'CANCEL NOTE' :'ADD NEW NOTE'}</Button>
        
        { addNote &&
        <div>
        <input type='text'
        className={classes.newNoteInput}
        placeholder='Enter Note Title...'
        onKeyUp={(e)=>{
            setNoteTitle(e.target.value)
        }}
        ></input>
        </div>
        }

        {addNote && <Button className={classes.newNoteSubmitBtn}
        onClick={submitHandler}
        disabled={noteTitle===null || noteTitle===''}
        >SUBMIT NOTE</Button>}
        

        {notes.map((n)=>{ 
           return (
            <div key={n.id}>

            <SidebarItem
            index={n.id}
            notes={n}
            selectNote={selectNote}
            selectedNoteIndex={selectedNoteIndex}
            setSelectedNoteIndex={setSelectedNoteIndex}
            setSelectedNote={setSelectedNote}
            selectedNote={selectedNote}
            >
            </SidebarItem>

            <Divider></Divider>
            </div>
           
            )
            
        })}
        
       
        </div>
      );
}
 
export default withStyles(styles)(Sidebar);