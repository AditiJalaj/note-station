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

    //below to mount editor component for diff selected notes
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
        let timeout = setTimeout(() => {
          
          //implementing note update here
          db.collection('notes').
          doc(id).
           update({
            title:title,
            body:text,
            timestamp:createdAt
        })

        }, 1500);

         //this clean up function 
         //makes sure we update data in firebase only when user stops typing for 1.5 sec
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