import Image from "next/image";

export default function ProposalFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6 py-4 text-xs text-slate-600">
        <div className="flex items-center gap-3">
          <Image
            src="/img/new_maru_logo_neutral.png"
            alt="MaruOnline"
            width={160}
            height={40}
            style={{ height: '40px', width: 'auto' }}
            priority
          />
          <span className="hidden sm:inline">Rainmakers in AI Powered Marketing & Automation</span>
        </div>
        <div>© 2025 All rights reserved</div>
      </div>
    </footer>
  );
}
