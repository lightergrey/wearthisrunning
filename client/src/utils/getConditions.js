function windDescription(windSpeed) {
  let description;
  switch (true) {
    case windSpeed < 5:
      description = 'Calm';
      break;
    case windSpeed < 7:
      description = 'Light breeze';
      break;
    case windSpeed < 12:
      description = 'Gentle breeze';
      break;
    case windSpeed < 21:
      description = 'Breezy';
      break;
    case windSpeed < 31:
      description = 'Strong breeze';
      break;
    default:
      description = 'High wind';
  }
  return description;
}

export default function getConditions({
  apparentTemperature,
  summary,
  windSpeed,
}) {
  const conditions = [];

  if (typeof apparentTemperature !== 'undefined') {
    conditions.push(`${Math.round(apparentTemperature)}° F`);
  }

  if (typeof summary !== 'undefined') {
    conditions.push(summary);
  }

  if (typeof windSpeed !== 'undefined') {
    conditions.push(`${windDescription(windSpeed)}`);
  }

  return conditions;
}

export {getConditions, windDescription};
