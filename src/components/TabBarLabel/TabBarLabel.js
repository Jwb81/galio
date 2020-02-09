import React from 'react';
import { withStyles } from '../../theme';
import { j } from '../../styles';
import Text from '../Text';
import scopedStyles from './TabBarLabel.styles';
import { iconTypes } from '../../helpers';

const TabBarLabel = ({ theme, styles, style, name, family, focused, label }) => {
  return (
    <Text
      style={[
        j.textCenter,
        {
          color: focused ? theme.COLORS.INFO : theme.COLORS.TEXT_BASIC,
          // fontSize: focused ? 14 : 12
          fontSize: 12,
        },
      ]}>
      {label}
    </Text>
  );
};

export default withStyles(TabBarLabel, scopedStyles);
