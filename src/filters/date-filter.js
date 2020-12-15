// Stolen from https://stackoverflow.com/a/31615643

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);
  return dateObject.toLocaleString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
