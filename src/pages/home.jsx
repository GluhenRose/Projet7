import Banner from "../components/banner/Banner"
import Card from "../components/card/Card"
import data from "../data/data.json"

function Home() {
  return (
    <main>
    <Banner />
      <section className="gallery">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  )
}

export default Home