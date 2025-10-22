# Pattern Finder

A React-based web application that searches for factorial binary patterns within squared numbers. Find occurrences of factorial representations (!5, !6, !7, etc.) hidden in the binary form of large squared integers.

## 🎯 What It Does

Pattern Finder takes two inputs:
- **Needle Space (n)**: Generates factorial binary patterns from 5! up to n!
- **Haystack Power (x)**: Creates a search space from x²

The application then searches for overlapping occurrences of each factorial's binary representation within the binary form of x².

### Example

With `N = 6` and `X = 1000000000000`:
```json
{
  "!5": 1,
  "!6": 1
}
```

This means the binary representation of 5! (120 in decimal, `1111000` in binary) appears once in the binary representation of 100000000000000000.

## 🧮 How It Works

1. **Needle Generation**: Computes factorials from 5! to n! and converts each to binary
2. **Haystack Creation**: Calculates x² and converts to binary representation
3. **Pattern Matching**: Uses overlapping string search to find all occurrences of each factorial pattern
4. **Results Display**: Shows matching factorials and their occurrence counts

### Algorithm

```typescript
// Generate factorial binary patterns
5! = 120 → binary: 1111000
6! = 720 → binary: 1011010000
7! = 5040 → binary: 1001110110000
...

// Search in x²
x² → binary representation → search for each factorial pattern
```

## 💡 Usage Tips

- **For multiple occurrences**: Use very large X values (10^19 or higher)
- **Keep N reasonable**: Factorials grow exponentially; n > 25 may cause performance issues
- **Small factorials match more**: !5 and !6 are more likely to appear than larger factorials

### Recommended Values

| Goal | N | X |
|------|---|---|
| Quick test | 5 | 1000000000 |
| More than 1 match on the same factorial | 5 | 10000000000 |
| Multiple matches | 6 | 1000000000000 |
