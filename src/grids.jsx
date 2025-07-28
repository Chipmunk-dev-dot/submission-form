import React from "react";
import { Button, FormLabel, Grid, RadioGroup, TextField, Typography } from "@mui/material";

const Grids = () => {
  return (
<Grid container sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <Grid container sx={{width:"70%"}} spacing={2}> 
        <Grid size={6}>
<TextField type="text" label="FirstName" sx={{width:"100%"}} required/>
      </Grid>
      <Grid size={6} >
<TextField type="text" label="LastName" sx={{width:"100%"}} required/>
      </Grid>
      <Grid size={12}>
        <TextField type="email" label="Email" sx={{width:"100%"}} required />
      </Grid>
       <Grid size={12}>
        <TextField type="tel" label="Phone Number" sx={{width:"100%"}} required />
      </Grid>
      
        
    </Grid>
   
</Grid>
    

  );
};

export default Grids;
