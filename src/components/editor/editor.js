import {withStyles} from '@material-ui/core/styles'
import styles from './editorstyles.js'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ReactQuill from 'react-quill'
import {useState,useEffect} from 'react'
import {db,createdAt} from '../../config'


//classes is from styles

const Editor = ({classes,selectedNoteIndex,selectedNote}) => {

    const [title,setTitle]=useState(selectedNote.title)
    const [text,setText]=useState(selectedNote.text)
    const [id,setId]=useState(selectedNote.id)

    // REDUNDANT --> below to mount editor component for diff selected notes
    // useEffect(()=>
    // {
    //     console.log('---------------')
    //     console.log('selected useffect note text is',selectedNote.text)  //undefined

    //     if(selectedNote.title!==undefined && selectedNote.text!==undefined){
    //         setText(selectedNote.text)
    //         setTitle(selectedNote.title)
    //     }
    //     setId(selectedNoteIndex)
    // },[])


    //below is on editor mount 
    useEffect(()=>{
        setText(selectedNote.body)
        setTitle(selectedNote.title)
        setId(selectedNote.id)
        //setId(selectedNoteIndex) will also be same
 },[]) 
       
 //below is for changing the editor for selected note
 useEffect(()=>{
    if(selectedNote.id!==id)
    {
      setText(selectedNote.body)
      setTitle(selectedNote.title)
      setId(selectedNote.id)
    }
  })


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

       /* entire useEffect will run whenever there's a change in text
          first it'll run clean-up function   ->  () => clearTimeout(timeout);   
            If there was a timeout which didn't run yet(because 1.5 sec),  it'll be cleared.
       
        Then the code above return statement will be executed creating a new timeout
        At every button click we're just saying "clear the timeout from previous effect, run this new one instead"
        */

       return () => clearTimeout(timeout);
      }, [text]);


    function updateText(val){
        setText(val)
    }
    
    return ( <div className={classes.editorContainer}>
        <ReactQuill value={text}
        onChange={updateText}
        ></ReactQuill>
        </div> );
}
 
export default withStyles(styles)(Editor);