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

Environment variables required (set these in Cloudflare Pages > Environment variables or in `.env.local` for local dev):

```
R2_BUCKET_NAME=my-photographer-assets
R2_PUBLIC_URL=https://<account-id>.r2.cloudflarestorage.com
CLOUDFLARE_ACCOUNT_ID=<your-account-id>
R2_ACCESS_KEY_ID=<your-access-key>
R2_SECRET_ACCESS_KEY=<your-secret-key>
```

Cloudflare Pages + R2 bindings
- In your Pages project, go to Settings > Functions and add an R2 binding with the same name used in `wrangler.toml` and `process.env` (e.g., `MY_R2` or use `R2_BUCKET_NAME` in code).
- For D1, add database bindings similarly in Pages > Functions (or use Workers + D1 if you need server-side SQL).

5. Deploy
- Trigger the first deploy; subsequent pushes to the connected branch will auto-deploy.

Notes
- For image optimization, Cloudflare handles static assets under `public/` — place your `logo.png` and portfolio images in `public/images/`.
- If you need server-side functions, consider Cloudflare Workers or Next.js adapter settings.

Quick deploy checklist:
- Add env vars in Cloudflare Pages.
- Ensure `wrangler.toml` (in repo) contains your `account_id` and bindings.
- Push to GitHub and trigger Pages deploy.
