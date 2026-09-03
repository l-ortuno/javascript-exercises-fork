const sumAll = function(start, end) {

if ((!Number.isInteger (start)) || (!Number.isInteger (end)) || (!Number.isFinite (start)) || (!Number.isFinite (end))) {
    return 'ERROR'
}

else {

    const min = Math.min(start, end);
    const max = Math.max(start, end);
  
  if ((min >= 0) && (max >= 0)) {
    return ((max - min + 1) * (min + max)) / 2;
  }
  else if (min < 0) {
    return 'ERROR'
  }
}
};

// Do not edit below this line
module.exports = sumAll;
