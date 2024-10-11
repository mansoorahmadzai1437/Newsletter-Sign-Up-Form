export function Button({ children, classes }) {
  return (
    <button
      className={`bg-DarkSlateGrey text-White p-4 rounded-lg hover:bg-gradient-to-r md:hover:from-rose-400 md:hover:via-Tomato md:hover:to-Tomato md:hover:shadow-ButtonShadow active:bg-gradient-to-r active:from-rose-400 active:via-Tomato active:to-Tomato active:shadow-ButtonShadow ${classes}`}
    >
      {children}
    </button>
  );
}
