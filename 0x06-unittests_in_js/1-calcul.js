function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    const bRound = Math.round(b);

    return bRound !== 0 ? Math.round(a) / Math.round(b) : 'Error';
  } 
}

module.exports = calculateNumber;
