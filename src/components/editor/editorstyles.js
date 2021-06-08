const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    titleInput: {
      height: '50px',
      boxSizing: 'border-box',
      border: '1px solid black',
      padding: '5px',
      fontSize: '24px',
      width: 'calc(100% - 300px)',
      backgroundColor: '#48a8db',
      color: 'white',
      fontSize:'large',
      paddingLeft: '50px',
      borderRadius:'10px',
      fontWeight:'bolder',
      
    },
    editIcon: {
      position: 'absolute',
      left: '320px',
      top:'7.8%',
      color: 'white',
      width: '10',
      height: '10'
    },
    editorContainer: {
      height: '100%',
      boxSizing: 'border-box'
    }
  });
  
  export default styles;