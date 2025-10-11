# GitHub Pages Deployment Instructions for Xtropic Website

## 🎯 Deployment Strategy: Hybrid Approach
- **Frontend**: GitHub Pages (https://xtropic.github.io/Xtropic-website/)
- **Backend**: Emergent Platform (FastAPI + MongoDB)

---

## 📋 Prerequisites

1. **GitHub Repository**: `xtropic/Xtropic-website`
2. **Deployed Backend on Emergent**: You'll need the backend URL after deployment

---

## 🚀 Step-by-Step Deployment

### Step 1: Deploy Backend on Emergent First

1. In your Emergent dashboard, click **"Deploy"** button
2. Wait ~10 minutes for deployment to complete
3. Copy your backend URL (e.g., `https://xtropic-backend-abc123.emergent.sh`)
4. **Save this URL** - you'll need it in Step 3

### Step 2: Prepare Your Local Repository

Open terminal and navigate to the frontend directory:

```bash
cd /app/frontend
```

### Step 3: Update Backend URL (IMPORTANT!)

Edit the file `/app/frontend/.env.production`:

```bash
# Replace the placeholder URL with your actual Emergent backend URL
REACT_APP_BACKEND_URL=https://your-actual-backend-url.emergent.sh
```

**Example:**
```
REACT_APP_BACKEND_URL=https://xtropic-backend-abc123.emergent.sh
```

### Step 4: Rebuild with New Backend URL

```bash
cd /app/frontend
yarn build
```

### Step 5: Initialize Git Repository (if not already done)

```bash
# In /app/frontend directory
git init
git add .
git commit -m "Initial commit - Xtropic website"
```

### Step 6: Connect to GitHub Repository

```bash
# Replace with your actual GitHub repository URL
git remote add origin https://github.com/xtropic/Xtropic-website.git
git branch -M main
```

### Step 7: Deploy to GitHub Pages

```bash
# This will build and deploy to gh-pages branch
yarn deploy
```

This command will:
- Build your React app
- Create/update `gh-pages` branch
- Push the build to GitHub Pages

### Step 8: Configure GitHub Pages Settings

1. Go to your GitHub repository: https://github.com/xtropic/Xtropic-website
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### Step 9: Wait for Deployment

- GitHub Pages will take 2-5 minutes to deploy
- Your site will be live at: `https://xtropic.github.io/Xtropic-website/`

---

## 🔄 Updating Your Website

Whenever you make changes:

```bash
cd /app/frontend

# Make your changes to the code

# Rebuild and deploy
yarn deploy
```

---

## 🔧 Troubleshooting

### Issue: Contact Form Not Working

**Cause**: Backend URL not updated in `.env.production`

**Fix**:
1. Update `/app/frontend/.env.production` with correct backend URL
2. Rebuild: `yarn build`
3. Redeploy: `yarn deploy`

### Issue: 404 Error on Refresh

**Cause**: GitHub Pages doesn't support client-side routing by default

**Fix**: Add a 404.html redirect (already configured in build)

### Issue: CORS Errors

**Cause**: Backend not allowing GitHub Pages origin

**Fix**: Update backend CORS settings on Emergent to allow:
```
https://xtropic.github.io
```

---

## 📁 Important Files

- `/app/frontend/.env.production` - Production backend URL
- `/app/frontend/package.json` - Contains homepage and deploy scripts
- `/app/frontend/build/` - Production build (auto-generated)

---

## 🌐 URLs After Deployment

- **Main Website**: https://xtropic.github.io/Xtropic-website/
- **Admin Login**: https://xtropic.github.io/Xtropic-website/login
- **Admin Dashboard**: https://xtropic.github.io/Xtropic-website/admin
- **Backend API**: https://your-backend-url.emergent.sh/api

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Website loads at GitHub Pages URL
- [ ] 3D Spline animation displays
- [ ] All sections visible (Hero, Vision, Products, Roadmap, Investment, Contact)
- [ ] Contact form submits successfully
- [ ] Toast notifications appear
- [ ] Admin login works
- [ ] Admin dashboard shows submissions
- [ ] No console errors

---

## 🔐 Security Notes

- Admin password: `xtropic2025` (change in production!)
- Backend authentication: Ensure Emergent backend has proper security
- HTTPS: Both GitHub Pages and Emergent use HTTPS automatically

---

## 💡 Quick Deploy Commands

```bash
# Navigate to frontend
cd /app/frontend

# Update backend URL in .env.production (do this once)
nano .env.production

# Deploy to GitHub Pages
yarn deploy
```

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify backend is running on Emergent
3. Confirm CORS settings allow GitHub Pages origin
4. Check that backend URL in .env.production is correct

---

**Your Xtropic website is now ready for GitHub Pages deployment! 🚀**
