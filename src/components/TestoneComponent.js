import React, { Component } from 'react'
import { Button } from 'material-ui'

class TestoneComponent extends Component {
  constructor(props) {
    super(props)
    this.handleClickProductOne = this.handleClickProductOne.bind(this)
    this.handleClickProductTwo = this.handleClickProductTwo.bind(this)
    this.state = {
      product: [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
      ],
    }
  }

  handleClickProductOne() {
    let { product } = this.state
    product[0].price = '$444.99'
    this.setState({product: product})
  }

  handleClickProductTwo() {
    let { product } = this.state
    product[0].price = '$2444.99'
    this.setState({product: product})
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
  }

  render() {
    const { product } = this.state
    let arrProduct = new Array;
    product.forEach(function(rowProduct) {
      arrProduct.push(<RowRender category={rowProduct.category} price={rowProduct.price} name={rowProduct.name} />)
    })
    return (
      <div>
        <style>{`
          table td {
            border: 1px solid black
          }
          table thead td {
            text-align: center
          }
        `}</style>
        <table width="500px" Border="1">
          <thead>
            <tr>
              <td width="40%" align="left">Category</td>
              <td width="40%" align="left">Name</td>
              <td width="" align="left">Price</td>
            </tr>
          </thead>
          <tbody>
            {arrProduct}
          </tbody>
        </table>
        <br/>
        <Button raised color="primary" onClick={this.handleClickProductOne}>
          ChangeOne
        </Button>
        &nbsp;
        <Button raised color="primary" onClick={this.handleClickProductTwo}>
          ChangeTwo
        </Button>
      </div>
    )
  }

}

class RowRender extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td align="center">{this.props.category}</td>
        <td align="center">{this.props.name}</td>
        <td align="center">{this.props.price}</td>
      </tr>
    )
  }

}

export default TestoneComponent