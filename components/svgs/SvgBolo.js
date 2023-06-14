import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgBolo = (props) => (
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
      d="M4 16.5V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5M3 14v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1m-9-6v3m0-3c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8zm-3 6a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0"
    />
  </Svg>
)
export default SvgBolo;