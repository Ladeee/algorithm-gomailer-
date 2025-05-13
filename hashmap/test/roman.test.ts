import { describe, it, expect } from 'vitest';
import intoRoman  from '../../hashmap/romans';

describe('intoRoman', () => {
  it('should convert 100 to C', () => {
    expect(intoRoman(100)).toBe('C');
  });

  it('should convert 1994 to MCMXCIV', () => {
    expect(intoRoman(1994)).toBe('MCMXCIV');
  });

  it('should convert 1987 to MCMLXXXVII', () => {
    expect(intoRoman(1987)).toBe('MCMLXXXVII');
  });

  it('should convert 91 to XCI', () => {
    expect(intoRoman(91)).toBe('XCI');
  });

  it('should convert 58 to LVIII', () => {
    expect(intoRoman(58)).toBe('LVIII');
  });

  it('should convert 150 to CL', () => {
    expect(intoRoman(150)).toBe('CL');
  });

  it('should convert 1770 to MDCCLXX', () => {
    expect(intoRoman(1770)).toBe('MDCCLXX');
  });

  it('should convert 1998 to MCMXCVIII', () => {
    expect(intoRoman(1998)).toBe('MCMXCVIII');
  });

  it('should handle a large number 5000 (return empty string for unsupported values)', () => {
    expect(intoRoman(5000)).toBe('');
  });
});
