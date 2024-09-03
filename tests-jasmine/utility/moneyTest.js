import formatCurrency from "../../scripts/utility/money.js";

describe('test suite: formatCurrency', () => {

  it('converts cents into dollar', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with zero',() => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('works with round off of number',() => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});