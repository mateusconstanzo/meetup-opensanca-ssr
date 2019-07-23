import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import 'isomorphic-fetch'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch('https://api.github.com/users/mateusconstanzo/repos')
                .then(res => res.json())
                .then(repos => repos.map((rep) => rep.name))
                .then(repos => setData(repos))
        }

        fetchData()
    }, [])

    return (
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
}

export default Home
