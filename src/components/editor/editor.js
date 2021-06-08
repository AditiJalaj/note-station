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


    const noteUpdate=(i,noteObj)=>{

        console.log('text inside update is ',noteObj.text) 
        //update to firebase , ERROR- Unsupported field value: 
        //undefined (found in field body in document notes/PpJPo8Rk9bJRbfWs24OC)

        
        db.collection('notes').
        doc(i).
        update({
            title:noteObj.title,
            body:noteObj.text,
            timestamp:createdAt
        })
    }

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
       
 //below is for changing editor for selected note
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
          //console.log("updating db ", text);
          noteUpdate(id,{title:title,body:text})

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