import { GifList } from '../GifList'
import { Navbar } from '../Navbar'
import { Searchbar } from '../Searchbar'
import './Home.css'

export const Home = () => {
  return (
    <section className="home-container">
      <section>
        <header>
          <Navbar />
          <Searchbar />
        </header>
        <main>
          <GifList />
        </main>
      </section>
    </section>
  )
}
