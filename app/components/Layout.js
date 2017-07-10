import React, {Component} from 'react'

export default class Layout extends Component {
  static fetchData({params, store}) {
  }
  render() {
    return <div>
      {this.props.children}
    </div>
  }
}