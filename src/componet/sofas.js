import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Sofas() {
  return (
    <div>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  style={{height:"100vh"}} src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid w-100" alt="..."></img>
    </div>
    <div class="carousel-item ">
      <img  style={{height:"100vh"}} src="https://images.unsplash.com/photo-1578112010316-b44c50d27b2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid w-100" alt="..."></img>
    </div>
    <div class="carousel-item ">
      <img style={{height:"100vh"}} src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <Grid container spacing={1} padding={2}>
        <Grid  xs={12}>
          <h1>Sofas</h1>
        </Grid>
        <Grid  xs={12}>
          <p>For the grand living room, family room, odd spaces, and ambiences that demand style and class. From stylish singles to inimitable 2, 3, 4 and 5-seater sofas, every piece is a study in craftsmanship and innovation. Modular sofas that can be rearranged at will, motion sofas that can be adjusted at the touch of a button, and sofa beds that transform with a simple mechanism. In genuine leather and fabric, with plenty of colours to choose from.</p>
        </Grid>
        <Grid container >

          
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="	https://www.simplysofas.in/images/uploads/thumb/1700109800_1699262666_1697707103_TJM_2413%20copy.jpg"></img>
          <h4>IBIZA</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/thumb/1700109696_1697707391_TJM_2427%20copy.jpg
"></img>
<h4>SINTRA CHAIR</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="		https://www.simplysofas.in/images/uploads/thumb/1697707917_TJM_2448%20copy.jpg"></img>
          <h4>SINTRA SOFA</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/thumb/1698234897_TJM_3772%20copy.png"></img>
          <h4>BELLAGIO</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/thumb/1697708401_TJM_2486%20copy.jpg"></img>
          <h4>VENNA</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/thumb/1699263442__TJM9485%20copy%202.jpg"></img>
          <h4>FLORENCE</h4>
        </Grid>
        
      </Grid>
      </div>
    
  );
}
