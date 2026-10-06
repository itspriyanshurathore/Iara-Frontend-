"use client";

import Image from "next/image";
import { NumberTicker } from "../magicui/number-ticker";
import { Heading, SubHeading, Text, Text2 } from "../utils";
import {
  AirplayIcon,
  ArrowUpRight,
  Sparkles,
  AudioWaveform,
  BookOpenText,
  Boxes,
  Code2,
  Presentation,
  BookMarked,
  Camera,
  BookOpen,
  ChartColumn,
  Copyright,
  DollarSign,
  Globe2,
  Lightbulb,
  Mails,
  Paperclip,
  Printer,
  UserRound,
  FileText,
  PenLine,
  CircleCheck,
  ArrowRight,
  Award,
  BadgeCheck,
  Palette,
  Layout,
  Image as ImageIcon,
  MoveUpRight,
  Table2,
  Share2,
  Video,
  Percent,
  ChevronRight,
} from "lucide-react";
import Head from "next/head";
import { sendError } from "next/dist/server/api-utils";
import Link from "next/link";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { JournalSlider } from "./journalsList";

export function HeroSection() {
  // const journalCards = [
  //   {
  //     kicker: "JOURNAL OF APPLIED SCIENCE",
  //     title: "Advanced Materials & Methods",
  //     vol: "Vol. 14 Â· Issue 2",
  //     bg: "#16213A",
  //     text: "#F7F3EA",
  //     transform: "rotate(-2deg) translate(-58px, 6px)",
  //   },
  //   {
  //     kicker: "REVIEW SERIES",
  //     title: "Frontiers in Data Systems",
  //     vol: "Vol. 09 Â· Issue 1",
  //     bg: "#2F6E5D",
  //     text: "#F7F3EA",
  //     transform: "rotate(4deg) translate(46px, -18px)",
  //   },
  //   {
  //     kicker: "CONFERENCE PROCEEDINGS",
  //     title: "Emerging Research Notes",
  //     vol: "Vol. 22",
  //     bg: "#EFE8D8",
  //     text: "#16213A",
  //     transform: "rotate(-8deg) translate(-10px, 60px)",
  //   },
  // ];
  const wrapRef = useRef(null);

  // useEffect(() => {
  //   const wrap = wrapRef.current;
  //   if (!wrap) return;
  //   const cards = wrap.querySelectorAll("[data-card]");

  //   function onMove(e) {
  //     const r = wrap.getBoundingClientRect();
  //     const px = (e.clientX - r.left) / r.width - 0.5;
  //     const py = (e.clientY - r.top) / r.height - 0.5;
  //     cards.forEach((card, i) => {
  //       const depth = (i + 1) * 6;
  //       card.style.transform = `${journalCards[i].transform} translate(${px * depth}px, ${py * depth}px)`;
  //     });
  //   }
  //   function onLeave() {
  //     cards.forEach((card, i) => {
  //       card.style.transform = journalCards[i].transform;
  //     });
  //   }
  //   wrap.addEventListener("mousemove", onMove);
  //   wrap.addEventListener("mouseleave", onLeave);
  //   return () => {
  //     wrap.removeEventListener("mousemove", onMove);
  //     wrap.removeEventListener("mouseleave", onLeave);
  //   };
  // });
  return (
    <>
    <section
  className="hero-section"
  style={{
    fontFamily: "Inter, sans-serif",
  }}
>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

    @keyframes rise {
      from {
        opacity: 0;
        transform: translateY(14px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fanIn {
      from {
        opacity: 0;
        transform: translateY(30px) scale(0.94);
      }
      to {
        opacity: 1;
      }
    }

    @keyframes floaty {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-9px);
      }
    }

    .rise {
      opacity: 0;
      animation: rise .7s cubic-bezier(.2,.8,.2,1) forwards;
    }

    .rise-line {
      display: block;
      transform: translateY(110%);
      animation: rise .85s cubic-bezier(.2,.8,.2,1) forwards;
    }

    .hero-main {
      position: relative;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      align-items: center;
      gap: 48px;
      background: #F7F3EA;
      padding: 85px 5%;
      overflow: hidden;
    }

    .hero-content {
      position: relative;
      min-width: 0;
    }

    .hero-heading {
      font-family: Fraunces, serif;
      font-weight: 500;
      font-size: clamp(2.5rem, 4.1vw, 3.6rem);
      line-height: 1.08;
      letter-spacing: -0.01em;
     margin: 12px 0 20px;
      max-width: 18ch;
      color: #012D68;
    }

    .hero-description {
      max-width: 42ch;
      font-size: 1.05rem;
      line-height: 1.6;
      color: #475569;
      margin: 0 0 30px;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 22px;
      margin-bottom: 42px;
    }

    .hero-stats {
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid rgba(1,45,104,0.14);
      padding-top: 22px;
    }

    .hero-trust {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid rgba(1,45,104,0.10);
    }

    .hero-researchers {
      display: flex;
      align-items: center;
      padding-left: 6px;
      flex-shrink: 0;
    }

    .hero-researcher {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #FFFFFF;
      box-shadow: 0 3px 10px rgba(1,45,104,0.14);
      position: relative;
      transition: all .3s ease;
      cursor: pointer;
    }

    .hero-researcher + .hero-researcher {
      margin-left: -9px;
    }

    .hero-image-wrap {
      min-width: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-image {
      width: 100%;
      height: auto;
      max-width: 500px;
      display: block;
    }

    /* Tablet */
    @media (max-width: 1024px) {
      .hero-main {
        grid-template-columns: 1fr 0.9fr;
        gap: 30px;
        padding: 55px 5%;
      }

      .hero-heading {
        font-size: clamp(2.3rem, 5vw, 3.2rem);
      }

      .hero-description {
        font-size: 1rem;
      }

      .hero-actions {
        margin-bottom: 34px;
      }

      .hero-trust {
        gap: 12px;
      }

      .hero-researcher {
        width: 44px;
        height: 44px;
      }
    }

   /* Mobile */
@media (max-width: 768px) {
  .hero-main {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 105px 6% 45px;
    justify-items: center;
    text-align: center;
  }

  .hero-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-heading {
    font-size: clamp(2.2rem, 9vw, 3rem);
    max-width: 12ch;
    margin: 0 auto 16px;
    text-align: center;
  }

  .hero-description {
    max-width: 100%;
    font-size: 0.98rem;
    line-height: 1.55;
    margin-bottom: 24px;
    text-align: center;
  }

  .hero-actions {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-bottom: 30px;
    text-align: center;
  }

  .hero-stats {
    gap: 14px 0;
    width: 100%;
    justify-content: center;
  }

  .hero-stats > div {
    margin-right: 18px !important;
    padding-right: 18px !important;
  }

  .hero-trust {
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 20px;
    padding-top: 16px;
  }

  .hero-researcher {
    width: 42px;
    height: 42px;
  }

  .hero-image-wrap {
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: center;
  }

  .hero-image {
    max-width: min(500px, 90vw);
    margin: 0 auto;
  }
}


/* Small Mobile */
@media (max-width: 480px) {
  .hero-main {
    gap: 26px;
    padding: 105px 5% 38px;
    justify-items: center;
    text-align: center;
  }

  .hero-heading {
    font-size: clamp(2rem, 10vw, 2.5rem);
    line-height: 1.08;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-description {
    font-size: 0.94rem;
    text-align: center;
  }

  .hero-actions {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 26px;
  }

  .hero-actions a:first-child {
    width: auto;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 0;
    width: 100%;
  }

  .hero-stats > div {
    margin-right: 0 !important;
    padding-right: 14px !important;
  }

  .hero-stats > div:nth-child(2) {
    border-right: none !important;
    padding-left: 14px !important;
  }

  .hero-stats > div:nth-child(4) {
    border-right: none !important;
    padding-left: 14px !important;
  }

  .hero-trust {
    align-items: center;
    justify-content: center;
  }

  .hero-researchers {
    padding-left: 2px;
  }

  .hero-researcher {
    width: 38px;
    height: 38px;
  }

  .hero-trust > div:last-child {
    min-width: 0;
    text-align: center;
  }

  .hero-trust > div:last-child > div {
    flex-wrap: wrap;
    justify-content: center;
  }
}


/* Very Small Screens */
@media (max-width: 360px) {
  .hero-main {
    padding: 105px 5% 38px;
    justify-items: center;
    text-align: center;
  }

  .hero-heading {
    font-size: 1.9rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .hero-description {
    font-size: 0.9rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .hero-researcher {
    width: 34px;
    height: 34px;
  }

  .hero-researcher + .hero-researcher {
    margin-left: -7px;
  }
}
  `}</style>

  <div className="hero-main">
    {/* Background Grid */}
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.5,
        pointerEvents: "none",
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(22,33,58,0.14) 40px)",
        WebkitMaskImage:
          "linear-gradient(180deg, transparent, rgba(0,0,0,.35) 40%, transparent 85%)",
        maskImage:
          "linear-gradient(180deg, transparent, rgba(0,0,0,.35) 40%, transparent 85%)",
      }}
    />

    {/* LEFT COLUMN */}
    <div className="hero-content">

      {/* Heading */}
     <h1 className="hero-heading">
  <span
    style={{
      display: "block",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }}
  >
    <span
      className="rise-line"
      style={{
        animationDelay: ".28s",
        display: "inline-block",
      }}
    >
      Where research
    </span>
  </span>

  <span
    style={{
      display: "block",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }}
  >
    <span
      className="rise-line"
      style={{
        animationDelay: ".4s",
        display: "inline-block",
      }}
    >
      becomes{" "}
      <em
        style={{
          fontStyle: "italic",
          fontWeight: 400,
          color: "#D69B23",
          position: "relative",
          display: "inline-block",
          textShadow: "0 3px 10px rgba(214,155,35,0.12)",
        }}
      >
        reference.
        <span
          style={{
            position: "absolute",
            left: "5%",
            right: "5%",
            bottom: -4,
            height: 2,
            borderRadius: 10,
            background: "#D69B23",
            opacity: 0.65,
          }}
        />
      </em>
    </span>
  </span>
</h1>

      {/* Description */}
      <p
        className="rise hero-description"
        style={{
          animationDelay: ".56s",
        }}
      >
        Editorial support,{" "}
        <span
          style={{
            color: "#012D68",
            fontWeight: 500,
          }}
        >
          rigorous indexing
        </span>
        , and global distribution for scholars who publish once and get
        cited for years.
      </p>

      {/* ACTIONS */}
      <div
        className="rise hero-actions"
        style={{
          animationDelay: ".68s",
        }}
      >
        {/* Primary Button */}
        <Link
          href="/journals"
          style={{
            display: "inline-block",
            cursor: "pointer",
            borderRadius: 2,
            border: "1px solid #012D68",
            background: "#012D68",
            color: "#FFFFFF",
            padding: "13px 24px",
            fontSize: "0.95rem",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            textDecoration: "none",
            transition: "all .25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#D69B23";
            e.currentTarget.style.borderColor = "#D69B23";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 6px 18px rgba(1, 45, 104, 0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#012D68";
            e.currentTarget.style.borderColor = "#012D68";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Explore Journals
        </Link>

        {/* Secondary Link */}
        <Link
          href="/associated-journals"
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
            background: "none",
            border: "none",
            color: "#012D68",
            fontWeight: 600,
            fontSize: "0.95rem",
            fontFamily: "Inter, sans-serif",
            padding: 0,
            textDecoration: "none",
            transition: "color .25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#D69B23";
            e.currentTarget.querySelector("span").style.background = "#D69B23";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#012D68";
            e.currentTarget.querySelector("span").style.background = "#012D68";
          }}
        >
          See indexing partners

          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -3,
              height: 1,
              background: "#012D68",
              transition: "background .25s ease",
            }}
          />
        </Link>
      </div>

      {/* STATS */}
      <div
        className="rise hero-stats"
        style={{
          animationDelay: ".8s",
        }}
      >
        {[
          ["15,000+", "Papers published"],
          ["12,000+", "Authors served"],
          ["8+", "Years in print"],
          ["3", "Editorial offices"],
        ].map(([num, label], i, arr) => (
          <div
            key={label}
            style={{
              marginRight: 28,
              paddingRight: 28,
              borderRight:
                i < arr.length - 1
                  ? "1px solid rgba(1,45,104,0.14)"
                  : "none",
              cursor: "default",
              transition: "all .3s ease",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Number */}
            <span
              style={{
                display: "block",
                fontFamily: "Fraunces, serif",
                fontWeight: 500,
                fontSize: "1.5rem",
                fontVariantNumeric: "tabular-nums",
                color: "#012D68",
                transition: "all .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#D69B23";
                e.currentTarget.style.textShadow =
                  "0 4px 12px rgba(214,155,35,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#012D68";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {num}
            </span>

            {/* Label */}
            <span
              style={{
                fontSize: "0.74rem",
                color: "#64748B",
                marginTop: 2,
                display: "block",
                transition: "color .3s ease",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* TRUST / PUBLICATION STRIP */}
      <div
        className="rise hero-trust"
        style={{
          animationDelay: ".95s",
        }}
      >
        {/* Author / Researcher Images */}
        <div className="hero-researchers">
          {[
            "/images/authors/author1.jpg",
            "/images/authors/author2.jpg",
            "/images/authors/author3.jpg",
            "/images/authors/author4.jpg",
            "/images/authors/author1.jpg",
            "/images/authors/author2.jpg",
          ].map((image, index) => (
            <div
              key={index}
              className="hero-researcher"
              style={{
                zIndex: 6 - index,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-4px) scale(1.08)";
                e.currentTarget.style.zIndex = "20";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0) scale(1)";
                e.currentTarget.style.zIndex = `${6 - index}`;
              }}
            >
              <Image
                src={image}
                alt="Researcher"
                fill
                sizes="42px"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {/* Small Gold Divider */}
        <div
          style={{
            width: 5,
            height: 5,
            minWidth: 5,
            borderRadius: "50%",
            background: "#D69B23",
          }}
        />

        {/* Text */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 6,
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#D69B23",
              }}
            >
              15,000+
            </span>

            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#012D68",
              }}
            >
              research papers
            </span>
          </div>

          <span
            style={{
              display: "block",
              marginTop: 4,
              fontSize: "0.72rem",
              color: "#64748B",
            }}
          >
            Published and trusted worldwide
          </span>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="hero-image-wrap">
      <Image
        className="hero-image"
        src="/images/blogs/bg-image.png"
        alt="IARA Journal"
        width={500}
        height={600}
      />
    </div>
  </div>
</section>
    </>
  );
}

export function Metrics() {
  const steps = [
    {
      number: "01",
      title: "Get Registered",
      description: "Create a free account and start your publishing journey.",
      icon: UserRound,
    },
    {
      number: "02",
      title: "Choose Format",
      description: "Select the publication format that fits your work.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Write or Upload",
      description: "Prepare your manuscript or upload your ready file.",
      icon: PenLine,
    },
    {
      number: "04",
      title: "Publish",
      description: "Review your work and submit it for publication.",
      icon: CircleCheck,
    },
  ];

  return (
    <section
      style={{
        background: "#F5F7FA",
        padding: "55px 5%",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div
        className="process-heading"
        style={{
          textAlign: "center",
          marginBottom: 38,
        }}
      >
        <span
          style={{
            display: "block",
            color: "#D69B23",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Simple Process
        </span>

        <h2
          style={{
            margin: 0,
            fontFamily: "Fraunces, serif",
            fontWeight: 500,
            fontSize: "clamp(2rem, 3vw, 2.7rem)",
            color: "#012D68",
          }}
        >
          How it <span style={{ color: "#D69B23" }}>works?</span>
        </h2>
      </div>

      {/* Process wrapper */}
      <div
        className="process-wrapper"
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Main connecting line */}
        <div
          className="process-line"
          style={{
            position: "absolute",
            top: 31,
            left: "11%",
            right: "11%",
            height: 2,
            background: "rgba(1,45,104,0.12)",
          }}
        />

        {/* Animated progress line */}
        <div
          className="process-progress"
          style={{
            position: "absolute",
            top: 31,
            left: "11%",
            width: "0%",
            height: 2,
            background: "linear-gradient(90deg, #012D68, #D69B23)",
            animation: "progressLine 2.8s ease-out forwards",
          }}
        />

        {/* Flowing dot */}
        <div
          className="flow-dot"
          style={{
            position: "absolute",
            top: 26,
            left: "11%",
            width: 11,
            height: 11,
            borderRadius: "50%",
            background: "#D69B23",
            boxShadow: "0 0 0 5px rgba(214,155,35,0.15)",
            animation: "flowDot 3s ease-in-out infinite",
            zIndex: 3,
          }}
        />

        {/* Steps */}
        <div
          className="process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            position: "relative",
            zIndex: 2,
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="process-step"
                style={{
                  textAlign: "center",
                  padding: "0 18px",
                  opacity: 0,
                  animation: `stepAppear .6s ease forwards ${
                    0.2 + index * 0.25
                  }s`,
                }}
              >
                {/* Icon circle */}
                <div
                  className="process-icon"
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto 18px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "2px solid #012D68",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    transition: "all .35s cubic-bezier(.2,.8,.2,1)",
                    boxShadow: "0 7px 22px rgba(1,45,104,0.10)",
                  }}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    color="#012D68"
                    className="step-icon"
                  />

                  {/* Number badge */}
                  <span
                    className="step-number"
                    style={{
                      position: "absolute",
                      top: -7,
                      right: -7,
                      width: 23,
                      height: 23,
                      borderRadius: "50%",
                      background: "#D69B23",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      transition: "all .3s ease",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="process-title"
                  style={{
                    margin: "0 0 7px",
                    color: "#012D68",
                    fontSize: "1rem",
                    fontWeight: 700,
                    transition: "all .3s ease",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    color: "#64748B",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes progressLine {
          from {
            width: 0%;
          }

          to {
            width: 78%;
          }
        }

        @keyframes flowDot {
          0% {
            left: 11%;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            left: 88%;
            opacity: 0;
          }
        }

        @keyframes stepAppear {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .process-step:hover .process-icon {
          transform: translateY(-7px) scale(1.05);
          background: #ffffff !important;
          border-color: #d69b23 !important;
          box-shadow:
            0 14px 30px rgba(1, 45, 104, 0.2),
            0 0 0 6px rgba(214, 155, 35, 0.08);
        }

        .process-step:hover .step-icon {
          color: #ffffff !important;
        }

        .process-step:hover .step-number {
          background: #f7c23f !important;
          transform: scale(1.15);
        }

        .process-step:hover .process-title {
          color: #d69b23 !important;
          transform: translateY(-2px);
        }

        @media (max-width: 750px) {
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 38px 10px;
          }

          .process-line,
          .process-progress,
          .flow-dot {
            display: none;
          }
        }

        @media (max-width: 500px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
}
export function HomeAboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] px-[10%] py-[5%] max-[800px]:px-5">
      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      {/* Blue glow */}
      <div
        className={`
          pointer-events-none absolute
          -left-40 top-0
          h-[420px] w-[420px]
          rounded-full
          bg-[#012D68]/[0.055]
          blur-[100px]
        `}
      />

      {/* Gold glow */}
      <div
        className={`
          pointer-events-none absolute
          -right-40 top-[25%]
          h-[420px] w-[420px]
          rounded-full
          bg-[#D69B23]/[0.09]
          blur-[100px]
        `}
      />

      {/* Small decorative dots */}
      <div className="pointer-events-none absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#D69B23]/50" />

      <div className="pointer-events-none absolute right-[12%] top-[12%] h-3 w-3 rounded-full bg-[#012D68]/20" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            ABOUT SECTION
        ===================================================== */}

        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* LEFT CONTENT */}
          <div className="relative">
            {/* Small Label */}
            <div
              className={`
                mb-5 inline-flex items-center gap-2
                rounded-full
                border border-[#D69B23]/30
                bg-white/80
                px-4 py-2
                shadow-[0_8px_25px_rgba(1,45,104,0.06)]
                backdrop-blur-sm
              `}
            >
              <Sparkles
                size={14}
                className="text-[#D69B23]"
                strokeWidth={1.8}
              />

              <span
                className={`
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#012D68]
                `}
              >
                About IARA Publication
              </span>
            </div>

            {/* Heading */}
            <h2
              className={`
                max-w-2xl
                text-[clamp(2.4rem,4vw,3.7rem)]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#012D68]
              `}
              style={{
                fontFamily: "Fraunces, serif",
              }}
            >
              Empowering research.
              <br />
              <em
                className="font-normal text-[#D69B23]"
                style={{
                  fontFamily: "Fraunces, serif",
                }}
              >
                Supporting researchers.
              </em>
            </h2>

            {/* Gold divider */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-px w-12 bg-[#D69B23]/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#D69B23]" />
              <span className="h-px w-5 bg-[#D69B23]/30" />
            </div>

            {/* Subheading */}
            <h3 className="mt-6 text-lg font-semibold text-[#012D68]">
              Let&apos;s know who we are.
            </h3>

            {/* Description */}
            <p
              className={`
                mt-4
                max-w-2xl
                text-[15px]
                leading-7
                text-[#64748B]
              `}
            >
              IARA Publication has been formed with the objective of encouraging
              researchers to publish their research work. We guide researchers
              throughout the publication process and provide professional
              support for publishing research in reputed journals.
            </p>

            <p
              className={`
                mt-3
                max-w-2xl
                text-[15px]
                leading-7
                text-[#64748B]
              `}
            >
              Researchers can also publish their work as book chapters with ISBN
              or transform their thesis and research projects into
              professionally published books, adding credibility and value to
              their academic journey.
            </p>

            {/* CTA */}
            <div className="mt-7 flex items-center gap-4 max-[500px]:flex-col max-[500px]:items-start">
              <Link
                href="/contact"
                className={`
                  about-primary-btn
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#012D68]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(1,45,104,0.18)]
                `}
              >
                Get Started Now
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/journals"
                className={`
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[#012D68]
                `}
              >
                Explore Journals
                <ChevronRight
                  size={17}
                  className={`
                    text-[#D69B23]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  `}
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              PENTAGON IMAGE
          ===================================================== */}

          <div className="relative flex justify-center min-h-[520px]">
            {/* =========================
      MAIN PENTAGON IMAGE
  ========================== */}

            {/* Gold glow behind main image */}
            <div className="pointer-events-none absolute top-8 left-1/2 h-[390px] w-[390px] -translate-x-1/2 rounded-full bg-[#D69B23]/10 blur-[70px]" />

            {/* Decorative pentagon ring */}
            <div
              className="pointer-events-none absolute top-4 left-1/2 h-[390px] w-[390px] -translate-x-1/2 rotate-[12deg] border border-[#D69B23]/25"
              style={{
                clipPath:
                  "polygon(50% 0%, 95% 38%, 78% 100%, 22% 100%, 5% 38%)",
              }}
            />

            {/* Main Pentagon */}
            <div
              className={`about-pentagon relative z-20 h-[390px] w-[340px] overflow-hidden
             bg-[#012D68]
           shadow-[0_30px_70px_rgba(1,45,104,0.20)]`}
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%)",
              }}
            >
              <Image
                src="/images/blogs/image.png"
                fill
                sizes="(max-width: 900px) 90vw, 340px"
                alt="IARA Publication"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#012D68]/50 via-transparent to-[#012D68]/5" />
            </div>

            {/* =========================
      SECOND LOWER IMAGE
  ========================== */}

            {/* Small gold glow */}
            <div className="pointer-events-none absolute bottom-4 right-[-45px] z-0 h-[190px] w-[190px] rounded-full bg-[#D69B23]/10 blur-[55px]" />

            {/* Second Image */}
            <div
              className={`about-second-image absolute bottom-[-45px] right-[-25px] z-10
             h-[225px] w-[165px] overflow-hidden
             bg-[#012D68]
             border-[3px] border-white
             shadow-[0_25px_55px_rgba(1,45,104,0.22)]
             transition-all duration-700 ease-out
             hover:-translate-y-3 hover:rotate-[-2deg]`}
              style={{
                borderRadius: "85px 85px 35px 35px",
              }}
            >
              <Image
                src="/images/blogs/image copy.png"
                fill
                sizes="180px"
                alt="IARA Research and Publication"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-110"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#012D68]/45 via-transparent to-[#D69B23]/10" />
            </div>
          </div>
        </div>

        {/* =====================================================
    IARA JOURNAL NETWORK
===================================================== */}

        <div className="journal-network relative mt-24 overflow-hidden rounded-[30px] bg-[#012D68] p-[1px] shadow-[0_25px_70px_rgba(1,45,104,0.18)] max-[700px]:mt-16">
          {/* Main background */}
          <div className="relative overflow-hidden rounded-[29px] bg-[#012D68] px-8 py-9 max-[700px]:px-5">
            {/* =================================================
        BACKGROUND EFFECTS
    ================================================= */}

            {/* Gold glow */}
            <div
              className={`
        pointer-events-none absolute
        -right-32 -top-40
        h-[420px] w-[420px]
        rounded-full
        bg-[#D69B23]/20
        blur-[100px]
      `}
            />

            {/* Blue/light glow */}
            <div
              className={`
        pointer-events-none absolute
        -bottom-40 left-[25%]
        h-[360px] w-[360px]
        rounded-full
        bg-[#F7C23F]/10
        blur-[100px]
      `}
            />

            {/* Decorative circle */}
            <div
              className={`
        pointer-events-none absolute
        right-[8%] top-[15%]
        h-32 w-32
        rounded-full
        border border-[#F7C23F]/10
      `}
            />

            {/* =================================================
        HEADER
    ================================================= */}

            <div className="relative mb-7 flex items-end justify-between gap-6 max-[750px]:flex-col max-[750px]:items-start">
              <div>
                {/* Small label */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-8 bg-[#F7C23F]" />

                  <span
                    className={`
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#F7C23F]
            `}
                  >
                    IARA Publication Network
                  </span>
                </div>

                {/* Main heading */}
                <h3
                  className={`
            max-w-2xl
            text-[clamp(1.8rem,3.2vw,2.7rem)]
            font-semibold
            leading-[1.12]
            tracking-[-0.03em]
            text-white
          `}
                  style={{
                    fontFamily: "Fraunces, serif",
                  }}
                >
                  Discover journals for your
                  <br />
                  <em
                    className="font-normal text-[#F7C23F]"
                    style={{
                      fontFamily: "Fraunces, serif",
                    }}
                  >
                    research journey.
                  </em>
                </h3>
                {/* Small description */}
                {/* <p className="max-w-sm text-sm leading-6 text-white/60 max-[750px]:max-w-xl">
                Explore IARA journals and discover trusted journals associated
                with our academic publication network.
              </p> */}
              </div>
            </div>

            {/* =================================================
        TWO JOURNAL CARDS
    ================================================= */}

            <div className="relative grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
              {/* =================================================
          IARA JOURNALS
      ================================================= */}

              <div className="journal-option journal-option-primary group">
                {/* Card glow */}
                <div className="journal-card-glow" />

                <div className="relative flex h-full flex-col justify-between p-6 max-[500px]:p-5">
                  {/* Top */}
                  <div>
                    <div className="mb-5 flex items-start justify-between">
                      {/* Icon */}
                      <div className="journal-option-icon">
                        <BookOpen size={22} strokeWidth={1.5} />
                      </div>

                      {/* Number */}
                      <span className="journal-number">01</span>
                    </div>

                    {/* Label */}
                    <span className="journal-card-label">IARA Journals</span>

                    {/* Heading */}
                    <h4
                      className={`
                mt-2
                text-[clamp(1.5rem,2.5vw,2rem)]
                font-semibold
                leading-tight
                text-[#012D68]
              `}
                      style={{
                        fontFamily: "Fraunces, serif",
                      }}
                    >
                      Explore IARA
                      <br />
                      <em className="font-normal text-[#D69B23]">Journals.</em>
                    </h4>

                    {/* Description */}
                    <p className="mt-3 max-w-md text-[13px] leading-6 text-[#64748B]">
                      Explore journals published through the IARA Publication
                      network and discover opportunities to share your research
                      with the academic community.
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-7">
                    <Link
                      href="/journals"
                      className={`
                journal-network-btn
                journal-network-btn-primary
                group/btn
              `}
                    >
                      <span>Explore IARA Journals</span>

                      <span className="journal-btn-icon">
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* =================================================
          ASSOCIATED JOURNALS
      ================================================= */}

              <div className="journal-option journal-option-secondary group">
                {/* Card glow */}
                <div className="journal-card-glow gold-glow" />

                <div className="relative flex h-full flex-col justify-between p-6 max-[500px]:p-5">
                  {/* Top */}
                  <div>
                    <div className="mb-5 flex items-start justify-between">
                      {/* Icon */}
                      <div className="journal-option-icon associated-icon">
                        <Sparkles size={22} strokeWidth={1.5} />
                      </div>

                      {/* Number */}
                      <span className="journal-number">02</span>
                    </div>

                    {/* Label */}
                    <span className="journal-card-label">
                      Associated Network
                    </span>

                    {/* Heading */}
                    <h4
                      className={`
                mt-2
                text-[clamp(1.5rem,2.5vw,2rem)]
                font-semibold
                leading-tight
                text-[#012D68]
              `}
                      style={{
                        fontFamily: "Fraunces, serif",
                      }}
                    >
                      Associated Journals
                      <br />
                      <em className="font-normal text-[#D69B23]">with IARA.</em>
                    </h4>

                    {/* Description */}
                    <p className="mt-3 max-w-md text-[13px] leading-6 text-[#64748B]">
                      Discover journals associated with IARA across diverse
                      academic disciplines and explore additional publication
                      opportunities.
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-7">
                    <Link
                      href="/associated-journals"
                      className={`
                journal-network-btn
                journal-network-btn-secondary
                group/btn
              `}
                    >
                      <span>View Associated Journals</span>

                      <span className="journal-btn-icon">
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
        BOTTOM MICRO TEXT
    ================================================= */}

            <div className="relative mt-6 flex items-center justify-center gap-2">
              <span className="h-px w-10 bg-white/10" />

              <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                Connecting research with publication
              </span>

              <span className="h-px w-10 bg-white/10" />
            </div>

            {/* Animated bottom line */}
            <div className="journal-network-line" />
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        .journal-network {
          transition:
            transform 0.45s ease,
            box-shadow 0.45s ease;
        }

        .journal-network:hover {
          transform: translateY(-3px);

          box-shadow: 0 30px 80px rgba(1, 45, 104, 0.22);
        }

        /* ==========================================
     JOURNAL CARDS
  ========================================== */

        .journal-option {
          position: relative;
          overflow: hidden;

          min-height: 300px;

          border-radius: 21px;

          background: #ffffff;

          border: 1px solid rgba(1, 45, 104, 0.08);

          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s ease,
            border-color 0.35s ease;
        }

        .journal-option:hover {
          transform: translateY(-6px);

          border-color: rgba(214, 155, 35, 0.35);

          box-shadow: 0 20px 45px rgba(1, 45, 104, 0.13);
        }

        .journal-option-primary {
          border-top: 3px solid #d69b23;
        }

        .journal-option-secondary {
          border-top: 3px solid rgba(1, 45, 104, 0.25);
        }

        /* ==========================================
     CARD GLOW
  ========================================== */

        .journal-card-glow {
          position: absolute;

          width: 180px;
          height: 180px;

          right: -80px;
          top: -80px;

          border-radius: 50%;

          background: rgba(1, 45, 104, 0.045);

          filter: blur(20px);

          transition:
            transform 0.6s ease,
            opacity 0.4s ease;
        }

        .gold-glow {
          background: rgba(214, 155, 35, 0.08);
        }

        .journal-option:hover .journal-card-glow {
          transform: scale(1.5);
        }

        /* ==========================================
     ICON
  ========================================== */

        .journal-option-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 48px;
          height: 48px;

          border-radius: 14px;

          background: #012d68;

          color: #f7c23f;

          box-shadow: 0 10px 25px rgba(1, 45, 104, 0.15);

          transition:
            transform 0.4s ease,
            background 0.35s ease;
        }

        .associated-icon {
          background: rgba(214, 155, 35, 0.12);
          color: #d69b23;

          box-shadow: none;
        }

        .journal-option:hover .journal-option-icon {
          transform: translateY(-4px) rotate(-3deg);
        }

        /* ==========================================
     CARD TEXT
  ========================================== */

        .journal-card-label {
          font-size: 10px;
          font-weight: 700;

          text-transform: uppercase;
          letter-spacing: 0.16em;

          color: #d69b23;
        }

        .journal-number {
          font-size: 11px;
          font-weight: 700;

          letter-spacing: 0.12em;

          color: #012d68;
          opacity: 0.25;
        }

        /* ==========================================
     BUTTONS
  ========================================== */

        .journal-network-btn {
          display: inline-flex;

          align-items: center;
          justify-content: space-between;

          gap: 12px;

          min-width: 210px;

          padding: 10px 11px 10px 16px;

          border-radius: 11px;

          font-size: 12px;
          font-weight: 700;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .journal-network-btn-primary {
          background: #012d68;
          color: white;

          box-shadow: 0 8px 20px rgba(1, 45, 104, 0.15);
        }

        .journal-network-btn-secondary {
          border: 1px solid rgba(1, 45, 104, 0.14);

          background: #f7f9fc;

          color: #012d68;
        }

        .journal-network-btn:hover {
          transform: translateY(-3px);
        }

        .journal-network-btn-primary:hover {
          background: #0a3c82;

          box-shadow: 0 12px 28px rgba(1, 45, 104, 0.22);
        }

        .journal-network-btn-secondary:hover {
          border-color: #d69b23;

          background: #fffaf0;

          box-shadow: 0 10px 25px rgba(214, 155, 35, 0.12);
        }

        .journal-btn-icon {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 28px;
          height: 28px;

          border-radius: 8px;

          background: #f7c23f;

          color: #012d68;

          transition: transform 0.3s ease;
        }

        .journal-network-btn:hover .journal-btn-icon {
          transform: translateX(3px) translateY(-2px);
        }

        /* ==========================================
     BOTTOM ANIMATION
  ========================================== */

        .journal-network-line {
          position: absolute;

          left: 0;
          bottom: 0;

          height: 2px;
          width: 28%;

          background: #f7c23f;

          animation: journalLineMove 5s ease-in-out infinite;
        }

        @keyframes journalLineMove {
          0%,
          100% {
            left: 0;
            width: 22%;
          }

          50% {
            left: 55%;
            width: 45%;
          }
        }

        /* ==========================================
     MOBILE
  ========================================== */

        @media (max-width: 700px) {
          .journal-option {
            min-height: 280px;
          }

          .journal-network-btn {
            width: 100%;
          }
        }
        .about-pentagon {
          animation: pentagonFloat 6s ease-in-out infinite;
        }

        @keyframes pentagonFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        .about-primary-btn {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .about-primary-btn:hover {
          transform: translateY(-3px);
          background: #0a3c82;
          box-shadow: 0 15px 35px rgba(1, 45, 104, 0.25);
        }

        .journal-banner {
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .journal-banner:hover {
          transform: translateY(-3px);
          box-shadow: 0 30px 70px rgba(1, 45, 104, 0.2);
        }

        .journal-btn-primary,
        .journal-btn-secondary {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .journal-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(247, 194, 63, 0.3);
        }

        .journal-btn-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(247, 194, 63, 0.45);
        }

        .journal-line {
          position: absolute;
          bottom: 0;
          left: 0;

          width: 35%;
          height: 2px;

          background: #f7c23f;

          animation: lineMove 4s ease-in-out infinite;
        }

        @keyframes lineMove {
          0%,
          100% {
            left: 0;
            width: 25%;
          }

          50% {
            left: 55%;
            width: 45%;
          }
        }

        @media (max-width: 900px) {
          .about-pentagon {
            margin-top: 10px;
          }
        }

        @media (max-width: 500px) {
          .about-pentagon {
            width: 280px;
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
}

export function HomeServices() {
  const Services = [
    {
      icon: BookOpenText,
      heading: "Book Publication",
      short:
        "Professional publishing support from manuscript to final publication.",
      details:
        "Complete book publication support including editing, formatting, ISBN assistance, cover design, printing, distribution, and promotional support.",
      image:
        "/images/logos/Books.jpeg",
    },
    {
      icon: Presentation,
      heading: "Conference Proceedings",
      short: "Professional conference proceeding preparation and publication.",
      details:
        "End-to-end support for conference proceedings including paper formatting, editorial preparation, compilation, design, and publication.",
      image:
        "/images/logos/Conference.jpeg",
    },
    {
      icon: FileText,
      heading: "Article Publication",
      short: "Publication support for academic and research articles.",
      details:
        "Professional assistance for preparing, formatting, and publishing research articles in suitable academic journals and publication platforms.",
      image:
        "/images/logos/Article.jpeg",
    },
    {
      icon: Lightbulb,
      heading: "Patent and IPR",
      short: "Support for protecting and managing innovative ideas.",
      details:
        "Guidance and professional support for patent-related documentation, preparation, and intellectual property publication requirements.",
        image: "/images/logos/painted.jpeg",
    },
    {
      icon: Code2,
      heading: "Web Development",
      short: "Modern websites designed for academics and organizations.",
      details:
        "Professional website development with modern interfaces, responsive design, content management, and customized functionality.",
      image:
        "/images/logos/Website.jpeg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] px-[10%] py-[5%] max-[800px]:px-5">
      {/* Soft blue glow - top left */}
      <div
        className={`
      pointer-events-none absolute
      -left-40 -top-40
      h-[420px] w-[420px]
      rounded-full
      bg-[#012D68]/[0.06]
      blur-[90px]
    `}
      />

      {/* Soft gold glow - top right */}
      <div
        className={`
      pointer-events-none absolute
      -right-32 -top-20
      h-[350px] w-[350px]
      rounded-full
      bg-[#D69B23]/[0.10]
      blur-[90px]
    `}
      />

      {/* Small gold decorative circle */}
      <div
        className={`
      pointer-events-none absolute
      right-[12%] top-[18%]
      h-3 w-3
      rounded-full
      bg-[#D69B23]
      opacity-50
      shadow-[0_0_25px_rgba(214,155,35,0.5)]
    `}
      />

      {/* Small blue decorative circle */}
      <div
        className={`
      pointer-events-none absolute
      left-[13%] top-[28%]
      h-2 w-2
      rounded-full
      bg-[#012D68]
      opacity-30
    `}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {/* Small Label */}
          <div
            className={`
          mb-5 inline-flex items-center gap-2
          rounded-full
          border border-[#D69B23]/30
          bg-white/80
          px-4 py-2
          shadow-[0_8px_25px_rgba(1,45,104,0.06)]
          backdrop-blur-sm
        `}
          >
            <Sparkles size={14} className="text-[#D69B23]" strokeWidth={1.8} />

            <span
              className={`
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#012D68]
          `}
            >
              What We Offer
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className={`
          font-serif
          text-[clamp(2.3rem,4vw,3.6rem)]
          font-semibold
          leading-[1.08]
          tracking-[-0.035em]
          text-[#012D68]
        `}
            style={{
              fontFamily: "Fraunces, serif",
            }}
          >
            Professional Services
            <br />
            <em
              className={`
            relative
            font-normal
            text-[#D69B23]
          `}
              style={{
                fontFamily: "Fraunces, serif",
              }}
            >
              for your ideas.
            </em>
          </h2>

          {/* Gold underline */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#D69B23]/40" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#D69B23]" />

            <span className="h-px w-10 bg-[#D69B23]/40" />
          </div>

          {/* Description */}
          <p
            className={`
          mx-auto mt-5
          max-w-2xl
          text-[15px]
          leading-7
          text-[#64748B]
        `}
          >
            Professional solutions designed to support your research,
            publication, innovation, and digital presence.
          </p>
        </div>

        {/* Services */}
        <div className="services-expand-row">
          {Services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-expand-card group"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              >
                {/* Dark image overlay */}
                <div className="service-overlay" />

                {/* Default content */}
                <div className="service-default-content">
                  <div className="service-number">0{index + 1}</div>

                  <div className="service-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <h3>{service.heading}</h3>

                  <ArrowUpRight
                    className="service-arrow"
                    size={21}
                    strokeWidth={1.7}
                  />
                </div>

                {/* Expanded content */}
                <div className="service-expanded-content">
                  <div className="service-expanded-icon">
                    <Icon size={26} strokeWidth={1.6} />
                  </div>

                  <span className="service-label">0{index + 1} / SERVICE</span>

                  <h3>{service.heading}</h3>

                  <p>{service.details}</p>

                <a
  href="https://wa.me/+918588011090?text=Hello%2C%20I%20am%20interested%20in%20your%20publication%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="service-learn-more"
>
  Chat with us on WhatsApp
  <ArrowUpRight size={17} strokeWidth={2} />
</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation + card styles */}
      <style jsx>{`
        .services-expand-row {
          display: flex;
          gap: 14px;
          width: 100%;
          min-height: 390px;
        }

        .service-expand-card {
           position: relative;
  flex: 1;
  min-width: 0;
  height: 330px;
  overflow: hidden;
  border-radius: 22px;

  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

          transition:
            flex 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.45s ease,
            box-shadow 0.45s ease;

          box-shadow: 0 10px 35px rgba(1, 45, 104, 0.08);
        }

        .service-expand-card:hover {
          flex: 2.8;
          transform: translateY(-6px);

          box-shadow: 0 25px 60px rgba(1, 45, 104, 0.18);
        }

        .service-overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            180deg,
            rgba(1, 45, 104, 0.08) 0%,
            rgba(1, 45, 104, 0.35) 45%,
            rgba(1, 45, 104, 0.96) 100%
          );

          transition: background 0.5s ease;
        }

        .service-expand-card:hover .service-overlay {
          background: linear-gradient(
            180deg,
            rgba(1, 45, 104, 0.18) 0%,
            rgba(1, 45, 104, 0.52) 45%,
            rgba(1, 45, 104, 0.97) 100%
          );
        }

        .service-default-content {
          position: absolute;
          inset: 0;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          padding: 28px;

          color: white;

          transition:
            opacity 0.25s ease,
            transform 0.45s ease;
        }

        .service-expand-card:hover .service-default-content {
          opacity: 0;
          transform: translateY(20px);
        }

        .service-number {
          position: absolute;
          top: 22px;
          right: 22px;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;

          color: rgba(255, 255, 255, 0.75);
        }

        .service-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 52px;
          height: 52px;
          margin-bottom: 18px;

          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 14px;

          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);

          color: #f7c23f;

          transition:
            transform 0.45s ease,
            background 0.35s ease;
        }

        .service-expand-card:hover .service-icon {
          transform: scale(1.05);
        }

        .service-default-content h3 {
          margin: 0;
          max-width: 220px;

          font-size: 20px;
          line-height: 1.25;
          font-weight: 650;

          letter-spacing: -0.02em;
        }

        .service-arrow {
          position: absolute;
          right: 25px;
          bottom: 28px;

          color: #f7c23f;

          transition: transform 0.35s ease;
        }

        .service-expand-card:hover .service-arrow {
          transform: translate(4px, -4px);
        }

        /* Expanded content */

        .service-expanded-content {
          position: absolute;
          inset: auto 0 0 0;

          padding: 32px;

          opacity: 0;
          transform: translateY(30px);

          color: white;

          transition:
            opacity 0.4s ease 0.12s,
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-expand-card:hover .service-expanded-content {
          opacity: 1;
          transform: translateY(0);
        }

        .service-expanded-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 50px;
          height: 50px;
          margin-bottom: 16px;

          border-radius: 14px;

          background: #f7c23f;
          color: #012d68;

          box-shadow: 0 10px 30px rgba(214, 155, 35, 0.25);
        }

        .service-label {
          display: block;

          margin-bottom: 7px;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;

          color: #f7c23f;
        }

        .service-expanded-content h3 {
          margin: 0 0 10px;

          font-size: 27px;
          line-height: 1.15;
          font-weight: 650;

          letter-spacing: -0.025em;
        }

        .service-expanded-content p {
          max-width: 500px;

          margin: 0;

          font-size: 14px;
          line-height: 1.7;

          color: rgba(255, 255, 255, 0.82);
        }

        .service-learn-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-top: 20px;
  padding: 10px 16px;

  border: 1px solid rgba(37, 211, 102, 0.5);
  border-radius: 10px;

  background: rgba(37, 211, 102, 0.12);

  color: #25d366;

  font-size: 13px;
  font-weight: 600;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.service-learn-more:hover {
  background: #25d366;
  color: #ffffff;
  transform: translateY(-2px);
}

        /* Tablet */

        @media (max-width: 900px) {
          .services-expand-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .service-expand-card {
            flex: none;
          }

          .service-expand-card:hover {
            flex: none;
          }
        }

        /* Mobile */

        @media (max-width: 600px) {
          .services-expand-row {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .service-expand-card {
            width: 100%;
            height: 95px;
            flex: none;
          }

          .service-expand-card:hover {
            height: 330px;
            transform: none;
          }

          .service-default-content {
            padding: 20px;
            flex-direction: row;
            align-items: center;
            gap: 15px;
          }

          .service-icon {
            width: 46px;
            height: 46px;
            min-width: 46px;
            margin: 0;
          }

          .service-default-content h3 {
            font-size: 16px;
          }

          .service-number {
            top: 12px;
            right: 15px;
          }

          .service-arrow {
            right: 20px;
            bottom: auto;
            top: 38px;
          }

          .service-expanded-content {
            padding: 24px;
          }

          .service-expanded-content h3 {
            font-size: 23px;
          }
        }
      `}</style>
    </section>
  );
}

export function HomeServiceCard({ service }) {
  return (
    <div className="card transition-all shadow-md px-[10%] py-[10%] rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-xl group">
      <div className="transition-all duration-[800ms] text-[var(--blue-color)] w-1/6 group-hover:rotate-y-180">
        {service.icon}
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <SubHeading
          text={service.heading}
          className={`text-[#494F55] font-medium group-hover:text-[var(--blue-color)] max-[1000px]:text-xl`}
        />
        <Text
          text={service.details}
          className={`text-[#696969] max-[1000px]:text-sm`}
        />
      </div>
    </div>
  );
}

export function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = (
          await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/blogs/fetchallblogs`,
          )
        ).data;

        if (response.success) {
          setBlogs(response.data.results.slice(0, 6));
        } else {
          toast(response.message);
        }
      } catch (err) {
        console.log(err);
        toast("Failed to load blogs");
      }
    })();
  }, []);

  return (
    <section className="blogs-section">
      <Toaster />

      {/* Decorative background */}
      <div className="blogs-bg-circle blogs-bg-circle-1" />
      <div className="blogs-bg-circle blogs-bg-circle-2" />

      <div className="blogs-container">

        {/* ================= HEADER ================= */}
        <div className="blogs-header">

          <div className="blogs-eyebrow">
            <span className="eyebrow-line" />
            INSIGHTS &amp; PERSPECTIVES
          </div>

          <div className="blogs-title-row">

            <div>
              <h2>
                Ideas worth
                <span> reading.</span>
              </h2>

              <p>
                Explore perspectives, insights, and stories from the world
                of research, publishing, and academia.
              </p>
            </div>

            <Link href="/blogs" className="blogs-view-all">
              <span>View all articles</span>

              <span className="blogs-view-arrow">
                →
              </span>
            </Link>

          </div>
        </div>


        {/* ================= FEATURED BLOG ================= */}

        {blogs.length > 0 && (
          <div className="featured-blog">

            {/* Image */}
            <div className="featured-blog-image">

              <Image
                src={
                  blogs[0]?.image ||
                  "/images/blogs/office.jpg"
                }
                alt={blogs[0]?.title || "IARA Blog"}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className="featured-image"
              />

              <div className="featured-image-overlay" />

              <div className="featured-badge">
                FEATURED
              </div>

            </div>


            {/* Content */}
            <div className="featured-blog-content">

              <div className="featured-meta">
                <span className="meta-dot" />
                Featured article
              </div>

              <h3>
                {blogs[0]?.title}
              </h3>

              <p>
                {blogs[0]?.description ||
                  blogs[0]?.short_description ||
                  "Discover insights and perspectives from the academic and research community."}
              </p>

              <Link
                href={`/blogs/${blogs[0]?.slug || blogs[0]?._id}`}
                className="featured-read"
              >
                Read article
                <span>→</span>
              </Link>

            </div>

          </div>
        )}


        {/* ================= BLOG GRID ================= */}

        <div className="blogs-grid">

          {blogs.slice(1, 6).map((blog, index) => (

            <article
              key={blog?._id || index}
              className="premium-blog-card"
            >

              {/* Image */}
              <Link
                href={`/blogs/${blog?.slug || blog?._id}`}
                className="blog-card-image"
              >

                <Image
                  src={
                    blog?.image ||
                    "/images/blogs/office.jpg"
                  }
                  alt={blog?.title || "Blog"}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="blog-image"
                />

                <div className="blog-image-overlay" />

                <span className="blog-read">
                  Read →
                </span>

              </Link>


              {/* Content */}
              <div className="blog-card-content">

                <div className="blog-card-meta">
                  <span />
                  IARA INSIGHTS
                </div>

                <Link
                  href={`/blogs/${blog?.slug || blog?._id}`}
                >
                  <h3>
                    {blog?.title}
                  </h3>
                </Link>

                <p>
                  {blog?.description ||
                    blog?.short_description ||
                    "Insights and perspectives from the academic community."}
                </p>

                <Link
                  href={`/blogs/${blog?.slug || blog?._id}`}
                  className="blog-card-link"
                >
                  Explore article
                  <span>↗</span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* ================= CSS ================= */}

      <style jsx>{`

        /* ================= SECTION ================= */

        .blogs-section {
          position: relative;
          overflow: hidden;
          padding: 100px 8% 110px;
          background: #f7f9fc;
        }


        /* ================= BACKGROUND ================= */

        .blogs-bg-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .blogs-bg-circle-1 {
          width: 420px;
          height: 420px;
          right: -180px;
          top: 30px;
          background: rgba(1, 45, 104, 0.035);
        }

        .blogs-bg-circle-2 {
          width: 300px;
          height: 300px;
          left: -180px;
          bottom: 50px;
          background: rgba(214, 155, 35, 0.045);
        }


        /* ================= CONTAINER ================= */

        .blogs-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: auto;
        }


        /* ================= HEADER ================= */

        .blogs-header {
          margin-bottom: 45px;
        }

        .blogs-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 18px;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;

          color: #d69b23;
        }

        .eyebrow-line {
          width: 34px;
          height: 1px;
          background: #d69b23;
        }


        .blogs-title-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }


        .blogs-title-row h2 {
          margin: 0;

          font-family: "Fraunces", serif;

          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 500;
          line-height: 0.98;

          letter-spacing: -0.035em;

          color: #012d68;
        }

        .blogs-title-row h2 span {
          font-style: italic;
          color: #d69b23;
        }


        .blogs-title-row p {
          max-width: 550px;

          margin: 20px 0 0;

          font-size: 15px;
          line-height: 1.7;

          color: #64748b;
        }


        /* ================= VIEW ALL ================= */

        .blogs-view-all {
          display: inline-flex;
          align-items: center;
          gap: 12px;

          padding-bottom: 7px;

          border-bottom: 1px solid rgba(1, 45, 104, 0.3);

          color: #012d68;

          font-size: 13px;
          font-weight: 700;

          text-decoration: none;

          transition: all 0.3s ease;
        }

        .blogs-view-arrow {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 30px;
          height: 30px;

          border-radius: 50%;

          background: #012d68;
          color: white;

          transition: all 0.3s ease;
        }

        .blogs-view-all:hover {
          color: #d69b23;
          border-color: #d69b23;
        }

        .blogs-view-all:hover .blogs-view-arrow {
          background: #d69b23;
          transform: translateX(4px);
        }


        /* ================= FEATURED ================= */

        .featured-blog {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;

          min-height: 430px;

          margin-bottom: 45px;

          overflow: hidden;

          border-radius: 26px;

          background: #012d68;

          box-shadow:
            0 25px 70px rgba(1, 45, 104, 0.12);
        }


        .featured-blog-image {
          position: relative;
          min-height: 430px;
          overflow: hidden;
        }

        .featured-image {
          object-fit: cover;

          transition:
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .featured-blog:hover .featured-image {
          transform: scale(1.045);
        }


        .featured-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(1,45,104,0) 50%,
              rgba(1,45,104,0.35) 100%
            );
        }


        .featured-badge {
          position: absolute;
          top: 25px;
          left: 25px;

          padding: 7px 12px;

          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 50px;

          background: rgba(1,45,104,0.72);

          backdrop-filter: blur(10px);

          color: #f7c23f;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }


        /* ================= FEATURED CONTENT ================= */

        .featured-blog-content {
          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 55px;
        }


        .featured-meta {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-bottom: 20px;

          color: #f7c23f;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .meta-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #f7c23f;
        }


        .featured-blog-content h3 {
          margin: 0 0 18px;

          font-family: "Fraunces", serif;

          font-size: clamp(1.8rem, 3vw, 2.7rem);
          font-weight: 500;

          line-height: 1.1;

          letter-spacing: -0.025em;

          color: white;
        }


        .featured-blog-content p {
          margin: 0;

          max-width: 470px;

          font-size: 14px;
          line-height: 1.75;

          color: rgba(255,255,255,0.72);
        }


        .featured-read {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          width: fit-content;

          margin-top: 28px;
          padding-bottom: 7px;

          border-bottom: 1px solid rgba(247,194,63,0.5);

          color: #f7c23f;

          font-size: 13px;
          font-weight: 700;

          text-decoration: none;

          transition: all 0.3s ease;
        }

        .featured-read span {
          transition: transform 0.3s ease;
        }

        .featured-read:hover {
          border-color: #f7c23f;
        }

        .featured-read:hover span {
          transform: translateX(5px);
        }


        /* ================= BLOG GRID ================= */

        .blogs-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 24px;
        }


        /* ================= BLOG CARD ================= */

        .premium-blog-card {
          overflow: hidden;

          border: 1px solid rgba(1,45,104,0.09);
          border-radius: 20px;

          background: white;

          box-shadow:
            0 8px 30px rgba(1,45,104,0.045);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }


        .premium-blog-card:hover {
          transform: translateY(-8px);

          border-color: rgba(214,155,35,0.4);

          box-shadow:
            0 22px 50px rgba(1,45,104,0.12);
        }


        /* ================= CARD IMAGE ================= */

        .blog-card-image {
          position: relative;

          display: block;

          height: 220px;

          overflow: hidden;
        }


        .blog-image {
          object-fit: cover;

          transition:
            transform 0.65s
            cubic-bezier(0.22,1,0.36,1);
        }

        .premium-blog-card:hover .blog-image {
          transform: scale(1.06);
        }


        .blog-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(1,45,104,0) 45%,
              rgba(1,45,104,0.5) 100%
            );

          opacity: 0.7;

          transition: opacity 0.4s ease;
        }

        .premium-blog-card:hover .blog-image-overlay {
          opacity: 0.9;
        }


        .blog-read {
          position: absolute;

          right: 18px;
          bottom: 16px;

          padding: 7px 11px;

          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50px;

          background: rgba(1,45,104,0.7);

          backdrop-filter: blur(8px);

          color: white;

          font-size: 10px;
          font-weight: 700;

          opacity: 0;
          transform: translateY(8px);

          transition: all 0.35s ease;
        }

        .premium-blog-card:hover .blog-read {
          opacity: 1;
          transform: translateY(0);
        }


        /* ================= CARD CONTENT ================= */

        .blog-card-content {
          padding: 24px 24px 25px;
        }


        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 12px;

          color: #d69b23;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.15em;
        }

        .blog-card-meta span {
          width: 18px;
          height: 1px;

          background: #d69b23;
        }


        .blog-card-content h3 {
          margin: 0;

          font-family: "Fraunces", serif;

          font-size: 21px;
          font-weight: 550;

          line-height: 1.2;

          letter-spacing: -0.015em;

          color: #012d68;

          transition: color 0.3s ease;
        }

        .premium-blog-card:hover h3 {
          color: #d69b23;
        }


        .blog-card-content p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          overflow: hidden;

          margin: 12px 0 18px;

          font-size: 13px;
          line-height: 1.65;

          color: #64748b;
        }


        .blog-card-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          color: #012d68;

          font-size: 12px;
          font-weight: 700;

          text-decoration: none;

          transition: all 0.3s ease;
        }

        .blog-card-link span {
          font-size: 15px;

          transition: transform 0.3s ease;
        }

        .blog-card-link:hover {
          color: #d69b23;
        }

        .blog-card-link:hover span {
          transform: translate(3px, -3px);
        }


        /* ================= TABLET ================= */

        @media (max-width: 1000px) {

          .blogs-section {
            padding: 80px 5%;
          }

          .featured-blog {
            grid-template-columns: 1fr 1fr;
          }

          .featured-blog-content {
            padding: 38px;
          }

          .blogs-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 650px) {

          .blogs-section {
            padding: 65px 18px 75px;
          }

          .blogs-title-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 25px;
          }

          .blogs-title-row h2 {
            font-size: 3rem;
          }

          .blogs-view-all {
            align-self: flex-start;
          }


          .featured-blog {
            display: block;
            border-radius: 20px;
          }

          .featured-blog-image {
            min-height: 250px;
          }

          .featured-blog-content {
            padding: 30px 25px 35px;
          }


          .blogs-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }


          .blog-card-image {
            height: 210px;
          }

        }

      `}</style>
    </section>
  );
}

export function HomeBlogCard({ blog }) {
  return (
    <>
      <Link href={`/blogs/blog/${blog.id}`} className="group">
        <Image
          // alt={blog.imageAlt}
          width={0}
          height={0}
          sizes="100vw"
          alt={blog.title}
          src={process.env.NEXT_PUBLIC_BACKEND_DOMAIN + blog.cover}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
        />
        <div className="flex justify-between">
          <p className="mt-4 text-sm text-[var(--blue-color)]">
            {blog.category}
          </p>
          <p className="mt-4 text-sm text-[var(--blue-color)]">
            {new Date(blog.created_at).toDateString()}
          </p>
        </div>
        <h3 className="mt-4 text-lg text-gray-700 capitalize">{blog.title}</h3>
        <p className="mt-3 text-sm font-medium text-gray-900 truncate">
          {blog.description}
        </p>
      </Link>
    </>
  );
}

export function WhatWeProvide() {
  const items = [
    {
      heading: "End-to-End Publishing Support",
      icon: <Paperclip />,
      description:
        "From ISBN assignment to final printing, we handle every step with precision and professionalism.",
    },
    {
      heading: "Global Reach & Online Presence",
      icon: <Globe2 />,
      description:
        "Your book gets featured on our platform and promoted across social media for maximum visibility.",
    },
    {
      heading: "High Royalty & Transparent Process",
      icon: <DollarSign />,
      description:
        "Enjoy 60% royalty on book sales with complete transparency and timely payouts.",
    },
    {
      heading: "Professional Design & Formatting",
      icon: <Mails />,
      description:
        "Get a stunning cover, well-aligned pages, and polished content to make your book stand out.",
    },
  ];

  return (
    <section className="why-iara-section">
      <div className="why-iara-bg-circle why-iara-bg-circle-1" />
      <div className="why-iara-bg-circle why-iara-bg-circle-2" />

      <div className="why-iara-container">

        {/* ================= LEFT SIDE ================= */}

        <div className="why-iara-intro">

          <div className="why-iara-eyebrow">
            <span />
            WHY IARA
          </div>

          <h2>
            More than
            <br />
            <em>publishing.</em>
          </h2>

          <p className="why-iara-description">
            We bring together editorial expertise, professional design,
            publishing support, and global visibility to help your work
            become something readers remember.
          </p>

          {/* Highlight Box */}

          <div className="why-iara-highlight">

            <div className="highlight-icon">
              <Lightbulb size={22} />
            </div>

            <div>
              <span className="highlight-label">
                OUR PROMISE
              </span>

              <h3>
                Your research.
                <br />
                <span>Our expertise.</span>
              </h3>
            </div>

          </div>

          {/* Small Bottom Statement */}

          <div className="why-iara-bottom">
            <span className="bottom-line" />

            <span>
              Built for authors, researchers &amp; scholars
            </span>
          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="why-iara-grid">

          {items.map((item, index) => (

            <div
              key={index}
              className="why-iara-card"
            >

              {/* Number */}

              <span className="why-iara-number">
                0{index + 1}
              </span>


              {/* Icon */}

              <div className="why-iara-icon">
                {item.icon}
              </div>


              {/* Content */}

              <div className="why-iara-card-content">

                <h3>
                  {item.heading}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>


              {/* Bottom Arrow */}

              <div className="why-iara-arrow">
                ↗
              </div>


              {/* Hover Line */}

              <div className="why-iara-card-line" />

            </div>

          ))}

        </div>

      </div>


      {/* ================= CSS ================= */}

      <style jsx>{`

        /* =========================================
           SECTION
        ========================================= */

        .why-iara-section {
          position: relative;
          overflow: hidden;

          padding: 110px 8%;

          background: #f7f9fc;
        }


        .why-iara-container {
          position: relative;
          z-index: 2;

          max-width: 1280px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            0.78fr
            1.22fr;

          gap: 90px;

          align-items: center;
        }


        /* =========================================
           BACKGROUND DECORATION
        ========================================= */

        .why-iara-bg-circle {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }


        .why-iara-bg-circle-1 {
          width: 500px;
          height: 500px;

          right: -260px;
          top: -160px;

          background:
            rgba(1, 45, 104, 0.035);
        }


        .why-iara-bg-circle-2 {
          width: 350px;
          height: 350px;

          left: -230px;
          bottom: -180px;

          background:
            rgba(214, 155, 35, 0.045);
        }


        /* =========================================
           LEFT INTRO
        ========================================= */

        .why-iara-intro {
          position: relative;
        }


        .why-iara-eyebrow {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 20px;

          color: #d69b23;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }


        .why-iara-eyebrow span {
          display: block;

          width: 34px;
          height: 1px;

          background: #d69b23;
        }


        .why-iara-intro h2 {
          margin: 0;

          font-family: "Fraunces", serif;

          font-size:
            clamp(3rem, 5vw, 4.7rem);

          font-weight: 500;

          line-height: 0.98;

          letter-spacing: -0.04em;

          color: #012d68;
        }


        .why-iara-intro h2 em {
          font-style: italic;

          font-weight: 400;

          color: #d69b23;
        }


        .why-iara-description {
          max-width: 480px;

          margin: 28px 0 0;

          font-family: "Inter", sans-serif;

          font-size: 14px;

          line-height: 1.8;

          color: #64748b;
        }


        /* =========================================
           PROMISE BOX
        ========================================= */

        .why-iara-highlight {
          position: relative;

          display: flex;

          align-items: center;

          gap: 18px;

          margin-top: 38px;

          padding: 22px 24px;

          max-width: 430px;

          overflow: hidden;

          border-radius: 18px;

          background: #012d68;

          box-shadow:
            0 18px 45px
            rgba(1, 45, 104, 0.13);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }


        .why-iara-highlight:hover {
          transform: translateY(-5px);

          box-shadow:
            0 25px 55px
            rgba(1, 45, 104, 0.18);
        }


        .why-iara-highlight::after {
          content: "";

          position: absolute;

          width: 150px;
          height: 150px;

          right: -70px;
          top: -80px;

          border-radius: 50%;

          border: 1px solid
            rgba(247, 194, 63, 0.22);
        }


        .highlight-icon {
          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          width: 48px;
          height: 48px;

          border-radius: 14px;

          background: #f7c23f;

          color: #012d68;

          box-shadow:
            0 8px 20px
            rgba(247, 194, 63, 0.2);
        }


        .highlight-label {
          display: block;

          margin-bottom: 4px;

          color: #f7c23f;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.16em;
        }


        .why-iara-highlight h3 {
          margin: 0;

          font-family: "Fraunces", serif;

          font-size: 21px;

          font-weight: 500;

          line-height: 1.15;

          color: white;
        }


        .why-iara-highlight h3 span {
          color: #f7c23f;
        }


        /* =========================================
           BOTTOM LABEL
        ========================================= */

        .why-iara-bottom {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-top: 28px;

          color: #64748b;

          font-size: 11px;

          font-weight: 600;
        }


        .bottom-line {
          width: 25px;
          height: 1px;

          background: #d69b23;
        }


        /* =========================================
           CARDS GRID
        ========================================= */

        .why-iara-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px;
        }


        /* =========================================
           CARD
        ========================================= */

        .why-iara-card {
          position: relative;

          min-height: 285px;

          overflow: hidden;

          padding: 30px;

          border: 1px solid
            rgba(1, 45, 104, 0.09);

          border-radius: 20px;

          background: white;

          box-shadow:
            0 8px 30px
            rgba(1, 45, 104, 0.04);

          transition:
            transform 0.4s
              cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }


        .why-iara-card:hover {
          transform: translateY(-8px);

          border-color:
            rgba(214, 155, 35, 0.4);

          box-shadow:
            0 22px 50px
            rgba(1, 45, 104, 0.11);
        }


        /* =========================================
           LARGE BACKGROUND NUMBER
        ========================================= */

        .why-iara-number {
          position: absolute;

          top: -14px;
          right: 14px;

          font-family: "Fraunces", serif;

          font-size: 90px;

          line-height: 1;

          font-weight: 500;

          color:
            rgba(1, 45, 104, 0.035);

          transition:
            color 0.4s ease,
            transform 0.4s ease;
        }


        .why-iara-card:hover .why-iara-number {
          color:
            rgba(214, 155, 35, 0.09);

          transform: translateY(-4px);
        }


        /* =========================================
           ICON
        ========================================= */

        .why-iara-icon {
          position: relative;
          z-index: 2;

          display: flex;

          align-items: center;
          justify-content: center;

          width: 52px;
          height: 52px;

          margin-bottom: 28px;

          border: 1px solid
            rgba(1, 45, 104, 0.12);

          border-radius: 15px;

          background: #f7f9fc;

          color: #012d68;

          transition:
            transform 0.4s ease,
            background 0.4s ease,
            color 0.4s ease,
            border-color 0.4s ease;
        }


        .why-iara-card:hover .why-iara-icon {
          transform:
            translateY(-3px)
            rotate(-3deg);

          background: #012d68;

          border-color: #012d68;

          color: #f7c23f;
        }


        /* =========================================
           CARD CONTENT
        ========================================= */

        .why-iara-card-content {
          position: relative;
          z-index: 2;
        }


        .why-iara-card-content h3 {
          max-width: 250px;

          margin: 0;

          font-family: "Fraunces", serif;

          font-size: 21px;

          font-weight: 550;

          line-height: 1.2;

          letter-spacing: -0.015em;

          color: #012d68;

          transition: color 0.3s ease;
        }


        .why-iara-card:hover
        .why-iara-card-content h3 {
          color: #d69b23;
        }


        .why-iara-card-content p {
          max-width: 290px;

          margin: 13px 0 0;

          font-family: "Inter", sans-serif;

          font-size: 12.5px;

          line-height: 1.7;

          color: #64748b;
        }


        /* =========================================
           ARROW
        ========================================= */

        .why-iara-arrow {
          position: absolute;

          right: 25px;
          bottom: 22px;

          display: flex;

          align-items: center;
          justify-content: center;

          width: 31px;
          height: 31px;

          border-radius: 50%;

          background: #f7f9fc;

          color: #012d68;

          font-size: 14px;

          transition:
            transform 0.35s ease,
            background 0.35s ease,
            color 0.35s ease;
        }


        .why-iara-card:hover .why-iara-arrow {
          transform:
            translate(3px, -3px);

          background: #d69b23;

          color: white;
        }


        /* =========================================
           GOLD BOTTOM LINE
        ========================================= */

        .why-iara-card-line {
          position: absolute;

          left: 30px;
          bottom: 0;

          width: 0;
          height: 3px;

          border-radius: 5px 5px 0 0;

          background: #d69b23;

          transition:
            width 0.45s
            cubic-bezier(0.22, 1, 0.36, 1);
        }


        .why-iara-card:hover .why-iara-card-line {
          width: calc(100% - 60px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1000px) {

          .why-iara-section {
            padding: 85px 5%;
          }

          .why-iara-container {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .why-iara-description {
            max-width: 650px;
          }

          .why-iara-highlight {
            max-width: 500px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .why-iara-section {
            padding: 70px 18px;
          }


          .why-iara-intro h2 {
            font-size: 3.2rem;
          }


          .why-iara-description {
            font-size: 13.5px;
          }


          .why-iara-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }


          .why-iara-card {
            min-height: 245px;

            padding: 25px;
          }


          .why-iara-number {
            font-size: 75px;
          }


          .why-iara-icon {
            margin-bottom: 22px;
          }


          .why-iara-highlight {
            padding: 19px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          .why-iara-intro h2 {
            font-size: 2.7rem;
          }

          .why-iara-highlight h3 {
            font-size: 18px;
          }

        }

      `}</style>
    </section>
  );
}

export function PublicationSupport() {
  const journalServices = [
    {
      icon: Award,
      title: "Scopus",
      description: "Publication support for Scopus-indexed journals.",
    },
    {
      icon: Globe2,
      title: "Web of Science",
      description: "Support for Web of Science publication pathways.",
    },
    {
      icon: BadgeCheck,
      title: "UGC CARE",
      description: "Guidance for UGC CARE journal publications.",
    },
    {
      icon: Award,
      title: "ABDC",
      description: "Publication support for ABDC-listed journals.",
    },
  ];

  const bookServices = [
    {
      icon: FileText,
      title: "ISBN Services",
      description: "Applying for and assigning ISBN.",
    },
    {
      icon: Palette,
      title: "Cover Page Design",
      description: "Professional cover page designing.",
    },
    {
      icon: Layout,
      title: "Page Layout",
      description: "Page layout, alignment and formatting.",
    },
    {
      icon: FileText,
      title: "Text Editing",
      description: "Editing and formatting of text matter.",
    },
    {
      icon: ImageIcon,
      title: "Image Formatting",
      description: "Editing and formatting of images.",
    },
    {
      icon: Table2,
      title: "Table Formatting",
      description: "Professional editing and formatting of tables.",
    },
    {
      icon: BookMarked,
      title: "Paperback & eBook",
      description: "Creation of paperback and digital editions.",
    },
    {
      icon: Printer,
      title: "10 Hard Copies",
      description: "Ten physical copies of the published book.",
    },
    {
      icon: BadgeCheck,
      title: "Publication Certificate",
      description: "Certificate of publication from IARA Publication.",
    },
    {
      icon: Globe2,
      title: "Online Hosting",
      description: "Book hosting on IARA Publication.",
    },
    {
      icon: BookOpen,
      title: "Author Page",
      description: "Dedicated page for authors and editors.",
    },
    {
      icon: Share2,
      title: "Social Promotion",
      description: "Promotion through WhatsApp, Facebook & Instagram.",
    },
    {
      icon: Video,
      title: "Book Reel",
      description: "Promotional reel for the released book.",
    },
    {
      icon: Percent,
      title: "60% Royalty",
      description: "60% royalty of profit on books sold.",
    },
  ];

  return (
    <section
      className={`
        relative overflow-hidden
        bg-[#F7F9FC]
        px-[6%] py-16
        max-[700px]:px-5
        max-[700px]:py-11
      `}
    >
      {/* Background decoration */}
      <div
        className={`
          pointer-events-none absolute
          -right-40 -top-40
          h-[420px] w-[420px]
          rounded-full
          bg-[#012D68]/[0.045]
          blur-3xl
        `}
      />

      <div
        className={`
          pointer-events-none absolute
          -bottom-40 -left-40
          h-[400px] w-[400px]
          rounded-full
          bg-[#D69B23]/[0.07]
          blur-3xl
        `}
      />

      <div className={`relative z-10 mx-auto max-w-7xl`}>
        {/* ================= HEADING ================= */}

        <div
          className={`
            support-heading
            mx-auto mb-12 max-w-3xl
            text-center
          `}
        >
          <div
            className={`
              mb-4 inline-flex
              items-center gap-2
              rounded-full
              border border-[#D69B23]/25
              bg-[#D69B23]/10
              px-4 py-2
              text-xs font-semibold
              uppercase tracking-[0.18em]
              text-[#B57A12]
            `}
          >
            <Sparkles className={`size-3.5`} />
            Complete Publication Support
          </div>

          <h2
            className={`
              font-[Fraunces]
              text-[clamp(2.2rem,4vw,3.4rem)]
              font-semibold
              leading-[1.08]
              tracking-[-0.025em]
              text-[#012D68]
            `}
          >
            From <span className={`italic text-[#D69B23]`}>manuscript</span> to
            publication
          </h2>

          <p
            className={`
              mx-auto mt-4 max-w-2xl
              text-[0.96rem]
              leading-7
              text-slate-500
            `}
          >
            Professional support for researchers, authors and editors throughout
            their publishing journey.
          </p>
        </div>

        {/* ================= JOURNAL SUPPORT ================= */}

        <div
          className={`
            support-panel
            mb-8 overflow-hidden
            rounded-[26px]
            border border-[#012D68]/10
            bg-white
            shadow-[0_18px_55px_rgba(1,45,104,0.07)]
          `}
        >
          <div
            className={`
              flex items-center
              justify-between gap-5
              border-b border-[#012D68]/10
              px-7 py-6
              max-[650px]:px-5
            `}
          >
            <div className={`flex items-center gap-4`}>
              <div
                className={`
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-2xl
                  bg-[#012D68]
                  shadow-[0_8px_20px_rgba(1,45,104,0.18)]
                `}
              >
                <BookOpen
                  className={`size-5 text-[#F7C23F]`}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span
                  className={`
                    text-[0.68rem]
                    font-semibold uppercase
                    tracking-[0.16em]
                    text-[#D69B23]
                  `}
                >
                  Journal Services
                </span>

                <h3
                  className={`
                    mt-0.5 text-xl
                    font-semibold
                    text-[#012D68]
                  `}
                >
                  Journal Publication Support
                </h3>
              </div>
            </div>

            <span
              className={`
                hidden rounded-full
                bg-[#012D68]/[0.05]
                px-3 py-1.5
                text-xs font-medium
                text-[#012D68]
                sm:block
              `}
            >
              4 Services
            </span>
          </div>

          <div
            className={`
              grid grid-cols-4
              divide-x divide-[#012D68]/10
              max-[900px]:grid-cols-2
              max-[600px]:grid-cols-1
              max-[600px]:divide-x-0
            `}
          >
            {journalServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`
                    service-item group
                    relative p-6
                    transition-all duration-300
                    hover:bg-[#012D68]/[0.025]
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span
                    className={`
                      absolute bottom-0 left-0
                      h-[2px] w-0
                      bg-[#D69B23]
                      transition-all duration-400
                      group-hover:w-full
                    `}
                  />

                  <Icon
                    className={`
                      mb-4 size-6
                      text-[#012D68]
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:text-[#D69B23]
                    `}
                    strokeWidth={1.7}
                  />

                  <h4
                    className={`
                      text-base font-semibold
                      text-[#012D68]
                      transition-colors
                      group-hover:text-[#D69B23]
                    `}
                  >
                    {service.title}
                  </h4>

                  <p
                    className={`
                      mt-2 text-xs
                      leading-5 text-slate-500
                    `}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOOK SUPPORT ================= */}

        <div
          className={`
            support-panel
            overflow-hidden
            rounded-[26px]
            border border-[#012D68]/10
            bg-white
            shadow-[0_18px_55px_rgba(1,45,104,0.07)]
          `}
        >
          {/* Header */}
          <div
            className={`
              flex items-center
              justify-between gap-5
              border-b border-[#012D68]/10
              px-7 py-6
              max-[650px]:px-5
            `}
          >
            <div className={`flex items-center gap-4`}>
              <div
                className={`
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-2xl
                  bg-[#D69B23]
                  shadow-[0_8px_20px_rgba(214,155,35,0.20)]
                `}
              >
                <BookMarked className={`size-5 text-white`} strokeWidth={1.8} />
              </div>

              <div>
                <span
                  className={`
                    text-[0.68rem]
                    font-semibold uppercase
                    tracking-[0.16em]
                    text-[#D69B23]
                  `}
                >
                  Author Services
                </span>

                <h3
                  className={`
                    mt-0.5 text-xl
                    font-semibold
                    text-[#012D68]
                  `}
                >
                  Book Publication Services
                </h3>
              </div>
            </div>

            <span
              className={`
                hidden rounded-full
                bg-[#012D68]/[0.05]
                px-3 py-1.5
                text-xs font-medium
                text-[#012D68]
                sm:block
              `}
            >
              Complete Package
            </span>
          </div>

          {/* Services grid */}
          <div
            className={`
              grid grid-cols-2
              border-b border-[#012D68]/10
              max-[600px]:grid-cols-1
            `}
          >
            {bookServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`
                    book-service group
                    relative flex items-start gap-4
                    border-b border-[#012D68]/[0.07]
                    p-5
                    transition-all duration-300
                    hover:bg-[#012D68]/[0.025]
                  `}
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className={`
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-[#012D68]/[0.055]
                      transition-all duration-300
                      group-hover:bg-[#012D68]
                    `}
                  >
                    <Icon
                      className={`
                        size-[18px]
                        text-[#012D68]
                        transition-colors duration-300
                        group-hover:text-[#F7C23F]
                      `}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h4
                      className={`
                        text-sm font-semibold
                        text-[#012D68]
                        transition-colors
                        group-hover:text-[#D69B23]
                      `}
                    >
                      {service.title}
                    </h4>

                    <p
                      className={`
                        mt-1 text-xs
                        leading-5 text-slate-500
                      `}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className={`
              flex items-center
              justify-between gap-5
              bg-[#012D68]
              px-7 py-5
              max-[650px]:flex-col
              max-[650px]:items-start
              max-[650px]:px-5
            `}
          >
            <div>
              <p
                className={`
                  text-sm font-semibold
                  text-white
                `}
              >
                Ready to publish your book?
              </p>

              <p
                className={`
                  mt-1 text-xs
                  text-white/60
                `}
              >
                Explore our complete publication services.
              </p>
            </div>

            <a
              href="/contact"
              target="_blank"
              rel="noreferrer"
              className={`
                group inline-flex
                items-center gap-2
                rounded-xl
                bg-[#D69B23]
                px-5 py-2.5
                text-sm font-semibold
                text-white
                shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#F7C23F]
              `}
            >
              Learn More
              <ArrowUpRight
                className={`
                  size-4
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                `}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .support-heading {
          opacity: 0;
          transform: translateY(18px);
          animation: supportFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .support-panel {
          opacity: 0;
          transform: translateY(22px);
          animation: supportFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s
            forwards;
        }

        .service-item,
        .book-service {
          opacity: 0;
          animation: itemFade 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes supportFade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes itemFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .support-heading,
          .support-panel,
          .service-item,
          .book-service {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}


export default function TestimonialsSection() {
 const testimonials = [
  {
    quote:
      "The editorial team provided clear guidance throughout the publication process. From manuscript preparation to final publication, the communication was professional and reassuring.",
    name: "Dr. Anil Mehta",
    role: "Professor of Computer Science, University of Delhi",
    image: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote:
      "I appreciated the professionalism of the publication process. The team was responsive to our queries and kept us informed at every important stage of the manuscript.",
    name: "Dr. Sarah Williams",
    role: "Associate Professor of Management, University of Manchester",
    image: "https://i.pravatar.cc/120?img=47",
  },
  {
    quote:
      "Publishing my research article was a smooth experience. The editorial communication was timely, and the team made the overall process much easier to understand.",
    name: "Dr. Rajesh Kumar",
    role: "Professor of Information Technology, Amity University",
    image: "https://i.pravatar.cc/120?img=13",
  },
  {
    quote:
      "The opportunity to publish our academic work in a professionally managed publication was valuable. I particularly appreciated the attention given to the manuscript and the editorial process.",
    name: "Dr. Maria Fernandez",
    role: "Professor of Business Administration, University of Barcelona",
    image: "https://i.pravatar.cc/120?img=32",
  },
  {
    quote:
      "Our experience with the book publication process was very positive. The editorial team understood the academic nature of the work and provided useful support from submission to publication.",
    name: "Dr. Ahmed Hassan",
    role: "Professor of Economics, Cairo University",
    image: "https://i.pravatar.cc/120?img=11",
  },
  {
    quote:
      "As a researcher, I value a publication process where communication is clear and expectations are properly explained. The team maintained professional communication throughout our article publication.",
    name: "Dr. Priya Nair",
    role: "Associate Professor of Biotechnology, Christ University",
    image: "https://i.pravatar.cc/120?img=45",
  },
  {
    quote:
      "The book publication team was supportive and responsive throughout the project. It was encouraging to see our academic work presented in a structured and professional format.",
    name: "Dr. Michael Thompson",
    role: "Professor of Education, University of Leeds",
    image: "https://i.pravatar.cc/120?img=15",
  },
  {
    quote:
      "I found the manuscript submission and editorial communication straightforward. The team responded to our questions professionally and helped us understand each stage of the publication process.",
    name: "Dr. Kavita Sharma",
    role: "Professor of Social Sciences, University of Mumbai",
    image: "https://i.pravatar.cc/120?img=44",
  },
  {
    quote:
      "For academic authors, reliable communication is extremely important. My experience with the publication team was organized and professional, particularly during the review and final publication stages.",
    name: "Dr. Daniel Wilson",
    role: "Professor of Engineering, University of Queensland",
    image: "https://i.pravatar.cc/120?img=14",
  },
  {
    quote:
      "I was pleased with the overall experience of publishing our research work. The editorial team remained accessible, professional, and attentive to the requirements of an academic publication.",
    name: "Dr. Fatima Rahman",
    role: "Associate Professor of Pharmacy, University of Dhaka",
    image: "https://i.pravatar.cc/120?img=48",
  },
];

  return (
    <section className="tf-wrap">

      {/* Header */}

      <div className="tf-header">

        <span className="tf-label">
          TESTIMONIALS
        </span>

        <h2 className="tf-heading">
          Trusted by people who
          <br />

          <em>value great work.</em>
        </h2>

        <p className="tf-subtitle">
          Hear from the professionals and teams who trust our work,
          services, and publishing support.
        </p>

      </div>


      {/* Cards */}

      <div className="tf-row">

        {testimonials.map((t, index) => (

          <article
            key={t.name}
            className="tf-card"
          >

            {/* Card number */}

            <span className="tf-number">
              {String(index + 1).padStart(2, "0")}
            </span>


            {/* Quote mark */}

            <span className="tf-quote-mark">
              “
            </span>


            {/* Quote */}

            <p className="tf-quote">
              {t.quote}
            </p>


            {/* Author */}

            <div className="tf-byline">

              <div className="tf-avatar-wrap">

                <img
                  src={t.image}
                  alt={t.name}
                  className="tf-avatar"
                />

              </div>


              <span className="tf-name">
                {t.name}
              </span>

              <span className="tf-role">
                {t.role}
              </span>

            </div>

          </article>

        ))}

      </div>


      <style>{`

        /* ==========================================
           SECTION
        ========================================== */

        .tf-wrap {
          position: relative;

          overflow: hidden;

          padding:
            90px 24px
            110px;

          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f7f9fc 100%
            );

          font-family:
            "Inter",
            sans-serif;
        }


        /* subtle decoration */

        .tf-wrap::before {
          content: "";

          position: absolute;

          width: 420px;
          height: 420px;

          right: -220px;
          top: -220px;

          border-radius: 50%;

          border:
            1px solid
            rgba(214, 155, 35, 0.12);

          pointer-events: none;
        }


        .tf-wrap::after {
          content: "";

          position: absolute;

          width: 300px;
          height: 300px;

          left: -180px;
          bottom: -180px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(1, 45, 104, 0.06),
              transparent 70%
            );

          pointer-events: none;
        }


        /* ==========================================
           HEADING
        ========================================== */

        .tf-header {
          position: relative;

          z-index: 2;

          max-width: 760px;

          margin:
            0 auto
            65px;

          text-align: center;
        }


        .tf-label {
          display: inline-block;

          margin-bottom: 16px;

          color: #d69b23;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.22em;
        }


        .tf-heading {
          margin: 0;

          font-family:
            "Fraunces",
            serif;

          font-size:
            clamp(
              2.6rem,
              5vw,
              4.4rem
            );

          font-weight: 450;

          line-height: 1;

          letter-spacing:
            -0.045em;

          color: #012d68;
        }


        .tf-heading em {
          color: #d69b23;

          font-weight: 400;

          font-style: italic;
        }


        .tf-subtitle {
          max-width: 560px;

          margin:
            22px auto
            0;

          color: #334155;

          font-size: 14px;

          line-height: 1.7;
        }


        /* ==========================================
           ROW
        ========================================== */

        .tf-row {
          position: relative;

          z-index: 2;

          display: flex;

          justify-content: center;

          align-items: center;

          flex-wrap: nowrap;

          padding:
            40px 0
            35px;

          max-width: 1500px;

          margin: auto;
        }


        /* ==========================================
           CARD
        ========================================== */

        .tf-card {
          position: relative;

          flex:
            0 0
            245px;

          width: 245px;

          min-height: 350px;

          padding:
            28px 24px
            25px;

          display: flex;

          flex-direction: column;

          justify-content: space-between;

          overflow: hidden;

          border-radius: 20px;

          border:
            1px solid
            rgba(1, 45, 104, 0.10);

          background:
            #ffffff;

          color: #012d68;

          box-shadow:
            0 12px 35px
            rgba(1, 45, 104, 0.08);

          cursor: pointer;

          transition:
            transform
              0.45s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            margin
              0.45s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            border-color
              0.3s ease,
            box-shadow
              0.4s ease;
        }


        /* Gold top accent */

        .tf-card::before {
          content: "";

          position: absolute;

          left: 0;

          top: 0;

          width: 100%;

          height: 3px;

          background:
            linear-gradient(
              90deg,
              #d69b23,
              #f7c23f
            );

          opacity: 0;

          transition:
            opacity
            0.3s ease;
        }


        .tf-card:hover::before {
          opacity: 1;
        }


        /* ==========================================
           OVERLAP
        ========================================== */

        .tf-card:not(:first-child) {
          margin-left: -68px;
        }


        /* Resting tilt */

        .tf-card:nth-child(1) {
          transform:
            rotate(-4deg);
        }

        .tf-card:nth-child(2) {
          transform:
            rotate(3deg);
        }

        .tf-card:nth-child(3) {
          transform:
            rotate(-4deg);
        }

        .tf-card:nth-child(4) {
          transform:
            rotate(3deg);
        }

        .tf-card:nth-child(5) {
          transform:
            rotate(-3deg);
        }

        .tf-card:nth-child(6) {
          transform:
            rotate(4deg);
        }

        .tf-card:nth-child(7) {
          transform:
            rotate(-3deg);
        }

        .tf-card:nth-child(8) {
          transform:
            rotate(3deg);
        }

        .tf-card:nth-child(9) {
          transform:
            rotate(-4deg);
        }

        .tf-card:nth-child(10) {
          transform:
            rotate(3deg);
        }


        /* ==========================================
           HOVER
        ========================================== */

        .tf-card:hover {
          transform:
            rotate(0deg)
            scale(1.07)
            translateY(-18px);

          margin-left: 12px;

          margin-right: 12px;

          z-index: 20;

          border-color:
            rgba(
              214,
              155,
              35,
              0.45
            );

          box-shadow:
            0 25px 55px
            rgba(
              1,
              45,
              104,
              0.18
            );
        }


        /* ==========================================
           CARD NUMBER
        ========================================== */

        .tf-number {
          position: absolute;

          right: 20px;

          top: 18px;

          color:
            rgba(
              1,
              45,
              104,
              0.35
            );

          font-size: 9px;

          font-weight: 700;

          letter-spacing:
            0.15em;
        }


        /* ==========================================
           QUOTE
        ========================================== */

        .tf-quote-mark {
          display: block;

          height: 44px;

          margin-bottom: 5px;

          font-family:
            "Fraunces",
            serif;

          color: #d69b23;

          font-size: 55px;

          line-height: 1;
        }


        .tf-quote {
          margin:
            0 0
            30px;

          color: #012d68;
          font-family:
            "Inter",
            sans-serif;

          font-size: 14px;

          line-height: 1.65;

          font-weight: 450;
        }


        /* ==========================================
           AUTHOR
        ========================================== */

        .tf-byline {
          display: flex;

          flex-direction: column;

          align-items: flex-start;
        }


        .tf-avatar-wrap {
          width: 52px;

          height: 52px;

          padding: 3px;

          margin-bottom: 12px;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              #d69b23,
              #f7c23f
            );

          box-shadow:
            0 7px 18px
            rgba(
              214,
              155,
              35,
              0.18
            );
        }


        .tf-avatar {
          display: block;

          width: 100%;

          height: 100%;

          border-radius: 50%;

          object-fit: cover;

          border:
            2px solid
            #ffffff;
        }


        .tf-name {
          color: #012d68;

          font-size: 14px;

          font-weight: 700;

          line-height: 1.3;
        }


        .tf-role {
          margin-top: 3px;

          color: #64748b;

          font-size: 11px;

          line-height: 1.4;
        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (
          max-width:
          700px
        ) {

          .tf-wrap {
            padding:
              70px 16px
              80px;
          }


          .tf-header {
            margin-bottom:
              45px;
          }


          .tf-heading {
            font-size:
              2.8rem;
          }


          .tf-row {
            justify-content:
              flex-start;

            overflow-x: auto;

            padding:
              35px 20px
              45px;

            scrollbar-width:
              none;
          }


          .tf-row::-webkit-scrollbar {
            display: none;
          }


          .tf-card {
            flex:
              0 0
              220px;

            width: 220px;

            min-height:
              320px;

            padding:
              24px 21px;
          }


          .tf-card:not(
            :first-child
          ) {
            margin-left:
              -45px;
          }


          .tf-card:hover {
            transform:
              rotate(0)
              translateY(-8px);

            margin-left:
              0;

            margin-right:
              0;
          }


          .tf-quote {
            font-size:
              13px;
          }

        }

      `}</style>

    </section>
  );
}
