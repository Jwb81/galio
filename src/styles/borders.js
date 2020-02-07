const borderWidths = [0, 1, 2, 3, 4, 5];
const borderStyles = ['Solid', 'Dotted', 'Dashed'];
const borderRadii = [0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 100];

const borders = {};

borderWidths.forEach(width => {
  borderStyles.forEach(style => {
    borders[`border${style}${width}`] = {
      borderStyle: style,
      borderWidth: width,
    };
  });
});

borderRadii.forEach(radius => {
  borders[`borderRadius${radius}`] = {
    borderRadius: radius,
  };
});

const stylesheet = {
  testBorder: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
  },

  ...borders,
};

module.exports = stylesheet;
