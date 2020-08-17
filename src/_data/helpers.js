module.exports = {
  getNextHeadingLevel(currentLevel) {
    return parseInt(currentLevel, 10) + 1;
  },
  getReadingTime(text) {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  },
  getReadingTimeString(text) {
    const numberOfMinutes = this.getReadingTime(text);
    const whichMinute = numberOfMinutes === 1 ? "Minute" : "Minuten";
    return `${numberOfMinutes} ${whichMinute}`;
  }
};
