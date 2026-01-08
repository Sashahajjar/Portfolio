# 🚀 Deploy Portfolio to GitHub Pages

Your portfolio is ready to deploy! Follow these steps:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or your preferred name)
3. Make it **Public**
4. **Don't** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Push to GitHub

Run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
cd /Users/sashahajjar/Desktop/ProjetPerso/Portfolio/frontend
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save

## Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete
4. Your portfolio will be live!

## 🌐 Your Portfolio URL

After deployment, your portfolio will be at:
**`https://YOUR_USERNAME.github.io/portfolio/`**

## ✨ Automatic Updates

Every time you push changes, GitHub Actions will automatically rebuild and deploy your site!

