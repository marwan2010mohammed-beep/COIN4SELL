import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { DiscordIcon } from './Icons';
import { DashboardMockup } from './DashboardMockup';
import FoldText from './FoldText';
import FlipFadeText from './FlipFadeText';

interface HeroProps {
  onOpenAuth: () => void;
  onEarnCoin: (amount: number) => void;
  coins: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuth, onEarnCoin, coins }) => {
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    // Reveal as soon as user begins scrolling down, or when element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setCtaVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Top Center Ambient Radial Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18)_0%,rgba(14,165,233,0.06)_45%,transparent_75%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Top Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1224] border border-sky-500/30 text-sky-400 text-xs sm:text-[13px] font-medium shadow-[0_0_15px_rgba(56,189,248,0.15)] mb-6 sm:mb-8 transition-transform hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          <span>Organic Discord discovery &amp; promotion</span>
        </div>

        {/* Flip Fade Animated Title */}
        <div className="mb-2">
          <FlipFadeText />
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl flex flex-col items-center gap-1.5">
          <FoldText
            text="Grow your Discord server,"
            foldStyle="paper"
            splitBy="char"
            hinge="top"
            trigger="scroll"
            foldAngle={92}
            duration={0.65}
            stagger={0.045}
            staggerFrom="start"
            ease="power3.out"
            loopDelay={1.4}
            hoverRefold={true}
            refoldRadius={140}
            refoldAngle={45}
            perspective={700}
            creaseShading={0.55}
            fontSize="clamp(2.5rem, 6vw, 4.5rem)"
            fontWeight={800}
            color="#ffffff"
          />
          <FoldText
            text="organically."
            foldStyle="paper"
            splitBy="char"
            hinge="top"
            trigger="scroll"
            foldAngle={92}
            duration={0.65}
            stagger={0.045}
            staggerFrom="start"
            ease="power3.out"
            loopDelay={1.4}
            hoverRefold={true}
            refoldRadius={140}
            refoldAngle={45}
            perspective={700}
            creaseShading={0.55}
            fontSize="clamp(2.5rem, 6vw, 4.5rem)"
            fontWeight={800}
            color="#38bdf8"
            className="drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]"
          />
        </h1>

        {/* Subtitle Prose */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
          A discovery network where{' '}
          <strong className="text-white font-semibold">real Discord members</strong> explore
          communities they care about. Feature your server to the right audience and let people
          choose to join — no bots, no fake accounts, just genuine growth.
        </p>

        {/* CTA Action Buttons with Premium Scroll Reveal */}
        <div
          ref={ctaRef}
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            ctaVisible
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-8 blur-[2px]'
          }`}
        >
          {/* Primary Action Button */}
          <div
            className={`relative group w-full sm:w-auto transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              ctaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            {/* Ambient Multi-layered Radial Glow */}
            <div
              className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-85 transition-all duration-500 group-hover:duration-200 pointer-events-none"
              aria-hidden="true"
            />

            <button
              onClick={onOpenAuth}
              type="button"
              className="cursor-pointer relative w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#2563eb] border border-sky-300/30 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.65)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden"
            >
              {/* Shimmer light sweep */}
              <span
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
                aria-hidden="true"
              />

              {/* Glass specular top highlight */}
              <span
                className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <DiscordIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              <span className="tracking-tight font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Get started free
              </span>
              <ArrowRight className="w-4 h-4 ml-0.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Secondary Action Button */}
          <div
            className={`w-full sm:w-auto transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              ctaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            <a
              href="#how-it-works"
              className="uiverse-lideheng-btn"
            >
              <span>Explore</span>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <polygon points="5,3 19,12 5,21" />
                <polygon points="5,3 19,12 5,21" />
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </a>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="reveal-on-scroll reveal-delay-150 mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Official Discord OAuth2</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-sky-400" />
            <span>Real, opt-in members</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Free to start</span>
          </div>
        </div>

        {/* Dashboard Mockup Component */}
        <div className="reveal-on-scroll reveal-delay-225 w-full">
          <DashboardMockup onEarnCoin={onEarnCoin} coins={coins} />
        </div>
      </div>
    </section>
  );
};
