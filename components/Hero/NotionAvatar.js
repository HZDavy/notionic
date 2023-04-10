// https://react-svgr.com/playground/
import * as React from 'react'

const NotionAvatar = (props) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 500 500"
    {...props}
  >
    <text
      x={162.832}
      y={181.109}
      style={{
        fontFamily: "&quot",
        fontWeight: 300,
        fontSize: 12,
      }}
      transform="matrix(5.27854 0 0 5.41534 -686.591 -748.146)"
    >
      {"ARCH"}
    </text>
    <text
      x={162.832}
      y={181.109}
      style={{
        fontFamily: "&quot",
        fontWeight: 900,
        fontSize: 12,
      }}
      transform="matrix(7.30148 0 0 7.49072 -1017.59 -1042.31)"
    >
      {"365"}
    </text>
    <path d="M249.999 100.553c82.482 0 149.446 66.965 149.446 149.446 0 82.48-66.964 149.446-149.446 149.446-82.481 0-149.445-66.965-149.445-149.446s66.964-149.446 149.445-149.446Zm0 4.5c-79.997 0-144.945 64.948-144.945 144.946s64.948 144.946 144.945 144.946c79.998 0 144.946-64.948 144.946-144.946S329.997 105.054 250 105.054Z" />
  </svg>
)

export default NotionAvatar
