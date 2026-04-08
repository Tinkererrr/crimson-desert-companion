# ⚔️ Crimson Desert Timer Companion

> A mobile-first Progressive Web App that tracks in-game activity timers for **Crimson Desert** — so you can play on your console or PC while your phone notifies you when actions are ready.

![Version](https://img.shields.io/badge/version-1.0.0-c41c1c?style=flat-square) ![PWA](https://img.shields.io/badge/PWA-ready-4a8c2a?style=flat-square) ![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-555?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-888?style=flat-square)

---

## What It Does

Crimson Desert uses an in-game clock where **1 in-game hour = 5 real minutes**. Many game activities run on this clock — dispatches, banking cycles, vendor restocks, sleep cooldowns — but the game gives you no way to track them from another device.

This companion app solves that. Open it on your **phone**, start the timers you need, then put your phone down and play on your **TV, monitor, or console**. Your phone will send a push notification with vibration when each timer completes.

---

## Built-In Presets

| Activity | Real-Time Duration | In-Game Time |
|---|---|---|
| 🏦 Bank Payout | 2h 00m | 24 in-game hours |
| 💰 Bank Refresh | 6h 00m | 3 in-game days |
| 🛡️ Dispatch: Security | 1h 05m | 13 in-game hours |
| ⚔️ Dispatch: Standard | 1h 25m | 17 in-game hours |
| 🗡️ Dispatch: Long | 1h 30m | 18 in-game hours |
| 🛒 Vendor Restock | 2h 00m | Every in-game midnight |
| 😴 Sleep Cooldown | 50m 00s | 10 in-game hours |
| ＋ Custom Timer | Any | Set your own h / m / s |

---

## How to Use

### Step 1 — Host the app
Deploy the three files (`crimson-desert-timers.html`, `sw.js`, `manifest.json`) to any static hosting service:
- **[Netlify Drop](https://app.netlify.com/drop)** — drag and drop, free, instant URL
- **GitHub Pages** — enable Pages on this repo under Settings → Pages → Deploy from branch `main`
- **Cloudflare Pages** — free, fast CDN

### Step 2 — Open on your phone
Navigate to the hosted URL in your phone's browser.

### Step 3 — Install to home screen
| Platform | How to install |
|---|---|
| **Android (Chrome)** | Tap the 3-dot menu → "Add to Home Screen" |
| **iPhone (Safari)** | Tap the Share icon → "Add to Home Screen" |

Once installed, the app behaves like a native app — it opens full-screen with no browser chrome.

### Step 4 — Enable notifications
Tap the **🔔 bell icon** in the top-right of the app (or the banner at the top) and grant notification permission. This is required for background alerts.

### Step 5 — Start timers and play
- Tap any **preset tile** to instantly start that timer
- Or tap **＋ Custom Timer** to set your own hours / minutes / seconds
- Timers show a circular progress ring, countdown, and status
- Each timer supports **Pause**, **Reset**, and **Dismiss**
- When a timer completes, your phone vibrates and displays a notification banner — even if the app is in the background

---

## Publish to Google Play

The app can be wrapped as a native Android APK using a Trusted Web Activity (TWA):

1. Install [Bubblewrap CLI](https://github.com/GoogleChromeLabs/bubblewrap): `npm i -g @bubblewrap/cli`
2. Run `bubblewrap init --manifest https://your-hosted-url/manifest.json`
3. Run `bubblewrap build` to generate a signed APK
4. Upload to [Google Play Console](https://play.google.com/console)

Alternatively, use **[PWA Builder](https://www.pwabuilder.com)** (no CLI needed — paste your URL and download the APK package).

---

## Changelog

### v1.0.0 — 2026-04-08
- Initial release
- 7 built-in game activity presets (banking, dispatches, vendors, sleep)
- Custom timer support (hours / minutes / seconds)
- Push notifications via Service Worker (works in background)
- PWA manifest — installable on Android and iPhone
- Circular progress rings with live countdown
- Pause, Resume, Reset, Dismiss controls per timer
- Toast notification system
- In-game time ratio reference bar (1 hr = 5 min)

---

## Notes

- **Not affiliated with Pearl Abyss.** This is a fan-made companion tool.
- Timer state is stored in `localStorage` — timers survive page refreshes but not browser data clears.
- Background notification reliability depends on the device OS and browser. For best results, install the app to your home screen.
- iOS background notifications require iOS 16.4+ with the app installed to the home screen via Safari.

---

## License

MIT — free to use, modify, and distribute.