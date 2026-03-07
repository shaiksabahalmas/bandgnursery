export default function WaveDivider({ color = "#F4EFE6" }) {
  return (
    <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[120px]"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
}