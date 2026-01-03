import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './cssfiles/grid2.css'
import Grid from '@mui/material/Grid';



    



export default function BasicGridtwo() {
  return (
    <Box sx={{ flexGrow: 1 }} paddingTop={6}>
      <Grid container spacing={2} >
        <Grid xs={12}>
            <h2> India's Finest Furniture Brand</h2>
            <p>Buy Furniture Online from our extensive collection of 
             wooden furniture to give your home an elegant touch</p>
        </Grid>
        
        
        <Grid xs={12} md={6} lg={4} padding={2} className='k'>
        <img   className="i" src={require("./images/beds-banner.jpg")} style={{height:"287px",borderRadius:"8px"}}></img>
          
        </Grid>
        <Grid  xs={12} md={6} lg={4}  padding={2} className='k'>
        <img   className="i" src={require("./images/dining-set-banner.jpg")} style={{height:"287px",borderRadius:"8px"}}></img>
          
        </Grid>
        <Grid  xs={12} md={6} lg={4}  padding={2} className='k'>
        <img   className="i" src={require("./images/dressing-table-banner.jpg")} style={{height:"287px",borderRadius:"8px"}}></img>
          
        </Grid>
        <Grid xs={12} md={6} lg={4}  padding={2} className='k'>
        <img   className="i" src={require("./images/space-save-banner.jpg")} style={{height:"287px",borderRadius:"8px"}}></img>
          
        </Grid>
        <Grid  xs={12} md={6} lg={4}  padding={2} className='k'>
        <img  className="i" src={require("./images/table-banner.jpg")} style={{height:"287px",borderRadius:"8px"}}></img>
          
        </Grid>
        <Grid xs={12} md={6} lg={4}  padding={2} className='k'>
        <img  className="i" src={require("./images/wooden-sofa-banner.jpg")} style={{height:"287px",borderRadius:"8px"}}></img>
         
        </Grid>
        
      </Grid>
    </Box>
  );
}





    
  

