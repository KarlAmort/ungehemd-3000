// Utility to track user choices and timing

export const tracker = {
  startTime: null,
  wrongChoices: 0,
  choices: {
    sleeves: null,
    color: null,
    buttons: null,
    material: null,
    fit: null
  },

  // Start the tracking timer
  startTracking() {
    this.startTime = Date.now();
    this.wrongChoices = 0;
    this.choices = {
      sleeves: null,
      color: null,
      buttons: null,
      material: null,
      fit: null
    };
  },

  // Record a choice
  recordChoice(category, value, isCorrect) {
    this.choices[category] = value;
    if (!isCorrect) {
      this.wrongChoices++;
    }
  },

  // Get results
  getResults() {
    const timeElapsed = (Date.now() - this.startTime) / 1000; // in seconds
    return {
      time: timeElapsed.toFixed(1),
      wrongChoices: this.wrongChoices
    };
  },

  // Check if all choices are correct and complete
  isComplete() {
    const correctChoices = {
      sleeves: 'long',
      color: 'off-white',
      material: 'organic linen',
      fit: 'excellent, thanks',
      buttons: this.choices.buttons // any choice is valid for buttons
    };

    return Object.keys(correctChoices).every(key =>
      key === 'buttons' || this.choices[key] === correctChoices[key]
    ) && this.choices.buttons !== null;
  }
};
