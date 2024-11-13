const StraightArrow = (props: any) => (
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
      strokeWidth={4}
      d="M20 31.667V8.333m0 0L8.333 20M20 8.333 31.667 20"
    />
  </svg>
)
export default StraightArrow
