import type { SVGProps } from "react";
const SvgFavicon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" {...props}>
    <rect width={48} height={48} fill="#000" rx={8.889} />
    <path
      fill="#fff"
      d="m18.015 29.556-3.23-3.849h1.457l3.243 3.835v.014zm-8.357 0v-9.882h8.247q.453 0 .824.233.385.22.605.591.22.372.22.825v2.9q0 .453-.22.825a1.74 1.74 0 0 1-.605.604q-.37.22-.824.22h-7.133v3.684zm1.65-4.81h6.597q.22 0 .37-.152.166-.15.166-.371v-2.9a.48.48 0 0 0-.165-.371.48.48 0 0 0-.371-.165h-6.597a.53.53 0 0 0-.385.165q-.151.15-.151.371v2.9q0 .22.15.371.165.15.386.151m11.286 4.81a1.66 1.66 0 0 1-.838-.22 1.9 1.9 0 0 1-.605-.605 1.66 1.66 0 0 1-.22-.838v-4.646q0-.453.22-.824.233-.385.605-.605.385-.234.838-.234h4.783q.466 0 .838.234.385.22.605.605.234.37.234.824v2.886h-6.996v1.76q0 .219.151.384.165.152.385.152h6.46v1.127zm-.536-4.55h5.855v-1.759a.48.48 0 0 0-.165-.37.48.48 0 0 0-.371-.166h-4.783a.53.53 0 0 0-.385.165q-.15.151-.151.371zm9.784 4.55a1.66 1.66 0 0 1-.839-.22 1.9 1.9 0 0 1-.605-.605 1.66 1.66 0 0 1-.22-.838v-4.646q0-.453.22-.824.234-.385.605-.605.385-.234.839-.234h6.432v1.127h-6.432a.53.53 0 0 0-.385.165q-.151.151-.151.371v4.646q0 .219.15.384.165.152.386.152h6.46v1.127z"
    />
    <path
      fill="#fff"
      d="m35.36 22.646.35 2.13 2.132.351-2.131.351-.351 2.131-.351-2.13-2.131-.352 2.13-.35z"
    />
  </svg>
);
export default SvgFavicon;
