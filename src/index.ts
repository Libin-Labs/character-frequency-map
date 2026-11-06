export function characterCounts(value: string): Map<string, number> {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  const counts = new Map<string, number>();
  for (const char of value) counts.set(char, (counts.get(char) ?? 0) + 1);
  return counts;
}
