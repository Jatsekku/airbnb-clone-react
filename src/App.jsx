import Navbar from './components/Navbar'
import Hero from './components/Hero'
import data from './data'
import Card from './components/Card'

export default function App() {
  const cards = data.map(x =>
    (
      <Card
        key={x.id}
        item={x}
      />
    )
  )
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards--list'>
        {cards}
      </section>
    </div>
  )
}