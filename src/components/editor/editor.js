import {withStyles} from '@material-ui/core/styles'
import styles from './editorstyles.js'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import ReactQuill from 'react-quill'
import {useState,useEffect} from 'react'
import debounce from '../../helpers'
import { compose } from 'redux'

const Editor = ({}) => {
    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    const [id,setId]=useState('')

    function updateText(val){
        setText(val)
        console.log(text)

        //implement debounce logic here
    }
    
    return ( <div className="editorContainer">
        <ReactQuill value={text}
        onChange={updateText}
        ></ReactQuill>
        </div> );
}
 
export default withStyles(styles)(Editor);