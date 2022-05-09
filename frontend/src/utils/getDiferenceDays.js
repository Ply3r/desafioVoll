const getDifferenceDays = (days) => (extract) => {
  const dateNow = Date.now();
  const extractDate = new Date(extract.createdAt);

  const diffTime = Math.abs(extractDate - dateNow);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays <= days;
}

module.exports = getDifferenceDays;