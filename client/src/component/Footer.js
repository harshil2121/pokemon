import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';

    function Footer(){
        return(
            <div className="foot"  >
                <h5 style={{height:"60px",paddingTop: '14px', textAlign:"center"}}>© 2021 Harshil Patel &emsp;
                    <a target="_blank" href="https://web.whatsapp.com/"><WhatsAppIcon style={{color:"#25D366",cursor: 'pointer',fontSize:"25px"}} /></a>&ensp;
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100006985187494"><FacebookIcon style={{color:"#4267B2",cursor: 'pointer',fontSize:"25px"}}/></a>&ensp; 
                    <a target="_blank" href="https://www.instagram.com/harshil_patel2112/"><InstagramIcon style={{color:"#DD2A7B",cursor: 'pointer',fontSize:"25px"}} /></a>
                </h5>
            </div>
        )
    }
export default Footer;