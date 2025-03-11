// App level imports
import './blog.css'
import { BaseLayout } from '../../components'
import { Helmet } from 'react-helmet';
import { TwitterShareButton } from 'next-share'
import { FacebookIcon, FacebookShareButton, TwitterIcon } from 'react-share'


export const Blog = (): JSX.Element => {

  const shareUrl = "skincaresolutions.netlify.app/blog"
  const shareUrl2 = "skincare Solutions - skincaresolutions.netlify.app/blog"

  return (
    <>
      <Helmet>
        <title>Best Products for Sensitive Skin | Skincare Blog</title>
        <meta name="description" content="Dive into in-depth reviews and insights on the best skincare products for sensitive skin. Discover product recommendations for achieving healthy, glowing skin." />
        <meta name="keywords" content="Best Products for Sensitive Skin" />
        <link rel="canonical" href="https://skincaresolutions.netlify.app/blog" />
      </Helmet>

      <BaseLayout>
        <main>
          <p /><p />

          <h2 className="h2Blog">Ulta's Best Clinique Products<br></br> for Sensitive Skin<br></br></h2>

          <div>
            <img src="clinique.jpg" className="picBlog" alt="Best Products for Sensitive Skin" />
          </div>


          <p className="textBlog"><p> If you are looking for tips for glowing skin, you've come to the right place.
            This article highlights what I have found to be the best products for sensitive skin that are from my favorite brand,
            Clinique, a company known for their commitment to gentle skincare. I’ve been using some of these products for over 25 years
            and they are not only some of my personal favorites, but also consistent staples in my skincare routine. Their products are
            fragrance-free and allergy tested and are in my opinion the best skincare for sensitive skin on the market you can buy.
          </p>
            <p>
              Ulta is my favorite spot for purchasing Clinique products. Below, I’ve included links to some of my top picks from their site. They offer
              competitive pricing, frequent free gift promotions, and free shipping is easy to qualify for. And although I think
              you will love these products, if for some reason you don't their return process is quick and easy.
            </p>

            <p>When it comes to daytime skin protection, I am absolutely in love with
              &nbsp;<a className="linksBlog" href="https://www.ulta.com/p/dramatically-different-hydrating-jelly-moisturizer-xlsImpprod18711071?sku=2531783" target="_blank">
                Clinique’s Dramatically Different Hydrating Jelly.
              </a> I especially love that it has anti-pollution properties in it. I put it on daily before my spf coverage. I love how it
              makes my skin feel, and like that it’s an added layer of protection for my skin beyond typical SPF protection.
            </p>


            <p>Something I wasn’t always great about but I am trying to be better about is protecting my skin from the sun. After putting on
              the dramatically different hydrating jelly, I use the
              &nbsp;<a className="linksBlog" href="https://www.ulta.com/p/moisture-surge-broad-spectrum-spf-28-sheer-hydrator-moisturizer-pimprod2038272?sku=2604860" target="_blank">
                Moisture Surge Broad Spectrum SPF 28
              </a> over it. I love it, and I can safely
              say it protected my fair skin all summer long, even at the beach. I try to use it daily, no matter how much or how little time I’ll be outside.
            </p>

            <p>I’ve recently discovered <a className="linksBlog" href="https://www.ulta.com/p/moisture-surge-face-spray-thirsty-skin-relief-xlsImpprod10791823?sku=2260643" target="_blank">
              Moisture Surge Face Spray,</a> which is branded as “thirsty skin relief.” I have found it especially helpful in the dry winter weather, I spray it on everytime
              my skin feels a little tight and dehydrated. I use it most often throughout the day so I carry the
              &nbsp;<a className="linksBlog" href="https://www.ulta.com/p/travel-size-moisture-surge-face-spray-thirsty-skin-relief-pimprod2021154?sku=2574626" target="_blank">
                travel size version
              </a>
              &nbsp; around with me in my purse.</p>


            <p>For my nighttime routine, I went through a phase where I tried to use all sorts of retinol and anti-aging creams on
              my face at night because I figured that was what was best for my skin. But my sensitive skin quickly turned red, blotchy,
              and actually began to age me because I no longer had a smooth, youthful glow. So, now I keep it simple with my face creams.
              In the past I preferred
              &nbsp;<a className="linksBlog" href="https://www.ulta.com/p/moisture-surge-100h-auto-replenishing-hydrator-gel-moisturizer-with-hyaluronic-acid-pimprod2021615?sku=2576544" target="_blank">
                Clinique’s Moisture Surge
              </a>&nbsp;
              and
              &nbsp;<a className="linksBlog" href="https://www.ulta.com/p/moisture-surge-intense-72h-lipid-replenishing-hydrator-moisturizer-pimprod2018283?sku=2568219" target="_blank">
                Moisture Surge Intense
              </a>&nbsp;
              but lately I’ve been gravitating more toward the original classic,
              &nbsp;<a className="linksBlog" href="https://www.ulta.com/p/dramatically-different-moisturizing-lotion-face-xlsImpprod10791743?sku=2261902" target="_blank">
                Dramatically Different Lotion.
              </a>&nbsp;
              My skin seems happiest with it, and I like its simple, light smell. But, you can’t go wrong with either of these three face moisturizers.
            </p>

            <p>I consider the <a className="linksBlog" href="https://www.ulta.com/p/all-about-clean-liquid-facial-soap-mild-xlsImpprod10791729?sku=2153910" target="_blank">All About Clean Mild Liquid Face Soap</a>
              &nbsp; to be the best face wash I have ever used.
              I use this daily and have yet to have any issues with it, but I would be curious to try their <a className="linksBlog" href=
                "https://www.ulta.com/p/all-about-clean-liquid-facial-soap-extra-mild-xlsImpprod10791727?sku=2153909" target="_blank"> extra mild version </a> sometime in the near future. I’ll keep you posted on what I think about it once I do try it,
              but if you have particularly sensitive skin I’d probably jump right into that one if I were you.</p>

            <p>
              When it comes to eye makeup remover, nothing beats
              &nbsp;<a className="linksBlog" href="https://www.ulta.com/p/rinse-off-eye-makeup-remover-solvent-xlsImpprod10791751?sku=2153848" target="_blank">
                Clinique’s Rinse-off Eye Makeup Solvent.
              </a>&nbsp;
              My favorite part about it is how easily it cleans up any mascara or eyeliner that drifts out of place, and it is the only eye makeup remover
              out there that doesn’t irritate my eyes at all when I take off my eye makeup. Or should I say when I take off my eye makeup,
              I’m not always as great about that as I should be after a long day!
            </p>

            <p>
              An honorable mention goes to this product,
              &nbsp;<a className="linksBlog" href="https://www.clinique.ca/product/1673/4992/skincare/cleansersmakeup-removers/naturally-gentle-eye-makeup-remover" target="_blank">
                Clinique’s naturally gentle eye makeup remover.
              </a> As much as I love my classic blue eye
              makeup remover from Clinique, I find it struggles a bit with mascara, especially removing waterproof mascara. This gentle cream works
              well removing the toughest of mascaras. It’s a bit tricky to find it, the only place I’ve found it lately has been ordering directly
              from Clinique’s website.
            </p>

            <p>
              And one last bonus item, I haven’t been using it long enough to vouch for its effectiveness. But I can say with confidence that it
              does not irritate my skin and I like using it.
              &nbsp;<a className="linksBlog" href="https://www.ulta.com/p/even-better-clinical-radical-dark-spot-corrector-interrupter-serum-pimprod2013580?sku=2560142" target="_blank">
                Even better clinical radical dark spot corrector + interrupter serum.
              </a>
            </p>

          </p>

          <div style={{ marginLeft: "30px", textAlign: "left", marginTop: "70px" }}>
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