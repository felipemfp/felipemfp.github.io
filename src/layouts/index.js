import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Felipe Pontes"
      meta={[
        { name: 'description', content: 'Felipe Pontes is a research and software engineer.' },
        { name: 'keywords', content: 'software engineer, developer' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 720,
        padding: '3rem 1.0875rem 1.45rem',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
