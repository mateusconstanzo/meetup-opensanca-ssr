import Head from 'next/head'
import PropTypes from 'prop-types' 
import 'isomorphic-fetch'

const Home = ({ data }) => (
  <div className="home container">
    <Head>
      <title>Opensanca - Desmistificando server-side rendering em react - Home</title>
    </Head>
    <ul>
      {data.map(function (item, index) {
        return <li key={index}>{item}</li>
      })}
    </ul>
  </div>
)

Home.getInitialProps = async () => {
  const data = await fetch('https://api.github.com/users/mateusconstanzo/repos')
    .then(res => res.json())
    .then(repos => repos.map((rep) => rep.name))

  return { data }
}

Home.defaultProps = {
  data: []
}

Home.propTypes = {
  data: PropTypes.array
}


export default Home