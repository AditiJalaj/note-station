import {withStyles} from '@material-ui/core/styles'
import styles from './sidebarstyles'
import List from '@material-ui/icons/List'
import {Divider, Button} from '@material-ui/core'
import SidebarItem from '../sidebaritem/sidebaritem'
import {useState} from 'react'
import {db} from '../../config'

const Sidebar = ({notes,classes,selectNote,selectedNoteIndex}) => {

    const [addNote,setAddNote]=useState(false)
    const [noteTitle,setNoteTitle]=useState(null)

    const newNoteButtonClicked=()=>{
        setAddNote(!addNote)
        console.log("NEW NOTE BTN CLICKED")
    }
    const submitNoteButtonClicked=()=>{
        console.log(addNote, noteTitle)
        
        //add note to collection
        // db.collection('notes').add({title:noteTitle,body:noteText,id:index}).
        // then(()=>{alert(`Note ${noteTitle} added`)})
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
        onClick={submitNoteButtonClicked}>SUBMIT NOTE</Button>}
        

        {notes.map((n)=>{ 
           return (
            <div key={n.id}>

            <SidebarItem
            index={n.id}
            notes={n}
            selectNote={selectNote}
            selectedNoteIndex={selectedNoteIndex}
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