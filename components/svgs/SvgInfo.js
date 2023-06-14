import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgInfo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    strokeWidth={1.5}
    color="dimgray"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="dimgray"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    />
    <Path
      stroke="dimgray"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 9c0-3.5 5.5-3.5 5.5 0 0 2.5-2.5 2-2.5 5m0 4.01.01-.011"
    />
  </Svg>
)
export default SvgInfo;
