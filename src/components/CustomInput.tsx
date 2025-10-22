interface ICustomInput {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export const CustomInput = ({ label, value, onChange }: ICustomInput) => {
  return (
    <div className="space-y-2 text-start">
      <label className="block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value))}
        type="number"
        placeholder="Enter value"
        className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none"
      />
    </div>
  );
};
