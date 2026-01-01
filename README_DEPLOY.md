Deployment to Cloudflare Pages (via GitHub)

1. Push to GitHub
- Create a new repository on GitHub named `my-photographer-website`.
- Commit and push the project root to that repository.

2. Connect Cloudflare Pages
- In Cloudflare dashboard, go to Pages and create a new project.
- Connect your GitHub account and select the `my-photographer-website` repo.

3. Build settings
- Framework preset: `Next.js`
- Build command: `npm run build`
- Build output directory: `.next`

4. Environment
- Ensure `NODE_VERSION` matches project (>=16 recommended).
- If you use any private API keys, add them in Cloudflare Pages > Environment variables.

5. Deploy
- Trigger the first deploy; subsequent pushes to the connected branch will auto-deploy.

Notes
- For image optimization, Cloudflare handles static assets under `public/` — place your `logo.png` and portfolio images in `public/images/`.
- If you need server-side functions, consider Cloudflare Workers or Next.js adapter settings.
