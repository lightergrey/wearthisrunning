export default function getFeel({apparentTemperature}) {
  switch (true) {
    case apparentTemperature > 75:
      return 'hot';
    case apparentTemperature > 60:
      return 'warm';
    case apparentTemperature > 45:
      return 'mild';
    case apparentTemperature > 35:
      return 'chilly';
    case apparentTemperature > 15:
      return 'cold';
    case apparentTemperature <= 15:
      return 'frigid';
    default:
      return 'default';
  }
}
