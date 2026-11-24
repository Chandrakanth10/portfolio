// Holds theckp.com back until its launch time, LAUNCH_AT in wrangler.jsonc (an ISO time with
// its offset). Until then, or while LAUNCH_AT is empty, theckp.com and www show a short holding
// page; every other address, and theckp.com from that moment on, gets the site.
const heldHosts = new Set(['theckp.com', 'www.theckp.com'])

const holding = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Chandrakanth Puligundla</title>
<style>
  html, body { height: 100%; margin: 0; }
  body { display: grid; place-content: center; gap: .6rem; padding: 1.5rem; text-align: center;
    background: #000; color: #F2F4F0; font: 500 1.25rem/1.4 "IBM Plex Mono", ui-monospace, Menlo, monospace; }
  p { margin: 0; font-weight: 400; font-size: .9rem; color: #8E9690; }
</style>
</head>
<body>
<div>Chandrakanth Puligundla</div>
<p>Opening soon.</p>
</body>
</html>`

export default {
  fetch(request, env) {
    const launch = Date.parse(env.LAUNCH_AT)
    const held = heldHosts.has(new URL(request.url).hostname) && !(Date.now() >= launch)
    if (held) {
      return new Response(holding, {
        status: 503,
        headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'retry-after': '3600' },
      })
    }
    return env.ASSETS.fetch(request)
  },
}
