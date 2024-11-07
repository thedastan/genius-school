import { SEO_KEY_WORDS, SITE_NAME } from "@/constants/seo/seo.constants";
import React from "react";
import Image from "next/image";

const Head = () => {
  return (
    <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <meta name="description" content={SEO_KEY_WORDS} />
      <meta property="og:title" content={SITE_NAME} />
      <meta property="og:description" content={SEO_KEY_WORDS} />

      <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@type": "WebSite",
          "name": "geniusschool",
          "url": "https://genius-school.kg",
          "description": "Частная общеобразовательная школа в Бишкеке"
        }
        `}
      </script>

      {/* Yandex Metrika */}
      {typeof window !== "undefined" && (
        <script type="text/javascript">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){
                (m[i].a=m[i].a||[]).push(arguments)
              };
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98849317, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `}
        </script>
      )}
      <noscript>
        <div>
          <Image
            src="https://mc.yandex.ru/watch/98849317"
            alt="Yandex Metrika"
            width={100} // Replace with actual width
            height={100} // Replace with actual height
            style={{ position: "absolute", left: "-9999px" }}
          />
        </div>
      </noscript>
    </head>
  );
};

export default Head;
