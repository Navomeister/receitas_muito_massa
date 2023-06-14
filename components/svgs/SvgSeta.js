import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgSeta(props) {
    return (
        <Svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000"
            {...props}
        >
            <Path
                d="M21 12H3m0 0l8.5-8.5M3 12l8.5 8.5"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgSeta;