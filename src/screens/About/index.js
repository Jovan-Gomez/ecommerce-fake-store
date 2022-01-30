import Container from '../../components/Container'
import Title from '../../components/Title'
import './index.css'
const About = () => {
  return (
    <Container>
      <Title>About Fake Store</Title>
      <section className='about__container'>
        <img src='/img/about.svg' alt='about' width={500} />
        <div className='about__content'>
          <p>
            FakeStoreAPI is a free online REST API that you can use whenever you need Pseudo-real data for your
            e-commerce or shopping website without running any server-side code. It's awesome for teaching purposes,
            sample codes, tests and etc. You can visit in detail docs in FakeStoreAPI for more information.
          </p>
          <div>
            <h3 className='why'>Why?</h3>
            <p>
              When I wanted to design a shopping website prototype and needed fake data, I had to use lorem ipsum data
              or create a JSON file from the base. I didn't find any online free web service to return semi-real shop
              data instead of lorem ipsum data. so I decided to create this simple web service with NodeJs(express) and
              MongoDB as a database.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default About
