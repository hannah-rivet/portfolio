/* ==========================================================================
   THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE SITE.

   - SITE: your name, tagline and contact links. Leave a link as "" to hide it.
   - PROJECTS: one block per project. Copy a block, change the fields, done.
     The home page card and the project's own page are both built from it.

   Project fields
     slug      short-lowercase-id used in the page URL (project.html?p=slug)
     title     project name
     ref       small label shown top-right, e.g. "OTT · 2026"
     type      "StoryMap" | "Dashboard" | "Map" | "Analysis"  (sets the colour tag)
     region    where it is, e.g. "City of Ottawa"
     status    "complete" or "in-progress"  (in-progress shows a badge)
     summary   1-2 sentences shown on the home page card
     finding   { num: "Rank 7 nationally", label: "what the number means" }
               or null while you don't have a headline number yet
     links     [ { label: "Open the StoryMap", url: "https://..." } ]  (or [])
     tools     ["QGIS", "ArcGIS Online"]
     data      ["Transport Canada Grade Crossings Inventory"]
     images    [ { src: "images/ottawa-map.png", alt: "...", caption: "..." } ]
               Put image files in the images/ folder.
     body      array of paragraphs for the project page (plain text)
   ========================================================================== */

window.SITE = {
  name: "Hannah Rivet",
  siteTitle: "Spatial Fieldwork",
  tag: "Field notes · spatial analysis · Ontario",
  headline: "Mapping how land, transit, and infrastructure actually work.",
  blurb: "A working portfolio in forestry and GIS — built to show how spatial data becomes a decision, not just a picture.",
  about: [
    "I hold a Forestry Technician diploma from Algonquin College and a GIS Applications Specialist graduate certificate from Fleming College. The projects here are self-directed case studies built to practice the full workflow — sourcing real open data, running the analysis, and producing something a decision-maker could actually use.",
    "Most are rooted in one region of Ontario so the work builds on itself; one zooms out province-wide where the problem called for it."
  ],
  email: "hannah.rivet@outlook.com",
  github: "",    // e.g. "https://github.com/your-username"
  linkedin: "",  // e.g. "https://www.linkedin.com/in/your-name"
  footerNote: "Built with QGIS, ArcGIS Online, and open data from Transport Canada, IESO, and Statistics Canada."
};

window.PROJECTS = [
  {
    slug: "ottawa-grade-crossings",
    title: "Grade Crossing Risk: Ottawa",
    ref: "OTT · 2026",
    type: "Dashboard",
    region: "City of Ottawa",
    status: "complete",
    summary: "Every rail-road grade crossing in Ottawa, ranked by Transport Canada's national risk model — built to surface which crossings carry risk before it shows up as a collision history.",
    finding: { num: "Rank 7 nationally", label: "Woodroffe Rd crossing, the highest-ranked of Ottawa's 68 assessed crossings" },
    links: [],
    tools: ["QGIS", "Python (PyQGIS)", "HTML / JavaScript"],
    data: ["Transport Canada Railway Crossing Inventory", "Statistics Canada census boundaries", "OpenStreetMap rail lines"],
    images: [],
    body: [
      "Transport Canada publishes a national risk ranking for rail-road grade crossings. This project pulls out the Ottawa crossings, cleans the inventory, and presents them as an interactive dashboard: a map, a ranked list, and summary figures by warning-system type and rail operator.",
      "The headline: Ottawa has 68 assessed crossings, and the Woodroffe Rd crossing ranks 7th out of roughly 19,000 assessed nationally.",
      "A write-up and screenshots of the dashboard will be added here."
    ]
  },
  {
    slug: "sudbury-grade-crossings",
    title: "Grade Crossing Risk: Greater Sudbury",
    ref: "GSB · 2026",
    type: "Dashboard",
    region: "City of Greater Sudbury",
    status: "complete",
    summary: "A companion read on Greater Sudbury's crossings using the same Transport Canada risk model, to compare how risk shows up across two Ontario rail networks.",
    finding: null,
    links: [],
    tools: ["QGIS", "HTML / JavaScript"],
    data: ["Transport Canada Railway Crossing Inventory", "Statistics Canada census boundaries", "OpenStreetMap rail lines"],
    images: [],
    body: [
      "The same method as the Ottawa dashboard, applied to Greater Sudbury so the two cities can be compared side by side.",
      "A write-up and screenshots will be added here."
    ]
  },
  {
    slug: "northeastern-ontario-transit",
    title: "Reading the Route: Transit Access in Northeastern Ontario",
    ref: "NE-ON · 2026",
    type: "StoryMap",
    region: "Nipissing – Cochrane corridor",
    status: "in-progress",
    summary: "Where the intercommunity bus network reaches, and where it doesn't, across Northeastern Ontario — and who is left without a way to reach a hospital or college.",
    finding: null,
    links: [],
    tools: ["ArcGIS StoryMaps", "QGIS", "GTFS"],
    data: ["Ontario Northland GTFS", "OpenStreetMap hospitals", "Statistics Canada census"],
    images: [],
    body: [
      "Work in progress. This StoryMap measures how far communities are from their nearest hospital and from the bus network, to identify places without daily intercommunity service."
    ]
  },
  {
    slug: "transmission-wildfire-risk",
    title: "Grid Under Pressure: Wildfire Risk to Ontario's Transmission Network",
    ref: "ON · 2026",
    type: "Map",
    region: "Province-wide",
    status: "in-progress",
    summary: "Where Ontario's high-voltage transmission corridors cross high wildfire-risk terrain — a province-scale look at a climate risk most grid maps don't show.",
    finding: null,
    links: [],
    tools: ["QGIS", "Adobe Illustrator"],
    data: ["IESO transmission data", "MNRF fire regime data"],
    images: [],
    body: [
      "Work in progress. The analysis will quantify how many kilometres of high-voltage line run through high-risk zones."
    ]
  },
  {
    slug: "northern-ev-charging",
    title: "Charging the Distance: EV Access Gaps in Northern Ontario",
    ref: "NE-ON · 2026",
    type: "Map",
    region: "Highways 11 & 17 corridor",
    status: "in-progress",
    summary: "Stretches of Northern Ontario's highway network that fall outside realistic EV charging range, accounting for cold-weather range loss.",
    finding: null,
    links: [],
    tools: ["QGIS", "OpenStreetMap"],
    data: ["Natural Resources Canada charging station data", "OpenStreetMap"],
    images: [],
    body: [
      "Work in progress. A buffer and gap analysis along Highways 11 and 17 to find stretches beyond charging range and the communities along them."
    ]
  }
];
