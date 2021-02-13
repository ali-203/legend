import React from 'react';
import "./App.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AirplayIcon from '@material-ui/icons/Airplay';

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
<AccountBalanceIcon />
<AccountBoxIcon />
</div>
</div>
       
<div className="hedding">
<h2>We work to make web a beautifull  place</h2>
<h2> we craft beautifull design and convert then <br />into fully functional and user friendly webapp </h2>
</div>

<div className="image_div">
<div className="portfolio"> 
<AirplayIcon />
<h1>Portfolio...</h1>
</div>
 <div className="all_img">
<div className="images-one">
<img src="img.png"/>
<h2>Computer</h2>
<p> I am a web develoment student in
 blocktech solution softwear house</p>

</div>
<div className="imah_two">
 <img src="ali.png"/>
 <h2>Computer</h2>
 <p> I am a web develoment student in
 blocktech solution softwear house</p>
</div>
<div>
 <img src="ihh.png" />
 <h2>Computer</h2>
 <p> I am a web develoment student in
  blocktech solution softwear house</p>
</div>
</div> 
</div>
<div className="image_div">
 <div className="all_img">
<div className="images-one">
<img src="lap.png"/>
<h2>Computer</h2>
<p> I am a web develoment student in
 blocktech solution softwear house</p>

</div>
<div className="imah_two">
<img src="nhh.png"/>
 <h2>Computer</h2>
 <p> I am a web develoment student in
 blocktech solution softwear house</p>
</div>
<div>
<img src="nic.png"/>
 <h2>Computer</h2>
 <p> I am a web develoment student in
  blocktech solution softwear house</p>
</div>
</div> 
</div>












{/* <div className= "para-div">
  <h2>Computer</h2>
  <h2>Computer</h2>
  <h2>Computer</h2>
</div> */}
{/* <div className="para2_div">
  <p> I am a web develoment student in blocktech solution softwear house</p>
  <p>I am a web develoment student in blocktech solution softwear house</p>
  <p>I am a web develoment student in blocktech solution softwear house</p>
  <p>I am a web develoment student in blocktech solution softwear house</p>
</div> */}





{/* <div className="images-two">
<img src="lap.png" width="30%" height="30%"/>
<img src="nhh.png" width="30%" height="30%"/>
<img src="nic.png" width="30%" height="30%"/>
</div> */}


 </>
    )
}

export default App;
