"use client";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const gaId = process.env.NEXT_PUBLIC_GA_ID;

function getDataLayer() {
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );

  getDataLayer().push({
    event: eventName,
    ...payload,
  });

  if (gaId) {
    if (window.gtag) {
      window.gtag("event", eventName, payload);
    } else {
      getDataLayer().push(["event", eventName, payload]);
    }
  }
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") {
    return;
  }

  getDataLayer().push({
    event: "page_view",
    page_path: path,
  });

  if (gaId) {
    const config = {
      page_path: path,
    };

    if (window.gtag) {
      window.gtag("config", gaId, config);
    } else {
      getDataLayer().push(["config", gaId, config]);
    }
  }
}
