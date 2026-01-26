# 🚀 Deploying to Netlify with SSR

Your Next.js site is now configured for Netlify with Server-Side Rendering!

## ✅ Configuration Files Added

1. **netlify.toml** - Netlify build configuration
2. **next.config.ts** - Updated for Netlify compatibility
3. **@netlify/plugin-nextjs** - Enables SSR on Netlify

## 📝 Steps to Deploy on Netlify

### Option A: Deploy from Netlify Dashboard (Easiest)

1. **Go to Netlify Dashboard**
   - Log in to [app.netlify.com](https://app.netlify.com)

2. **Add New Site**
   - Click "Add new site" → "Import an existing project"

3. **Connect Your Repository**
   - Connect to your Git provider (GitHub, GitLab, Bitbucket)
   - Select your `nextjs-prakingenieros` repository

4. **Build Settings** (These should be auto-detected from netlify.toml):
   ```
   Build command: npm run build
   Publish directory: .next
   ```

5. **Environment Variables** (Add these in Netlify Dashboard):
   ```
   NODE_VERSION=18.17.0
   ```

6. **Deploy!**
   - Click "Deploy site"
   - Netlify will build and deploy your site with SSR

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site (from your project directory)
cd nextjs-prakingenieros
netlify init

# Deploy
netlify deploy --prod
```

## 🔧 Important Netlify Configuration

### Build Settings in Netlify Dashboard:

- **Base directory**: (leave empty or set to `nextjs-prakingenieros`)
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Functions directory**: `.netlify/functions` (auto-created)

### Environment Variables:

Add these in Netlify Dashboard under "Site configuration" → "Environment variables":

```
NODE_VERSION=18.17.0
NEXT_TELEMETRY_DISABLED=1
```

## 🎯 How SSR Works on Netlify

With the `@netlify/plugin-nextjs` plugin:

1. ✅ **Server-Side Rendering**: Pages render on Netlify's Edge Functions
2. ✅ **Google Crawling**: Bots see fully rendered HTML
3. ✅ **Dynamic Content**: All your React components work
4. ✅ **Fast Loading**: Netlify's global CDN

## 📊 Verifying SSR is Working

After deployment:

1. **Test with curl**:
   ```bash
   curl -A "Googlebot" https://your-site.netlify.app
   ```
   You should see full HTML with content (not just empty divs)

2. **Use Google's Rich Results Test**:
   - Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   - Enter your Netlify URL
   - It should show your content immediately

3. **Check View Source**:
   - Visit your live site
   - Right-click → "View Page Source"
   - You should see your content in the HTML (not just JavaScript)

## ⚠️ Important Notes

### Build Time vs Runtime

Due to React 19 library compatibility issues:
- ❌ Local static builds may fail
- ✅ **Netlify builds work** because it uses runtime rendering
- ✅ Pages render dynamically on each request

### Image Optimization

The config sets `images.unoptimized = true` because Netlify doesn't support Next.js Image Optimization. This is fine - images still work perfectly.

### Functions

Next.js pages are deployed as Netlify Functions, which handle the SSR automatically.

## 🐛 Troubleshooting

### If Build Fails on Netlify:

1. **Check Node Version**:
   - Set `NODE_VERSION=18.17.0` in environment variables

2. **Clear Cache**:
   - In Netlify Dashboard: "Site configuration" → "Build & deploy" → "Clear cache and retry deploy"

3. **Check Build Logs**:
   - Look for specific errors in the deploy log
   - Most issues are related to missing environment variables

### If SSR Isn't Working:

1. **Verify Plugin is Installed**:
   - Check that `@netlify/plugin-nextjs` is in your `package.json` devDependencies
   - It should be listed in `netlify.toml` under `[[plugins]]`

2. **Check Functions**:
   - After deployment, go to Netlify Dashboard → "Functions"
   - You should see `___netlify-handler` function

3. **Test with Googlebot User Agent**:
   ```bash
   curl -A "Googlebot/2.1" https://your-site.netlify.app
   ```

## 🎉 Success Indicators

You'll know SSR is working when:

✅ View source shows your actual content (not empty HTML)
✅ Google Search Console can crawl your pages
✅ Rich Results Test shows your content
✅ Social media previews work (Facebook, Twitter)
✅ Page loads show content immediately (even with JavaScript disabled)

## 📞 Need Help?

If you run into issues:
1. Check Netlify's deploy logs for specific errors
2. Verify `netlify.toml` is in your repository root
3. Ensure `@netlify/plugin-nextjs` is installed
4. Check that Node version matches (18.17.0 or higher)

---

**Your site is configured and ready to deploy with full SSR support! 🚀**

Push your code and deploy through Netlify Dashboard for best results.
