// App-wide atmosphere: a fixed layer sitting behind every page. Pure CSS —
// a couple of blurred, slowly drifting gradient shapes plus a faint noise
// texture. No canvas/WebGL, so it costs almost nothing to paint, and the
// drift animation (defined in index.css) is skipped entirely when the
// visitor has requested reduced motion. Dark-mode only: on the light
// "paper" theme the blobs fade out and the canvas stays a plain, clean
// off-white so text contrast is never in question.
export default function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-canvas" />

      {/* Soft top-down glow, dark mode only. */}
      <div className="absolute inset-0 hidden dark:block dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgb(99_102_241_/_0.16),transparent)]" />

      <div className="blob-layer animate-drift-a absolute -left-1/4 top-[-10%] h-[55vw] w-[55vw] max-h-[620px] max-w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgb(99_102_241_/_0.30),transparent_70%)] blur-3xl" />
      <div className="blob-layer animate-drift-b absolute -right-1/4 top-[15%] h-[45vw] w-[45vw] max-h-[520px] max-w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgb(51_51_64_/_0.55),transparent_70%)] blur-3xl" />
      <div className="blob-layer animate-drift-c absolute bottom-[-15%] left-1/3 h-[40vw] w-[40vw] max-h-[480px] max-w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgb(67_56_202_/_0.24),transparent_70%)] blur-3xl" />

      <div className="grain-layer absolute inset-0 mix-blend-overlay" />
    </div>
  )
}
