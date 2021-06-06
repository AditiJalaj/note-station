import {withStyles} from '@material-ui/core/styles'
import styles from './sidebarstyles'
import List from '@material-ui/icons/List'
import {Divider, Button} from '@material-ui/core'
import SidebarItem from '../sidebaritem/sidebaritem'
import {useState} from 'react'

const Sidebar = ({notes,classes,selectedNoteIndex}) => {

    const [addNote,setAddNote]=useState(false)
    const [noteTitle,setNoteTitle]=useState(null)

    const newNoteButtonClicked=()=>{
        setAddNote(!addNote)
        console.log("NEW NOTE BTN CLICKED")
    }
    const submitNoteButtonClicked=()=>{
        console.log(addNote, noteTitle)
    }

    const selectNote=()=>{
        console.log('SELECT NOTE')
    }
    const  deleteNote=()=>{
        console.log(deleteNote)
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
        

        <List>
           
        {notes?.map((n)=>{
            
            <div key={n.id}>
            <SidebarItem
            index={n.id}
            note={n.body}
            selectedNoteIndex={selectedNoteIndex}
            selectNote={selectNote}
            deleteNote={deleteNote}
            >
            </SidebarItem>
            <Divider></Divider>
            </div>
        })}
        
        </List>
        </div>
      );
}
 
export default withStyles(styles)(Sidebar);