import { Link } from 'react-router-dom';
import { entries } from '../data/entries';
import { ArrowRight, History } from 'lucide-react';

export default function Home() {
  const featured = entries.find(e => e.featured);
  const recent = entries.filter(e => !e.featured).slice(0, 6);

  return (
    <main className="pt-32 pb-16 px-8 max-w-6xl mx-auto min-h-screen">
      {featured && (
        <section className="mb-stack-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="border border-black/90 bg-white p-8 md:p-16 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-neutral-600 font-label-caps text-label-caps uppercase tracking-[0.18em]">
              <span className="text-black">Featured</span>
              <span className="w-8 h-px bg-neutral-500"></span>
              <span>{featured.date}</span>
              <span>{featured.category}</span>
            </div>

            <h1 className="font-headline-lg text-[34px] leading-[1.15] max-w-3xl text-black">
              {featured.title}
            </h1>

            <p className="font-body-lg text-[17px] leading-7 text-neutral-800 max-w-2xl">
              {featured.summary}
            </p>

            <div className="mt-4">
              <Link
                to={`/entry/${featured.id}`}
                className="inline-flex items-center gap-2 font-label-caps text-label-caps border-b border-black pb-1 hover:pb-2 transition-all text-black tracking-[0.18em]"
              >
                READ THE FULL ENTRY
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-3">
          <h2 className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-neutral-600 sticky top-40 mb-8 md:mb-0">
            Recent Thoughts
          </h2>
        </div>

        <div className="md:col-span-9 flex flex-col">
          {recent.map((entry) => (
            <Link
              key={entry.id}
              to={`/entry/${entry.id}`}
              className="group border border-black/85 px-5 py-4 md:px-6 md:py-5 flex flex-col justify-between items-start gap-3 hover:bg-neutral-50 transition-colors cursor-pointer mb-2"
            >
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between w-full">
                  <span className="font-label-sm text-label-sm text-neutral-600">{entry.date}</span>
                  <div className="font-label-sm text-label-sm text-neutral-700 border border-neutral-400 px-2 py-1 uppercase tracking-[0.16em]">
                    {entry.category}
                  </div>
                </div>
                <h3 className="font-headline-sm text-[19px] leading-7 text-black mt-1">
                  {entry.title}
                </h3>
                <p className="font-body-md text-[14px] leading-6 text-neutral-700 max-w-2xl">
                  {entry.summary}
                </p>
              </div>
              <div className="mt-1">
                <div className="inline-flex items-center gap-2 font-label-caps text-label-caps border-b border-black pb-1 group-hover:pb-2 transition-all text-black uppercase tracking-[0.18em]">
                  READ MORE
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}

          <div className="mt-8 border-t border-black/90 pt-6">
            <Link to="/archives" className="font-label-caps text-label-caps text-neutral-700 hover:text-black transition-colors flex items-center gap-2 w-fit tracking-[0.18em]">
              VIEW FULL ARCHIVES
              <History size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
