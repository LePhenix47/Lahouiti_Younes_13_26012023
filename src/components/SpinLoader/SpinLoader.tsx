export default function SpinLoader({ width }: { width: number }): JSX.Element {
  return (
    <section>
      <svg viewBox="0 0 100 100" className="spin-loader" width={width}>
        <circle cx="50" cy="50" r="25" className="spin-loader__circle"></circle>
      </svg>
    </section>
  );
}
