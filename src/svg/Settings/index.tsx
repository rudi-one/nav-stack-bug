import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {colors} from 'src/styles/colors';
import {SvgProps} from 'src/svg/types';

const Settings: React.FC<SvgProps> = ({
  width,
  height,
  color = colors.white,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 35 35.001">
      <G id="settings" transform="translate(1.5 1.5)">
        <Path
          id="Path_877"
          data-name="Path 877"
          d="M0,0V12.2"
          transform="translate(3.414)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Path
          id="Path_878"
          data-name="Path 878"
          d="M-.483-.991a3.459,3.459,0,0,0,3.414-3.5,3.458,3.458,0,0,0-3.414-3.5A3.458,3.458,0,0,0-3.9-4.493,3.459,3.459,0,0,0-.483-.991Z"
          transform="translate(3.897 20.492)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Path
          id="Path_879"
          data-name="Path 879"
          d="M0,0V12.5"
          transform="translate(3.414 19.503)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Path
          id="Path_880"
          data-name="Path 880"
          d="M0,0V20.061"
          transform="translate(16)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Path
          id="Path_881"
          data-name="Path 881"
          d="M-.483-.991a3.459,3.459,0,0,0,3.414-3.5,3.459,3.459,0,0,0-3.414-3.5A3.459,3.459,0,0,0-3.9-4.493,3.459,3.459,0,0,0-.483-.991Z"
          transform="translate(16.483 28.558)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Path
          id="Path_882"
          data-name="Path 882"
          d="M0,0V4.153"
          transform="translate(16 27.847)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Path
          id="Path_883"
          data-name="Path 883"
          d="M0,0V4.2"
          transform="translate(28.586)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Path
          id="Path_884"
          data-name="Path 884"
          d="M-.483-.991a3.459,3.459,0,0,0,3.414-3.5,3.458,3.458,0,0,0-3.414-3.5A3.458,3.458,0,0,0-3.9-4.493,3.459,3.459,0,0,0-.483-.991Z"
          transform="translate(29.069 12.429)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Path
          id="Path_885"
          data-name="Path 885"
          d="M0,0V20.416"
          transform="translate(28.586 11.585)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </G>
    </Svg>
  );
};

export default Settings;
