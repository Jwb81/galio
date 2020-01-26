import React from 'react';
import PropTypes from 'prop-types';

// import COLORS & SIZES
import JAYTECH_COLORS, { getThemeModeColors } from './colors';
import JAYTECH_SIZES from './sizes';

// default theme with COLORS & SIZES
const JaytechTheme = {
  COLORS: JAYTECH_COLORS,
  SIZES: JAYTECH_SIZES,
};

export default JaytechTheme;

// creating the JaytechTheme context
const JaytechContext = React.createContext();

/*
 *   withStyles
 *   args: Component - React Component, styles to be added to Component
 *   theme: if no styles or theme add default theme={ SIZES, COLORS }
 */

export function withStyles(Component, styles) {
  // eslint-disable-next-line react/no-multi-comp
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
        <JaytechContext.Consumer>
          {({ theme, mode }) => (
            <Component
              {...props}
              theme={{
                ...JaytechTheme,
                // , ...getThemeModeColors(theme.mode)
                ...theme,
              }}
              styles={styles && styles({ ...JaytechTheme, ...theme })}
            />
          )}
        </JaytechContext.Consumer>
      );
    }
  };
}

/*
 *   JaytechProvider using React.Component
 *   JaytechContext.Provider value has the default value from { COLORS, SIZES }
 */

// eslint-disable-next-line react/no-multi-comp
export class JaytechProvider extends React.Component {
  static defaultProps = {
    children: null,
    theme: {},
    mode: 'light',
  };

  render() {
    const { theme, children, mode } = this.props;
    const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;

    const providerTheme = {
      COLORS: { ...JaytechTheme.COLORS, ...getThemeModeColors(mode), ...CUSTOM_COLORS },
      SIZES: { ...JaytechTheme.SIZES, ...CUSTOM_SIZES },
      ...customTheme,
    };

    return (
      <JaytechContext.Provider value={{ theme: providerTheme, mode }}>
        {children}
      </JaytechContext.Provider>
    );
  }
}

JaytechProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
};
