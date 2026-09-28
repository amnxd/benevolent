import React from "react";
import "./App.css";

/* =========================================================
   PHONE MOCKUP
========================================================= */

function PhoneMockup({ second = false }) {
  return (
    <div className={`phone ${second ? "phone-second" : ""}`}>
      <div className="phone-notch"></div>

      <div className="phone-screen">
        {second ? (
          <>
            <div className="phone-top">
              <span>9:41</span>
              <span>•••</span>
            </div>

            <div className="reader-title">
              <span>Velith</span>
              <span>Aa</span>
            </div>

            <h3>
              Focus is a
              <br />
              superpower.
            </h3>

            <p className="reader-text">
              Distraction is easy.
              <br />
              Focus is a choice.
            </p>

            <div className="highlight">
              Your attention belongs to you.
            </div>

            <div className="reader-lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </>
        ) : (
          <>
            <div className="phone-top">
              <span>9:41</span>
              <span>•••</span>
            </div>

            <div className="app-header">
              <strong>Velith</strong>
              <button>+</button>
            </div>

            <p className="phone-label">Live Study Rooms</p>

            <p className="phone-small">
              Join focused study rooms
              <br />
              with real-time presence.
            </p>

            <div className="avatars">
              <span>●</span>
              <span>●</span>
              <span>●</span>
              <span>●</span>
              <small>+24</small>
            </div>

            <div className="divider"></div>

            <p className="phone-label">Continue Reading</p>

            <div className="book-card">
              <div className="book-cover">
                DEEP
                <br />
                WORK
              </div>

              <div>
                <strong>Deep Work</strong>
                <small>Cal Newport</small>

                <div className="progress">
                  <span></span>
                </div>

                <small>43%</small>
              </div>
            </div>

            <p className="phone-label">My Library</p>

            <div className="tabs">
              <span>All</span>
              <span>PDF</span>
              <span>EPUB</span>
              <span>Notes</span>
            </div>

            <div className="library">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   VELITH CHOICE MODAL
========================================================= */

function VelithChoiceModal({ open, onClose }) {
  if (!open) return null;

  /* -----------------------------------------
     CONTINUE ON WEB
  ----------------------------------------- */

  const continueOnWeb = () => {
    window.location.href = "/velith";
  };

  /* -----------------------------------------
     DOWNLOAD ANDROID APP
     
     IMPORTANT:
     Put your APK inside:

     public/velith.apk

     Then this button will download it.
  ----------------------------------------- */

  const downloadApp = () => {
    const link = document.createElement("a");

    link.href = "/velith.apk";
    link.download = "Velith.apk";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="velith-modal-backdrop"
      onMouseDown={onClose}
    >
      <div
        className="velith-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="velith-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >

        {/* CLOSE BUTTON */}

        <button
          className="velith-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        {/* LOGO */}

        <div className="velith-modal-mark">
          V
        </div>

        <div className="velith-modal-eyebrow">
          VELITH BY BENEVOLENT
        </div>

        <h2 id="velith-modal-title">
          How would you like to use Velith?
        </h2>

        <p className="velith-modal-subtitle">
          Choose a calm, focused way to get started.
        </p>

        {/* CHOICES */}

        <div className="velith-choice-grid">

          {/* ================================
              WEB OPTION
          ================================= */}

          <button
            className="velith-choice-card"
            onClick={continueOnWeb}
          >
            <span className="velith-choice-icon">
              ↗
            </span>

            <span className="velith-choice-title">
              Continue on Web
            </span>

            <span className="velith-choice-text">
              Start studying directly in your browser.
            </span>

            <span className="velith-choice-action">
              Continue <span>→</span>
            </span>
          </button>

          {/* ================================
              ANDROID APP OPTION
          ================================= */}

          <button
            className="velith-choice-card"
            onClick={downloadApp}
          >
            <span className="velith-choice-icon">
              ↓
            </span>

            <span className="velith-choice-title">
              Get the App
            </span>

            <span className="velith-choice-text">
              Download Velith for Android and study anywhere.
            </span>

            <span className="velith-choice-action">
              Download APK <span>↓</span>
            </span>
          </button>

        </div>

        <p className="velith-modal-note">
          Local-first. Privacy-first. Always.
        </p>

      </div>

      {/* MODAL CSS */}

      <style>{`

        .velith-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;

          display: grid;
          place-items: center;

          padding: 24px;

          background: rgba(44, 31, 23, 0.42);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          animation: velithFadeIn 180ms ease-out;
        }

        .velith-modal {
          position: relative;

          width: min(680px, 100%);

          padding: 42px;

          border: 1px solid rgba(110, 70, 45, 0.18);

          border-radius: 28px;

          background: #fbf5ec;

          box-shadow:
            0 28px 80px rgba(55, 35, 24, 0.22);

          color: #211a16;

          animation:
            velithModalIn
            240ms cubic-bezier(.2,.8,.2,1);
        }

        .velith-modal-close {
          position: absolute;

          top: 18px;
          right: 18px;

          width: 38px;
          height: 38px;

          border: 1px solid rgba(76, 48, 33, 0.15);

          border-radius: 50%;

          background: #f4e8dc;

          color: #4a3023;

          font-size: 24px;

          line-height: 1;

          cursor: pointer;

          transition:
            transform 180ms ease,
            background 180ms ease;
        }

        .velith-modal-close:hover {
          transform: rotate(8deg) scale(1.05);

          background: #edd9c8;
        }

        .velith-modal-mark {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          margin-bottom: 18px;

          border-radius: 14px;

          background: #d45a2a;

          color: #fffaf3;

          font-family: Georgia, serif;

          font-size: 25px;

          box-shadow:
            0 8px 22px rgba(212, 90, 42, 0.2);
        }

        .velith-modal-eyebrow {
          margin-bottom: 10px;

          color: #c95128;

          font:
            600 11px/1.2
            Arial, sans-serif;

          letter-spacing: .16em;
        }

        .velith-modal h2 {
          max-width: 560px;

          margin: 0;

          font:
            400 clamp(34px, 5vw, 52px)/1.03
            Georgia, serif;

          letter-spacing: -.025em;
        }

        .velith-modal-subtitle {
          margin: 14px 0 28px;

          color: #77665a;

          font:
            400 15px/1.65
            Arial, sans-serif;
        }

        .velith-choice-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 14px;
        }

        .velith-choice-card {
          min-height: 225px;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          padding: 24px;

          border:
            1px solid #e2cdbd;

          border-radius: 20px;

          background: #fffaf4;

          color: #211a16;

          text-align: left;

          cursor: pointer;

          transition:
            transform 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease,
            background 220ms ease;
        }

        .velith-choice-card:hover {
          transform: translateY(-5px);

          border-color: #d45a2a;

          background: #fffdf9;

          box-shadow:
            0 16px 35px
            rgba(67, 42, 28, 0.12);
        }

        .velith-choice-icon {
          width: 40px;
          height: 40px;

          display: grid;
          place-items: center;

          margin-bottom: 30px;

          border:
            1px solid #e4c9b6;

          border-radius: 12px;

          color: #c95128;

          font-size: 18px;
        }

        .velith-choice-title {
          margin-bottom: 8px;

          font:
            600 18px/1.2
            Arial, sans-serif;
        }

        .velith-choice-text {
          color: #796a60;

          font:
            400 13px/1.55
            Arial, sans-serif;
        }

        .velith-choice-action {
          margin-top: auto;

          padding-top: 22px;

          color: #c95128;

          font:
            600 13px/1
            Arial, sans-serif;
        }

        .velith-choice-action span {
          display: inline-block;

          margin-left: 5px;

          transition:
            transform 180ms ease;
        }

        .velith-choice-card:hover
        .velith-choice-action span {
          transform: translateX(5px);
        }

        .velith-modal-note {
          margin: 22px 0 0;

          color: #927f72;

          font:
            500 10px/1.4
            Arial, sans-serif;

          letter-spacing: .12em;

          text-transform: uppercase;
        }

        @keyframes velithFadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes velithModalIn {
          from {
            opacity: 0;

            transform:
              translateY(12px)
              scale(.98);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        @media (max-width: 620px) {

          .velith-modal {
            padding:
              30px 20px 22px;

            border-radius: 22px;
          }

          .velith-choice-grid {
            grid-template-columns: 1fr;
          }

          .velith-choice-card {
            min-height: 185px;
          }

          .velith-choice-icon {
            margin-bottom: 20px;
          }
        }

      `}</style>
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar({ onVelithClick }) {
  return (
    <nav className="navbar">

      <div className="brand">
        <div className="brand-mark">
          B
        </div>

        <span>Benevolent</span>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#conviction">Conviction</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        className="nav-button"
        onClick={onVelithClick}
      >
        Get Velith
      </button>

    </nav>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ onVelithClick }) {
  return (
    <section className="hero">

      <div className="hero-copy">

        <div className="eyebrow">
          SOFTWARE, RECONSIDERED
          <span></span>
        </div>

        <h1>
          Technology that works
          <br />
          <em>for you,</em> not on you.
        </h1>

        <p className="hero-description">
          Benevolent builds private, thoughtful software
          for people who believe their tools should serve
          them—not the other way around.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-button"
            onClick={onVelithClick}
          >
            Explore Velith
            <span>→</span>
          </button>

          <button className="secondary-button">
            Why Benevolent
            <span>→</span>
          </button>

        </div>

        <div className="scroll">
          <div className="scroll-icon">
            ↓
          </div>

          <span>
            SCROLL TO EXPLORE
          </span>
        </div>

      </div>

      <div className="hero-visual">

        <div className="hero-circle"></div>

        <div className="spark spark-one">
          ✦
        </div>

        <div className="spark spark-two">
          ✦
        </div>

        <PhoneMockup />

        <PhoneMockup second />

      </div>

    </section>
  );
}

/* =========================================================
   BELIEFS
========================================================= */

function Beliefs() {

  const beliefs = [
    {
      number: "01",
      title: "Keep it yours.",
      text:
        "We believe personal data should stay personal. Our products collect less, store locally, and give you control by default."
    },
    {
      number: "02",
      title: "Build for independence.",
      text:
        "A good tool shouldn't stop working because the internet does. We design for local-first experiences wherever possible."
    },
    {
      number: "03",
      title: "Respect attention.",
      text:
        "Your time isn't a metric to maximize. No infinite feeds, manufactured urgency, or engagement tricks."
    }
  ];

  return (
    <section
      className="beliefs"
      id="conviction"
    >

      <div className="section-label">
        WHAT WE BELIEVE
        <span></span>
      </div>

      <div className="belief-grid">

        {beliefs.map((belief) => (

          <article
            className="belief"
            key={belief.number}
          >

            <div className="belief-number">
              {belief.number}
            </div>

            <h2>
              {belief.title}
            </h2>

            <p>
              {belief.text}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}

/* =========================================================
   PRODUCTS
========================================================= */

function Products({ onVelithClick }) {
  return (
    <section
      className="products"
      id="products"
    >

      <div className="products-intro">

        <div className="section-label">
          WHAT WE'RE BUILDING
          <span></span>
        </div>

        <h2>
          Tools for <em>thinking.</em>
          <br />
          Tools for <em>connecting.</em>
        </h2>

        <p>
          We're building technology that helps you do both—
          without giving up your privacy.
        </p>

        <button className="primary-button">
          View All Products
          <span>→</span>
        </button>

      </div>

      {/* VELITH */}

      <div className="product-card">

        <div className="product-icon">
          V
        </div>

        <span className="product-tag">
          ANDROID APP
        </span>

        <h3>
          Velith
        </h3>

        <strong>
          A quieter place to study.
        </strong>

        <p>
          Read, take notes, join focused study rooms,
          and keep your work close to you.
        </p>

        <a
          href="#velith"
          onClick={(event) => {
            event.preventDefault();
            onVelithClick();
          }}
        >
          Explore Velith →
        </a>

      </div>

      {/* BEP */}

      <div className="product-card">

        <div className="product-icon">
          ••
        </div>

        <span className="product-tag">
          IN DEVELOPMENT
        </span>

        <h3>
          BEP
        </h3>

        <strong>
          Private communication, built from the ground up.
        </strong>

        <p>
          A secure protocol for exchanging information
          without making your data someone else's business.
        </p>

        <a href="#bep">
          Discover BEP →
        </a>

      </div>

    </section>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function Principles() {
  return (
    <section className="principles">

      <div>
        <strong>LOCAL-FIRST</strong>
        <span>Data stays close.</span>
      </div>

      <div>
        <strong>MINIMAL</strong>
        <span>Collect only what's necessary.</span>
      </div>

      <div>
        <strong>PRIVATE</strong>
        <span>Your information stays yours.</span>
      </div>

      <div>
        <strong>HUMAN</strong>
        <span>
          Designed around people, not metrics.
        </span>
      </div>

    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTA() {
  return (
    <section
      className="cta"
      id="contact"
    >

      <div className="cta-star">
        ✦
      </div>

      <h2>
        The internet is noisy enough.
        <br />
        <em>Your tools don't have to be.</em>
      </h2>

      <div>

        <p>
          We're building software that respects
          your privacy, your time, and your attention.
        </p>

        <button className="primary-button">
          Get in Touch
          <span>→</span>
        </button>

      </div>

    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer>

      <div className="footer-brand">

        <strong>ℬ</strong>

        <span>
          Benevolent
        </span>

        <small>
          Built for trust. Designed for calm.
        </small>

      </div>

      <div className="footer-links">

        <a href="#about">
          About
        </a>

        <a href="#products">
          Products
        </a>

        <a href="#conviction">
          Conviction
        </a>

        <a href="#team">
          Team
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

      <div className="copyright">
        © 2026 Benevolent.
        <br />
        Privacy Policy · Terms of Service
      </div>

    </footer>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {

  const [velithOpen, setVelithOpen] =
    React.useState(false);

  const openVelith = () => {
    setVelithOpen(true);
  };

  const closeVelith = () => {
    setVelithOpen(false);
  };

  /* ESCAPE TO CLOSE MODAL */

  React.useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        closeVelith();
      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, []);

  /* PREVENT BACKGROUND SCROLL */

  React.useEffect(() => {

    document.body.style.overflow =
      velithOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };

  }, [velithOpen]);

  return (
    <>
      <Navbar
        onVelithClick={openVelith}
      />

      <Hero
        onVelithClick={openVelith}
      />

      <Beliefs />

      <Products
        onVelithClick={openVelith}
      />

      <Principles />

      <CTA />

      <Footer />

      <VelithChoiceModal
        open={velithOpen}
        onClose={closeVelith}
      />
    </>
  );
}

export default App;