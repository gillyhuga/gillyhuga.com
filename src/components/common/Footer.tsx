import React from "react";
import PulseticBadge from "./PulseticBadge";

interface FooterProps {
  version?: string;
}

export default function Footer({ version }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-16 border-t border-neutral-200 dark:border-neutral-700 py-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <div className="flex flex-col md:flex-row justify-center items-center gap-3">
        <div>
          © {currentYear}{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-100">
            Gilly Huga Anargya
          </span>
          . All rights reserved.
        </div>
      </div>

      <div className="mt-3 flex justify-center items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500">
        {version && <div>{version}</div>}
        <PulseticBadge />
      </div>
    </footer>
  );
}
