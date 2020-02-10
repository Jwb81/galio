const borderWidths = [0, 1, 2, 3, 4, 5];
const borderStyles = ['solid', 'dotted', 'dashed'];
const borderRadii = [0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 100];

const borders = {};

/**
 * BORDER SIZES
 * @returns {Object} = {
 *    borderStyle: 'solid',
 *    borderWidth: 2
 * }
 */
borderWidths.forEach(width => {
  borderStyles.forEach(style => {
    borders[`border${style.slice(0, 1).toUpperCase() + style.slice(1)}${width}`] = {
      borderStyle: style,
      borderWidth: width,
    };
  });
});

/**
 * BORDER RADIUS
 * @returns {Object} = {
 *    borderRadius: 10
 * }
 */
borderRadii.forEach(radius => {
  borders[`borderRadius${radius}`] = {
    borderRadius: radius,
  };
});

const stylesheet = {
  // just for testing purposes (since we always use a 1px solid red border for testing layouts :)
  testBorder: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
  },

  ...borders,
};

module.exports = stylesheet;
