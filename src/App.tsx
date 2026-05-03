/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Entry from './pages/Entry';
import Archives from './pages/Archives';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="bg-surface-container-lowest text-on-surface antialiased min-h-screen flex flex-col">
        <header className="bg-white fixed top-0 w-full z-50 border-b border-black/90">
          <nav className="max-w-6xl mx-auto flex justify-between items-center px-8 py-6 font-inter text-sm tracking-tight">
            <Link to="/" className="text-xl font-black tracking-tighter text-black">JOURNAL</Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link to="/" className="text-black hover:text-neutral-700 transition-all font-label-caps lowercase tracking-[0.18em] text-xs">
                Entries
              </Link>
              <Link to="/archives" className="text-neutral-700 hover:text-black transition-all font-label-caps lowercase tracking-[0.18em] text-xs">
                Archives
              </Link>
              <Link to="/about" className="text-neutral-700 hover:text-black transition-all font-label-caps lowercase tracking-[0.18em] text-xs">
                About
              </Link>
            </div>
          </nav>
        </header>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entry/:id" element={<Entry />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <footer className="bg-white w-full border-t border-black/90 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-8 font-inter text-[10px] uppercase tracking-widest">
            <div className="font-bold text-black">
              © 2024 JOURNAL. SUBTRACTION AS VALUE.
            </div>
            <div className="flex gap-12 items-center">
              <Link to="/" className="text-neutral-700 hover:text-black transition-all">Entries</Link>
              <Link to="/archives" className="text-neutral-700 hover:text-black transition-all">Archives</Link>
              <Link to="/about" className="text-neutral-700 hover:text-black transition-all">About</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
