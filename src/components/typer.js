import React, { Component } from "react"
import Typed from "typed.js"

class Typer extends Component {
  componentDidMount() {
    const { strings } = this.props
    const options = {
      strings: strings,
      typeSpeed: 25,
      backSpeed: 25,
      onComplete: self => {
        self.cursor.remove()
      },
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <span
        style={{ whiteSpace: "pre" }}
        ref={el => {
          this.el = el
        }}
      />
    )
  }
}

export default Typer
