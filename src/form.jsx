import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Grids from "./grids";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("female"); //I'm setting female as my initial value
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clecked submit", firstName, lastName, email, gender);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#42526e",
          mb: 4,
        }}
      >
        <Typography fontWeight={"bold"} variant="h3">
          HOTEL BOOKING
        </Typography>
      </Box>
      <Typography sx={{display:"flex", alignItems:"center",justifyContent:"center", width:"40%"}}  variant="h5" spacing={2}>Guest Information:</Typography>
      <Grids />
      <FormControl sx={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}} >
        <FormLabel id="controlled-radio-button" required>
          Gender:
        </FormLabel>
        <RadioGroup row name="radio-button-group">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center", width:"40%"}} variant="h5">Booking Details:</Typography>
      <br/>
       <Grid container sx={{display:"flex",alignItems:"center",justifyContent:"center"}} > 
        <Grid container sx={{width:"70%"}} spacing={2}>
          <Grid size={6} >
            <label>Check-in-date:</label>
            < TextField type="date"  sx={{width:"100%"}} required/>
          </Grid>
          <Grid size={6} >
             <label>Check-out-date:</label>
            <TextField type="date" sx={{width:"100%"}} required/>
          </Grid>
          <Grid size={6}>
            <TextField type="number" label="Number of guests" sx={{width:"100%"}}  required/>
          </Grid>
          <Grid size={6}>
            <FormLabel>Room Type:</FormLabel>
            <RadioGroup row name="room-type">
             <FormControlLabel value="single" control={<Radio/>} label="Single"/>
             <FormControlLabel value="double" control={<Radio/>} label="Double"/>
             <FormControlLabel value="suite" control={<Radio/>} label="Suite"/>
          </RadioGroup>
          </Grid>
          <Typography >Payment Methods:</Typography>
          <RadioGroup row>
            <FormControlLabel value="cash" control={<Radio/>} label="Cash"/>
            <FormControlLabel value="card" control={<Radio/>} label="Card">
            </FormControlLabel>
          </RadioGroup>
          <Grid size={12} >
              <Typography>Any special requests?</Typography>
              <TextField multiline  sx={{width:"100%"}} rows={6} label="type here..."></TextField>


          </Grid>
     


        
          
          
        </Grid>
     
      </Grid>
      
     
    </Box>
  );
}
