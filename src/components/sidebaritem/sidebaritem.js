import {withStyles} from '@material-ui/core/styles'
import styles from './sidebaritemstyles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import {removeHTMLTags} from '../../helpers'
import {db} from '../../config'


const SidebarItem = ({classes,index,notes,selectNote,selectedNote,setSelectedNote,selectedNoteIndex,setSelectedNoteIndex}) => {

    const deleteNote=()=>{

       if(window.confirm(`Are you sure you want to delete note ${notes.title}?`))
       {
        db.collection('notes').doc(index).delete().
        then(()=>{
            //so that on delete the editor of this note does not show- it becomes null
                console.log("---------------------------")
                console.log('index was same as selectd note id')
                setSelectedNoteIndex(null)
                 setSelectedNote(null)
            
        })
        .then(()=>{
            console.log("DELETED")
        })
       }
    }
    
    return ( <div key={index} 
        onClick={()=>{
        selectNote(index,notes)}}
        >
        <ListItem  
        className={classes.listItem}
        selected ={selectedNoteIndex===index}
        alignItems='flex-start'>
        
        
        <div  className={classes.textSection}>

        <ListItemText
        primary={notes.title} 
        secondary={removeHTMLTags(notes.body?.substring(0,30)+'...')}>
        </ListItemText>
        </div>

        <DeleteIcon 
        className={classes.deleteIcon}
        onClick={deleteNote}>
        </DeleteIcon>
        </ListItem>
        
       </div> );
}
 
export default withStyles(styles)(SidebarItem);
