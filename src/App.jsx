import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Research from './pages/Research.jsx'
import Reviews from './pages/Reviews.jsx'
import Media from './pages/Media.jsx'

const pages = { home: Home, work: Work, research: Research, reviews: Reviews, media: Media }

const App = ({ page }) => {
  const Page = pages[page] ?? Home
  return <Page />
}

export default App
