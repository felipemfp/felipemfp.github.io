import React from 'react'
import Link from 'gatsby-link'

import './index.css'

import { Emoji } from 'emoji-mart'

const ProjectItem = ({name, url, description}) => (
  <li>
    <a href={url}>{name}</a>{' - '}{description}
  </li>
)

const TalkItem = ({event, title, url}) => (
  <li>{event}{' - '}
      { url 
        ? <a href={url}>{title}</a>
        : title
      }
  </li>
)

const WorkshopItem = TalkItem

const IndexPage = () => (
  <div>
    <section>
      <h1>
        Hi, I'm Felipe Pontes <Emoji emoji="man-raising-hand" skin="2" set="twitter" size={48} /> 
      </h1>
      <p>
        A passionate <strong>software developer</strong> who loves to learn and build
        solutions for real problems.
      </p>
      <p>
        You can reach me at <a href="https://twitter.com/felipemfp">Twitter</a>, <a href="https://github.com/felipemfp">Github</a>, <a href="https://linkedin.com/in/felipemfp">LinkedIn</a> or <a href="mailto:felipemfpontes@gmail.com">email</a>.
      </p>      
    </section>

    <section>
      <h3><Emoji emoji="male-technologist" skin="2" set="twitter" size={24} /> Projects</h3>
      <ul>
        <ProjectItem name="GeoGuide" url="https://geoguideproject.github.io" description="a web-based environment for analysis, cleaning and visualization of large amounts of spatio-temporal data." />
        <ProjectItem name="SIAC" url="https://projeto-siac.github.io" description="a project for allow students take self assessment test from anywhere." />
        <ProjectItem name="Dicio" url="https://felipemfp.github.com/dicio" description="an unofficial API to get data from Dicio.com.br." />
        <ProjectItem name="passando-na-tv" url="https://github.com/felipemfp/passando-na-tv" description="a CLI for Brazilian TV broadcasters." />
        <ProjectItem name="IFRN Messenger" url="https://github.com/felipemfp/ifrn-messenger" description="a messaging app to connect students at IFRN." />
        <ProjectItem name="Alpaca" url="https://github.com/felipemfp/alpaca" description="a microservice for mocking API requests." />
      </ul>
    </section>

    <section>
      <h4>More projects</h4>
      <ul>
        <ProjectItem name="OBI" url="https://github.com/felipemfp/obi" description="a collection of resolutions of Brazilian Olympiad in Informatics problems." />
        <ProjectItem name="Liturgia" url="https://github.com/felipemfp/liturgia" description="a scraper script to track the Daily Readings." />
        <ProjectItem name="Racing" url="https://github.com/felipemfp/racing" description="a racing game with many modes and difficulties." />
        <ProjectItem name="Catherine" url="https://felipemfp.github.com/catherine" description="a RESTful API for developers and students create applications that integrate an API." />
        <ProjectItem name="What's the Chelsea's next match?" url="https://felipemfp.github.io/chelsea-next-match/" description="a React web app to know the next match of Chelsea FC." />
        <ProjectItem name="Batalha Naval" url="https://felipemfp.github.com/batalha-naval" description="a JavaScript version of Battleship game." />
        <ProjectItem name="Combate ao Aedes" url="https://felipemfp.github.io/projeto-aedes/" description="an app to remember to perform tasks to prevent the mosquito Aedes aegypti." />
        <ProjectItem name="Me Nota" url="https://github.com/felipemfp/me-nota" description="an instant messaging app for Windows Phone." />
        <ProjectItem name="Lucky Challenge" url="https://felipemfp.github.com/lucky-challenge" description="a JavaScript game just for fun." />
        <ProjectItem name="iReport" url="https://github.com/felipemfp/iReport" description="a .NET system for school/college management that includes courses, subjects and report cards." />
        <ProjectItem name="Sales" url="https://github.com/felipemfp/sales" description="a .NET system for store management." />
      </ul>
      <p>Check out more on my <a href="https://github.com/felipemfp">GitHub</a> profile.</p>
    </section>

    <section>
      <h3><Emoji emoji="studio_microphone" set="twitter" size={24} /> Talks and Workshops</h3>
      <h4>2018</h4>
      <ul>
        <WorkshopItem event="GDG Natal Meeting #12" title="React-Native for Beginners" url="https://github.com/cades-ifrn/minicurso-react-native-gdg-natal" />
      </ul>
      <h4>2017</h4>
      <ul>
        <WorkshopItem event="VII WTADS 2017" title="Introduction to React-Native" url="https://github.com/cades-ifrn/minicurso-react-native-wtads" />
        <TalkItem event="Python Day Natal 2017" title="Data Exploration with Pandas" url="https://speakerdeck.com/felipemfp/explorando-dados-com-pandas" />
      </ul>
    </section>

    <section>
      <h3><Emoji emoji="rocket" set="twitter" size={24} /> Activities</h3>
      <ul>
        <li>Co-founder of <a href="https://cades.natal.br">CADES</a></li>
        <li>Organization Committee Member at the <a href="http://fr-br-school.ifrn.edu.br/">2nd Brazilian-French School of Big Data and Smart Cities</a></li>
      </ul>
    </section>

    <section style={{paddingTop: '3rem', textAlign: 'center'}}>
      <p>
        Made with <Emoji emoji="heart" set="twitter" size={20} /> by <strong>Felipe Pontes</strong>
        <br/>
        <small>
          See something wrong? Report <a href="https://github.com/felipemfp/felipemfp.github.io/issues/new">here</a>.
        </small>
      </p>
    </section>
  </div>
)

export default IndexPage
