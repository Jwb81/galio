import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import JaytechTheme, { withStyles } from './theme';
import getIconType from './helpers/getIconType';

import galioConfig from './config/galio.json';
import galioExtraConfig from './config/galioExtra.json';

const Galio = createIconSetFromIcoMoon(galioConfig, 'Galio', './fonts/galio.ttf');
const GalioExtra = createIconSetFromIcoMoon(
  galioExtraConfig,
  'GalioExtra',
  './fonts/galioExtra.ttf'
);

// Galio Fonts have to be linked with 'react-native link' if you're using react-native-cli
// Galio Fonts have to loaded with Fonts.loadAsync if you're
// using Expo (you can export GalioFont from index in order to import it)

function Icon({ name, family, size, color, styles, theme, ...rest }) {
  if (family === 'Galio') {
    if (name) {
      return (
        <Galio
          name={name}
          size={size || theme.SIZES.BASE}
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }
  } else if (family === 'GalioExtra') {
    if (name) {
      return (
        <GalioExtra
          name={name}
          size={size || theme.SIZES.BASE}
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }
  } else {
    const IconInstance = getIconType(family);
    if (name && IconInstance) {
      return (
        <IconInstance
          name={name}
          size={size}
          style={[styles.text]}
          // color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }
  }

  return null;
}

Icon.defaultProps = {
  name: null,
  family: null,
  size: 24,
  color: null,
  styles: {},
  theme: JaytechTheme,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

export default withStyles(Icon);
