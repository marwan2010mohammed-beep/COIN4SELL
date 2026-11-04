import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DiscordIcon } from './Icons';

interface CtaSectionProps {
  onOpenAuth: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenAuth }) => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="reveal-on-scroll relative rounded-3xl bg-gradient-to-b from-[#0a1122] to-[#070b16] border border-slate-800/90 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Subtle ambient light inside card */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to grow your community?
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Join a network of Discord communities discovering each other every day — the organic
              way. Free to start, no credit card required.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onOpenAuth}
                type="button"
                className="cursor-pointer w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
              >
                <DiscordIcon className="w-5 h-5" />
                <span>Get started free</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="#pricing"
                className="uiverse-zjssun-btn"
              >
                View pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
