import {withStyles} from '@material-ui/core/styles'
import styles from './sidebaritemstyles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import {removeHTMLTags} from '../../helpers'


const SidebarItem = () => {
    return ( <>
        HELLO FROM THE SIDEBAR ITEM</> );
}
 
export default withStyles(styles)(SidebarItem);