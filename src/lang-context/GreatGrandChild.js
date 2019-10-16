import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {
    static contextType = LanguageContext;

  render() {
    const copy = languageSpecificCopy[this.context.lang] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button>
            Klingon!{' '}
        </button>
      </section>
    )
  }
}

export default GreatGrandChild