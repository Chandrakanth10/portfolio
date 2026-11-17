import emailLogo from '../assets/logos/email.svg'
import githubLogo from '../assets/logos/github.svg'
import linkedinLogo from '../assets/logos/linkedin.png'

export const profile = {
  name: 'Chandrakanth Puligundla',
  authorName: 'C. Puligundla',
  // The intro in parts: plain text, and the phrases that are underlined.
  intro: [
    'Data engineer in the Bay Area. I ',
    { underline: 'build data systems' },
    ', ',
    { underline: 'publish research' },
    ', and ',
    { underline: 'get quoted' },
    ' on AI and cloud.',
  ],
  contacts: [
    {
      label: 'Email',
      href: 'mailto:cpuligun@asu.edu',
      logo: { src: emailLogo, tile: '#E4E7E2', fit: 0.74 },
    },
    {
      label: 'GitHub',
      href: 'https://github.com/chandrakanth10',
      newTab: true,
      logo: { src: githubLogo, tile: '#ffffff', fit: 0.82 },
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/chandrakanth10',
      newTab: true,
      logo: { src: linkedinLogo, tile: '#0073b2', fit: 1 },
    },
  ],
}
