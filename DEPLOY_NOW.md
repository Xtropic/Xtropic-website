# 🚀 Deploy to GitHub Pages NOW - Copy & Paste Commands

## Quick Deploy (5 Minutes)

Copy and paste these commands one by one:

### 1️⃣ Navigate to Frontend
```bash
cd /app/frontend
```

### 2️⃣ Update Contact Email (IMPORTANT!)
```bash
# Edit this file and replace contact@xtropic.com with your real email
nano src/pages/Home.jsx
# Find line ~28: mailto:contact@xtropic.com
# Press Ctrl+X, then Y, then Enter to save
```

### 3️⃣ Initialize Git
```bash
git init
git add .
git commit -m "Initial commit - Xtropic website"
```

### 4️⃣ Connect to GitHub
```bash
# Replace with YOUR GitHub repository URL
git remote add origin https://github.com/xtropic/Xtropic-website.git
git branch -M main
git push -u origin main
```

### 5️⃣ Deploy to GitHub Pages
```bash
yarn deploy
```

### 6️⃣ Configure GitHub
1. Go to: https://github.com/xtropic/Xtropic-website/settings/pages
2. Source: `gh-pages` branch, `/ (root)` folder
3. Click **Save**

### 7️⃣ Done! 🎉
Visit: **https://xtropic.github.io/Xtropic-website/**

---

## Update Website Later

```bash
cd /app/frontend
# Make your changes
yarn deploy
```

---

## ⚠️ Before Deploying

**Update your email address** in `/app/frontend/src/pages/Home.jsx`:

Find this line (around line 28):
```javascript
const mailtoLink = `mailto:contact@xtropic.com?subject=${subject}&body=${body}`;
```

Change `contact@xtropic.com` to **your actual email**.

---

## 💰 Cost: FREE

No Emergent credits needed for this deployment!

---

**Ready? Start with Step 1 above!** 🚀
