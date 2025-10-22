interface IResultCard {
  result: Record<string, number>;
}

export const ResultCard = ({ result }: IResultCard) => {
  return (
    <pre className="bg-slate-800 text-slate-100 p-6 rounded-lg border border-slate-700 overflow-x-auto font-mono text-sm">
      {JSON.stringify(result, null, 2)}
    </pre>
  );
};
