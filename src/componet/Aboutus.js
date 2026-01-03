// AboutUs.js
import { Grid } from '@mui/material';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './cssfiles/aboutus.css'; // Import your custom CSS file
import pic from "./images/imagelogo.png"
import Imag from './aboutusimg';
import NavScrollExample from './bootnavbar2';
import Footer from './footer';
import SearchAppBar from './bootnav';
const AboutUs = () => {
  return (
    <div>
      {/* <SearchAppBar/> */}
      <Imag/>
    <Container className="about-us-container mt-5 p-4">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={pic} // Replace with the actual path to your image
            alt="About Us"
            fluid
            className="about-us-image"
            style={{width:"300px",height:"300px"}}
          />
        </Col>
        <Col md={6} className="about-us-text">
      
          <p>
            Welcome to our furniture store! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam consectetur turpis ac massa
            malesuada hendrerit.
          </p>
          <p>
            Our mission is to provide high-quality furniture that blends
            functionality with style. Whether you're furnishing your home or
            office, we have a wide range of options to suit your taste and
            preferences.
          </p>
          {/* Add more content as needed */}
        </Col>
      </Row>
    </Container>
    <Container>
    </Container>
    <Container>
    <Grid container spacing={1} padding={8}> 
       <Grid xs={12} sm={6} md={4} lg={3}>
        <img src="https://www.woodenstreet.com/images/about-us/store-icon.svg"></img>
        <h4>90+</h4>
        <h6>Scores Across India</h6>
       </Grid>
       <Grid xs={12} sm={6} md={4}  lg={3}>
        <img src="	https://www.woodenstreet.com/images/about-us/thumb-icon.svg"></img>
        <h4>10Lakh+</h4>
        <h6>Satisfied Customers</h6>
       </Grid>
       <Grid xs={12} sm={6} md={4}  lg={3}>
        <img src="https://www.woodenstreet.com/images/about-us/truck-icon.svg"></img>
        <h4>100+</h4>
        <h6>Delivery Centers</h6>
       </Grid>
       <Grid xs={12} sm={6} md={4}  lg={3}>
        <img src="https://www.woodenstreet.com/images/about-us/product-box.svg"></img>
        <h4>10k+</h4>
        <h6>Furniture & Furnishing Products</h6>
       </Grid>
    </Grid>
    </Container>
    {/* <Footer/> */}
    </div>
  );
};

export default AboutUs;
