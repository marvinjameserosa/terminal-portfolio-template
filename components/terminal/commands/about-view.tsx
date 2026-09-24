"use client";

import { Maximize2 } from "lucide-react";
import type { LightboxImage } from "../types";

interface AboutViewProps {
  onSelectImage?: (image: LightboxImage) => void;
  onSelectCommand?: (cmd: string) => void;
}

export default function AboutView({
  onSelectImage,
  onSelectCommand,
}: AboutViewProps) {
  return (
    <div className="space-y-4 font-mono text-sm w-full max-w-4xl text-[#EDEDEC]">
      <div className="text-[#D46238] font-bold tracking-wide">
        ┌── About Alex Rivera ─────────────────────────────────────────────────┐
      </div>

      <div className="flex flex-col sm:flex-row gap-5 items-start pl-2 pt-1">
        <div
          onClick={() =>
            onSelectImage?.({
              src: "/portrait.svg",
              alt: "Alex Rivera Profile Portrait",
              title: "Alex Rivera",
              subtitle: "Staff Systems Engineer @ Acme Cloud",
            })
          }
          className="relative w-32 h-40 sm:w-36 sm:h-44 rounded-lg overflow-hidden border border-[#D46238]/40 bg-[#201F1E] cursor-pointer group shadow-lg shrink-0"
          title="Click to view full-screen"
        >
          <img
            src="/portrait.svg"
            alt="Alex Rivera"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] backdrop-blur-[2px]">
            <div className="px-2 py-0.5 rounded bg-black/70 border border-[#D46238]/60 flex items-center gap-1">
              <Maximize2 className="w-3 h-3 text-[#D46238]" />
              <span>Enlarge</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-xs leading-relaxed text-[#CBD5E1] flex-1">
          <p>
            Hi, I&apos;m{" "}
            <span className="text-[#D46238] font-bold">Alex Rivera</span>. I am
            a systems engineer focused on distributed storage, low-latency CLI
            tooling, and cloud-native infrastructure. I enjoy building resilient
            developer platforms that stay simple under heavy production load.
          </p>

          <p>
            Outside of day-to-day systems architecture, I maintain open-source
            observability tools, mentor early-career engineers in the cloud
            native ecosystem, and speak at technical conferences.
          </p>

          <div className="pt-2 text-xs text-[#878683] space-y-1.5 border-t border-[#D46238]/20">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#D46238] w-32 inline-block font-semibold shrink-0">
                Focus Areas
              </span>
              <span className="text-[#EDEDEC]">
                : Distributed Systems, Rust CLI Tooling &amp; Kubernetes
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#D46238] w-32 inline-block font-semibold shrink-0">
                Current Role
              </span>
              <span className="text-[#EDEDEC]">
                : Staff Systems Engineer @ Acme Cloud
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#D46238] w-32 inline-block font-semibold shrink-0">
                Education
              </span>
              <span className="text-[#EDEDEC]">
                : B.S. Computer Science @ State University
              </span>
            </div>
          </div>

          <div className="pt-2 text-xs text-[#878683]">
            Type or click{" "}
            <button
              type="button"
              onClick={() => onSelectCommand?.("/projects")}
              className="text-[#D46238] font-semibold hover:underline"
            >
              /projects
            </button>{" "}
            for shipped work,{" "}
            <button
              type="button"
              onClick={() => onSelectCommand?.("/community")}
              className="text-[#D46238] font-semibold hover:underline"
            >
              /community
            </button>{" "}
            for mentorship initiatives, or{" "}
            <button
              type="button"
              onClick={() => onSelectCommand?.("/talks")}
              className="text-[#D46238] font-semibold hover:underline"
            >
              /talks
            </button>{" "}
            for speaking sessions.
          </div>
        </div>
      </div>
    </div>
  );
}
