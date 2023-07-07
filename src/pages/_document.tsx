import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/assets/images/favicon/favicon-3.png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/images/favicon/favicon-3.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/assets/images/favicon/favicon-3.png"
        />

        <link rel="stylesheet" href="/assets/css/vendor/ecicons.min.css" />

        <link rel="stylesheet" href="/assets/css/plugins/animate.css" />
        <link
          rel="stylesheet"
          href="/assets/css/plugins/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="/assets/css/plugins/jquery-ui.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/countdownTimer.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nouislider.css" />

        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/skin-01.css" />
        <link rel="stylesheet" href="/assets/css/demo1.css" />

        <link rel="stylesheet" href="/assets/css/plugins/swiper-bundle.min.css" />

        <link
          rel="stylesheet"
          id="bg-switcher-css"
          href="/assets/css/backgrounds/bg-4.css"
        ></link>
      </Head>
      <body>
    
        <Main />
        <NextScript />

        {/* demo 3 */}
        <script src="/assets/js/vendor/jquery-3.5.1.min.js" defer></script>
        <script src="/assets/js/vendor/popper.min.js" defer></script>
        <script src="/assets/js/vendor/bootstrap.min.js" defer></script>
        <script src="/assets/js/vendor/jquery-migrate-3.3.0.min.js" defer></script>
        <script src="/assets/js/vendor/modernizr-3.11.2.min.js" defer></script>

        <script src="/assets/js/plugins/swiper-bundle.min.js" defer></script>
        <script src="/assets/js/plugins/countdownTimer.min.js" defer></script>
        <script src="/assets/js/plugins/scrollup.js" defer></script>
        <script src="/assets/js/plugins/jquery.zoom.min.js" defer></script>
        <script src="/assets/js/plugins/slick.min.js" defer></script>
        <script src="/assets/js/plugins/infiniteslidev2.js" defer></script>

        <script src="/assets/js/vendor/jquery.magnific-popup.min.js" defer></script>
    <script src="/assets/js/plugins/jquery.sticky-sidebar.js" defer></script>

        <script src="/assets/js/vendor/index.js" defer></script>
        {/* <script src="/assets/js/demo-3.js" defer></script> */}


    {/* product page */}    
    
    
    
    <script src="/assets/js/plugins/nouislider.js" defer></script>
  
  
    <script src="/assets/js/main.js" defer></script>

      </body>
    </Html>
  );
}
