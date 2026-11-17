import albertsonsLogo from '../assets/logos/albertsons.png'
import bigqueryLogo from '../assets/logos/bigquery.svg'
import emailLogo from '../assets/logos/email.svg'
import githubLogo from '../assets/logos/github.svg'
import linkedinLogo from '../assets/logos/linkedin.png'
import pythonLogo from '../assets/logos/python.png'
import snowflakeLogo from '../assets/logos/snowflake.png'

export const profile = {
  name: 'Chandrakanth Puligundla',
  authorName: 'C. Puligundla',
  location: 'Bay Area',
  // The intro as bullets, each in parts: plain text, an underlined phrase, and a name with its logo.
  intro: [
    [
      { underline: 'Build data systems' },
      ' at ',
      { name: 'Albertsons', logo: { src: albertsonsLogo, tile: '#ffffff', fit: 0.82 } },
      ', in ',
      { name: 'Python', logo: { src: pythonLogo, tile: '#ffffff', fit: 0.8 } },
      ' on ',
      { name: 'Snowflake', logo: { src: snowflakeLogo, tile: '#ffffff', fit: 1 } },
      ' and ',
      { name: 'BigQuery', logo: { src: bigqueryLogo, tile: '#ffffff', fit: 0.76 } },
    ],
    [{ underline: 'Publish research' }, ' on LLMs in software engineering'],
    [{ underline: 'Get quoted' }, ' on AI and cloud'],
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
