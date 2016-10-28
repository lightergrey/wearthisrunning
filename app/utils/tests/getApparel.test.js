import getApparel from '../getApparel';
import expect from 'expect';

describe('getApparel', () => {
  it('should return an empty array without a forecast', () => {
    const apparel = getApparel({});
    expect(apparel).toEqual([]);
  });

  it('should suggest a cap for rain', () => {
    const apparel = getApparel({ precipProbability: 0.51 });
    expect(apparel).toContain('Cap');
  });

  it('should suggest a winter hat for temp under 30 and no rain', () => {
    const apparel = getApparel({ precipProbability: 0.49, apparentTemperature: 29 });
    expect(apparel).toContain('Winter Hat');
  });

  it('should suggest sunglasses for a clear day', () => {
    const apparel = getApparel({ icon: 'clear-day' });
    expect(apparel).toContain('Sunglasses');
  });

  it('should not suggest sunglasses for a clear night', () => {
    const apparel = getApparel({ icon: 'clear-night' });
    expect(apparel).toNotContain('Sunglasses');
  });

  it('should suggest heavy jacket if really cold', () => {
    const apparel = getApparel({ apparentTemperature: 14 });
    expect(apparel).toContain('Heavy Jacket');
  });

  it('should suggest light jacket if cold', () => {
    const apparel = getApparel({ apparentTemperature: 34 });
    expect(apparel).toContain('Light Jacket');
  });

  it('should suggest a singlet if over 60°F', () => {
    const apparel = getApparel({ apparentTemperature: 61 });
    expect(apparel).toContain('Singlet');
  });

  it('should suggest a short sleeve shirt if over 45°F', () => {
    const apparel = getApparel({ apparentTemperature: 46 });
    expect(apparel).toContain('Short-Sleeve Shirt');
  });

  it('should suggest a short sleeve shirt if under 45°F', () => {
    const apparel = getApparel({ apparentTemperature: 44 });
    expect(apparel).toContain('Long-Sleeve Shirt');
  });

  it('should suggest gloves if under 40°F', () => {
    const apparel = getApparel({ apparentTemperature: 39 });
    expect(apparel).toContain('Gloves');
  });

  it('should suggest shorts over 35°F', () => {
    const apparel = getApparel({ apparentTemperature: 35.1 });
    expect(apparel).toContain('Shorts');
  });
});
