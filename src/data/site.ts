// Single source of truth for the Gibraltar Speakers site.
// Change values here; every component reads from this module.
// Do NOT hardcode URLs, phone numbers, fees, or meeting details anywhere else.

export const siteUrl = "https://www.gibraltarspeakers.com" as const;

export const club = {
  name: "Gibraltar Speakers Toastmasters Club",
  shortName: "Gibraltar Speakers",
  officialName: "Gibraltar Speakers",
  clubNumber: "7961326",
  chartered: "2022-08-01",
  city: "Gibraltar",
  country: "Gibraltar",
  district: "107",
  area: "1",
  division: "E",
  tagline: "Where Leaders Are Made",
  statusNote:
    "We are revitalising the club and welcoming new and returning members. Email us for the next meeting details.",
} as const;

export const meeting = {
  /** Human-readable cadence (not every Monday). */
  cadence: "2nd & 4th Monday of each month",
  day: "Monday",
  startTime: "18:30",
  startTimeLabel: "6:30 PM",
  arriveBy: "18:15",
  arriveByLabel: "6:15 PM",
  durationMinutes: 90,
  durationLabel: "About 90 minutes (plus or minus 15)",
  venueName: "Kings Bastion Leisure Centre",
  venueSubtitle: "Usual venue — please email to confirm before your first visit",
  room: "Room 2 (confirm on the day)",
  addressLine: "Line Wall Road, Gibraltar GX11 1AA",
  geo: { latitude: 36.1408, longitude: -5.3536 },
  holidayBreak:
    "We pause on Gibraltar public holidays. Email us if you are unsure whether a Monday meeting is on.",
  postMeeting:
    "Guests are welcome to stay and chat after the meeting — a friendly, low-pressure way to meet members.",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Kings%20Bastion%20Leisure%20Centre%2C%20Line%20Wall%20Road%2C%20Gibraltar&z=16&output=embed",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kings+Bastion+Leisure+Centre+Line+Wall+Road+Gibraltar",
  confirmBeforeVisit: true,
} as const;

export const costs = {
  headline: "Affordable practice — Toastmasters is a non-profit.",
  intlDuesAmount: "$60 USD",
  intlDuesPeriod: "every 6 months",
  intlDuesNote: "Toastmasters International membership dues",
  localFeeAmount: "Confirmed on joining",
  localFeePeriod: "every 6 months",
  localFeeNote: "Local club fee in GBP — exact amount confirmed by the treasurer when you join",
  joiningFeeAmount: "$25 USD",
  joiningFeePeriod: "one-time",
  joiningFeeNote: "New-member fee — only if you have never joined Toastmasters before",
  firstSixMonthsNote:
    "International dues and the one-time joining fee apply as set by Toastmasters International. Local dues are kept modest and confirmed when you join.",
  nonprofitNote:
    "Toastmasters is a registered non-profit. Every fee goes back into the programme, learning materials, and running the club — nobody profits.",
} as const;

export const links = {
  email: {
    label: "Email us",
    href: "mailto:GibSpeakers@gmail.com?subject=I%27d%20like%20to%20visit%20a%20meeting",
    display: "GibSpeakers@gmail.com",
  },
  toastmastersDirectory: {
    label: "Find us on Toastmasters.org",
    // Directory currently 404 while club rebuilds; keep short number form for when it returns.
    href: "https://www.toastmasters.org/Find-a-Club/7961326-gibraltar-speakers",
    available: false,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gibraltar-speakers-toastmasters-club/",
  },
  github: {
    label: "GitHub repository",
    href: "https://github.com/bingofishgame-web/gibraltar-speakers",
  },
} as const;

export const benefits = [
  {
    title: "Speak with confidence",
    body: "From your first Table Topic to a prepared speech, every meeting gives you a safe, supportive stage to practise on — in English.",
    icon: "mic",
  },
  {
    title: "Grow as a leader",
    body: "Take on rotating meeting roles — Toastmaster, Evaluator, Timer — and discover how public speaking skills translate straight into leadership.",
    icon: "leader",
  },
  {
    title: "Pathways learning",
    body: "Follow the official Toastmasters Pathways curriculum: self-paced online projects that turn real meetings into real progress.",
    icon: "path",
  },
  {
    title: "A Gibraltar community",
    body: "Meet neighbours and professionals on the Rock who want the same thing you do: clearer communication and stronger confidence.",
    icon: "globe",
  },
  {
    title: "Zero pressure first visit",
    body: "Come as a guest, sit back, and watch. You are never asked to speak on your first visit — learn the ropes, then jump in when you are ready.",
    icon: "hand",
  },
  {
    title: "Real progress, fair cost",
    body: "Regular practice for a non-profit fee. Compare that to a single coaching session and the value becomes obvious.",
    icon: "coin",
  },
] as const;

export const meetingFormat = [
  {
    title: "Prepared speeches",
    body: "Two or three members deliver short speeches they have rehearsed as part of their Pathways projects.",
  },
  {
    title: "Table Topics",
    body: "A fun round of short impromptu speeches — one- to two-minute answers to a surprise question. This is where confidence is really built.",
  },
  {
    title: "Evaluations",
    body: "Every speaker gets constructive, encouraging feedback from a trained evaluator. You leave the meeting knowing exactly what to work on next.",
  },
  {
    title: "Meeting roles",
    body: "Timer, Ah-Counter, Grammarian, Toastmaster of the evening — rotating roles that sharpen listening, leadership, and attention to detail.",
  },
] as const;

export const faqs = [
  {
    q: "Will I have to speak on my first visit?",
    a: "No. You are welcome to come, watch, and enjoy the meeting as a guest. We will only invite you to speak when you tell us you are ready.",
  },
  {
    q: "How long is a meeting?",
    a: "About 90 minutes (plus or minus 15). We aim to start at 6:30 PM, so please try to arrive by 6:15 PM.",
  },
  {
    q: "When and where do you meet?",
    a: "Historically on the 2nd and 4th Monday of each month at Kings Bastion Leisure Centre, Line Wall Road. Because we are revitalising the club, please email GibSpeakers@gmail.com before your first visit so we can confirm the next date and room.",
  },
  {
    q: "What language are meetings in?",
    a: "All meetings are held in English. Every level of English is welcome — Gibraltar is a wonderfully mixed community and so are we.",
  },
  {
    q: "How much does it cost?",
    a: "Toastmasters International dues are $60 USD every 6 months. New members also pay a one-time $25 USD joining fee if you have never been in Toastmasters before. Local club dues are confirmed when you join. Toastmasters is a non-profit — these fees cover materials and the cost of running the organisation.",
  },
  {
    q: "Do I have to commit for a long time?",
    a: "Not at all. Guest visits are free and there is no commitment. Membership is paid every six months, so you can always step away at the next renewal.",
  },
  {
    q: "What is Pathways?",
    a: "Pathways is the official Toastmasters learning programme — a library of self-paced online projects that you work through at real meetings. You choose the path that fits your goals, from persuasive speaking to team leadership.",
  },
  {
    q: "Is there an age limit?",
    a: "Members must be 18 or older. Other than that, we welcome everyone — professionals, retirees, students, career changers.",
  },
] as const;

export const nav = [
  { href: "#why-join", label: "Why join" },
  { href: "#what-happens", label: "What happens" },
  { href: "#pricing", label: "Pricing" },
  { href: "#meetings", label: "Meetings" },
  { href: "#how-to-join", label: "How to join" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const seo = {
  title: "Gibraltar Speakers Toastmasters — Public Speaking & Leadership Club",
  description:
    "Gibraltar's English-speaking Toastmasters club. Guests welcome — first visit free. Build confidence, public speaking, and leadership skills on the Rock.",
  keywords: [
    "Toastmasters Gibraltar",
    "public speaking Gibraltar",
    "English speaking club Gibraltar",
    "leadership training Gibraltar",
    "Gibraltar Speakers Toastmasters",
    "public speaking classes Gibraltar",
  ],
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
  locale: "en_GB",
} as const;
