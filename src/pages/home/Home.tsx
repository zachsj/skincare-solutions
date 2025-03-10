import './home.css'
import BaseLayout from '../../components/layout/BaseLayout'
import { Helmet } from 'react-helmet';
import { TwitterShareButton } from 'next-share'
import { FacebookIcon, FacebookShareButton, TwitterIcon } from 'react-share'


export const Home = (): JSX.Element => {
  

  const shareUrl = "skincaresolutions.netlify.app"
  const shareUrl2 = "skincare Solutions - skincaresolutions.netlify.app"
  
  
  return (
<>
    <Helmet>
        <title>Skincare for Sensitive Skin | Ulta's Best Clinique Products</title>
        <meta name="description" content="Explore the best skincare for sensitive skin products and tips at Skincare Solutions, achieve effortless healthy, glowing skin." />
        <meta name="keywords" content="Skincare for Sensitive Skin" />
        <link rel="canonical" href="https://skincaresolutions.netlify.app/" />
    </Helmet>
    <div>
           <img style={{float: 'right'}} className="picLogo" src="ss5.jpg" alt="Skincare for Sensitive Skin" />
      </div>
    
    <BaseLayout>

    <p> </p>
    
      <h1 className="h1">Skincare Solutions</h1>

      <p>
      <i><b>Your Trusted Source for Sensitive Skin Treatment</b></i>
      </p>
    

      <p className="text"> 
      Finding the right skincare for sensitive skin can be a frustrating process with a lot of trial and error,
       and my aim is to simplify your search by sharing the best products with you that have worked well for me
        with my own sensitive skin. The first brand I 
        want to highlight is the brand I trust the most, Clinique. Their products are fragrance-free and allergy tested,
         making them a gentle, non-irritating option that your skin will love. 
          You can pick up these trusted products at Ulta Beauty, my go-to place for skincare favorites. 
        </p>
        
      <p className="text">
      Get started now by reading my blog
      &nbsp;<a className="links" href="https://skincaresolutions.netlify.app/blog" target="_blank">
 Ulta's Best Clinique Products for Sensitive Skin
      </a>, check out my Featured Products below, or explore the&nbsp;
      <a className="links" href="https://skincaresolutions.netlify.app/resources" target="_blank">
     Resources page
      </a>&nbsp;
       for a more in depth look into skincare. I look forward to being your trusted source for honest reviews, skincare tips, and exclusive deals.
      </p>
    

    <br></br>
    <h4>Featured Products: </h4>

    <div>
    <a className="links" href="https://www.ulta.com/p/moisture-surge-broad-spectrum-spf-28-sheer-hydrator-moisturizer-pimprod2038272?sku=2604860" target="_blank">
          <img  src="moisture_surge.jpg" className="pic" alt="Clinique Moisture Surge" />
          </a>
      </div> 
      

    <a className="links" href="https://www.ulta.com/p/moisture-surge-broad-spectrum-spf-28-sheer-hydrator-moisturizer-pimprod2038272?sku=2604860" target="_blank">
    Moisture Surge with SPF
    </a>

<p>
  <a className="links" href="https://www.ulta.com/p/moisture-surge-100h-auto-replenishing-hydrator-gel-moisturizer-with-hyaluronic-acid-pimprod2021615?sku=2576544" target="_blank">
  Moisture Surge without SPF
  </a>
  </p>

<br></br>
<br></br>

<div>
<a className="links" href="https://www.ulta.com/p/dramatically-different-moisturizing-lotion-face-xlsImpprod10791743?sku=2261902" target="_blank">
          <img src="dramatic_diff.jpg" className="pic" alt="Clinique Dramatically Different"/>
          </a>
      </div>

<a className="links" href="https://www.ulta.com/p/dramatically-different-moisturizing-lotion-face-xlsImpprod10791743?sku=2261902" target="_blank">
Clinique Dramatically Different
</a>
<br></br>
<br></br>

  <div style ={{marginLeft: "30px", textAlign:"left", marginTop: "50px"}}>
  <h4>Share this:</h4>
  <div style={{display: "flex", justifyContent: "left", gap:"10px"}}>
    <FacebookShareButton url={shareUrl}>
      <FacebookIcon size={40} round/>
    </FacebookShareButton>
    <TwitterShareButton url={shareUrl2}>
      <TwitterIcon size={40} round />
    </TwitterShareButton>
    </div>
  </div>
  
  <br></br>
  
  <p style ={{fontSize: "0.9em", lineHeight: "1.25"}}><i>I may earn a commission for purchases made through my affiliate links, at no cost to you. I appreciate you supporting my page.</i></p>
  
</BaseLayout>
</>
  )
}
