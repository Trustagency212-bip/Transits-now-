"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent, trackPageView } from "@/lib/analytics";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-track-event]");

      if (!trackedElement) {
        return;
      }

      const trackedEvent = trackedElement.dataset.trackEvent;

      if (!trackedEvent) {
        return;
      }

      trackEvent(trackedEvent, {
        event_category: trackedElement.dataset.trackCategory || "engagement",
        event_label:
          trackedElement.dataset.trackLabel ||
          trackedElement.textContent?.trim() ||
          undefined,
        link_url:
          trackedElement instanceof HTMLAnchorElement
            ? trackedElement.href
            : undefined,
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {gtmId ? (
        <>
          <Script id="gtm-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
            `}
          </Script>
          <Script
            id="gtm-script"
            src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
            strategy="lazyOnload"
          />
        </>
      ) : null}

      {gaId ? (
        <>
          <Script
            id="ga-script"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
          />
          <Script id="ga-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
