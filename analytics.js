(() => {
  const measurementId = window.siteConfig?.googleAnalyticsMeasurementId?.trim();
  const consentKey = "formation-civique.analytics-consent";
  const isMeasurementIdValid = /^G-[A-Z0-9]+$/i.test(measurementId);
  let analyticsLoaded = false;

  if (!isMeasurementIdValid) {
    return;
  }

  function loadAnalytics() {
    window[`ga-disable-${measurementId}`] = false;

    if (analyticsLoaded) {
      window.gtag("config", measurementId, {
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      return;
    }

    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(script);
  }

  function disableAnalytics() {
    window[`ga-disable-${measurementId}`] = true;

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }

    document.cookie.split(";").forEach((entry) => {
      const name = entry.trim().split("=")[0];
      if (!name.startsWith("_ga")) {
        return;
      }

      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    });
  }

  function removeBanner() {
    document.querySelector(".analytics-consent")?.remove();
  }

  function saveChoice(choice) {
    window.localStorage.setItem(consentKey, choice);
    removeBanner();

    if (choice === "accepted") {
      loadAnalytics();
    } else {
      disableAnalytics();
    }
  }

  function showBanner() {
    if (document.querySelector(".analytics-consent")) {
      return;
    }

    const banner = document.createElement("section");
    banner.className = "analytics-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-labelledby", "analytics-consent-title");
    banner.setAttribute("aria-describedby", "analytics-consent-description");
    banner.innerHTML = `
      <h2 id="analytics-consent-title" class="analytics-consent-title">Mesure d'audience</h2>
      <p id="analytics-consent-description">Ce site peut utiliser Google Analytics pour mesurer sa fréquentation. Vous pouvez accepter ou refuser. Votre choix est modifiable à tout moment depuis la page À propos.</p>
      <div class="analytics-consent-actions">
        <button class="button button-primary" type="button" data-analytics-accept>Accepter</button>
        <button class="button button-ghost" type="button" data-analytics-refuse>Refuser</button>
      </div>
    `;

    banner.querySelector("[data-analytics-accept]").addEventListener("click", () => {
      saveChoice("accepted");
    });
    banner.querySelector("[data-analytics-refuse]").addEventListener("click", () => {
      saveChoice("refused");
    });
    document.body.append(banner);
  }

  function managePreferences() {
    disableAnalytics();
    window.localStorage.removeItem(consentKey);
    showBanner();
  }

  function initialize() {
    document.querySelectorAll("[data-analytics-preferences]").forEach((button) => {
      button.addEventListener("click", managePreferences);
    });

    const savedChoice = window.localStorage.getItem(consentKey);
    if (savedChoice === "accepted") {
      loadAnalytics();
      return;
    }

    if (savedChoice !== "refused") {
      showBanner();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
