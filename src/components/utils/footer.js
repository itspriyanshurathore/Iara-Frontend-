"use client";

import { DivideCircle, Loader } from "lucide-react";
import { SubHeading, Text } from ".";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
    const SocialMediaIcons = [
        <svg key={1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
            <path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
        </svg>,
        <svg key={2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
            <path
                fill="#ffffff"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
        </svg>
        ,
        <svg key={3} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
            <path
                fill="#ffffff"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            />
        </svg>

    ]
    const FooterTree = [
        {
            heading: "Company",
            options: [
                {
                    title: "About Us",
                    link: "/about"
                },
                {
                    title: "Journals",
                    link: "/journals"
                },
                {
                    title: "Conference",
                    link: "/conference"
                },
                {
                    title: "Certificates",
                    link: "/certificates"
                },
            ]
        },
        {
            heading: "Legal",
            options: [
                {
                    title: "Privacy Policy",
                    link: "/privacy"
                },
                {
                    title: "Terms & Conditions",
                    link: "/terms"
                },
                {
                    title: "Return & Refund ",
                    link: "/returnpolicy"
                },
                {
                    title: "Shipping Policy",
                    link: "/shippingpolicy"
                },
            ]
        },
        {
            heading: "Help",
            options: [
                {
                    title: "Contact Us",
                    link: "/contact"
                },
                {
                    title: "FAQs",
                    link: "/faq"
                },
                {
                    title: "Submission Guidelines",
                    link: "/submissionguidelines"
                },
            ]
        },
    ]

    const [subscribeEmail, setSubscribeEmail] = useState();
    const [loading, setLoading] = useState(false);

    async function hanldeSuscribeFormSubmit(e) {
        e.preventDefault();
        console.log(subscribeEmail)
        setLoading(prev => true);
        try {
            const response = (await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/forms/subscribe/addsubscribe`,
                {
                    email: subscribeEmail
                }
            )).data;

            if (response.success) {
                toast.success(response.message);
            }
            else toast(response.message);
        } catch (err) {
            console.log(err);
            toast.error("Failed to Subscribe")
        }
        setLoading(prev => false)
    }

   return (
  <>
   

    <footer className="iara-footer">
    <Toaster />

       {/* =========================================
      FLOATING NEWSLETTER CARD
  ========================================= */}

  <section className="iara-newsletter">

    <div className="iara-newsletter-card">

      {/* Decorative background */}
      <div className="newsletter-orb newsletter-orb-one" />
      <div className="newsletter-orb newsletter-orb-two" />

      {/* Brand side */}
      <div className="newsletter-brand">

        <span className="newsletter-label">
          IARA PUBLICATION
        </span>

        <h2>
          Let&apos;s keep
          <br />
          <span>research moving.</span>
        </h2>

        <div className="newsletter-line">
          <span />
          <small>
            Stay connected with the research community
          </small>
        </div>

      </div>


      {/* Form side */}
      <div className="newsletter-form-area">

        <p>
          Subscribe for publishing updates, academic
          opportunities, new journals, and insights
          from the research community.
        </p>

        <form
          onSubmit={hanldeSuscribeFormSubmit}
          className="iara-subscribe-form"
        >

          <div className="iara-input-wrapper">

            <input
              type="email"
              required
              value={subscribeEmail || ""}
              onChange={(e) =>
                setSubscribeEmail(e.target.value)
              }
              placeholder="Enter your email address"
              name="email"
            />

          </div>

          {loading ? (

            <button
              type="button"
              disabled
              className="iara-subscribe-button loading"
            >
              <span className="iara-loader">
                <Loader size={15} />
              </span>

              Subscribing
            </button>

          ) : (

            <button
              type="submit"
              className="iara-subscribe-button"
            >
              Subscribe
              <span>↗</span>
            </button>

          )}

        </form>

        <small className="newsletter-note">
          We respect your inbox. No unnecessary emails.
        </small>

      </div>

    </div>

  </section>


  {/* =========================================
      MAIN FOOTER
  ========================================= */}

  <section className="iara-footer-content">

    <div className="iara-footer-inner">

      {/* BRAND */}

      <div className="iara-footer-brand">

        <Link
          href="/"
          title="IARA Publication"
          className="iara-logo-box"
        >

          <Image
            src="/images/iarapublication-logo-1.png"
            width={150}
            height={150}
            alt="IARA Publication"
          />

        </Link>


        <p className="iara-brand-description">
          Where research becomes
          <br />
          <em>reference.</em>
        </p>


        <div className="iara-socials">

          {SocialMediaIcons.map((icon, index) => (

            <div
              key={index}
              className="iara-social"
            >
              {icon}
            </div>

          ))}

        </div>

      </div>


      {/* LINKS */}

      <div className="iara-link-area">

        {FooterTree.map((branch, index) => (

          <div
            key={index}
            className="iara-link-column"
          >

            <div className="iara-link-heading">

              <span>
                0{index + 1}
              </span>

              <strong>
                {branch.heading}
              </strong>

            </div>


            <ul>

              {branch.options.map((option, optionIndex) => (

                <li key={optionIndex}>

                  <Link
                    href={option.link}
                    title={option.title}
                  >

                    <span>
                      {option.title}
                    </span>

                    <span className="iara-arrow">
                      ↗
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </div>


    {/* LARGE TYPOGRAPHY */}

    <div className="iara-footer-signature">

      <span>IARA</span>

      <div className="signature-line" />

      <small>
        INDIAN ACADEMICIANS & RESEARCHERS ASSOCIATION
      </small>

    </div>

  </section>


  {/* =========================================
      BOTTOM BAR
  ========================================= */}

  <section className="iara-footer-bottom">

    <p>
      © {new Date().getFullYear()} Indian Academicians
      and Researchers Association
    </p>

    <div>

      <Link href="/privacy">
        Privacy
      </Link>

      <Link href="/terms">
        Terms
      </Link>

      <Link href="/returnpolicy">
        Returns
      </Link>

    </div>

  </section>


      {/* =========================================
          CSS
      ========================================= */}

      <style jsx>{`

       .iara-footer {
  position: relative;
  margin-top: 100px;
  overflow: hidden;

  font-family: "Inter", sans-serif;

  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #ffffff 17%,
      #f7f9fc 31%,
      #eaf1f9 48%,
      #d5e2f1 62%,
      #8da9c9 76%,
      #315b8e 88%,
      #012d68 100%
    );
}


/* =========================================
   NEWSLETTER AREA
========================================= */

.iara-newsletter {
  position: relative;
  padding: 70px 8% 40px;
}


.iara-newsletter-card {
  position: relative;

  max-width: 1250px;
  min-height: 300px;

  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 70px;

  align-items: center;

  padding: 55px 65px;

  overflow: hidden;

  border-radius: 24px;

  background:
    linear-gradient(
      135deg,
      #012d68 0%,
      #063b80 55%,
      #164f91 100%
    );

  box-shadow:
    0 25px 60px rgba(1, 45, 104, 0.22);
}


/* Decorative gold glow */

.newsletter-orb {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;
}


.newsletter-orb-one {
  width: 380px;
  height: 380px;

  right: -170px;
  top: -220px;

  border: 1px solid rgba(247,194,63,0.18);
}


.newsletter-orb-two {
  width: 230px;
  height: 230px;

  left: -120px;
  bottom: -150px;

  background:
    radial-gradient(
      circle,
      rgba(247,194,63,0.12),
      transparent 70%
    );
}


/* =========================================
   NEWSLETTER BRAND
========================================= */

.newsletter-brand {
  position: relative;
  z-index: 2;
}


.newsletter-label {
  display: inline-block;

  margin-bottom: 18px;

  color: #f7c23f;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: .24em;
}


.newsletter-brand h2 {
  margin: 0;

  font-family: "Fraunces", serif;

  font-size: clamp(
    3rem,
    5vw,
    5rem
  );

  font-weight: 450;

  line-height: .95;

  letter-spacing: -.05em;

  color: #ffffff;
}


.newsletter-brand h2 span {
  color: #f7c23f;

  font-style: italic;

  font-weight: 400;
}


.newsletter-line {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 30px;
}


.newsletter-line span {
  width: 35px;
  height: 1px;

  background: #f7c23f;
}


.newsletter-line small {
  color: rgba(255,255,255,.55);

  font-size: 10px;

  letter-spacing: .03em;
}


/* =========================================
   NEWSLETTER FORM
========================================= */

.newsletter-form-area {
  position: relative;
  z-index: 2;
}


.newsletter-form-area > p {
  max-width: 500px;

  margin: 0 0 25px;

  color: rgba(255,255,255,.76);

  font-size: 13px;

  line-height: 1.8;
}


.iara-subscribe-form {
  display: flex;

  width: 100%;

  max-width: 560px;

  padding: 5px;

  border-radius: 10px;

  background: rgba(255,255,255,.10);

  border: 1px solid rgba(255,255,255,.18);

  backdrop-filter: blur(10px);
}


.iara-input-wrapper {
  flex: 1;
}


.iara-subscribe-form input {
  width: 100%;

  height: 48px;

  padding: 0 15px;

  border: none;
  outline: none;

  background: transparent;

  color: white;

  font-family: "Inter", sans-serif;

  font-size: 13px;
}


.iara-subscribe-form input::placeholder {
  color: rgba(255,255,255,.52);
}


.iara-subscribe-button {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  min-width: 125px;

  border: none;

  border-radius: 7px;

  background: #f7c23f;

  color: #012d68;

  font-size: 12px;

  font-weight: 700;

  cursor: pointer;

  transition: all .3s ease;
}


.iara-subscribe-button span {
  font-size: 17px;

  transition: transform .3s ease;
}


.iara-subscribe-button:hover {
  background: #ffffff;

  transform: translateY(-2px);
}


.iara-subscribe-button:hover span {
  transform: translate(3px,-3px);
}


.iara-subscribe-button.loading {
  background: #64748b;

  color: white;

  cursor: progress;
}


.iara-loader {
  display: flex;

  animation:
    iaraFooterSpin 1s linear infinite;
}


@keyframes iaraFooterSpin {
  to {
    transform: rotate(360deg);
  }
}


.newsletter-note {
  display: block;

  margin-top: 12px;

  color: rgba(255,255,255,.42);

  font-size: 9px;
}


/* =========================================
   MAIN FOOTER
========================================= */

.iara-footer-content {
  position: relative;

  padding: 55px 8% 35px;

  background: rgba(1,45,104,.94);

  color: white;
}


.iara-footer-inner {
  max-width: 1250px;

  margin: auto;

  display: grid;

  grid-template-columns:
    1fr 2fr;

  gap: 100px;
}


/* =========================================
   BRAND
========================================= */

.iara-footer-brand {
  position: relative;
}


.iara-logo-box {
  width: 82px;
  height: 82px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  background: #ffffff;

  border-radius: 14px;

  box-shadow:
    0 12px 30px rgba(0,0,0,.16);

  transition: all .3s ease;
}


.iara-logo-box img {
  width: 61px;
  height: 61px;

  object-fit: contain;
}


.iara-logo-box:hover {
  transform: translateY(-4px);

  box-shadow:
    0 18px 35px rgba(0,0,0,.22);
}


.iara-brand-description {
  margin: 25px 0 0;

  font-family: "Fraunces", serif;

  font-size: 20px;

  line-height: 1.35;

  color: white;
}


.iara-brand-description em {
  color: #f7c23f;

  font-style: italic;
}


/* =========================================
   SOCIAL
========================================= */

.iara-socials {
  display: flex;

  gap: 9px;

  margin-top: 27px;
}


.iara-social {
  width: 38px;
  height: 38px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border:
    1px solid rgba(255,255,255,.22);

  background:
    rgba(255,255,255,.06);

  transition: all .3s ease;
}


.iara-social svg {
  width: 15px;
  height: 15px;
}


.iara-social:hover {
  background: #d69b23;

  border-color: #d69b23;

  transform: translateY(-4px);
}


/* =========================================
   LINK AREA
========================================= */

.iara-link-area {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 50px;
}


.iara-link-heading {
  display: flex;

  align-items: center;

  gap: 10px;

  padding-bottom: 13px;

  margin-bottom: 20px;

  border-bottom:
    1px solid rgba(255,255,255,.15);
}


.iara-link-heading span {
  color: #f7c23f;

  font-family: "Fraunces", serif;

  font-size: 11px;
}


.iara-link-heading strong {
  color: white;

  font-size: 13px;

  font-weight: 700;
}


.iara-link-column ul {
  list-style: none;

  padding: 0;
  margin: 0;
}


.iara-link-column li {
  margin-bottom: 14px;
}


.iara-link-column a {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 10px;

  color:
    rgba(255,255,255,.60);

  font-size: 12px;

  text-decoration: none;

  transition: all .25s ease;
}


.iara-link-column a:hover {
  color: #f7c23f;

  padding-left: 5px;
}


.iara-arrow {
  color: #d69b23;

  opacity: 0;

  transform:
    translateX(-5px);

  transition: all .25s ease;
}


.iara-link-column a:hover .iara-arrow {
  opacity: 1;

  transform:
    translateX(0);
}


/* =========================================
   SIGNATURE
========================================= */

.iara-footer-signature {
  max-width: 1250px;

  margin: 65px auto 0;

  padding-top: 22px;

  display: flex;

  align-items: center;

  gap: 18px;

  border-top:
    1px solid rgba(255,255,255,.12);
}


.iara-footer-signature > span {
  font-family: "Fraunces", serif;

  font-size: 25px;

  color: #f7c23f;

  letter-spacing: -.03em;
}


.signature-line {
  flex: 1;

  height: 1px;

  background:
    rgba(255,255,255,.10);
}


.iara-footer-signature small {
  color:
    rgba(255,255,255,.38);

  font-size: 8px;

  letter-spacing: .2em;
}


/* =========================================
   BOTTOM
========================================= */

.iara-footer-bottom {
  position: relative;

  z-index: 5;

  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding: 18px 8%;

  background: #001f4a;

  color:
    rgba(255,255,255,.42);

  font-size: 10px;
}


.iara-footer-bottom p {
  margin: 0;
}


.iara-footer-bottom > div {
  display: flex;

  align-items: center;

  gap: 25px;
}


.iara-footer-bottom a {
  color:
    rgba(255,255,255,.55);

  text-decoration: none;

  transition: color .25s ease;
}


.iara-footer-bottom a:hover {
  color: #f7c23f;
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {

  .iara-newsletter-card {
    grid-template-columns: 1fr;

    gap: 35px;

    padding: 45px;
  }


  .iara-footer-inner {
    grid-template-columns: 1fr;

    gap: 55px;
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

  .iara-newsletter {
    padding:
      45px 18px 25px;
  }


  .iara-newsletter-card {
    padding: 35px 25px;

    border-radius: 18px;
  }


  .newsletter-brand h2 {
    font-size: 3.1rem;
  }


  .iara-subscribe-form {
    flex-direction: column;

    background: transparent;

    border: none;

    padding: 0;
  }


  .iara-input-wrapper {
    width: 100%;

    border:
      1px solid rgba(255,255,255,.20);

    border-radius: 8px;

    background:
      rgba(255,255,255,.08);
  }


  .iara-subscribe-button {
    width: 100%;

    height: 48px;
  }


  .iara-footer-content {
    padding:
      45px 22px 30px;
  }


  .iara-link-area {
    grid-template-columns:
      1fr 1fr;

    gap: 40px 25px;
  }


  .iara-footer-signature {
    margin-top: 50px;

    flex-wrap: wrap;
  }


  .signature-line {
    display: none;
  }


  .iara-footer-signature small {
    width: 100%;

    font-size: 7px;
  }


  .iara-footer-bottom {
    padding:
      20px 22px;

    flex-direction: column;

    align-items: flex-start;
  }

}


@media (max-width: 400px) {

  .iara-link-area {
    grid-template-columns: 1fr;
  }


  .newsletter-brand h2 {
    font-size: 2.7rem;
  }

}

      `}</style>

    </footer>
  </>
);
}