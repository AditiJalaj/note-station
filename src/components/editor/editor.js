import {withStyles} from '@material-ui/core/styles'
import styles from './editorstyles.js'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ReactQuill from 'react-quill'
import {useState,useEffect} from 'react'
// import debounce from '../../helpers'


//classes is from styles

const Editor = ({classes}) => {
    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    const [id,setId]=useState('')

 

    useEffect(() => {
        let timeout = setTimeout(() => {
          console.log("updating db ", text);
        }, 1500);

        // this clean up function 
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