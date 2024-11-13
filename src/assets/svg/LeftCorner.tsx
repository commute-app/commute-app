const LeftCorner = (props: any) => (
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
      d="M15 23.333 6.667 15m0 0L15 6.667M6.667 15h20a6.667 6.667 0 0 1 6.666 6.667v11.666"
    />
  </svg>
)
export default LeftCorner
