# GitHub Pages Deployment - Static Website Only (FREE)

## 🎯 What This Is

This is a **static website deployment** with NO backend. 

### ✅ What Works:
- Beautiful dark-themed website
- All visual sections (Hero, Vision, Products, Roadmap, Investment)
- 3D Spline animation
- Responsive design
- Contact form (opens email client instead of saving to database)

### ❌ What Doesn't Work:
- Contact form submissions are NOT saved to database
- Admin dashboard is removed (requires backend)
- No data persistence

### 💰 Cost: **FREE** (0 credits)

---

## 🚀 Quick Deployment Steps

### Step 1: Navigate to Frontend Directory

```bash
cd /app/frontend
```

### Step 2: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Xtropic static website"
```

### Step 3: Connect to Your GitHub Repository

```bash
# Replace with your actual repository URL
git remote add origin https://github.com/xtropic/Xtropic-website.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
yarn deploy
```

This command will:
- Build your React app
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

### Step 5: Configure GitHub Pages

1. Go to: https://github.com/xtropic/Xtropic-website/settings/pages
2. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**

### Step 6: Wait & Visit

- Wait 2-5 minutes for GitHub to deploy
- Visit: **https://xtropic.github.io/Xtropic-website/**

---

## 📧 Contact Form Behavior

Since there's no backend, the contact form will:
1. Collect user information
2. Open the user's default email client with pre-filled information
3. User sends email manually to **contact@xtropic.com**

**⚠️ IMPORTANT**: Update the email address in `/app/frontend/src/pages/Home.jsx` (line ~28) to your actual email:

```javascript
const mailtoLink = `mailto:YOUR-EMAIL@xtropic.com?subject=${subject}&body=${body}`;
```

---

## 🔄 Updating Your Website

To update the website after making changes:

```bash
cd /app/frontend

# Make your code changes

# Deploy updates
yarn deploy
```

GitHub Pages will automatically update in 2-5 minutes.

---

## 📁 What's Deployed

The following files are deployed to GitHub Pages:

- `/build/` - Production React build
- `/build/index.html` - Main HTML file
- `/build/static/` - CSS, JS, and assets
- `/build/404.html` - Handles routing

---

## 🌐 Your Live URLs

After deployment:

- **Main Website**: https://xtropic.github.io/Xtropic-website/
- **Direct sections**: 
  - `/#vision`
  - `/#products`
  - `/#roadmap`
  - `/#investment`
  - `/#contact`

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Website loads at GitHub Pages URL
- [ ] All sections visible (Hero, Vision, Products, Roadmap, Investment, Contact)
- [ ] 3D Spline animation displays correctly
- [ ] Contact form opens email client when submitted
- [ ] No console errors in browser
- [ ] Responsive design works on mobile
- [ ] Favicon appears in browser tab

---

## 💡 Future Upgrades

If you want backend functionality later:

1. Deploy backend on Emergent (50 credits/month)
2. Update contact form to use API
3. Re-add admin dashboard
4. Redeploy to GitHub Pages

---

## 🔧 Troubleshooting

### Issue: Website shows 404 error

**Fix**: 
- Verify GitHub Pages is configured to use `gh-pages` branch
- Check Settings → Pages in your GitHub repository

### Issue: Contact form doesn't do anything

**Fix**: 
- Verify your email client is configured
- Update the email address in Home.jsx

### Issue: 3D animation doesn't load

**Fix**: 
- Check internet connection (Spline loads from external CDN)
- Verify console for errors

---

## 📞 Commands Reference

```bash
# Navigate to frontend
cd /app/frontend

# Build production version
yarn build

# Deploy to GitHub Pages
yarn deploy

# Both build and deploy
yarn deploy
```

---

## 🎉 You're Done!

Your Xtropic website is now live on GitHub Pages for **FREE**! 

Visit: **https://xtropic.github.io/Xtropic-website/**

No monthly costs, no backend management needed.

---

**Note**: This is a portfolio/showcase version. For full functionality with contact form submissions and admin dashboard, consider deploying the full-stack version on Emergent.
