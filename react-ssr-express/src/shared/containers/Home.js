import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types' 
import 'isomorphic-fetch'

const Home = ({ data }) => (
    <div className="home container">
        <Helmet>
            <title>Opensanca - Desmistificando server-side rendering em react - Home</title>
        </Helmet>
        <ul>
            {data.map(function (item, index) {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
)

Home.getInitialProps = () => fetch('https://api.github.com/users/mateusconstanzo/repos')
    .then(res => res.json())
    .then(repos => repos.map((rep) => rep.name))

Home.defaultProps = {
    data: []
}

Home.propTypes = {
    data: PropTypes.array
}

export default Home
