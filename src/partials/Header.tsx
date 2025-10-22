interface IHeader {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: IHeader) => {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold text-slate-200 mb-2">{title}</h1>
      <p className="text-slate-400">{subtitle}</p>
    </header>
  );
};
