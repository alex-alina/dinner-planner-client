import React, { Component } from 'react'
import './Navbar.css'
import { connect } from 'react-redux';
import { Newbar } from './Newbar';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = {}

  onClick = () => {
    this.setState({
      search: ''
    })
  }

  onChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div>
        {this.props.user === null && <Newbar />}
        {this.props.user !== null &&
          <div className="nav-wrapper1">
            <Link to="/planner" className="brand-logo"><img src='images/logo.svg' alt='logo' className='logo-pic' /></Link>
            <ul className='bar'>
              <li><Link to='/planner'>WEEKLY PLANNER</Link></li>
              <li><Link to='/recipes'>SEARCH</Link></li>
              <li>FAVORITES</li>
              <li>CREATE YOUR OWN</li>
              <li>BLOG</li>
              <li> <Link to='/shopping-list'><img src='images/shoppinglist.svg' alt='shopping-list' /></Link></li>
              <li><div className='logout-container'><Link to='/logout'><img src='images/LogoutAvatar.svg' alt='avatar' className='logout-avatar'/></Link></div></li>
            </ul>
            <input className="search-box" type="box" placeholder="Try 'Dinner' ..." value={this.state.search} onChange={this.onChange}/>
            <Link to='/recipes'><button className="search-button" onClick={this.onClick}>Search</button></Link>
          </div>
        }
      </div>

    );
  }
}


const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(Navbar)



