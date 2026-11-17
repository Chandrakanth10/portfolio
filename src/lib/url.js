// Every in-site address is built here, from the base path,
// so that links work at "/" and at "/portfolio/".
const base = import.meta.env.BASE_URL

export const pageUrl = (page = '', id = '') =>
  base + (page ? `${page}/` : '') + (id ? `#${id}` : '')
