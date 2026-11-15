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
} from "./site";

const httpUrl = /^https?:\/\/\S+$/;
const mailtoUrl = /^mailto:\S+$/;

describe("club", () => {
  it("has required identity fields", () => {
    expect(club.name).toMatch(/Gibraltar/);
    expect(club.clubNumber).toBe("7961326");
    expect(club.city).toBe("Gibraltar");
    expect(club.country).toBe("Gibraltar");
  });
});

describe("siteUrl", () => {
  it("points at the public www domain", () => {
    expect(siteUrl).toBe("https://www.gibraltarspeakers.com");
  });
});

describe("meeting", () => {
  it("has a valid schedule", () => {
    expect(meeting.day).toBe("Monday");
    expect(meeting.cadence).toMatch(/2nd & 4th Monday/i);
    expect(meeting.startTime).toMatch(/^\d{2}:\d{2}$/);
    expect(meeting.arriveBy).toMatch(/^\d{2}:\d{2}$/);
    expect(meeting.durationMinutes).toBeGreaterThan(0);
  });

  it("has geo coordinates for Gibraltar", () => {
    expect(meeting.geo.latitude).toBeGreaterThan(36);
    expect(meeting.geo.latitude).toBeLessThan(37);
    expect(meeting.geo.longitude).toBeGreaterThan(-6);
    expect(meeting.geo.longitude).toBeLessThan(-5);
  });

  it("has valid map and directions URLs", () => {
    expect(meeting.mapEmbedSrc).toMatch(httpUrl);
    expect(meeting.directionsUrl).toMatch(httpUrl);
  });
});

describe("costs", () => {
  it("documents all fee components", () => {
    expect(costs.intlDuesAmount).toBeTruthy();
    expect(costs.localFeeAmount).toBeTruthy();
    expect(costs.joiningFeeAmount).toBeTruthy();
    expect(costs.headline).toBeTruthy();
  });
});

describe("links", () => {
  it("email is mailto and socials are http(s)", () => {
    expect(links.email.href).toMatch(mailtoUrl);
    expect(links.linkedin.href).toMatch(httpUrl);
    expect(links.github.href).toMatch(httpUrl);
    expect(links.toastmastersDirectory.href).toMatch(httpUrl);
  });

  it("toastmasters directory uses the club number", () => {
    expect(links.toastmastersDirectory.href).toContain("7961326");
  });
});

describe("content collections", () => {
  it("benefits are non-empty and have title + body", () => {
    expect(benefits.length).toBeGreaterThan(0);
    for (const b of benefits) {
      expect(b.title).toBeTruthy();
      expect(b.body).toBeTruthy();
    }
  });

  it("meetingFormat entries are complete", () => {
    expect(meetingFormat.length).toBeGreaterThan(0);
    for (const m of meetingFormat) {
      expect(m.title).toBeTruthy();
      expect(m.body).toBeTruthy();
    }
  });

  it("faqs are complete", () => {
    expect(faqs.length).toBeGreaterThan(0);
    for (const f of faqs) {
      expect(f.q).toBeTruthy();
      expect(f.a).toBeTruthy();
    }
  });
});

describe("nav", () => {
  it("entries use anchor hrefs", () => {
    expect(nav.length).toBeGreaterThan(0);
    for (const n of nav) {
      expect(n.href.startsWith("#"), `nav href ${n.href}`).toBe(true);
      expect(n.label).toBeTruthy();
    }
  });
});

describe("seo", () => {
  it("has required SEO fields", () => {
    expect(seo.title).toMatch(/Gibraltar/);
    expect(seo.description).toBeTruthy();
    expect(seo.keywords.length).toBeGreaterThan(0);
    expect(seo.ogImage.startsWith("/")).toBe(true);
    expect(seo.locale).toBe("en_GB");
  });
});
