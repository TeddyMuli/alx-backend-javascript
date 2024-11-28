function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    const bRound = Math.round(b);
    if (bRound === 0) {
      throw new Error('Cannot divide by zero');
    } else {
      return Math.round(a) / bRound;
    }
  } 
}

module.exports = calculateNumber;
