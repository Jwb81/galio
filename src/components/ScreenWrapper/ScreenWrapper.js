import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../theme';

function ScreenWrapper({ children, ...rest }) {
  const wrapperStyles = [styles.background, styles.screen, style];

  return (
    <Block flex safe {...rest} style={wrapperStyles}>
      {children}
    </Block>
  );
}

ScreenWrapper.defaultProps = {};

ScreenWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default withStyles(ScreenWrapper);
