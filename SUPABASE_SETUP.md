# Supabase setup for Lash Atelier

This project can run in two modes:

- Local mode: records stay in the current browser.
- Supabase mode: records sync through Supabase so the client and admin can see the same data.

## 1. Create tables

Open Supabase, go to SQL Editor, paste the contents of `supabase-schema.sql`, and run it.

The current policies are temporary public MVP policies. They are useful for testing the live sync quickly. Before using this with real clients, replace them with authenticated admin policies and public insert-only client policies.

## 2. Add public frontend keys

Open `config.js` and fill in:

```js
window.LASH_SUPABASE = {
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_ANON_PUBLIC_OR_PUBLISHABLE_KEY",
};
```

Use only the `anon public` key or the newer `sb_publishable_...` key here. Never paste the `service_role` key into this project.

## 3. Upload again

Upload the updated files from `publish` to GitHub/Vercel:

- `index.html`
- `app.js`
- `database.js`
- `config.js`
- `sw.js`
- `styles.css`
- `supabase-schema.sql`
- images and the existing helper files

## 4. Next security step

For a real production version, add Supabase Auth for the admin. Then clients can create bookings and requests, while only the logged-in admin can see phone numbers, update statuses, delete records, or change working hours.
