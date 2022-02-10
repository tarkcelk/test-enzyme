/**
 * @jest-environment jsdom
 */
import {expect} from '@jest/globals';
import {isAllUpperCase} from './utils';

describe('utils function tests with enzyme', () => {
  it('should return true if text is upper case', () => {
    expect(isAllUpperCase('UPPER CASE TEXT')).toBe(true);
  });

  it('should return false if text is lower case', () => {
    expect(isAllUpperCase('lower case text')).toBe(false);
  });

  it('should return false if no text provided', () => {
    expect(isAllUpperCase()).toBe(false);
  });
});
