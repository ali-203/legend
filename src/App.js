import React from 'react';
import "./App.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AirplayIcon from '@material-ui/icons/Airplay';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import WebIcon from '@material-ui/icons/Web';
import PrintIcon from '@material-ui/icons/Print';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

function App() {
    return (
        <>
<div className="back_img">
    <div class="topnav">
  <h3 className="active" href="#home">Legend!</h3>
  <div class="topnav-right">
  <a href="https://www.w3schools.com/" target="blank">Portfoli</a>
  <a href= "https://www.britannica.com/" target="blank">News</a>
  <a href="https://www.w3schools.com/" target="blank">Services</a>
    <a href="https://www.azeemhussain.pk/" target="blank">Search</a>
    <a href="https://www.w3schools.com/" target="blank">About</a>
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
<FacebookIcon  fontSize="large" color="primary"/>
<AccessibilityIcon  fontSize="large" color="primary"/>
<AccountBalanceIcon fontSize="large" color="primary"/>
<AccountBoxIcon  fontSize="large" color="primary"/>
</div>
</div>
       
<div className="hedding">
<h2>We work to make web a beautifull  place</h2>
<h2> we craft beautifull design and convert then <br />into fully functional and user friendly webapp </h2>
</div>

<div className="image_div">
<div className="portfolio"> 
<AirplayIcon fontSize='large' color="primary"/>
<h1>Portfolio...</h1>
</div>
 <div className="all_img">
<div className="imag_one">
<img  src="img.png"/>
<h2>Computer</h2>
<p> I am a web develoment student in
 blocktech solution softwear house</p>

</div>
<div className="imah_two">
 <img className="images-one" src="ali.png"/>
 <h2>Computer</h2>
 <p> I am a web develoment student in
 blocktech solution softwear house</p>
</div>
<div className="images-three">
 <img src="ihh.png" />
 <h2>Computer</h2>
 <p> I am a web develoment student in
  blocktech solution softwear house</p>
</div>
</div> 
 <div className="all_img">
<div className="images-one">
<img src="lap.png"/>
<h2>Computer</h2>
<p> I am a web develoment student in
 blocktech solution softwear house</p>

</div>
<div className="imah-two">
<img src="nhh.png"/>
 <h2>Computer</h2>
 <p> I am a web develoment student in
 blocktech solution softwear house</p>
</div>
<div className="imag_three">
<img src="nic.png"/>
 <h2>Computer</h2>
 <p> I am a web develoment student in
  blocktech solution softwear house</p>
</div>
</div> 
</div>
<div className="servc">
<SettingsApplicationsIcon  fontSize='large'	/>
<h2>Services</h2>
</div>

<div className="service_main">
  <div className="div_one">
   <WebIcon fontSize="large" color="primary" /> 
  <h3>Web Design</h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
  
  </div>
  <div className="div_two">
   <PrintIcon fontSize="large" color="primary"/>
  <h3>Print Design</h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 

  </div>
  <div className="div_three">
  <AddShoppingCartIcon fontSize="large" color="primary" />
    <h3>Ecommerce</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
  <div className="div_four">
  <PhoneIphoneIcon fontSize="large" color="primary"/>
    <h3>Markiting</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>
<div className="footer_div">Bloc Tech Solution </div>


 </>
    )
}

export default App;
