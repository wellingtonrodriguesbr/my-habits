interface ProgressbarProps {
  progress: number;
}

export function Progressbar({ progress }: ProgressbarProps) {
  return (
    <div className="h-3 rounded-xl w-full bg-zinc-700 mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-aria-valuenow={progress}
        className="h-3 rounded-xl bg-violet-500 transition-all duration-700"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
