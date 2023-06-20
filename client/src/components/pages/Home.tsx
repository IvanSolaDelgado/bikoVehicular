import { GifList } from '../GifList'
import { Navbar } from '../Navbar'
import './Home.css'

export const Home = () => {
  return (
    <section className="home-container">
      <section>
        <header>
          <Navbar />
        </header>
        <main>
          <GifList />
        </main>
      </section>
    </section>
  )
}
