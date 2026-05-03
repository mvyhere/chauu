import { Link } from 'react-router-dom';
import { entries } from '../data/entries';

export default function Archives() {
  const entriesByYear = entries.reduce<Record<string, typeof entries>>((acc, entry) => {
    const year = entry.date.split(', ').at(-1) ?? 'Archive';
    acc[year] ??= [];
    acc[year].push(entry);
    return acc;
  }, {});

  return (
    <main className="pt-32 pb-16 px-8 max-w-4xl mx-auto min-h-screen">
      <section className="border border-black/90 bg-white p-8 md:p-12 mb-10">
        <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-neutral-600 mb-5">
          Archives
        </p>
        <h1 className="font-headline-lg text-[34px] leading-[1.15] text-black max-w-2xl mb-4">
          A simple archive page with enough structure to feel real.
        </h1>
        <p className="font-body-lg text-[17px] leading-7 text-neutral-800 max-w-2xl">
          For now this acts as a browsing page for sample entries. Later it can easily grow into monthly groupings, tags, or issue-based collections.
        </p>
      </section>

      <div className="flex flex-col gap-10">
        {Object.entries(entriesByYear)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([year, yearEntries]) => (
            <section key={year}>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-black">
                  {year}
                </h2>
                <span className="h-px flex-1 bg-neutral-300"></span>
              </div>

              <div className="flex flex-col">
                {yearEntries.map((entry) => (
                  <Link
                    key={entry.id}
                    to={`/entry/${entry.id}`}
                    className="group border-t border-black/90 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 hover:bg-neutral-50 transition-colors px-4 -mx-4 cursor-pointer"
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-[19px] leading-7 group-hover:underline text-black">
                        {entry.title}
                      </h3>
                      <p className="font-label-sm text-label-sm text-neutral-600">{entry.date}</p>
                    </div>
                    <div className="font-label-caps text-label-caps text-neutral-700 mt-2 md:mt-0 uppercase tracking-[0.16em] border border-neutral-400 px-3 py-1">
                      {entry.category}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
      </div>
    </main>
  );
}
