import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const SideDrawer = ({ sideDrawerVisible, closeSideDrawer }) => {
  if (sideDrawerVisible) {
    return (
      <aside className="side-drawer-ovelay" onClick={closeSideDrawer}>
        <div className="side-drawer">
          <div className="side-drawer-close-btn">
            <a className="menu-close-btn" href="#" onClick={closeSideDrawer}>
              <i className="material-icons md-30">close</i>
            </a>
          </div>
          <div className="side-drawer-content">
            <header className="side-drawer-header">
              <h4>Hello,</h4>
              <div className="side-drawer-message">
                Vesibulum commodo volutpat a, convallis ac, laoreet encodeURIComponent. Phasallus fermentum in, dolor.
                <br />
                <br />
                Pellentesque facillisis. Nullaimperdient sit amet magna.
              </div>
              <div className="social-media">
                <a className="social-link" href="https://www.google.com">
                  <i className="fab fa-ravelry" />
                </a>
                <a className="social-link" href="https://www.linkedin.com/">
                  <i class="fab fa-linkedin-in" />
                </a>
                <a className="social-link" href="https://www.instagram.com">
                  <i class="fab fa-instagram" />
                </a>
                <a className="social-link" href="https://twitter.com">
                  <i class="fab fa-twitter" />
                </a>
              </div>
            </header>

            <div className="side-drawer-menu">
              <ui>
                <li className="side-drawer-menu-item">
                  <NavLink className="side-drawer-menu-item" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="side-drawer-menu-item">
                  <NavLink className="side-drawer-menu-item" to="/post">
                    Posts
                  </NavLink>
                </li>
                <li className="side-drawer-menu-item">
                  <NavLink className="side-drawer-menu-item" to="/qwer">
                    Gallery
                  </NavLink>
                </li>
                <li className="side-drawer-menu-item">
                  <NavLink className="side-drawer-menu-item" to="/asdf">
                    Contact
                  </NavLink>
                </li>
              </ui>
            </div>
          </div>
        </div>
      </aside>
    )
  }
  return React.Fragment
}

SideDrawer.propTypes = {
  sideDrawerVisible: PropTypes.bool.isRequired,
  closeSideDrawer: PropTypes.func.isRequired,
}

export default SideDrawer
