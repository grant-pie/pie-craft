# PieCraft

A community website for the PieCraft self-hosted Minecraft server. Built with Nuxt 3 and deployed via GitHub Pages.

## About

PieCraft is a survival Minecraft server with a custom economy and progression system. This site serves as the central hub for players to discover events, pick up jobs, take on quests, and browse the in-game shop.

## Pages

### Home
Welcome page with navigation cards and a community blog featuring player spotlights and server news.

### Events
Lists upcoming and ongoing server events with dates, descriptions, and images.

### Society Jobs
Repeatable and one-time tasks players can complete in-game for emerald rewards. Jobs include mining, lumber harvesting, baking, and building.

### Quests
Non-repeatable challenges that reward players with unique named and enchanted tools (e.g. *Evercleave*, *Burrowbane*, *Veinreaver*, *Nightfang*).

### Shop
Emerald-based trading post listing diamond tools and armor with their emerald costs.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Nuxt 3 |
| Styling | Bootstrap 5, Sass |
| Icons | Font Awesome |
| Routing | Vue Router (file-based via Nuxt) |
| Deployment | GitHub Pages (static generation) |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Generate static site
npm run generate

# Preview static build
npm run preview
```

The dev server runs at `http://localhost:3000/pie-craft/`.

## Deployment

The site is automatically deployed to GitHub Pages on every push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yaml`.

The site is served from `https://<username>.github.io/pie-craft/`.

## Project Structure

```
pie-craft/
├── pages/              # Route pages (index, events, jobs, quests, shop)
├── components/         # Reusable Vue components
│   ├── SideNav.vue     # Responsive sidebar navigation
│   ├── Article.vue     # Blog article card
│   ├── Event.vue       # Event listing card
│   ├── Job.vue         # Job task card
│   ├── Quest.vue       # Quest card
│   ├── ItemTrade.vue   # Trade display (item → item)
│   └── Item.vue        # Minecraft item with quantity badge
├── public/
│   └── images/         # Static assets (logo, backgrounds, item images)
├── plugins/            # Bootstrap and Font Awesome setup
└── nuxt.config.ts      # Nuxt configuration
```
