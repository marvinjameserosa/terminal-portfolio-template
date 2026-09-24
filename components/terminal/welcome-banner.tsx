"use client";

import { useState, useEffect } from "react";

interface WelcomeBannerProps {
  onSelectCommand: (cmd: string) => void;
}

/**
 * Custom Retro Pixel CRT Terminal Icon rendered as crisp inline SVG
 */
function TerminalMascot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="w-28 h-28 sm:w-32 sm:h-32 object-contain filter drop-shadow-[0_6px_16px_rgba(212,98,56,0.28)]"
      shapeRendering="crispEdges"
      role="img"
      aria-label="Terminal CRT Pixel Icon"
    >
      {/* Outer Monitor Bezel */}
      <rect x="2" y="2" width="12" height="9" fill="#D46238" />
      {/* Top Bezel Highlight */}
      <rect x="2" y="2" width="12" height="1" fill="#E2764E" />
      {/* Bottom Bezel Shadow */}
      <rect x="2" y="10" width="12" height="1" fill="#B84E27" />
      {/* Inner CRT Screen */}
      <rect x="3" y="3" width="10" height="7" fill="#181817" />
      {/* Prompt Chevron '>' */}
      <rect x="4" y="5" width="1" height="1" fill="#D46238" />
      <rect x="5" y="6" width="1" height="1" fill="#D46238" />
      <rect x="4" y="7" width="1" height="1" fill="#D46238" />
      {/* Prompt Underscore Cursor '_' */}
      <rect x="7" y="7" width="3" height="1" fill="#EDEDEC" />
      {/* Monitor Neck & Base Stand */}
      <rect x="6" y="11" width="4" height="1" fill="#B84E27" />
      <rect x="4" y="12" width="8" height="1" fill="#D46238" />
    </svg>
  );
}

export default function WelcomeBanner({ onSelectCommand }: WelcomeBannerProps) {
  const [versionTag, setVersionTag] = useState("v1.0.0");

  useEffect(() => {
    // Optional: dynamically compute a version string (e.g. years/months/days of experience or age)
    const startDate = new Date(2020, 0, 1);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setVersionTag(`v${years}.${months}.${days}`);
  }, []);

  return (
    <div className="w-full max-w-4xl border border-[#D46238] rounded-md overflow-hidden bg-[#181817] shadow-xl font-mono text-sm select-none">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#201F1E] border-b border-[#D46238]/40 text-xs">
        <span className="text-[#D46238] font-bold">
          Terminal Portfolio{" "}
          <span className="text-[#878683] font-normal">{versionTag}</span>
        </span>
        <span className="text-[11px] text-[#878683] hidden sm:inline">
          alex-rivera@terminal:~
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#D46238]/40">
        <div className="md:col-span-7 p-5 sm:p-6 flex flex-col items-center justify-between text-center space-y-4">
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-[#EDEDEC]">
              Welcome to Alex&apos;s Terminal!
            </h2>
            <p className="text-xs text-[#878683]">
              Staff Systems Architect &amp; Open-Source Engineer
            </p>
          </div>

          <div className="py-1 flex flex-col items-center justify-center">
            <div className="hover:scale-105 transition-transform duration-200 select-none">
              <TerminalMascot />
            </div>
          </div>

          <div className="text-[11px] text-[#878683]">
            Type <span className="text-[#D46238] font-semibold">/help</span> or
            press <span className="text-[#EDEDEC] font-semibold">Tab</span> to
            view commands
          </div>
        </div>

        <div className="md:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-4 bg-[#1C1B1A]/40">
          <div>
            <span className="text-[#D46238] font-bold text-xs uppercase tracking-wider block mb-2">
              Quick start (Click to run)
            </span>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => onSelectCommand("/about")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /about
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  Bio &amp; background →
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCommand("/talks")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /talks
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  Keynotes &amp; events →
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCommand("/projects")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /projects
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  Shipped work →
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCommand("/community")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /community
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  Leadership &amp; impact →
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCommand("/socials")}
                className="w-full text-left px-2.5 py-1.5 rounded border border-[#D46238]/40 bg-[#232221] hover:bg-[#D46238]/20 hover:border-[#D46238] transition-all flex items-center justify-between group"
              >
                <span className="text-[#D46238] font-bold text-xs group-hover:underline">
                  /socials
                </span>
                <span className="text-[11px] text-[#878683] group-hover:text-[#EDEDEC]">
                  GitHub &amp; LinkedIn →
                </span>
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-[#D46238]/20">
            <span className="text-[#D46238] font-bold text-xs uppercase tracking-wider block mb-1">
              What&apos;s new
            </span>
            <ul className="text-[11px] text-[#878683] space-y-1">
              <li>• Shipped HyperTrace v2.4 with WebAssembly flamegraphs</li>
              <li>• Speaking at KubeCon + CloudNativeCon this May</li>
              <li>• Edit components/terminal/data.ts to customize this template</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
