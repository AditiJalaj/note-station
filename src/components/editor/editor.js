import {withStyles} from '@material-ui/core/styles'
import styles from './editorstyles.js'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ReactQuill from 'react-quill'
import {useState,useEffect} from 'react'
import {db,createdAt} from '../../config'


//classes is from styles

const Editor = ({classes,selectedNoteIndex,selectedNote}) => {

    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    const [id,setId]=useState('')


    //below is on editor mount and change in selected note
    useEffect(()=>{
        setText(selectedNote.body)
        setTitle(selectedNote.title)
        setId(selectedNote.id)
        //setId(selectedNoteIndex) will also be same
 },[selectedNote]) 
       
    //debounce logic in useEffect 
    useEffect(() => {

      //implementing note update here
        let timeout = setTimeout(() => {
          db.collection('notes').
          doc(id).
           update({
            title:title,
            body:text,
            timestamp:createdAt
        })
       }, 1500);

       /* entire useEffect will run whenever there's a change in text or title
          first it'll run clean-up function   ->  () => clearTimeout(timeout);   
            If there was a timeout which didn't run yet(because 1.5 sec),  it'll be cleared.
       
        Then the code above return statement will be executed creating a new timeout
        At every button click we're just saying "clear the timeout from previous effect, run this new one instead"
        */

       return () => clearTimeout(timeout);

       //dependencies text and title for any update in text or title
      }, [text,title]);


    function updateText(val){
        setText(val)
    }
    
    return ( 
     
       <div className={classes.editorContainer}>
      
        
        <input 
        className={classes.titleInput}
        placeholder='Update Title...'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <BorderColorIcon className={classes.editIcon}>
        </BorderColorIcon>
       
      <ReactQuill value={text}
        onChange={updateText}
        ></ReactQuill>
        </div> 
        );
}
 
export default withStyles(styles)(Editor);