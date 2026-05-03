import { Link, useParams, Navigate } from 'react-router-dom';
import { entries } from '../data/entries';
import Markdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export default function Entry() {
  const { id } = useParams();
  const entry = entries.find(e => e.id === id);

  if (!entry) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="pt-32 pb-16 px-8 max-w-4xl mx-auto min-h-screen">
      <Link to="/" className="inline-flex items-center gap-2 font-label-caps text-label-caps text-neutral-700 hover:text-black mb-12 transition-colors tracking-[0.18em]">
        <ArrowLeft size={14} />
        BACK TO ENTRIES
      </Link>

      <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-neutral-600 font-label-caps text-label-caps uppercase tracking-[0.18em] mb-6">
            <span>{entry.date}</span>
            <span className="w-8 h-px bg-neutral-500"></span>
            <span>{entry.category}</span>
          </div>
          <h1 className="font-headline-lg text-[40px] leading-tight font-bold text-black mb-6">
            {entry.title}
          </h1>
          <p className="font-body-lg text-xl leading-8 text-neutral-800">
            {entry.summary}
          </p>
        </header>

        <div className="text-neutral-900 [&>p]:mb-6 [&>p]:font-body-lg [&>p]:text-[17px] [&>p]:leading-8 [&>h1]:font-headline-lg [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-6 [&>h2]:font-headline-md [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-12 [&>a]:underline hover:[&>a]:text-neutral-700 transition-colors">
          <Markdown>{entry.content}</Markdown>
        </div>
      </article>
    </main>
  );
}
