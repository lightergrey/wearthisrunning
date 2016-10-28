export default function getApparel({ apparentTemperature, icon, precipProbability }) {
  const apparel = [];

  if (precipProbability > 0.5) {
    apparel.push('Cap');
  } else if (apparentTemperature < 30) {
    apparel.push('Winter Hat');
  }

  if (icon === 'clear-day') {
    apparel.push('Sunglasses');
  }

  if (apparentTemperature < 15) {
    apparel.push('Heavy Jacket');
  } else if (apparentTemperature < 35) {
    apparel.push('Light Jacket');
  }

  if (apparentTemperature < 45) {
    apparel.push('Long-Sleeve Shirt');
  } else if (apparentTemperature < 60) {
    apparel.push('Short-Sleeve Shirt');
  } else if (apparentTemperature >= 60) {
    apparel.push('Singlet');
  }

  if (apparentTemperature <= 40) {
    apparel.push('Gloves');
  }

  if (apparentTemperature < 35) {
    apparel.push('Tights');
  } else if (apparentTemperature > 35) {
    apparel.push('Shorts');
  }

  return apparel;
}
