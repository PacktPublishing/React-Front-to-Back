import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

export default Header;

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// Show them without the prop
Header.defaultProps = {
  branding: 'My App'
};