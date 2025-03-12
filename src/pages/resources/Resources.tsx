// App level imports
import './resources.css'
import { BaseLayout } from '../../components'
import { Helmet } from 'react-helmet';
import { TwitterShareButton } from 'next-share'
import { FacebookIcon, FacebookShareButton, TwitterIcon } from 'react-share'

export const Resources = (): JSX.Element => {

  const shareUrl = "skincaresolutions.netlify.app/resources"
  const shareUrl2 = "skincare Solutions - skincaresolutions.netlify.app/resources"

  return (
    <>
      <Helmet>
        <title>Skincare Tips | Expert Skincare Resources</title>
        <meta name="description" content="Access trusted resources and expert recommendations for sensitive skincare. Discover valuable tips, guides, and links to help you achieve healthy, glowing skin." />
        <meta name="keywords" content="Skincare tips" />
        <link rel="canonical" href="https://skincaresolutions.netlify.app/resources" />
      </Helmet>

      <BaseLayout>
        <main>
          <p /><p />

          <h2 className="h2Resources">Skincare Resources</h2>

          <p /><p />
          <p className="text">
            I’ve included some links below that I've found helpful, hope you enjoy them! Be sure to bookmark this
            site for later use, and if there is a link you think should be featured on this page, please contact
            me via the "Email Us" link listed below</p>
          <p className="text"> <b>
            Brands Spotlight:</b></p>

          <ul style={{ listStyleType: "disc" }} className="listResources">

            <li>
              Ulta Beauty's Official Website
              <p>
                <a className="links" href="https://www.ulta.com/" target="_blank">
                  https://www.ulta.com/
                </a>
              </p>
            </li>
            <br></br>
            <li>
              Clinique partners with Icahn School of Medicine at Mount Sinai to establish the Mount Sinai-Clinique Healthy Skin Dermatology Center
              <p>
                <a className="links" href="https://www.eurekalert.org/news-releases/1033012" target="_blank">
                  https://www.eurekalert.org/news-releases/1033012
                </a>
              </p>
            </li>
            <br></br>
            <li>
              Clinique’s Philosophy
              <p>
                <a className="links" href="https://www.clinique.com/our-philosophy?_gl=1*1rm27ws*_up*MQ..&gclid=1b4d649e2b041f77b4f60311e4dcc062&gclsrc=3p.ds" target="_blank">
                  https://www.clinique.com/our-philosophy?_gl=1*1rm27ws*_up*MQ..&gclid=1b4d649e2b041f77b4f60311e4dcc062&gclsrc=3p.ds
                </a>
              </p>
            </li>
            <br></br>
          </ul>




          <p className="text"> <b>
            Advice from Dermatologists:</b>
          </p>
          <ul style={{ listStyleType: "disc" }} className="listResources">


            <li >
              7 Derm-Approved Tips to Make Life With Sensitive Skin a Little Bit Easier
              <p>
                <a className="links" href="https://www.self.com/story/sensitive-skin-care-tips" target="_blank">
                  https://www.self.com/story/sensitive-skin-care-tips
                </a>
              </p>


            </li>
            <br></br>
            <li>
              Dermatologist-recommended skin care routines and tips for different skin types
              <p>
                <a className="links" href="https://www.medicalnewstoday.com/articles/dermatologist-recommended-skin-care#summary" target="_blank">
                  https://www.medicalnewstoday.com/articles/dermatologist-recommended-skin-care#summary
                </a>
              </p>
            </li>
            <br></br>

            <li>
              Seven Dermatologists' Skin Care Tips That Can Relieve Symptoms of Atopic Dermatitis: A Guide for Patients
              <p>
                <a className="links" href="https://www.medpagetoday.com/reading-room/aad/atopic-dermatitis/110562" target="_blank">
                  https://www.medpagetoday.com/reading-room/aad/atopic-dermatitis/110562
                </a>
              </p>
            </li>
            <br></br>
            <li>
              How Hard Water Affects Your Hair and Skin—and What to Do About It
              <p>
                <a className="links" href="https://www.gq.com/story/hard-water-hair-skin" target="_blank">
                  https://www.gq.com/story/hard-water-hair-skin
                </a>
              </p>
            </li>
            <br></br>
            <li>
              20 Common Questions About Sensitive Skin
              <p>
                <a className="links" href="https://www.webmd.com/beauty/sensitive-skin-20-questions" target="_blank">
                  https://www.webmd.com/beauty/sensitive-skin-20-questions
                </a>
              </p>
            </li>
            <br></br>
            <li>
              Skin Care Tips for Men
              <p>
                <a className="links" href="https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-for-men" target="_blank">
                  https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-for-men
                </a>
              </p>
            </li>
            <br></br>
            <li>
              Your Winter Skin Survival Kit
              <p>
                <a className="links" href="https://www.aad.org/public/everyday-care/skin-care-basics/care/winter-skin-survival-kit" target="_blank">
                  https://www.aad.org/public/everyday-care/skin-care-basics/care/winter-skin-survival-kit
                </a>
              </p>
            </li>
            <br></br>
            <li>
              4 Skin Care Tips for your Hands
              <p>
                <a className="links" href="https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-tips-hands" target="_blank">
                  https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-tips-hands
                </a>
              </p>
            </li>
            <br></br>
          </ul>
          <p className="text"> <b>
            Recommended Sites:</b></p>

          <ul style={{ listStyleType: "disc" }} className="listResources">

            <li>
              The Polished Hippy
              <p>
                <a className="links" href="https://www.thepolishedhippy.com/" target="_blank">
                  https://www.thepolishedhippy.com/
                </a>
              </p>
            </li>
            <br></br>
            <li>
              Citrine's Blog - Lip gloss, lipstick and all that good stuff...
              <p>
                <a className="links" href="https://wieniawski.blogspot.com/" target="_blank">
                  https://wieniawski.blogspot.com/
                </a>
              </p>
            </li>
            <br></br>
            <li>
              Glamoury
              <p>
                <a className="links" href="https://glamoury.com/" target="_blank">
                  https://glamoury.com/
                </a>
              </p>
            </li>
            <br></br>
            <li>
              A Touch of Blusher - Makeup, Skincare, Fragrance, and a Bit of Fashion
              <p>
                <a className="links" href="https://www.atouchofblusher.com/" target="_blank">
                  https://www.atouchofblusher.com/
                </a>
              </p>
            </li>
            <br></br>
            <li>
              The Small Things Blog
              <p>
                <a className="links" href="https://www.thesmallthingsblog.com/" target="_blank">
                  https://www.thesmallthingsblog.com/
                </a>
              </p>
            </li>
            <br></br>
          </ul>
          <br></br>
          <br></br>
          <div>
            <img src="Skincare.jpg" className="pic" alt="skincare tips" />
          </div>



          <br></br>
          <br></br>

          <div style={{ marginLeft: "30px", textAlign: "left", marginTop: "50px" }}>
            <h4>Share this:</h4>
            <div style={{ display: "flex", justifyContent: "left", gap: "10px" }}>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl2}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
            </div>
          </div>

          <br></br>

          <p style={{ fontSize: "0.9em", lineHeight: "1.25" }}><i>I may earn a commission for purchases made through my affiliate links, at no cost to you. I appreciate you supporting my page.</i></p>
        </main>
      </BaseLayout>
    </>
  )
}
