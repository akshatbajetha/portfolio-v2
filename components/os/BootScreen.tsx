/**
 * Short boot screen shown when /playground opens. Pure CSS: it fades itself out,
 * so it works on hard loads and client-side navigations without any JS.
 */
export function BootScreen({ persistent = false }: { persistent?: boolean }) {
  return (
    <div
      role="status"
      aria-label="Loading the OS portfolio"
      className={`boot-screen fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-10 bg-[#0b1020] text-white ${persistent ? "" : "boot-screen-auto"}`}
    >
      <p className="text-lg font-medium tracking-tight text-white/90">Akshat OS</p>
      <div className="boot-spinner" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
      <p className="text-xs text-white/60">Starting up…</p>
    </div>
  );
}
