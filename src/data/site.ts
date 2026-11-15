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
    "Email us to visit any Monday evening - or join our WhatsApp community for the latest meeting info.",
} as const;

export const openHouse = {
  theme: "Find Your Voice",
  dateLabel: "Monday 16 November 2026",
  /** Inclusive last calendar day marketing is shown (Europe/Gibraltar). Hidden from 17 Nov 2026. */
  visibleUntil: "2026-11-16",
  startTime: "18:30",
  endTime: "20:00",
  timeLabel: "6:30-8:00 PM",
  venueName: "Gibraltar Federation of Small Businesses (GFSB)",
  addressLine: "122 Irish Town, Gibraltar",
  blurb:
    "See a Toastmasters meeting in action - prepared speeches, Table Topics, and a warm welcome. Free to attend; no pressure to speak.",
} as const;

/** YYYY-MM-DD in Europe/Gibraltar for the given instant. */
export function gibraltarCalendarDate(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Gibraltar",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Open House section/CTAs stay visible through end of visibleUntil (Gibraltar calendar). */
export function isOpenHouseVisible(now = new Date()): boolean {
  return gibraltarCalendarDate(now) <= openHouse.visibleUntil;
}

export const showOpenHouse = isOpenHouseVisible();

export const meeting = {
  cadence: "Every Monday",
  day: "Monday",
  startTime: "19:00",
  startTimeLabel: "7:00 PM",
  arriveBy: "18:45",
  arriveByLabel: "6:45 PM",
  durationMinutes: 60,
  durationLabel: "About an hour",
  venueName: "Kings Bastion Leisure Centre",
  venueSubtitle: "Line Wall Road, Gibraltar",
  addressLine: "Line Wall Road, Gibraltar GX11 1AA",
  latestInfoNote: "Join our WhatsApp community for the latest meeting info.",
  geo: { latitude: 36.1408, longitude: -5.3536 },
  holidayBreak: "Last meeting of the year: Monday 14 December. We return Monday 11 January.",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Kings%20Bastion%20Leisure%20Centre%2C%20Line%20Wall%20Road%2C%20Gibraltar&z=16&output=embed",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kings+Bastion+Leisure+Centre+Line+Wall+Road+Gibraltar",
} as const;

export const costs = {
  headline: "Less than £12 a month",
  firstSixMonthsAmount: "£80",
  firstSixMonthsPeriod: "first 6 months",
  firstSixMonthsNote: "£80 for your first 6 months as a new member.",
  ongoingNote: "After that, membership works out to less than £12 a month.",
  nonprofitNote:
    "Toastmasters is a registered non-profit. Every fee goes back into the programme, learning materials, and running the club - nobody profits.",
} as const;

export const links = {
  email: {
    label: "Email us",
    href: "mailto:info@gibraltarspeakers.com?subject=I%27d%20like%20to%20visit%20a%20meeting",
    display: "info@gibraltarspeakers.com",
  },
  whatsappCommunity: {
    label: "Join our WhatsApp community",
    href: "https://chat.whatsapp.com/CtmsqjINUmw265kCaplX17",
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/GibraltarToastmasters",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gibraltar-speakers-toastmasters-club",
  },
  github: {
    label: "GitHub repository",
    href: "https://github.com/gibspeakers-jpg/gibraltarspeakers.com",
  },
} as const;

export const benefits = [
  {
    title: "Speak with confidence",
    body: "From your first Table Topic to a prepared speech, every meeting gives you a safe, supportive stage to practise on - in English.",
    icon: "mic",
  },
  {
    title: "Grow as a leader",
    body: "Take on rotating meeting roles - Toastmaster, Evaluator, Timer - and discover how public speaking skills translate straight into leadership.",
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
    body: "Come as a guest, sit back, and watch. You are never asked to speak on your first visit - learn the ropes, then jump in when you are ready.",
    icon: "hand",
  },
  {
    title: "Real progress, fair cost",
    body: "Weekly practice for less than £12 a month. Compare that to a single coaching session and the value becomes obvious.",
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
    body: "A fun round of short impromptu speeches - one- to two-minute answers to a surprise question. This is where confidence is really built.",
  },
  {
    title: "Evaluations",
    body: "Every speaker gets constructive, encouraging feedback from a trained evaluator. You leave the meeting knowing exactly what to work on next.",
  },
  {
    title: "Meeting roles",
    body: "Timer, Ah-Counter, Grammarian, Toastmaster of the evening - rotating roles that sharpen listening, leadership, and attention to detail.",
  },
] as const;

export const faqs = [
  {
    q: "Will I have to speak on my first visit?",
    a: "No. You are welcome to come, watch, and enjoy the meeting as a guest. We will only invite you to speak when you tell us you are ready.",
  },
  {
    q: "How long is a meeting?",
    a: "About an hour. We start at 7:00 PM, so please try to arrive by 6:45 PM.",
  },
  {
    q: "When and where do you meet?",
    a: "Every Monday at 7:00 PM at Kings Bastion Leisure Centre, Line Wall Road. Guests are welcome - join our WhatsApp community for the latest meeting info, or email info@gibraltarspeakers.com so we know you are coming.",
  },
  {
    q: "What language are meetings in?",
    a: "All meetings are held in English. Every level of English is welcome - Gibraltar is a wonderfully mixed community and so are we.",
  },
  {
    q: "How much does it cost?",
    a: "Less than £12 a month. New members pay £80 for the first 6 months. Toastmasters is a non-profit - fees cover materials and the cost of running the club.",
  },
  {
    q: "Do I have to commit for a long time?",
    a: "Not at all. Guest visits are free and there is no commitment. Membership is paid in six-month periods, so you can always step away at the next renewal.",
  },
  {
    q: "Do you meet over the holidays?",
    a: "Our last meeting of the year is Monday 14 December. We return Monday 11 January.",
  },
  {
    q: "What is Pathways?",
    a: "Pathways is the official Toastmasters learning programme - a library of self-paced online projects that you work through at real meetings. You choose the path that fits your goals, from persuasive speaking to team leadership.",
  },
  {
    q: "Is there an age limit?",
    a: "Members must be 18 or older. Other than that, we welcome everyone - professionals, retirees, students, career changers.",
  },
] as const;

const navAll = [
  { href: "#open-house", label: "Open House" },
  { href: "#why-join", label: "Why join" },
  { href: "#what-happens", label: "What happens" },
  { href: "#pricing", label: "Pricing" },
  { href: "#meetings", label: "Meetings" },
  { href: "#how-to-join", label: "How to join" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const nav = showOpenHouse
  ? [...navAll]
  : navAll.filter((item) => item.href !== "#open-house");

const seoKeywordsBase = [
  "Toastmasters Gibraltar",
  "public speaking Gibraltar",
  "English speaking club Gibraltar",
  "leadership training Gibraltar",
  "Gibraltar Speakers Toastmasters",
] as const;

export const seo = {
  title: "Gibraltar Speakers Toastmasters - Public Speaking & Leadership Club",
  description: showOpenHouse
    ? "Gibraltar's English-speaking Toastmasters club. Every Monday 7 PM at Kings Bastion. Open House 16 November 2026. First visit free."
    : "Gibraltar's English-speaking Toastmasters club. Every Monday 7 PM at Kings Bastion. First visit free.",
  keywords: showOpenHouse
    ? [...seoKeywordsBase, "Open House Toastmasters Gibraltar"]
    : [...seoKeywordsBase],
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
  locale: "en_GB",
} as const;
