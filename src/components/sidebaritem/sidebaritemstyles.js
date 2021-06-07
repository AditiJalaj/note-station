const styles = theme => ({
    listItem: {
      cursor: 'pointer',
      backgroundColor:'#d6bcf7',
      border:'1px solid black',
      marginTop:'1px',
      borderRadius:'10px',
      '&:hover':{
        backgroundColor:'#aa94e0'
      }
    },
    textSection: {
      maxWidth: '85%'
    },  
    deleteIcon: {
      position: 'absolute',
      right: '5px',
      top: 'calc(50% - 15px)',
      '&:hover': {
        color: 'red'
      }
    }
  });
  
  export default styles;