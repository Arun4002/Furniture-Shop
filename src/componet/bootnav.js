import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function SearchAppBar() {
  // Unused variable 'Item' removed
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{ backgroundColor: "#e2d8b2" }} id="navbar-bt">
      <div className="container-fluid navbar-bt d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <h3 className="brand" style={{ marginRight: "5px" }}>Premium Furnitures!</h3>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/a' className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Brands</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact Us</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
            <Button href="/login" style={{ marginLeft: '10px', backgroundColor: "black", color: "white" }}>Login</Button>
          </form>
        </div>
      </div>
    </nav>
  );
}
