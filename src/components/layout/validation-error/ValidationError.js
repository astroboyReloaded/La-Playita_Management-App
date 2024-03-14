import PropTypes from 'prop-types';

const ValidationError = ({ errorMessage = '', isValid }) => (
  <>
    {errorMessage && (
    <small>
      <i aria-hidden="true">
        &lt;--&nbsp;
      </i>
        {errorMessage}
    </small>
    )}
    {isValid && <small style={{ color: 'green' }}>✓</small>}
  </>
);

ValidationError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default ValidationError;
