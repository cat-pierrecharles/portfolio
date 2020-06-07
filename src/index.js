import React from 'react'
import ReactDOM from 'react-dom'
import App from './javascript/App'
import './stylesheets/Index.scss'

if (typeof console === 'object') {
  console.log(`
  %cHello there! Thank you for visiting!
  If you\'re interested in the code that was used
  then why not checkout my GitHub repository: https://github.com/Pierre-Charles/portfolio
             _
     _      (o>
    (o>    //|     In the meantime, enjoy these penguins!
    (/)_   V_/_ 
  `, "color: #b8a0ff; font-size: 12px; font-family: ''Open Sans', Helvetica, sans-serif;'")
}

ReactDOM.render(<App />, document.getElementById('root'))