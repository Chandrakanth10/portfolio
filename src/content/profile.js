import emailLogo from '../assets/logos/email.svg'
import githubLogo from '../assets/logos/github.svg'
import linkedinLogo from '../assets/logos/linkedin.png'
import { logos } from './logos.js'

export const profile = {
  name: 'Chandrakanth Puligundla',
  authorName: 'C. Puligundla',
  location: 'Bay Area',
  // The intro as bullets, each in parts (see Rich.jsx): plain text, an underlined phrase, and a name with its logo.
  intro: [
    [{ underline: 'Build data and ML pipelines' }, ' at ', { name: 'Walmart Global Tech', logo: logos.walmart }],
    [{ underline: 'Research' }, ' LLMs, cloud and quantum AI'],
    [{ underline: 'Review papers' }, ' for ICLR and ACL workshops and PLOS ONE'],
    [{ underline: 'Write and get quoted' }, ' on AI and cloud'],
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
