const RightCorner = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.5}
      d="M25 23.333 33.333 15m0 0L25 6.667M33.333 15h-20a6.667 6.667 0 0 0-6.666 6.667v11.666"
    />
  </svg>
)
export default RightCorner
