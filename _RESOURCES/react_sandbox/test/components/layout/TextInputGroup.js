import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  controlled,
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
  reff
}) => {
  if (controlled) {
    return (
      <div className="form-group">
        <label htmlFor="name">{label}: </label>
        <input
          type={type}
          name={name}
          className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <label htmlFor="name">{label}: </label>
        <input
          type={type}
          name={name}
          className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          defaultValue={value}
          ref={reff}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
};

TextInputGroup.propTypes = {
  controlled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  reff: PropTypes.object
};

TextInputGroup.defaultProps = {
  type: 'text',
  controlled: true
};

export default TextInputGroup;
