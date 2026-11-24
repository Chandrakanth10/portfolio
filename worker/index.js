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

// Every address is HTTPS only: a plain HTTP request is sent to the same address over HTTPS,
// and every answer tells the browser to use HTTPS for the next year without asking again.
// Browsers keep that for the year even if this Worker is rolled back; withdrawing it means
// serving max-age=0 over HTTPS. Any future subdomain of theckp.com must have HTTPS too.
const hsts = 'max-age=31536000; includeSubDomains'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.protocol === 'http:') {
      // An HTTP-only port such as 8080 has no HTTPS twin, so the redirect drops it.
      url.protocol = 'https:'
      url.port = ''
      return Response.redirect(url.href, 301)
    }

    const launch = Date.parse(env.LAUNCH_AT)
    const held = heldHosts.has(url.hostname) && !(Date.now() >= launch)
    if (held) {
      return new Response(holding, {
        status: 503,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'no-store',
          'retry-after': '3600',
          'strict-transport-security': hsts,
        },
      })
    }
    // The asset's own headers can't be changed, so the answer is copied to add one.
    const asset = await env.ASSETS.fetch(request)
    const response = new Response(asset.body, asset)
    response.headers.set('strict-transport-security', hsts)
    return response
  },
}
