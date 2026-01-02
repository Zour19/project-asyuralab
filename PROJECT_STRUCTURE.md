# Project Structure - Photography Portfolio

Struktur folder menggunakan **Clean Architecture dengan Lego Components**.

## 📁 Folder Organization

```
src/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout (Navbar + Footer wrapper)
│   ├── globals.css               # Global styles
│   ├── page.js                   # Home page
│   ├── about/page.js             # About page
│   ├── portfolio/page.js         # Portfolio/Gallery page
│   ├── blog/page.js              # Blog listing page
│   └── contact/page.js           # Contact page
│
├── components/                   # Reusable Lego Components
│   ├── layout/                   # Layout components
│   │   ├── Navbar.js             # Navigation bar (Logo + Menu)
│   │   └── Footer.js             # Footer
│   │
│   ├── home/                     # Home page components
│   │   ├── Hero.js               # Hero section
│   │   ├── Features.js           # Services/Features
│   │   ├── GalleryPreview.js     # Gallery preview
│   │   └── CTA.js                # Call-to-action section
│   │
│   ├── about/                    # About page components
│   │   ├── Philosophy.js         # Photography philosophy
│   │   ├── Story.js              # Personal story
│   │   └── Likes.js              # What I like (6 cards)
│   │
│   ├── portfolio/                # Portfolio page components
│   │   ├── Filter.js             # Category filter buttons
│   │   └── Gallery.js            # Photo grid
│   │
│   ├── blog/                     # Blog page components
│   │   ├── Featured.js           # Featured article
│   │   └── List.js               # Blog posts list
│   │
│   └── contact/                  # Contact page components
│       ├── Form.js               # Contact form
│       └── Info.js               # Contact information
│
├── constants/                    # Static data & constants
│   └── about.js                  # About page content
│
├── utils/                        # Helper functions
│   ├── api.js                    # API calls
│   ├── helpers.js                # Helper functions
│   └── r2.js                     # Cloudflare R2 utilities
│
└── db/                           # Database configuration
    └── schema.ts                 # Database schema
```

## 🎨 Component Pattern

Setiap halaman dibangun dari **Lego Components** yang dapat digunakan kembali:

```
Page (app/about/page.js)
│
├── Philosophy (components/about/Philosophy.js)
├── Story (components/about/Story.js)
└── Likes (components/about/Likes.js)
```

## 📝 File Naming Convention

- **Components**: PascalCase (`Hero.js`, `Navbar.js`)
- **Utilities**: camelCase (`api.js`, `helpers.js`)
- **Constants**: UPPER_SNAKE_CASE untuk exports (`ABOUT_CONTENT`)

## 🔄 Data Flow

```
constants/about.js (Data Storage)
        ↓
components/about/Philosophy.js (Component)
        ↓
app/about/page.js (Page Assembly)
```

## 🚀 Next.js App Router

- `src/app/layout.js` - Root layout dengan Navbar & Footer
- `src/app/page.js` - Home page
- `src/app/[folder]/page.js` - Dynamic pages

## 💾 Tailwind CSS

Sudah dikonfigurasi di `src/app/globals.css` dengan:
- @tailwind directives
- Custom global styles

## 🔧 Utilities & Helpers

| File | Purpose |
|------|---------|
| `api.js` | API calls & data fetching |
| `helpers.js` | Helper functions |
| `r2.js` | Cloudflare R2 storage |

---

**Last Updated**: January 2, 2026
