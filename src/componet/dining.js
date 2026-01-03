import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dining() {
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
          <h1>Dining</h1>
        </Grid>
        <Grid  xs={12}>
          <p>A vast collection of dining tables in ceramic, wood, marbles and glass, in various shapes and sizes. Fixed tables, for those long dinner time conversations. Extensible tables, because the more the merrier. Stylish dining chairs that add elegance to the moment. Sideboards and cabinets, for sophisticated service and storage. All, available in countless finishes and styles.</p>
        </Grid>
        <Grid container >

          
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/thumb/1694423287_1664281532_Alf%20Italia%20-%20ACE%20TABLE%20-%201200x810%20px%20-%20a%20copy.jpg"></img>
          <h4>IBIZA</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/1436355126_Garda_1350X866_1.jpg
"></img>
<h4>SINTRA CHAIR</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/1436429299_Montecarlo_1350X866_1.jpg"></img>
          <h4>SINTRA SOFA</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/1571399576_1350x866-23.jpg"></img>
          <h4>BELLAGIO</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/thumb/1621598410_OCEANUM%201350x866%20(1).jpg"></img>
          <h4>VENNA</h4>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img  style={{width:"310px",height:"300px"}} src="https://www.simplysofas.in/images/uploads/1436183533_Tokyo_1350X866_1.jpg"></img>
          <h4>FLORENCE</h4>
        </Grid>
        
      </Grid>
      </div>
    
  );
}
