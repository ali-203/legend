import React from 'react';
import "./App.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

function App() {
    return (
        <>
<div className="back_img">
    <div class="topnav">
  <h3 className="active" href="#home">Legend!</h3>
  <div class="topnav-right">
  <a href="#contact">Portfoli</a>
  <a href="#contact">News</a>
  <a href="#contact">Services</a>
    <a href="#search">Search</a>
    <a href="#about">About</a>
  </div>
</div>
<hr className="new4"/>
<div className="legeng_text">
    <h1>Legend!We make web a beautifull place</h1>
    <form>
    <p>Signup for our Newsletter to be updated</p>
    
    <input className="ali_raza" type="email" placeholder="ali raza @ gmail.com"/>
    <input className="notify" type="submit" value="Notify me"/>
    </form>
</div>
<div className="icons">
<FacebookIcon />
<AccessibilityIcon />
</div>
<div className="hedding">
<h1>We work to make web a beautifull  place we craft beautifull design and convert then into fully functional and user friendly webapp </h1>

</div>

</div>
        </>
    )
}

export default App;
