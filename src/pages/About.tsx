export default function About() {
  return (
    <main className="pt-32 pb-16 px-8 max-w-4xl mx-auto min-h-screen">
      <section className="border border-black/90 bg-white p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-neutral-600 mb-6">
          About
        </p>
        <h1 className="font-headline-lg text-[34px] leading-[1.15] text-black max-w-2xl mb-6">
          A quiet journal template for essays, notes, and things worth rereading.
        </h1>
        <p className="font-body-lg text-[17px] leading-7 text-neutral-800 max-w-2xl mb-10">
          This page is intentionally simple: just enough context to make the journal feel lived-in. It can later grow into an editor note, a short bio, or a small statement about taste.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="border border-neutral-300 p-5">
            <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-neutral-600 mb-3">
              Focus
            </p>
            <p className="font-body-md text-[14px] leading-6 text-neutral-800">
              Essays, film notes, personal fragments, and slow observations.
            </p>
          </div>
          <div className="border border-neutral-300 p-5">
            <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-neutral-600 mb-3">
              Format
            </p>
            <p className="font-body-md text-[14px] leading-6 text-neutral-800">
              Featured longform on top, shorter recent thoughts underneath.
            </p>
          </div>
          <div className="border border-neutral-300 p-5">
            <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-neutral-600 mb-3">
              Tone
            </p>
            <p className="font-body-md text-[14px] leading-6 text-neutral-800">
              Clean, literary, and minimal without making the reading feel cold.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
