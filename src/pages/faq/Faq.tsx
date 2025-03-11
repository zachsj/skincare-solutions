// App level imports
import './faq.css'
import { BaseLayout } from '../../components'
import { Helmet } from 'react-helmet';
import { TwitterShareButton } from 'next-share'
import { FacebookIcon, FacebookShareButton, TwitterIcon } from 'react-share'

export const Faq = (): JSX.Element => {
  const shareUrl = "skincaresolutions.netlify.app/faq"
  const shareUrl2 = "skincare Solutions - skincaresolutions.netlify.app/faq"
  return (
    <>
      <Helmet>
        <title>Skincare FAQ's | Sensitive Skin</title>
        <meta name="description" content="Answers to all your frequently asked sensitive skincare questions." />
        <meta name="keywords" content="Skincare FAQs" />
        <link rel="canonical" href="https://skincaresolutions.netlify.app/" />
      </Helmet>

      <BaseLayout>
        <main>
          <h2 className="h2Faq"> Skincare FAQ's</h2>
          <br></br>
          <br></br>

          <p className="textFaq">
            <p>Sensitive skin requires extra care and attention, but finding the right routine doesn’t have to be overwhelming.
              Whether you're dealing with irritation, dryness, or just need some guidance on products to suit your skin,
              we're here to help. On this page we've answered some of the most common questions about sensitive skin,
              so you can feel confident in your skincare choices. Explore these tips and tricks to better understand how
              to nourish and protect your skin!</p>
            <br></br>
            <p><b>1. What are the signs of sensitive skin?</b></p>
            <br></br>
            <p>Redness, itching, burning, tightness, or dryness are common indicators. Sensitive skin may react
              poorly to certain skincare ingredients, causing irritation.</p>
            <br></br>
            <p><b>2. What ingredients should I avoid with sensitive skin?</b></p>
            <br></br>
            <p>Harsh chemicals, fragrances, alcohols, and strong exfoliants. Ingredients like parabens, sulfates,
              artificial fragrances, and alcohol can aggravate sensitive skin. It's best to look for products that
              are labeled "fragrance-free", "hypoallergenic," or "for sensitive skin."</p>
            <br></br>
            <p><b>3. Can sensitive skin use retinol? What about exfoliants?</b></p>
            <br></br>
            <p>It’s possible, but with caution. Retinol and exfoliants can be irritating, so start with a lower
              concentration and use them sparingly. It’s crucial to listen to your skin and gradually introduce
              new products. Hydration and soothing ingredients can help counterbalance irritation.</p>
            <br></br>
            <p><b>4. Is sunscreen safe for sensitive skin?</b></p>
            <br></br>
            <p>Yes, but it depends on the formulation. Mineral sunscreens (containing zinc oxide or titanium dioxide)
              are typically gentler on sensitive skin than chemical sunscreens, which can cause irritation. Look for
              SPF products labeled for sensitive or reactive skin.</p>
            <br></br>
            <p><b>5. How can I soothe sensitive skin once it is irritated?</b></p>
            <br></br>
            <p>Moisturizing with a gentle, fragrance-free cream or balm can help. Ingredients like aloe vera, chamomile,
              or oatmeal are known to calm irritation. Cold compresses may also help soothe flare-ups.</p>
            <br></br>
            <p><b>6. Can diet affect sensitive skin?</b></p>
            <br></br>
            <p>Yes, certain foods can trigger inflammation or flare-ups for some people. Common culprits include
              spicy foods, dairy, alcohol, and high-sugar foods. A balanced, anti-inflammatory diet may benefit sensitive skin.</p>
            <br></br>
            <p><b>7. How often do I need to moisturize if I have sensitive skin?</b></p>
            <br></br>
            <p>It's important to moisturize regularly, ideally right after cleansing while your skin is still damp. Moisturizing helps
              lock in hydration and restore the skin’s barrier, which can reduce sensitivity.</p>
            <br></br>
            <p><b>8. Can sensitive skin be prone to acne?</b></p>
            <br></br>
            <p>Yes, it is possible. Sensitive skin can still break out, but acne treatments (like benzoyl peroxide or salicylic acid) may
              be too harsh and cause further irritation. It’s important to use gentle acne treatments designed for sensitive skin.</p>
            <br></br>
            <p><b>9. Can I use makeup with sensitive skin?</b></p>
            <br></br>
            <p>Yes, but make sure to choose makeup labeled for sensitive skin. Avoid products with heavy fragrances, preservatives, or
              harsh chemicals. Mineral makeup is often a good option for sensitive skin.</p>
            <br></br>
            <p><b>10.  How can I tell if a product is safe for sensitive skin?</b></p>
            <br></br>
            <p>Look for products labeled specifically for sensitive skin. They should be free from strong fragrances, alcohol, or aggressive exfoliants.
              Patch-testing a product on a small area of skin before full application can help detect any adverse reactions.</p>
            <br></br>
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
