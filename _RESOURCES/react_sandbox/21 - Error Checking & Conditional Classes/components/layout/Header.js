import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger py-0 mb-3">
      <div className="container">
        <a className="navbar-brand" href="#!">
          {branding}
        </a>

        <div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {/* Links Here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// Show them without the prop
Header.defaultProps = {
  branding: 'My App'
};

export default Header;
