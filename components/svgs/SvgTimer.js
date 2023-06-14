import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgTimer = (props) => (
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
      d="M9 2h6m-3 8v4m0 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
    />
  </Svg>
)
export default SvgTimer;

