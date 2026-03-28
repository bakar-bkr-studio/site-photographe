import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      key: string,
      trackingId: string,
      config: { page_path: string } | { event_category: string; event_label: string }
    ) => void;
  }
}

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-3XR7P69QX3', {
      page_path: location.pathname + location.search
    });
  }, [location]);
};

export const trackEvent = (category: string, label: string) => {
  window.gtag('event', 'click', {
    event_category: category,
    event_label: label
  });
};