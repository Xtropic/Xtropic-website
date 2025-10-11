# 🚀 Quick Start - Deploy Xtropic to GitHub Pages

## Quick 5-Step Deployment

### 1️⃣ Deploy Backend on Emergent
- Click **"Deploy"** in Emergent dashboard
- Wait 10 minutes
- Copy backend URL (e.g., `https://xtropic-xyz.emergent.sh`)

### 2️⃣ Update Backend URL
Edit `/app/frontend/.env.production`:
```
REACT_APP_BACKEND_URL=https://your-actual-backend-url.emergent.sh
```

### 3️⃣ Build & Deploy
```bash
cd /app/frontend
yarn build
yarn deploy
```

### 4️⃣ Configure GitHub Pages
- Go to: https://github.com/xtropic/Xtropic-website/settings/pages
- Source: `gh-pages` branch, `/ (root)` folder
- Save

### 5️⃣ Done! 🎉
Visit: https://xtropic.github.io/Xtropic-website/

---

## What's Included

✅ **Frontend (GitHub Pages)**
- React website with all pages
- 3D Spline animation
- Dark theme design
- Responsive layout

✅ **Backend (Emergent)**
- FastAPI server
- MongoDB database
- Contact form API
- Admin dashboard API

✅ **Features Working**
- Contact form submissions
- Admin login (password: `xtropic2025`)
- Admin dashboard
- All interactive elements

---

## Files Ready for GitHub

📁 **Frontend Directory** (`/app/frontend/`)
- All source code
- Production build in `/build/` folder
- GitHub Actions workflow
- Environment configuration

📝 **Configuration Files**
- ✅ `package.json` - with homepage and deploy scripts
- ✅ `.env.production` - backend URL (update before deploy)
- ✅ `.github/workflows/deploy.yml` - auto-deployment
- ✅ `public/404.html` - routing support

---

## Before First Deploy

⚠️ **IMPORTANT**: Update these files:

1. `/app/frontend/.env.production` - Add your Emergent backend URL
2. Commit all files to Git
3. Push to GitHub
4. Run `yarn deploy`

---

## URLs After Deployment

🌐 **Production URLs:**
- Website: `https://xtropic.github.io/Xtropic-website/`
- Login: `https://xtropic.github.io/Xtropic-website/login`
- Admin: `https://xtropic.github.io/Xtropic-website/admin`
- Backend API: `https://[your-backend].emergent.sh/api`

---

## Need Help?

📖 Full instructions: `/app/GITHUB_DEPLOYMENT_INSTRUCTIONS.md`

---

**Ready to deploy! Follow the 5 steps above.** 🚀
