import React from 'react'
import axios from 'axios'

import Loading from './components/Loading'
import Users from './components/Users'
import './App.css';


class App extends React.Component {
  
  state = {
    loading: false, 
    users: [],
    showAddress: false
  }

  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({users: res.data})
    this.setState({loading: false})
  }

  render() {
    const {loading, users, showAddress} = this.state

    const showAddressInfo = () => {
      showAddress ? this.setState({showAddress: false}) : this.setState({showAddress: true})
    }

    if (loading) {
      return <Loading />
    }

    return (
      <div className="App">
        <Users users={users} showAddressInfo={showAddressInfo} showAddress={showAddress}/>
      </div>
    );
  }
}

export default App;
