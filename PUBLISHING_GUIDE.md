# How to Publish Your RTP Community Website for Free

This guide explains how to make your website accessible online for free.

## Option 1: GitHub Pages (Recommended - Easiest)

### Steps:
1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com and sign up (it's free!)

2. **Create a new repository**
   - Click the "+" icon in the top right
   - Choose "New repository"
   - Name it something like "rtp-community-website"
   - Make it PUBLIC (required for free hosting)
   - Click "Create repository"

3. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop ALL files from your rtp-community-website folder:
     - index.html
     - history.html
     - lately.html
     - culture.html
     - economy.html
     - future.html
     - styles.css
     - script.js
   - Scroll down and click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings (in your repository)
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait a few minutes, then your site will be live at:
     `https://yourusername.github.io/rtp-community-website/`

## Option 2: Netlify (Very Easy - Drag & Drop)

### Steps:
1. **Go to Netlify**
   - Visit https://www.netlify.com
   - Sign up for free account

2. **Deploy your site**
   - Drag and drop your entire `rtp-community-website` folder onto the Netlify page
   - Your site will be live instantly!
   - You'll get a URL like: `https://random-name-123.netlify.app`

3. **Customize your URL** (optional)
   - Go to Site settings
   - Change site name to something like "rtp-community"
   - Your new URL: `https://rtp-community.netlify.app`

## Option 3: Vercel (Great for Students)

### Steps:
1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up with GitHub (easiest way)

2. **Import your project**
   - Click "New Project"
   - Import from GitHub (if you uploaded to GitHub)
   - OR drag and drop your folder
   - Click "Deploy"
   - Your site is live!

## Option 4: Replit (Good for Learning)

### Steps:
1. **Go to Replit**
   - Visit https://replit.com
   - Sign up for free account

2. **Create HTML/CSS/JS Repl**
   - Click "Create Repl"
   - Choose "HTML/CSS/JS" template
   - Upload all your files
   - Click "Run"
   - Your site will be live with a URL like: `https://yourproject.repl.co`

## Important Notes:

1. **Images**: The current images use placeholder URLs. To use real RTP images:
   - Download images from RTP.org or other sources
   - Create an "images" folder in your project
   - Save images there (e.g., `images/rtp-building.jpg`)
   - Update image src in HTML: `src="images/rtp-building.jpg"`

2. **Google Maps**: The map should work automatically. If it doesn't:
   - Go to Google Maps
   - Search for "Research Triangle Park, NC"
   - Click "Share" → "Embed a map"
   - Copy the iframe code
   - Replace the iframe in your HTML files

3. **Testing**: Always test your site after publishing to make sure:
   - All pages load correctly
   - Navigation works
   - Images display
   - Map loads
   - Interactive diagram works

## Recommended: GitHub Pages
- Free forever
- Easy to update (just push new files)
- Professional URL option
- Great for portfolios

Good luck with your TSA competition!

