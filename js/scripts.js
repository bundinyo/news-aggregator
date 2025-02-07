(() => {
  "use strict";
  
  /*************************************************************
   *   1. Datendefinitionen & Konstanten                       *
   *************************************************************/
  
  // Hier fügen wir die Handelsblatt-Feeds ans Ende der Array-Liste an.
  const feeds = [
    // --- Heise-Feeds ---
    { name: "heise online",              url: "https://www.heise.de/rss/heise.rdf" },
    { name: "heise online IT",           url: "https://www.heise.de/rss/heise-Rubrik-IT.rdf" },
    { name: "heise Wissen",              url: "https://www.heise.de/rss/heise-Rubrik-Wissen.rdf" },
    { name: "heise Mobiles",             url: "https://www.heise.de/rss/heise-Rubrik-Mobiles.rdf" },
    { name: "heise Entertainment",       url: "https://www.heise.de/rss/heise-Rubrik-Entertainment.rdf" },
    { name: "heise Netzpolitik",         url: "https://www.heise.de/rss/heise-Rubrik-Netzpolitik.rdf" },
    { name: "heise Wirtschaft",          url: "https://www.heise.de/rss/heise-Rubrik-Wirtschaft.rdf" },
    { name: "heise Journal",             url: "https://www.heise.de/rss/heise-Rubrik-Journal.rdf" },
    { name: "heise top Alexa",           url: "https://www.heise.de/rss/heise-top-alexa.xml" },
    
    // --- Tagesschau-Feeds ---
    { name: "tagesschau: alle Meldungen",         url: "https://www.tagesschau.de/infoservices/alle-meldungen-100~rss2.xml" },
    { name: "tagesschau: Startseite",             url: "https://www.tagesschau.de/index~rss2.xml" },
    
    // Inland
    { name: "tagesschau (Inland) alle",           url: "https://www.tagesschau.de/inland/index~rss2.xml" },
    { name: "tagesschau (Inland) Innenpolitik",   url: "https://www.tagesschau.de/inland/innenpolitik/index~rss2.xml" },
    { name: "tagesschau (Inland) Gesellschaft",   url: "https://www.tagesschau.de/inland/gesellschaft/index~rss2.xml" },
    { name: "tagesschau (Inland) Regional",       url: "https://www.tagesschau.de/inland/regional/index~rss2.xml" },
    { name: "tagesschau (Inland) Region [REGION]",url: "https://www.tagesschau.de/inland/regional/[REGION]/index~rss2.xml" },
    
    // Ausland
    { name: "tagesschau (Ausland) alle",          url: "https://www.tagesschau.de/ausland/index~rss2.xml" },
    { name: "tagesschau (Ausland) Europa",        url: "https://www.tagesschau.de/ausland/europa/index~rss2.xml" },
    { name: "tagesschau (Ausland) Amerika",       url: "https://www.tagesschau.de/ausland/amerika/index~rss2.xml" },
    { name: "tagesschau (Ausland) Afrika",        url: "https://www.tagesschau.de/ausland/afrika/index~rss2.xml" },
    { name: "tagesschau (Ausland) Asien",         url: "https://www.tagesschau.de/ausland/asien/index~rss2.xml" },
    { name: "tagesschau (Ausland) Ozeanien",      url: "https://www.tagesschau.de/ausland/ozeanien/index~rss2.xml" },
    
    // Wirtschaft
    { name: "tagesschau (Wirtschaft) alle",       url: "https://www.tagesschau.de/wirtschaft/index~rss2.xml" },
    { name: "tagesschau (Wirtschaft) Finanzen",   url: "https://www.tagesschau.de/wirtschaft/finanzen/index~rss2.xml" },
    { name: "tagesschau (Wirtschaft) Unternehmen",url: "https://www.tagesschau.de/wirtschaft/unternehmen/index~rss2.xml" },
    { name: "tagesschau (Wirtschaft) Verbraucher",url: "https://www.tagesschau.de/wirtschaft/verbraucher/index~rss2.xml" },
    { name: "tagesschau (Wirtschaft) Technologie",url: "https://www.tagesschau.de/wirtschaft/technologie/index~rss2.xml" },
    { name: "tagesschau (Wirtschaft) Weltwirtschaft",url: "https://www.tagesschau.de/wirtschaft/weltwirtschaft/index~rss2.xml" },
    { name: "tagesschau (Wirtschaft) Konjunktur", url: "https://www.tagesschau.de/wirtschaft/konjunktur/index~rss2.xml" },
    
    // Wissen
    { name: "tagesschau (Wissen) alle",           url: "https://www.tagesschau.de/wissen/index~rss2.xml" },
    { name: "tagesschau (Wissen) Gesundheit",     url: "https://www.tagesschau.de/wissen/gesundheit/index~rss2.xml" },
    { name: "tagesschau (Wissen) Klima & Umwelt", url: "https://www.tagesschau.de/wissen/klima/index~rss2.xml" },
    { name: "tagesschau (Wissen) Forschung",      url: "https://www.tagesschau.de/wissen/forschung/index~rss2.xml" },
    { name: "tagesschau (Wissen) Technologie",    url: "https://www.tagesschau.de/wissen/technologie/index~rss2.xml" },
    
    // Weitere Ressorts
    { name: "tagesschau: Faktenfinder",           url: "https://www.tagesschau.de/faktenfinder/index~rss2.xml" },
    { name: "tagesschau: Investigativ",           url: "https://www.tagesschau.de/investigativ/index~rss2.xml" },
    
    // FAZ-Feed
    { name: "FAZ (Aktuell)",                      url: "https://www.faz.net/rss/aktuell" },
    
    /* 
     * NEU: Handelsblatt-Feeds 
     * (analog zu den anderen, mit 'name' und 'url')
     */
    { name: "Handelsblatt Schlagzeilen",          url: "https://www.handelsblatt.com/contentexport/feed/schlagzeilen" },
    { name: "Handelsblatt Wirtschafts-Schlagzeilen", url: "https://www.handelsblatt.com/contentexport/feed/wirtschaft" },
    { name: "Handelsblatt Top-Themen",            url: "https://www.handelsblatt.com/contentexport/feed/top-themen" },
    { name: "Handelsblatt Finanzen",              url: "https://www.handelsblatt.com/contentexport/feed/finanzen" },
    { name: "Handelsblatt Marktberichte",         url: "https://www.handelsblatt.com/contentexport/feed/marktberichte" },
    { name: "Handelsblatt Unternehmen",           url: "https://www.handelsblatt.com/contentexport/feed/unternehmen" },
    { name: "Handelsblatt Politik",               url: "https://www.handelsblatt.com/contentexport/feed/politik" },
    { name: "Handelsblatt Technik",               url: "https://www.handelsblatt.com/contentexport/feed/technologie" },
    { name: "Handelsblatt Arts & Style",          url: "https://www.handelsblatt.com/contentexport/feed/panorama" },
    { name: "Handelsblatt Research Institute",    url: "https://www.handelsblatt.com/contentexport/feed/research-institut" }
  ];
  
  let allNews = [];            
  let currentDisplayNews = []; 
  let currentPage = 1;
  
  const estimatedCardHeight = 300;
  
  // Zeit-Filter Zustand
  let timeRange = "all"; // "all", "24h", "7d", "14d", "custom"
  let customStartDate = null; 
  let customEndDate = null;
  
  let resizeTimeout = null;
  let searchTimeout = null;
  
  // Globale Referenzen auf unsere Charts
  let feedChart = null;   
  let dummyChart = null;  
  
  /*************************************************************
   *   2. XSS-Schutz + Hilfsfunktionen                         *
   *************************************************************/
  
  function escapeHtml(unsafeString) {
    if (!unsafeString) return "";
    return unsafeString
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
  
  function stripHtml(rawHtml) {
    if (!rawHtml) return "";
    const tmpDiv = document.createElement("div");
    tmpDiv.innerHTML = rawHtml;
    // OPTIONAL: Bilder entfernen
    tmpDiv.querySelectorAll("img").forEach(img => img.remove());
    return tmpDiv.textContent.trim();
  }
  
  /*************************************************************
   *   3. Artikel zusammenführen (Dedup)                       *
   *************************************************************/
  function deduplicateAndMerge(articles) {
    const merged = {};
    articles.forEach(article => {
      const key = article.title.trim().toLowerCase();
      if (merged[key]) {
        if (!merged[key].sources.some(src => src.source === article.source)) {
          merged[key].sources.push({ source: article.source, link: article.link });
        }
      } else {
        merged[key] = {
          ...article,
          sources: [{ source: article.source, link: article.link }]
        };
      }
    });
    return Object.values(merged);
  }
  
  /*************************************************************
   *   4. DOM-Load-Listener                                   *
   *************************************************************/
  document.addEventListener("DOMContentLoaded", () => {
    renderFeedCheckboxes();
    loadAllSelectedFeeds();
    startClock();
  
    // Toggle & Save Feeds
    document.getElementById("toggleFeeds").addEventListener("click", toggleAllFeeds);
    document.getElementById("saveFeeds").addEventListener("click", () => loadAllSelectedFeeds());
  
    // Suchfeld => "Sofortsuche" mit Debounce + Enter-Event
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        applyFilters();
      }, 300);
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (searchTimeout) clearTimeout(searchTimeout);
        applyFilters(); 
      }
    });
  
    // Zeitfilter
    const timeRangeSelect = document.getElementById("timeRangeFilter");
    if (timeRangeSelect) {
      timeRangeSelect.addEventListener("change", () => {
        timeRange = timeRangeSelect.value;
        const customRow = document.getElementById("customDateRangeRow");
        if (customRow) {
          if (timeRange === "custom") {
            customRow.classList.remove("d-none");
          } else {
            customRow.classList.add("d-none");
            applyFilters();
          }
        }
      });
    }
  
    // Benutzerdef. Zeitraum
    const applyBtn = document.getElementById("applyDateFilter");
    if (applyBtn) {
      applyBtn.addEventListener("click", () => {
        const startVal = document.getElementById("startDate").value;
        const endVal = document.getElementById("endDate").value;
        if (!startVal || !endVal) {
          alert("Bitte Start- und Enddatum auswählen.");
          return;
        }
        customStartDate = new Date(startVal);
        customEndDate = new Date(endVal);
        customEndDate.setHours(23, 59, 59, 999);
        applyFilters();
      });
    }
  
    // Resize => Neu rendern
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        renderNews(currentDisplayNews);
      }, 200);
    });
  });
  
  /*************************************************************
   *   5. Filter-Funktionen                                   *
   *************************************************************/
  function applyFilters() {
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";
    
    let temp = allNews.filter(item =>
      item.title.toLowerCase().includes(searchQuery)
    );
    
    if (timeRange === "24h") {
      const cutoff = Date.now() - (24 * 60 * 60 * 1000);
      temp = temp.filter(item => {
        if (!item.pubDateRaw) return false;
        const d = new Date(item.pubDateRaw);
        return d.getTime() >= cutoff;
      });
    } else if (timeRange === "7d") {
      const cutoff = Date.now() - (7 * 24 * 60 * 60 * 1000);
      temp = temp.filter(item => {
        if (!item.pubDateRaw) return false;
        const d = new Date(item.pubDateRaw);
        return d.getTime() >= cutoff;
      });
    } else if (timeRange === "14d") {
      const cutoff = Date.now() - (14 * 24 * 60 * 60 * 1000);
      temp = temp.filter(item => {
        if (!item.pubDateRaw) return false;
        const d = new Date(item.pubDateRaw);
        return d.getTime() >= cutoff;
      });
    } else if (timeRange === "custom" && customStartDate && customEndDate) {
      temp = temp.filter(item => {
        if (!item.pubDateRaw) return false;
        const d = new Date(item.pubDateRaw);
        return d >= customStartDate && d <= customEndDate;
      });
    }
    
    currentDisplayNews = temp;
    currentPage = 1;
    renderNews(currentDisplayNews);
  }
  
  /*************************************************************
   *   6. Render-Funktionen (News & Pagination)               *
   *************************************************************/
  
  function renderFeedCheckboxes() {
    const container = document.getElementById("feedCheckboxes");
    if (!container) return;
    
    container.innerHTML = "";
    feeds.forEach((feed, index) => {
      const safeName = escapeHtml(feed.name);
      container.innerHTML += `
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="${feed.url}"
            id="feed${index}"
            checked
          >
          <label class="form-check-label" for="feed${index}">
            ${safeName}
          </label>
        </div>
      `;
    });
  }
  
  function renderNews(newsArray) {
    const newsContainer = document.getElementById("newsContainer");
    if (!newsContainer) return;
    
    newsContainer.innerHTML = "";
  
    if (!newsArray.length) {
      newsContainer.innerHTML = `<p class="text-muted">Keine News vorhanden (oder keine Treffer für deine Suche).</p>`;
      const paginationDiv = document.getElementById("paginationContainer");
      if (paginationDiv) {
        paginationDiv.innerHTML = "";
      }
      return;
    }
  
    const cardsPerPage = Math.floor(window.innerHeight / estimatedCardHeight) || 1;
    const totalPages = Math.ceil(newsArray.length / cardsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;
  
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const pageNews = newsArray.slice(startIndex, endIndex);
  
    pageNews.forEach(item => {
      let sourceLinks = "";
      if (item.sources && item.sources.length > 0) {
        sourceLinks = item.sources.map(src => {
          const safeLink = escapeHtml(src.link);
          const safeSource = escapeHtml(src.source);
          return `<a href="${safeLink}" target="_blank">${safeSource}</a>`;
        }).join(", ");
      }
  
      const safeTitle = escapeHtml(item.title);
      const safeDescription = escapeHtml(item.description);
      const safeDate = escapeHtml(item.formattedDate);
  
      const newsItem = document.createElement("div");
      newsItem.className = "news-item";
      newsItem.innerHTML = `
        <h3>${safeTitle}</h3>
        <p>${safeDescription}</p>
        <small class="text-muted">
          Veröffentlicht am: ${safeDate} |
          Quellen: ${sourceLinks}
        </small>
      `;
      newsContainer.appendChild(newsItem);
    });
  
    renderPagination(totalPages);
  }
  
  function renderPagination(totalPages) {
    const paginationContainer = document.getElementById("paginationContainer");
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = "";
  
    if (totalPages <= 1) return;
  
    const firstBtn = document.createElement("button");
    firstBtn.className = "btn btn-secondary pagination-btn";
    firstBtn.innerHTML = `<i class="bi bi-chevron-bar-left"></i>`;
    firstBtn.disabled = (currentPage === 1);
    firstBtn.addEventListener("click", () => {
      currentPage = 1;
      renderNews(currentDisplayNews);
    });
  
    const prevBtn = document.createElement("button");
    prevBtn.className = "btn btn-secondary pagination-btn";
    prevBtn.innerHTML = `<i class="bi bi-chevron-left"></i>`;
    prevBtn.disabled = (currentPage === 1);
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderNews(currentDisplayNews);
      }
    });
  
    const pageInfo = document.createElement("span");
    pageInfo.className = "align-self-center mx-2";
    pageInfo.textContent = `Seite ${currentPage} von ${totalPages}`;
  
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-secondary pagination-btn";
    nextBtn.innerHTML = `<i class="bi bi-chevron-right"></i>`;
    nextBtn.disabled = (currentPage === totalPages);
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderNews(currentDisplayNews);
      }
    });
  
    const lastBtn = document.createElement("button");
    lastBtn.className = "btn btn-secondary pagination-btn";
    lastBtn.innerHTML = `<i class="bi bi-chevron-bar-right"></i>`;
    lastBtn.disabled = (currentPage === totalPages);
    lastBtn.addEventListener("click", () => {
      currentPage = totalPages;
      renderNews(currentDisplayNews);
    });
  
    paginationContainer.appendChild(firstBtn);
    paginationContainer.appendChild(prevBtn);
    paginationContainer.appendChild(pageInfo);
    paginationContainer.appendChild(nextBtn);
    paginationContainer.appendChild(lastBtn);
  }
  
  /*************************************************************
   *   7. Feed-Verwaltung (Auswahl + Laden)                    *
   *************************************************************/
  
  function toggleAllFeeds() {
    const checkboxes = document.querySelectorAll("#feedCheckboxes input[type='checkbox']");
    let allChecked = true;
    checkboxes.forEach(cb => {
      if (!cb.checked) allChecked = false;
    });
    if (allChecked) {
      checkboxes.forEach(cb => cb.checked = false);
      document.getElementById("toggleFeeds").textContent = "Alle auswählen";
    } else {
      checkboxes.forEach(cb => cb.checked = true);
      document.getElementById("toggleFeeds").textContent = "Alle abwählen";
    }
  }
  
  async function loadAllSelectedFeeds() {
    showLoadingIndicator();
    try {
      const checkboxes = document.querySelectorAll("#feedCheckboxes input[type='checkbox']");
      const selectedFeedUrls = [];
      checkboxes.forEach(cb => {
        if (cb.checked) selectedFeedUrls.push(cb.value);
      });
  
      const selectedFeeds = feeds.filter(feed => selectedFeedUrls.includes(feed.url));
      const feedPromises = selectedFeeds.map(feed => loadFeed(feed.url, feed.name));
      const results = await Promise.all(feedPromises);
  
      allNews = results.flat();
      allNews = deduplicateAndMerge(allNews);
      allNews.sort((a, b) => new Date(b.pubDateRaw) - new Date(a.pubDateRaw));
  
      currentPage = 1;
      applyFilters();
      
      updateFeedChart();
      updateDummyChart();
    } catch (error) {
      console.error("Fehler beim Laden der Feeds:", error);
      const newsContainer = document.getElementById("newsContainer");
      if (newsContainer) {
        newsContainer.innerHTML = `
          <p class="text-danger">Fehler beim Laden der News. Bitte versuche es später erneut.</p>
        `;
      }
    } finally {
      hideLoadingIndicator();
    }
  }
  
  async function loadFeed(feedUrl, feedName) {
    const proxyUrl = "https://thingproxy.freeboard.io/fetch/" + encodeURIComponent(feedUrl);
    const feedNews = [];
    try {
      const response = await fetch(proxyUrl);
      const data = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");
  
      if (xmlDoc.querySelector("parsererror")) {
        throw new Error("Parsing-Fehler im XML-Dokument");
      }
  
      const items = xmlDoc.querySelectorAll("item");
      items.forEach(item => {
        const titleElement = item.querySelector("title");
        const linkElement = item.querySelector("link");
        const descriptionElement = item.querySelector("description");
        const pubDateElement = item.querySelector("pubDate");
        
        const dcDateElement = item.querySelector("dc\\:date");
        const contentEncodedElement = item.querySelector("content\\:encoded");
  
        const title = titleElement ? titleElement.textContent.trim() : "Kein Titel";
        const link = linkElement ? linkElement.textContent.trim() : "#";
        
        const description = descriptionElement
          ? descriptionElement.textContent.trim()
          : "";
        const contentEncoded = contentEncodedElement
          ? contentEncodedElement.textContent.trim()
          : "";
        
        const rawDescription = contentEncoded || description || "Keine Beschreibung verfügbar.";
        const cleanedDescription = stripHtml(rawDescription);
        
        let pubDateRaw = pubDateElement ? pubDateElement.textContent.trim() : null;
        if (!pubDateRaw && dcDateElement) {
          pubDateRaw = dcDateElement.textContent.trim();
        }
        
        let formattedDate = "Unbekanntes Datum";
        if (pubDateRaw) {
          const dateObj = new Date(pubDateRaw);
          if (!isNaN(dateObj)) {
            formattedDate = new Intl.DateTimeFormat("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }).format(dateObj);
          }
        }
        
        feedNews.push({
          title,
          link,
          description: cleanedDescription,
          formattedDate,
          pubDateRaw,
          source: feedName
        });
      });
    } catch (error) {
      console.error(`Fehler beim Laden des Feeds "${feedName}":`, error);
    }
    return feedNews;
  }
  
  /*************************************************************
   *   7. Statistik-Funktionen (Charts)                        *
   *************************************************************/
  function updateFeedChart() {
    if (feedChart) {
      feedChart.destroy();
    }
    
    const feedCountMap = {};
    allNews.forEach(item => {
      if (item.sources && item.sources.length) {
        item.sources.forEach(src => {
          const sourceName = src.source;
          if (!feedCountMap[sourceName]) {
            feedCountMap[sourceName] = 0;
          }
          feedCountMap[sourceName]++;
        });
      }
    });
    let feedCountArray = Object.entries(feedCountMap);
    feedCountArray.sort((a, b) => b[1] - a[1]);
    feedCountArray = feedCountArray.slice(0, 20);
    
    const labels = feedCountArray.map(entry => entry[0]);
    const dataCounts = feedCountArray.map(entry => entry[1]);
    
    const ctx = document.getElementById("feedChart");
    if (!ctx) return;
    
    feedChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Artikel-Verteilung nach Quelle (Top 20)",
          data: dataCounts,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        scales: {
          y: {
            reverse: false,
            title: {
              display: true,
              text: "Quelle"
            }
          },
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Anzahl Artikel"
            }
          }
        }
      }
    });
  }
  
  function updateDummyChart() {
    if (dummyChart) {
      dummyChart.destroy();
    }
    const ctx = document.getElementById("dummyChart");
    if (!ctx) return;
    
    // Hilfsfunktionen
    const now = new Date();
    function getPastDate(daysAgo) {
      const d = new Date(now);
      d.setDate(d.getDate() - daysAgo);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    
    // dayCounts: { "YYYY-MM-DD": count }
    const dayCounts = {};
    
    // Letzte 14 Tage
    for (let i = 13; i >= 0; i--) {
      const d = getPastDate(i);
      const isoKey = d.toISOString().slice(0, 10); // "2025-01-30"
      dayCounts[isoKey] = 0;
    }
    
    // allNews -> pubDateRaw -> rund auf Tag, zähle in dayCounts
    allNews.forEach(article => {
      if (!article.pubDateRaw) return;
      const d = new Date(article.pubDateRaw);
      if (isNaN(d)) return;
      d.setHours(0, 0, 0, 0);
      const isoKey = d.toISOString().slice(0, 10);
      if (dayCounts[isoKey] !== undefined) {
        dayCounts[isoKey]++;
      }
    });
    
    // dayCounts enthält 14 Einträge => sortierter Array
    const sortedKeys = Object.keys(dayCounts).sort(); 
    // z. B. ["2025-01-20","2025-01-21",...,"2025-02-02"]
    
    // labels im deutschen Format (dd.MM.)
    const labels = sortedKeys.map(key => {
      const dateObj = new Date(key);
      return new Intl.DateTimeFormat("de-DE", {
        day: "2-digit",
        month: "2-digit"
      }).format(dateObj);
    });
    
    const dataValues = sortedKeys.map(k => dayCounts[k]);
    
    dummyChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "Artikel pro Tag (14 Tage)",
          data: dataValues,
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          // NEU: Diagramm-Titel
          title: {
            display: true,
            text: "Trends der Artikelanzahl (14 Tage)"
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Datum (dd.MM.)"
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Artikelanzahl"
            }
          }
        }
      }
    });
  }
  
  /*************************************************************
   *   8. Hilfsfunktionen (Uhr & Ladeindikator)               *
   *************************************************************/
  
  function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    clockElement.textContent = new Intl.DateTimeFormat("de-DE", options).format(now);
  }
  
  function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
  }
  
  function showLoadingIndicator() {
    const loader = document.getElementById("loadingIndicator");
    if (loader) loader.style.display = "block";
  }
  function hideLoadingIndicator() {
    const loader = document.getElementById("loadingIndicator");
    if (loader) loader.style.display = "none";
  }
  
})();
