export const days =[
    {value: '0', label: 'Sunday'},
    {value: '1', label: 'Monday'},
    {value: '2', label: 'Tuesday'},
    {value: '3', label: 'Wednesday'},
    {value: '4', label: 'Thursday'},
    {value: '5', label: 'Friday'},
    {value: '6', label: 'Saturday'},

  ]
 export const selectStyles = { 
    control: styles => ({...styles, backgroundColor:'transparent',marginTop:'10px',borderColor: 'gray',height:'10px'
  }),
    option: (styles) => {
      return {
        ...styles,
        margin: '0px',
        color: '#fff',
        backgroundColor:'#3b3b3b',
        border: '1px solid rgb(74,74,74)',
      }
    },
    multiValue:styles=>({...styles,backgroundColor:'#1a1a1a'}),
    multiValueLabel:styles=>({...styles,color: '#fff'}),
    menu:styles=>({...styles,backgroundColor:'#1a1a1a'}),


  }