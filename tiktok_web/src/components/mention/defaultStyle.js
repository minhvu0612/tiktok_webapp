export default {
  //   control: {
  //     backgroundColor: '#fff',
  //     fontSize: 14,
  //     fontWeight: 'normal',
  //   },
  //   '&multiLine': {
  //     control: {
  //       fontFamily: 'monospace',
  //       minHeight: 63,
  //     },
  //     highlighter: {
  //       padding: 9,
  //       border: '1px solid transparent',
  //     },
  //     input: {
  //       padding: 9,
  //       border: '1px solid silver',
  //     },
  //   },
  //   '&singleLine': {
  //     display: 'inline-block',
  //     width: 180,
  //     highlighter: {
  //       padding: 1,
  //       border: '2px inset transparent',
  //     },
  //     input: {
  //       padding: 1,
  //       border: '2px inset',
  //     },
  //   },
  suggestions: {
    list: {
      width: '250px',
      maxHeight: '300px',
      backgroundColor: 'white',
      border: '1px transparent',
      position: 'absolute',
      bottom: '300%',
      overflowX: 'auto',
      borderRadius: '10px',
    },
    item: {
      paddingLeft: '15px',
      transition: '0.1s',
      backgroundColor: 'white',
      '&focused': {
        color: 'white',
        backgroundColor: 'rgba(254, 44, 85, 0.5)',
      },
    },
  },
}
