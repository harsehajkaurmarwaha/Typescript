import { describe, expect, test } from 'vitest';
import { alder } from './alder';

describe('Oppgave 3 — Beregn alder', () => {
  test('født 1990', () => {
    expect(alder(1990, 2026)).toBe(36);
  });

  test('født 2000', () => {
    expect(alder(2000, 2026)).toBe(26);
  });

  test('samme år gir null', () => {
    expect(alder(2026, 2026)).toBe(0);
  });
});
