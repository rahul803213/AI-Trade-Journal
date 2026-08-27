export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-bold text-white">
            AI
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-100">
              AI Trade Journal
            </h1>
            <p className="text-xs text-slate-400">Your trading, analyzed</p>
          </div>
        </div>
        <span className="text-xs text-slate-500">Dashboard</span>
      </div>
    </header>
  );
}