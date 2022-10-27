import React from 'react'
import { Typography, TextField } from "@material-ui/core";
const TotalCopies = () => {
  return (
    <div>
     <p style={{color:"white", fontSiz:"24px", fontFamily:"Muller-ExtraBold", textAlign:"center"}}>TOTAL COPIES</p>
     <div style={{display:"flex", justifyContent:"center",}}>
     <TextField
      id="contact phone number"
    //   label="Contact phone number"
      type="number"
    //   value={this.state.contactPhoneNumber}
    //   onChange={this.handleChange('contactPhoneNumber')}
      placeholder="0"
      margin="normal"
     
        />

     </div>
    </div>
  )
}

export default TotalCopies
