import React, { Component } from 'react'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  setTab = (index) => {
    this.setState({
      selected: index
    })
  }

  renderContent = () => {
    return (
      <div className='tabContent'>
        { this.props.children[this.state.selected] }
      </div>
    )
  }

  renderLabels = () => {
    return (
      this.props.children.map((children, index) => {
        <div key={children.props.label} onClick={ () => { setTab(index) }}>
          {children.props.label}
        </div>
      })
    )
  }

  render() {
    return(
      <div className='tabs'>
        { this.renderContent() }
        { this.renderLabels() }
      </div>
    )
  }


}