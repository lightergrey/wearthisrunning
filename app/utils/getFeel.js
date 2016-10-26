export default function getFeel({ apparentTemperature }) {
  let feel;
  switch (true) {
    case (apparentTemperature > 75):
      feel = 'hot';
      break;
    case (apparentTemperature > 60):
      feel = 'warm';
      break;
    case (apparentTemperature > 45):
      feel = 'mild';
      break;
    case (apparentTemperature > 35):
      feel = 'chilly';
      break;
    case (apparentTemperature > 15):
      feel = 'cold';
      break;
    default:
      feel = 'frigid';
  }
  return feel;
}
