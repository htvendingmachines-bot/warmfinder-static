# WarmFinder

WarmFinder is a static travel inspiration site for UK travellers to find warm destinations by month, budget and flight time.

## Structure

- `/index.html` — Home page with hero, month picker, featured destinations and email signup.
- `/pages/months/*.html` — Individual month pages (January–December) with destination cards, filters, FAQs and navigation between months.
- `/pages/blog/index.html` — Blog index page.
- `/pages/blog/post-template.html` — Template for future blog posts.
- `/pages/about.html` — About page.
- `/pages/contact.html` — Contact page.
- `/pages/sitemap.xml` — Sitemap for search engines.
- `/pages/robots.txt` — Robots rules allowing indexing.
- `/styles/global.css` — Global styles.
- `/scripts/main.js` — JavaScript for filters and back-to-top button.

## Build & Deploy

This project is static HTML/CSS/JS. To deploy on a static hosting platform like Vercel:

1. Create a new GitHub repository (`warmfinder-static`) and push these files.
2. In Vercel, create a new project connected to the repo and select the **Static HTML** preset.
3. Set the root directory to `/` and deploy.
4. Add your custom domains (e.g. warmfinder.co.uk) in the Vercel dashboard and update your DNS to point to Vercel’s nameservers.

## Editing

To modify or add destinations:
- Open the relevant month file in `/pages/months/`.
- Add or edit `.card` blocks with `data-flight` and `data-price` attributes.
- Adjust filter options if you add new flight or price bands.
