# BlockHaven SMP — Static website

Complete fictional public-facing website for the BlockHaven SMP cybersecurity OSINT event.

## Run locally

Open `index.html` in a browser, or serve this directory using `python -m http.server 8000` and visit http://localhost:8000.

## Publish on GitHub Pages

Upload all files (including the `assets/` folder) to a GitHub repository. In Settings → Pages, choose Deploy from a branch, the appropriate branch, and `/ (root)`. Relative links work from project subpaths.

## Event details

- Fictional reference date: October 20, 2026.
- Alex Morgan's contact email: alex.blockhaven@gmail.com (as supplied by organizer).
- All three plotlines are included: Season 5 economy migration, Build-Off, and hosting review.
- No forms, trackers, remote scripts (except optional Google Fonts CSS), or account collection.
- The public website intentionally does not expose the private organizer clue matrix.
- GitHub, Discord, and Bluesky links are configured with organizer-provided URLs.
- The decorative Minecraft-like landscape is built entirely with CSS.

## Before publication

Confirm that alex.blockhaven@gmail.com is organizer-controlled and approved for public display. Verify dates and external platform account links before sharing with participants.


## Configure GitHub, Discord, and Bluesky links

The official URLs are already configured in `assets/links.js`:

```js
window.BLOCKHAVEN_LINKS = {
  github: "https://github.com/BlockHavenSMP",
  discord: "https://discord.gg/KFY7eDjg",
  bluesky: "https://bsky.app/profile/redstoneranger.bsky.social"
};
```

The links appear in the footer on every page, in cards on the home page, and in contextual locations on the Contact, Staff, Events, and Changelog pages. The links are configured and clickable when the page loads.

Discord invites may expire: create a suitable invite and test it before the event. Use a public GitHub organization or profile URL and the exact Bluesky profile URL.
