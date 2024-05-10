import type { SVGProps } from "react";
const SvgIcPcBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128" {...props}>
    <path
      fill="#fff"
      d="m62.476 7.65 2.463 20.766c2.125 17.905 16.242 32.022 34.147 34.146l20.765 2.464-20.765 2.464C81.18 69.614 67.064 83.73 64.939 101.636l-2.463 20.765-2.464-20.765C57.887 83.731 43.77 69.614 25.866 67.49L5.1 65.026l20.765-2.464c17.904-2.124 32.021-16.241 34.146-34.146z"
    />
    <g filter="url(#ic_pc_blank_svg__a)">
      <circle cx={62.476} cy={65.025} r={20.655} fill="#fff" />
    </g>
    <defs>
      <filter
        id="ic_pc_blank_svg__a"
        width={134.319}
        height={134.32}
        x={-4.684}
        y={-2.135}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_2426_1094" stdDeviation={23.252} />
      </filter>
    </defs>
  </svg>
);
export default SvgIcPcBlank;
