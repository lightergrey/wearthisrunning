import getFeel from '../getFeel';
import expect from 'expect';

describe('getFeel', () => {
  it('should return frigid if below 15', () => {
    const feel = getFeel({ apparentTemperature: 15 });
    expect(feel).toEqual('frigid');
  });

  it('should return cold if above 15', () => {
    const feel = getFeel({ apparentTemperature: 16 });
    expect(feel).toEqual('cold');
  });

  it('should return chilly if above 35', () => {
    const feel = getFeel({ apparentTemperature: 36 });
    expect(feel).toEqual('chilly');
  });

  it('should return mild if above 45', () => {
    const feel = getFeel({ apparentTemperature: 46 });
    expect(feel).toEqual('mild');
  });

  it('should return warm if above 60', () => {
    const feel = getFeel({ apparentTemperature: 61 });
    expect(feel).toEqual('warm');
  });

  it('should return hot if above 75', () => {
    const feel = getFeel({ apparentTemperature: 76 });
    expect(feel).toEqual('hot');
  });
});
