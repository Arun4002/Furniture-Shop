import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './cssfiles/grid.css'
import Grid from '@mui/material/Grid';
// import pic1 from 'icon1.jpg'

// import bookimage from'../assets/study.jpg';


    



export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} paddingTop={6}>
      <Grid container spacing={2} padding={2}>
        <Grid xs={12}>
          <h1>Top Picks For You!</h1>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src={require("./images/icon1.jpg")}></img>
        <br></br>
          <h2>Sofa Sets</h2>
        </Grid>
        <Grid  xs={12} md={6} lg={4}>
        <img src={require("./images/icon2.jpg")}></img>
          <h2>Bedroom</h2>
        </Grid>
        <Grid  xs={12} md={6} lg={4}>
        <img src={require("./images/icon3.jpg")}></img>
          <h2>Dining</h2>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src={require("./images/icontv.jpg")}></img>
          <h2>TV Sets</h2>
        </Grid>
        <Grid  xs={12} md={6} lg={4}>
        <img src={require("./images/study.jpg")}></img>
          <h2>Study Tables</h2>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
        <img src={require("./images/lamp.jpg")}></img>
          <h2>Lamp & Lightings</h2>
        </Grid>
        
       
        
      </Grid>
    </Box>
  );
}





    
  

