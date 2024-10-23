import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (c) => {
  return c.html(
    html`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ZebraZilla Coin</title>
          <link href="https://fonts.googleapis.com/css2?family=Eutopia+Embassador&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
          <style>
            @font-face {
              font-family: 'Eutopia Embassador';
              src: url('https://fonts.googleapis.com/css2?family=Eutopia+Embassador&display=swap');
            }
            @font-face {
              font-family: 'Gorine Flums';
              src: url('path/to/GORINE FLUMS.otf') format('opentype');
            }
            body {
              margin: 0;
              padding: 0;
              height: 100vh;
              font-family: Arial, sans-serif;
              background-image: url('https://i.ibb.co/681kCBK/mastnyjozo-generate-me-cartoon-skyscraperslike-in-a-fairy-tale-2ae57f68-1261-406a-bee1-24f66d4a3bfd.png');
              background-size: 100% auto;
              background-position: center;
              background-repeat: no-repeat;
              background-color: #f0f0f0;
              position: relative;
            }
            body::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(154, 157, 157, 0.7);
              z-index: -1;
            }
            .menu-bar {
              background-color: #0c7c74;
              padding: 5px 0;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
              border-bottom: 4px solid #0a6861;
              display: flex;
              align-items: center;
              justify-content: space-between;
              z-index: 1000;
            }
            .menu-bar::after {
              content: '';
              position: absolute;
              bottom: -8px;
              left: 0;
              right: 0;
              height: 4px;
              background-color: #08544e;
            }
            .logo-container {
              margin-left: 100px;
              transition: transform 0.3s ease;
            }
            .logo-container:hover {
              transform: scale(1.1);
            }
            .logo {
              height: 100px;
              cursor: pointer;
              transition: transform 0.3s ease;
            }
            .logo:hover {
              transform: scale(1.1);
            }
            .social-links {
              display: flex;
              align-items: center;
              margin-right: 25px;
            }
            .social-link {
              color: white;
              font-size: 32px;
              margin-left: 20px;
              transition: color 0.3s ease, transform 0.3s ease;
            }
            .social-link:hover {
              color: #1DA1F2;
              transform: scale(1.2);
            }
            .menu-image {
              width: 40px;
              height: 40px;
              margin-left: 20px;
              cursor: pointer;
              transition: transform 0.3s ease;
            }
            .menu-image:hover {
              transform: scale(1.2);
            }
            .content {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: calc(100vh - 50px);
              color: white;
              text-align: center;
              position: relative;
              padding-top: 150px; // Add padding to make space for the image
              min-height: 100vh; /* Ensure content takes full viewport height */
            }
            .zilla-image {
              position: absolute;
              top: -300px; /* Start above the viewport */
              left: 50%;
              transform: translateX(-50%);
              z-index: 1;
              opacity: 0;
              transition: opacity 0.3s ease-out, top 1.5s ease-out;
              pointer-events: none;
            }
            .zilla-image img {
              max-width: 300px;
              height: auto;
              filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
            }
            .buy-button:hover + .zilla-image {
              opacity: 1;
              top: calc(50% - 150px); /* Position above the button */
            }
            @keyframes popOut {
              0% {
                transform: translateX(-50%) scale(0.5);
                opacity: 0;
              }
              100% {
                transform: translateX(-50%) scale(1);
                opacity: 1;
              }
            }
            h1 {
              font-size: 4rem;
              margin-bottom: 2rem;
              font-family: 'Eutopia Embassador', Arial, sans-serif;
              position: relative;
              display: inline-block;
              z-index: 2;
              
              /* 3D zebra-striped text effect */
              background-image: repeating-linear-gradient(
                -45deg,
                #fff,
                #fff 10px,
                #000 10px,
                #000 20px
              );
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              -webkit-text-stroke: 2px #000;
              text-shadow: 
                1px 1px 0 #fff,
                2px 2px 0 #fff,
                3px 3px 0 #fff,
                4px 4px 0 #fff,
                5px 5px 0 #000,
                6px 6px 0 #000,
                7px 7px 0 #000,
                8px 8px 0 #000;
              transform: perspective(500px) rotateX(20deg) rotateY(-10deg);
              transition: transform 0.3s ease;
              margin-top: 20px; // Reduce this value to bring the text closer to the image
            }
            h1:hover {
              transform: perspective(500px) rotateX(10deg) rotateY(-5deg) scale(1.05);
            }
            .buy-button {
              background-color: #0c7c74;
              color: white;
              font-size: 1.5rem;
              padding: 1.5rem 3rem;
              border: 4px solid black;
              border-radius: 25px;
              cursor: pointer;
              transition: transform 0.3s, box-shadow 0.3s, font-size 0.3s;
              position: relative;
              overflow: hidden;
              box-shadow: 
                0 6px 0 #085750,
                0 8px 10px rgba(0, 0, 0, 0.3);
              
              font-family: 'Eutopia Embassador', Arial, sans-serif;
              transform: perspective(500px) rotateX(10deg) rotateY(-5deg);
              text-shadow: 
                1px 1px 0 #000,
                2px 2px 0 #000;
            }
            .buy-button:hover {
              transform: perspective(500px) rotateX(5deg) rotateY(-2deg) scale(1.1);
              font-size: 1.7rem;
              box-shadow: 
                0 6px 0 #085750,
                0 8px 12px rgba(0, 0, 0, 0.3);
            }
            .buy-button:active {
              transform: perspective(500px) rotateX(0deg) rotateY(0deg) translateY(6px) scale(1.1);
              font-size: 1.7rem;
              box-shadow: 
                0 0 0 #085750,
                0 0 4px rgba(0, 0, 0, 0.3);
            }
            .buy-button::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: linear-gradient(
                45deg,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
              );
              transform: rotate(45deg);
              transition: 0.5s;
            }
            .buy-button:hover::before {
              left: 100%;
              top: 100%;
            }
            .scrolling-box {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              height: 50px;
              background-color: #0c7c74;
              border: 3px solid black;
              overflow: hidden;
              box-shadow: 
                0 -5px 10px rgba(0,0,0,0.3),
                inset 0 5px 10px rgba(255,255,255,0.2);
              transform: perspective(500px) rotateX(5deg);
              transform-origin: bottom;
              display: flex;
              align-items: center;
            }
            .scrolling-text {
              display: inline-block;
              white-space: nowrap;
              padding-left: 100%;
              animation: scroll 1800s linear infinite; // Increased from 600s to 1800s (30 minutes)
              transform: translateY(-5px);
            }
            .scrolling-text:hover {
              animation-play-state: paused;
            }
            @keyframes scroll {
              0% {
                transform: translate(0, -5px);
              }
              100% {
                transform: translate(-100%, -5px);
              }
            }
            .scrolling-text span {
              display: inline-block;
              font-size: 1.5rem;
              line-height: 50px;
              font-family: 'Eutopia Embassador', Arial, sans-serif;
              margin-right: 20px;
              background-image: repeating-linear-gradient(
                -45deg,
                #fff,
                #fff 10px,
                #000 10px,
                #000 20px
              );
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              -webkit-text-stroke: 1px #000;
              text-shadow: 
                1px 1px 0 #fff,
                2px 2px 0 #fff,
                3px 3px 0 #000,
                4px 4px 0 #000;
              cursor: pointer;
              transition: font-size 0.3s ease;
            }
            .scrolling-text span:hover {
              font-size: 1.8rem;
            }
            .copy-icon {
              display: none;
              margin-left: 10px;
              font-size: 1.5rem;
              color: white;
            }
            .copy-icon.visible {
              display: inline;
            }
            .falling-coin {
              position: fixed;
              width: 120px;  // Increased from 80px to 120px
              height: 120px; // Increased from 80px to 120px
              z-index: 1000;
              animation: fall 10s linear infinite;
              opacity: 0.7;
              cursor: pointer;
              top: -120px; // Adjusted to match the new height
            }
            @keyframes fall {
              0% {
                transform: translateY(0) rotate(0deg);
              }
              100% {
                transform: translateY(calc(100vh + 120px)) rotate(720deg);
              }
            }
            .falling-coin:hover {
              animation-play-state: paused;
            }
            // Generate 10 different animation delays
            .falling-coin:nth-child(1) { animation-delay: 0s; left: 10%; }
            .falling-coin:nth-child(2) { animation-delay: 1s; left: 20%; }
            .falling-coin:nth-child(3) { animation-delay: 2s; left: 30%; }
            .falling-coin:nth-child(4) { animation-delay: 3s; left: 40%; }
            .falling-coin:nth-child(5) { animation-delay: 4s; left: 50%; }
            .falling-coin:nth-child(6) { animation-delay: 5s; left: 60%; }
            .falling-coin:nth-child(7) { animation-delay: 6s; left: 70%; }
            .falling-coin:nth-child(8) { animation-delay: 7s; left: 80%; }
            .falling-coin:nth-child(9) { animation-delay: 8s; left: 90%; }
            .falling-coin:nth-child(10) { animation-delay: 9s; left: 15%; }
            .social-links {
              display: flex;
              align-items: center;
              margin-right: 25px;
            }
            .social-link {
              color: white;
              font-size: 32px;
              margin-left: 20px;
              transition: color 0.3s ease, transform 0.3s ease;
            }
            .social-link:hover {
              color: #1DA1F2;
              transform: scale(1.2);
            }
            .menu-image {
              width: 40px;
              height: 40px;
              margin-left: 20px;
              cursor: pointer;
              transition: transform 0.3s ease;
            }
            .menu-image:hover {
              transform: scale(1.2);
            }
            .title-container {
              position: relative;
              display: inline-block;
            }
            .title-part {
              display: inline-block;
              transition: transform 1s ease-out;
            }
            .buy-button:hover ~ .title-container .title-part.zebra {
              transform: translateX(-50px);
            }
            .buy-button:hover ~ .title-container .title-part.zilla {
              transform: translateX(50px);
            }
            .social-links {
              display: flex;
              align-items: center;
              margin-right: 25px;
            }
            .social-link {
              color: white;
              font-size: 32px;
              margin-left: 20px;
              transition: color 0.3s ease, transform 0.3s ease;
            }
            .social-link:hover {
              color: #1DA1F2;
              transform: scale(1.2);
            }
            .menu-image {
              width: 40px;
              height: 40px;
              margin-left: 20px;
              cursor: pointer;
              transition: transform 0.3s ease;
            }
            .menu-image:hover {
              transform: scale(1.2);
            }
          </style>
        </head>
        <body>
          <div class="falling-coins-container">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
            <img src="https://i.ibb.co/yVTyYrZ/mastnyjozo-generate-me-crypto-cartoon-coin-2-D-with-name-Zebra-Zi-959b453e-e5c1-4bff-9fd7-8579d7c420.png" alt="ZebraZilla Coin" class="falling-coin">
          </div>
          <nav class="menu-bar">
            <div class="logo-container">
              <a href="/">
                <img src="https://i.ibb.co/WVBWVs7/Zebra-Zilla2.png" alt="Zebra-Zilla2 Logo" class="logo">
              </a>
            </div>
            <div class="social-links">
              <a href="https://x.com/YourXHandle" class="social-link" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-x-twitter"></i>
              </a>
              <a href="https://t.me/YourTelegramHandle" class="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/cFjym3B/telegram-2111710.png" alt="Telegram" class="menu-image">
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/h2LQd6J/0-Rwq-Gm887t-St-Aj-YXs-removebg-preview.png" alt="New Image" class="menu-image">
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/VT8VKBw/twitter-alt-circle-12107562.png" alt="Twitter Alt Circle" class="menu-image">
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/9cxFsYn/661375b92a7e161501f4b5e5-dexscreener-322a5a2d.png" alt="DexScreener" class="menu-image">
              </a>
            </div>
          </nav>
          <div class="content">
            <div class="title-container">
              <h1>
                <span class="title-part zebra">Zebra</span><span class="title-part zilla">Zilla</span>
              </h1>
            </div>
            <button class="buy-button">Buy ZebraZilla</button>
            <div class="zilla-image">
              <img src="https://i.ibb.co/kyS23P3/Zilla-Bez-noh.jpg" alt="Zilla-Bez-noh">
            </div>
          </div>
          <div class="scrolling-box">
            <div class="scrolling-text">
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
              <span data-address="BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump">ca: BoAQaykj3LtkM2Brevc7cQcRAzpqcsP47nJ2rkyopump</span>
            </div>
            <div class="copy-icon">📋</div>
          </div>

          <script>
            const scrollingText = document.querySelector('.scrolling-text');
            const copyIcon = document.querySelector('.copy-icon');

            scrollingText.addEventListener('click', async (e) => {
              if (e.target.tagName === 'SPAN') {
                const address = e.target.dataset.address;
                try {
                  await navigator.clipboard.writeText(address);
                  copyIcon.classList.add('visible');
                  setTimeout(() => copyIcon.classList.remove('visible'), 2000);
                } catch (err) {
                  console.error('Failed to copy text: ', err);
                }
              }
            });
          </script>
        </body>
      </html>
    `
  )
})

export default app

