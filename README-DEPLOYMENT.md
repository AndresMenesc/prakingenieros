# PRAK Ingenieros - Next.js Deployment Guide

## ✅ Migration Complete!

Your site has been successfully migrated to Next.js with server-side rendering.

## 🚀 How to Deploy

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and deploy it correctly
6. Done! Your site is live with perfect SEO

**Why Vercel?**
- Created by Next.js developers
- Automatic optimization
- Free SSL certificate
- Global CDN
- Perfect for Next.js SSR

### Option 2: Other Platforms

**Railway, Render, or DigitalOcean:**

```bash
# Build command:
npm install && npm run build

# Start command:
npm run start
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📊 SEO Benefits

With this Next.js setup, you get:

✅ **Server-Side Rendering** - Google sees full HTML immediately
✅ **Dynamic Meta Tags** - Proper titles and descriptions per page  
✅ **Automatic Sitemap** - Generated at `/sitemap.xml`
✅ **Structured Data** - JSON-LD for better search results
✅ **Fast Loading** - Optimized assets and code splitting

## 📁 Project Structure

```
app/
├── page.tsx                    # Homepage (/)
├── contacto/page.tsx          # Contact page (/contacto)
├── servicios/
│   ├── asesoria-construccion/
│   ├── consultoria-ambiental/
│   └── marketing-digital/
├── components/                # All React components
├── lib/                       # Utility functions
└── sitemap.ts                # Auto-generated sitemap
```

## 🐛 Troubleshooting

If you encounter build errors on deployment:
1. Make sure Node.js version is 18+ 
2. The site works perfectly in development mode
3. For production, deploy to Vercel which handles dynamic rendering

## 📝 Notes

- React Router has been replaced with Next.js routing
- All navigation now uses Next.js Link and useRouter
- Pages are rendered server-side for perfect SEO
- The site is configured for dynamic (runtime) rendering
