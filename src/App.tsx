import "./App.css";
import { useState } from "react";
import { EmptyResultCard, Header, ResultCard } from "./partials";
import { CustomButton, CustomInput } from "./components";

function App() {
  const [needleSpace, setNeedleSpace] = useState<number>(0);
  const [haystackPower, setHaystackPower] = useState<number>(0);
  const [result, setResult] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Helper functions
  const generateNeedles = (n: number) => {
    if (n < 5) return [];

    const result = [];
    let factorial = 120n;

    result.push(factorial.toString(2));

    for (let i = 6; i <= n; i++) {
      factorial *= BigInt(i);
      result.push(factorial.toString(2));
    }

    return result;
  };

  const generateHaystack = (x: number) => {
    const haystack = x * x;
    const binaryHaystack = haystack.toString(2);

    return binaryHaystack;
  };

  const countOccurrences = (haystack: string, needle: string) => {
    let count = 0;
    let position = 0;

    while ((position = haystack.indexOf(needle, position)) !== -1) {
      count++;
      position += 1;
    }

    return count;
  };

  // Main function
  const findPatterns = () => {
    setIsLoading(true);

    const patterns: Record<string, number> = {};

    const needles = generateNeedles(needleSpace);
    const haystack = generateHaystack(haystackPower);

    needles.forEach((binary, index) => {
      const count = countOccurrences(haystack, binary);

      if (count > 0) {
        const key = `!${index + 5}`;
        patterns[key] = count;
      }
    });

    setResult(patterns);
    // Small timeout to simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      {/* Header */}
      <Header
        title="Pattern Finder"
        subtitle="Find factorial patterns in binary representations"
      />
      {/* Input Card */}
      <div className="space-y-6 ">
        <CustomInput
          label="Needle Space (n)"
          onChange={setNeedleSpace}
          value={needleSpace}
        />
        <CustomInput
          label="Haystack Power (x)"
          onChange={setHaystackPower}
          value={haystackPower}
        />
        <CustomButton
          isLoading={isLoading}
          onClick={findPatterns}
          disabled={!needleSpace || !haystackPower || isLoading}
        />
      </div>
      {/* Results Card */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100">Results</h2>
        {result && !isLoading && Object.keys(result).length ? (
          <ResultCard result={result} />
        ) : (
          <EmptyResultCard isLoading={isLoading} />
        )}
      </div>
    </div>
  );
}

export default App;
