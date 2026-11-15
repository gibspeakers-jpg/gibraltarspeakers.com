import { describe, it, expect } from "vitest";
import {
  club,
  meeting,
  costs,
  links,
  benefits,
  meetingFormat,
  faqs,
  nav,
  seo,
  siteUrl,
  openHouse,
} from "./site";

const httpUrl = /^https?:\/\/\S+$/;
const mailtoUrl = /^mailto:\S+$/;

describe("club", () => {
  it("has required identity fields", () => {
    expect(club.name).toMatch(/Gibraltar/);
    expect(club.clubNumber).toBe("7961326");
    expect(club.city).toBe("Gibraltar");
  });
});

describe("siteUrl", () => {
  it("points at the public www domain", () => {
    expect(siteUrl).toBe("https://www.gibraltarspeakers.com");
  });
});

describe("openHouse", () => {
  it("has 16 Nov 2026 GFSB details", () => {
    expect(openHouse.dateLabel).toMatch(/16 November 2026/);
    expect(openHouse.addressLine).toMatch(/Irish Town/);
    expect(openHouse.timeLabel).toMatch(/6:30/);
  });
});

describe("meeting", () => {
  it("is every Monday at 19:00 at Kings Bastion Room 2", () => {
    expect(meeting.cadence).toBe("Every Monday");
    expect(meeting.day).toBe("Monday");
    expect(meeting.startTime).toBe("19:00");
    expect(meeting.venueName).toMatch(/Kings Bastion/);
    expect(meeting.room).toBe("Room 2");
  });

  it("documents Dec/Jan holiday break", () => {
    expect(meeting.holidayBreak).toMatch(/14 December/);
    expect(meeting.holidayBreak).toMatch(/11 January/);
  });

  it("has geo coordinates for Gibraltar", () => {
    expect(meeting.geo.latitude).toBeGreaterThan(36);
    expect(meeting.geo.latitude).toBeLessThan(37);
    expect(meeting.geo.longitude).toBeGreaterThan(-6);
    expect(meeting.geo.longitude).toBeLessThan(-5);
  });
});

describe("costs", () => {
  it("uses locked GBP framing", () => {
    expect(costs.headline).toBe("Less than £12 a month");
    expect(costs.firstSixMonthsAmount).toBe("£80");
    expect(costs.firstSixMonthsNote).toMatch(/£80/);
  });
});

describe("links", () => {
  it("uses info@ email and WhatsApp community invite", () => {
    expect(links.email.href).toMatch(mailtoUrl);
    expect(links.email.display).toBe("info@gibraltarspeakers.com");
    expect(links.whatsappCommunity.href).toContain("chat.whatsapp.com");
    expect(links.whatsappCommunity.label).toMatch(/WhatsApp community/i);
  });

  it("includes Facebook and LinkedIn only among socials", () => {
    expect(links.facebook.href).toContain("facebook.com/GibraltarToastmasters");
    expect(links.linkedin.href).toContain("linkedin.com/company/gibraltar-speakers");
    expect(links.github.href).toContain("gibspeakers-jpg/gibraltarspeakers.com");
    expect("instagram" in links).toBe(false);
    expect("toastmastersDirectory" in links).toBe(false);
  });

  it("all http(s) href values are valid", () => {
    for (const [key, link] of Object.entries(links)) {
      if (key === "email") {
        expect(link.href).toMatch(mailtoUrl);
      } else {
        expect(link.href, `links.${key}.href`).toMatch(httpUrl);
      }
      expect(link.label).toBeTruthy();
    }
  });
});

describe("content collections", () => {
  it("benefits / format / faqs are complete", () => {
    expect(benefits.length).toBeGreaterThan(0);
    expect(meetingFormat.length).toBeGreaterThan(0);
    expect(faqs.length).toBeGreaterThan(0);
    expect(faqs.some((f) => f.a.includes("£80"))).toBe(true);
    expect(faqs.some((f) => f.a.includes("14 December"))).toBe(true);
  });
});

describe("nav", () => {
  it("includes Open House and uses anchors", () => {
    expect(nav.some((n) => n.href === "#open-house")).toBe(true);
    for (const n of nav) {
      expect(n.href.startsWith("#")).toBe(true);
    }
  });
});

describe("seo", () => {
  it("has required SEO fields", () => {
    expect(seo.title).toMatch(/Gibraltar/);
    expect(seo.description).toMatch(/Monday/);
    expect(seo.locale).toBe("en_GB");
  });
});
