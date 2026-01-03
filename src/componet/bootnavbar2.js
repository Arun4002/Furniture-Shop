import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <div className="container">
      <div className="row d-flex flex-row">
        <div className="col col-xs-12 col-sm-4 col-md-2 col-lg-2 d-flex flex-row bg-brown">
          <Link to='/sofa'>
            <button style={{ border: "none", backgroundColor: "white" }}>
              <h4>Sofas</h4>
            </button>
          </Link>
        </div>
        <div className="col col-xs-12 col-sm-4 col-md-2 col-lg-2 d-flex flex-row bg-brown">
          <Link to='/dining'>
            <button style={{ border: "none", backgroundColor: "white" }}>
              <h4>Dining</h4>
            </button>
          </Link>
        </div>
        <div className="col col-xs-12 col-sm-4 col-md-2 col-lg-2 d-flex flex-row bg-brown">
          <h4>Bedroom</h4>
        </div>
        <div className="col col-xs-12 col-sm-4 col-md-2 col-lg-2 d-flex flex-row bg-brown">
          <h4>Study</h4>
        </div>
        <div className="col col-xs-12 col-sm-4 col-md-2 col-lg-2 d-flex flex-row bg-brown">
          <h4>Kitchen</h4>
        </div>
        <div className="col col-xs-12 col-sm-4 col-md-2 col-lg-2 d-flex flex-row bg-brown">
          <h4>Dining</h4>
        </div>
      </div>
    </div>
  );
}
