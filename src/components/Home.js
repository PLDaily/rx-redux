import React from 'react'
import { connect } from 'react-redux'
import { searchUser } from '../redux/modules/user'

class Home extends React.Component {
  onClick () {
    this.props.dispatch(searchUser({
      name: 'PLDaily2',
      age: 101,
      sex: 'man'
    }))
  }
  render () {
    const { name, age, sex } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <button onClick={() => this.onClick()}>Get use!</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    name: state.user.name,
    age: state.user.age
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
