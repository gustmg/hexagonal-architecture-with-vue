import { describe, expect, it } from 'vitest';
import { isCustomerNameValid } from '@/modules/customer/domain/CustomerName';

describe('isCustomerNameValid', () => {
  it('should return true if customer name is valid', () => {
    expect(isCustomerNameValid('<NAME>')).toBe(true);
  });

  it('should return false if customer name is invalid', () => {
    expect(isCustomerNameValid('')).toBe(false);
  });
});
