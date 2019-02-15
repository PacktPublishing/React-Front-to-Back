import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;

  return (
    <div>
      <h1 style={headingStyle}>{branding}</h1>
    </div>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// Show them without the prop
Header.defaultProps = {
  branding: 'My App'
};

const headingStyle = {
  color: 'green',
  fontSize: '50px'
};

export default Header;
