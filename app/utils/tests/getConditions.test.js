import { getConditions, windDescription } from '../getConditions';
import expect from 'expect';

describe('getConditions', () => {
  it('should return an empty array without a forecast', () => {
    const apparel = getConditions({});
    expect(apparel).toEqual([]);
  });

  it('should return a formated temperature', () => {
    const apparel = getConditions({ apparentTemperature: 0 });
    expect(apparel).toContain('0° F');
  });

  it('should return a summary', () => {
    const summary = 'summary';
    const apparel = getConditions({ summary });
    expect(apparel).toContain('summary');
  });

  it('should return a formated windSpeed', () => {
    const apparel = getConditions({ windSpeed: 80 });
    expect(apparel).toContain('High wind');
  });
});

describe('windDescription', () => {
  it('should return calm for no wind', () => {
    const description = windDescription(0);
    expect(description).toEqual('Calm');
  });

  it('should return calm for 4mph wind', () => {
    const description = windDescription(4);
    expect(description).toEqual('Calm');
  });

  it('should return light breeze for 5mph wind', () => {
    const description = windDescription(5);
    expect(description).toEqual('Light breeze');
  });

  it('should return Gentle breeze for 7mph wind', () => {
    const description = windDescription(7);
    expect(description).toEqual('Gentle breeze');
  });

  it('should return Breezy for 12mph wind', () => {
    const description = windDescription(12);
    expect(description).toEqual('Breezy');
  });

  it('should return Strong breeze for 21mph wind', () => {
    const description = windDescription(21);
    expect(description).toEqual('Strong breeze');
  });

  it('should return High wind for 31mph wind', () => {
    const description = windDescription(31);
    expect(description).toEqual('High wind');
  });
});
