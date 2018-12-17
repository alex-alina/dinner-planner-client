import React from 'react'
import { withRouter } from 'react-router'
// import { userId } from '../jwt'
import { connect } from 'react-redux'
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    // const { location, history, user } = props

    return (
        <div>

           
          {/* <div className="right hide-on-med-and-down">

            {
              user &&
              <button>{ user.name }</button>
            }
    
            {
              location.pathname.indexOf('signup') > 0 &&
             <button className="btn waves-effect waves-light" onClick={() => history.push('/login')}>Login</button>
            }
            {
              location.pathname.indexOf('login') > 0 &&
              <button className="btn waves-effect waves-light" onClick={() => history.push('/signup')}>Sign up</button>
            }
            {
              location.pathname.indexOf('recipes/') > 0 &&
              <button className="btn waves-effect waves-light" onClick={() => history.push('/')}>All Recipes</button>
            }
            {
              /events$/.test(location.pathname) &&
              <button className="btn waves-effect waves-light" onClick={() => history.push('/logout')}>Log out</button>
            }
          </div> */}
          

          <nav>
            <div className="nav-wrapper1">
              <a href="/planner" className="brand-logo"><i className="material-icons">restaurant_menu</i>MealPlanner</a>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  
                
                  <li> <Link to={'/planner'}>YOUR WEEKLY PLANNER</Link></li>
                  <li> <Link to={'/recipes'}>SEARCH</Link></li>
                  <li> <Link to={'/shopping-list'}>SHOPPING LIST</Link></li>


                  <li><a href="/favorites">FAVORITES</a></li>
                  <li><a href="/create">CREATE YOUR OWN</a></li>
                  <li><a href="/blog">BLOG</a></li>
                  {/* <button onClick={() => history.push('/login')}>Login</button> */}
                  {/* <button onClick={() => history.push('/signup')}>Sign up</button> */}
                    {/* <input className="search-box" type="box" placeholder="SEARCHBAR"/>
                    <button className ="search-button">Search</button>  */}
                </ul>

              
            </div>
          </nav>


          
          
        </div>
        
        
      )
    }
    
    const mapStateToProps = state => ({
      /* user: state.currentUser && state.users &&
        // state.users[userId(state.currentUser.jwt
        )] */
    })
    
    export default withRouter(
      connect(mapStateToProps)(NavBar)
    )