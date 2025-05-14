<template>
  <div class="shirt-configurator">
    <h1>ungehemd</h1>
    <p class="tagline">berlin's finest linen tailoring since whenever we felt like it</p>

    <div class="shirt-display">
      <div class="shirt-container">
        <svg :class="['shirt-drawing', { 'animate-shirt': isAnimating }]" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
          <!-- Shirt body -->
          <path d="M75,100 L75,350 L225,350 L225,100 C200,80 175,70 150,70 C125,70 100,80 75,100 Z"
                :fill="color === 'black' ? '#222' : color === 'light blue' ? '#d1e1f9' : '#f7f6eb'"
                fill-opacity="0.2"
                stroke="black" stroke-width="2" />

          <!-- Collar -->
          <path d="M120,100 L150,70 L180,100"
                fill="none" stroke="black" stroke-width="2" />

          <!-- Left Sleeve -->
          <path :d="sleeves === 'long' ?
            'M75,100 L30,170 L45,190 L75,130' :
            'M75,100 L50,130 L60,140 L75,115'"
                fill="none" stroke="black" stroke-width="2" />

          <!-- Right Sleeve -->
          <path :d="sleeves === 'long' ?
            'M225,100 L270,170 L255,190 L225,130' :
            'M225,100 L250,130 L240,140 L225,115'"
                fill="none" stroke="black" stroke-width="2" />

          <!-- Buttons -->
          <g v-if="buttons === 'left'" class="buttons">
            <circle cx="140" cy="140" r="3" fill="black" />
            <circle cx="140" cy="180" r="3" fill="black" />
            <circle cx="140" cy="220" r="3" fill="black" />
            <circle cx="140" cy="260" r="3" fill="black" />
            <circle cx="140" cy="300" r="3" fill="black" />
          </g>
          <g v-else-if="buttons === 'right'" class="buttons">
            <circle cx="160" cy="140" r="3" fill="black" />
            <circle cx="160" cy="180" r="3" fill="black" />
            <circle cx="160" cy="220" r="3" fill="black" />
            <circle cx="160" cy="260" r="3" fill="black" />
            <circle cx="160" cy="300" r="3" fill="black" />
          </g>

          <!-- Measurement lines -->
          <line x1="50" y1="200" x2="70" y2="200" stroke="navy" stroke-width="1" stroke-dasharray="2,2" />
          <line x1="230" y1="200" x2="250" y2="200" stroke="navy" stroke-width="1" stroke-dasharray="2,2" />
          <line x1="100" y1="80" x2="100" y2="100" stroke="navy" stroke-width="1" stroke-dasharray="1,1" />
          <line x1="200" y1="80" x2="200" y2="100" stroke="navy" stroke-width="1" stroke-dasharray="1,1" />
          <line x1="75" y1="250" x2="95" y2="250" stroke="navy" stroke-width="1" stroke-dasharray="2,2" />
          <line x1="205" y1="250" x2="225" y2="250" stroke="navy" stroke-width="1" stroke-dasharray="2,2" />

          <!-- Technical specs text -->
          <text x="50" y="190" font-size="5" fill="navy">22.5cm</text>
          <text x="230" y="190" font-size="5" fill="navy">22.5cm</text>
          <text x="140" y="60" font-size="5" fill="navy">COLLAR: 40cm</text>
          <text x="30" y="160" font-size="5" fill="navy" transform="rotate(-45 30,160)">SLEEVE</text>
          <text x="260" y="160" font-size="5" fill="navy" transform="rotate(45 260,160)">SLEEVE</text>

          <!-- Pattern Marks -->
          <circle cx="150" cy="200" r="1" fill="navy" />
          <circle cx="150" cy="250" r="1" fill="navy" />
          <circle cx="150" cy="300" r="1" fill="navy" />
          <circle cx="100" cy="150" r="1" fill="navy" />
          <circle cx="200" cy="150" r="1" fill="navy" />

          <!-- Technical reference arrows -->
          <path d="M50,310 L70,310 L65,307 M65,313 L70,310" stroke="navy" stroke-width="0.5" fill="none" />
          <path d="M250,310 L230,310 L235,307 M235,313 L230,310" stroke="navy" stroke-width="0.5" fill="none" />

          <!-- Approved stamp that appears when all selections are correct -->
          <g v-if="isComplete" class="approved-stamp">
            <circle cx="200" cy="120" r="25" fill="none" stroke="red" stroke-width="2" transform="rotate(-15 200 120)" />
            <text x="200" y="120" font-size="10" fill="red" text-anchor="middle" alignment-baseline="middle"
                  font-family="'Space Mono', monospace" font-weight="bold" transform="rotate(-15 200 120)">APPROVED</text>
          </g>
        </svg>
      </div>
    </div>

    <div class="configuration-options">
      <div class="option-group">
        <h3>sleeves</h3>
        <div class="options">
          <label :class="{ selected: sleeves === 'long' }">
            <input type="radio" name="sleeves" value="long" v-model="sleeves">
            long
          </label>
          <label :class="{ selected: sleeves === 'short' }">
            <input type="radio" name="sleeves" value="short" v-model="sleeves">
            short
          </label>
        </div>
      </div>

      <div class="option-group">
        <h3>color</h3>
        <div class="options">
          <label :class="{ selected: color === 'black' }">
            <input type="radio" name="color" value="black" v-model="color">
            black
          </label>
          <label :class="{ selected: color === 'off-white' }">
            <input type="radio" name="color" value="off-white" v-model="color">
            off-white
          </label>
          <label :class="{ selected: color === 'light blue' }">
            <input type="radio" name="color" value="light blue" v-model="color">
            light blue
          </label>
        </div>
      </div>

      <div class="option-group">
        <h3>buttons</h3>
        <div class="options">
          <label :class="{ selected: buttons === 'left' }">
            <input type="radio" name="buttons" value="left" v-model="buttons">
            left
          </label>
          <label :class="{ selected: buttons === 'right' }">
            <input type="radio" name="buttons" value="right" v-model="buttons">
            right
          </label>
        </div>
      </div>

      <div class="option-group">
        <h3>material</h3>
        <div class="options">
          <label :class="{ selected: material === 'cotton' }">
            <input type="radio" name="material" value="cotton" v-model="material">
            cotton
          </label>
          <label :class="{ selected: material === 'organic linen' }">
            <input type="radio" name="material" value="organic linen" v-model="material">
            organic linen
          </label>
          <label :class="{ selected: material === '20% silk + polyester stretch' }">
            <input type="radio" name="material" value="20% silk + polyester stretch" v-model="material">
            20% silk + polyester stretch
          </label>
        </div>
      </div>

      <div class="option-group">
        <h3>fit</h3>
        <div class="options">
          <label :class="{ selected: fit === 'slim-fit' }">
            <input type="radio" name="fit" value="slim-fit" v-model="fit">
            slim-fit
          </label>
          <label :class="{ selected: fit === 'excellent, thanks' }">
            <input type="radio" name="fit" value="excellent, thanks" v-model="fit">
            excellent, thanks
          </label>
          <label :class="{ selected: fit === 'slob' }">
            <input type="radio" name="fit" value="slob" v-model="fit">
            slob
          </label>
        </div>
      </div>
    </div>

    <div v-if="showResults" class="results">
      <h2>You made it!</h2>
      <p>Time: {{ results.time }} seconds</p>
      <p>Wrong choices: {{ results.wrongChoices }}</p>
      <p>{{ getResultMessage() }}</p>
      <button @click="reset">Start Over</button>
    </div>

    <!-- Popover for funny rejections -->
    <div v-if="showPopover" class="popover-overlay" @click="closePopover">
      <div class="popover" @click.stop>
        <div class="popover-header">
          <h3>{{ popoverTitle }}</h3>
          <button @click="closePopover" class="close-button">×</button>
        </div>
        <div class="popover-content">
          <p>{{ popoverMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { tracker } from '../utils/tracker';

// User choices
const sleeves = ref(null);
const color = ref(null);
const buttons = ref(null);
const material = ref(null);
const fit = ref(null);

// Animation state
const isAnimating = ref(false);
const animateShirt = () => {
  isAnimating.value = true;
  setTimeout(() => {
    isAnimating.value = false;
  }, 400);
};

// Popover state
const showPopover = ref(false);
const popoverTitle = ref('');
const popoverMessage = ref('');

// Results
const showResults = ref(false);
const results = ref({ time: 0, wrongChoices: 0 });

// Start tracking on mount
onMounted(() => {
  tracker.startTracking();
});

// Watch for changes and check correctness
watch(sleeves, (newValue) => {
  const isCorrect = newValue === 'long';
  tracker.recordChoice('sleeves', newValue, isCorrect);
  animateShirt();

  if (newValue === 'short') {
    popoverTitle.value = 'BVG is Hiring!';
    popoverMessage.value = 'Good news! The Berliner Verkehrsbetriebe (BVG) is currently looking for bus drivers. Your fashion choices suggest you\'d fit right in with their short-sleeve dress code!';
    showPopover.value = true;
  }

  checkCompletion();
});

watch(color, (newValue) => {
  const isCorrect = newValue === 'off-white';
  tracker.recordChoice('color', newValue, isCorrect);
  animateShirt();

  if (newValue !== 'off-white') {
    if (newValue === 'black') {
      popoverTitle.value = 'sleeves fail';
      popoverMessage.value = 'Get lost! Your kihd of petit-bourge hois fascists failing fashion in this fashion, short sleeves on brown shirts, 100 % polyester';
    } else {
      popoverTitle.value = 'Color Catastrophe';
      popoverMessage.value = 'Light blue? Are you planning to work for a bank? Or just cosplaying as a sky?';
    }
    showPopover.value = true;
  }

  checkCompletion();
});

watch(buttons, (newValue) => {
  // Both choices are valid for buttons
  tracker.recordChoice('buttons', newValue, true);
  animateShirt();
  checkCompletion();
});

watch(material, (newValue) => {
  const isCorrect = newValue === 'organic linen';
  tracker.recordChoice('material', newValue, isCorrect);
  animateShirt();

  if (newValue !== 'organic linen') {
    popoverTitle.value = 'Material Mistake';
    popoverMessage.value = newValue === 'cotton' ?
      'Cotton? How pedestrian. Did you arrive on a tractor?' :
      'Silk and polyester? Are you designing a shirt or upholstery for a 1970s disco?';
    showPopover.value = true;
  }

  checkCompletion();
});

watch(fit, (newValue) => {
  const isCorrect = newValue === 'excellent, thanks';
  tracker.recordChoice('fit', newValue, isCorrect);
  animateShirt();

  if (newValue === 'slim-fit') {
    popoverTitle.value = '@dieworkwear says:';
    popoverMessage.value = '"Slim-fit shirts are the sartorial equivalent of a dad joke: both were briefly acceptable in 2010, and both should have been left there."';
    showPopover.value = true;
  } else if (newValue === 'slob') {
    popoverTitle.value = 'Slob Selection';
    popoverMessage.value = 'Embracing the "schlumpy core" aesthetic? Bold choice in a city where even the pigeons judge your outfit.';
    showPopover.value = true;
  }

  checkCompletion();
});

// Close the popover
const closePopover = () => {
  showPopover.value = false;
};

// Check if all choices are correct and complete
const isComplete = ref(false);

const checkCompletion = () => {
  if (tracker.isComplete()) {
    results.value = tracker.getResults();
    showResults.value = true;
    isComplete.value = true;

    // Extra animation for completion
    animateShirt();
  }
};

// Get a snarky message based on results
const getResultMessage = () => {
  const time = parseFloat(results.value.time);
  const wrongChoices = results.value.wrongChoices;

  // Create a message that considers both time and wrong choices
  if (wrongChoices === 0) {
    if (time < 10) {
      return "First try and under 10 seconds? Either you're a fashion savant or you've been here before. Either way, we're impressed!";
    } else {
      return "Flawless execution! You've clearly been reading your Berlin fashion theory. Not everyone understands the subtle art of sartorial restraint.";
    }
  } else if (wrongChoices <= 2) {
    if (time < 20) {
      return `Almost perfect with just ${wrongChoices} misstep${wrongChoices === 1 ? '' : 's'}. Quick recovery—the mark of true Berlin hipster potential.`;
    } else {
      return `Only ${wrongChoices} mistake${wrongChoices === 1 ? '' : 's'}. You'd fit right in at any Kreuzberg café. You just needed to think about it a bit.`;
    }
  } else if (wrongChoices <= 5) {
    if (time < 30) {
      return `${wrongChoices} wrong turns but you got there in the end. Welcome to the middle of the fashion bell curve—at least you're not at the bottom.`;
    } else {
      return "Welcome to the end of your fashion journey. It was quite the scenic route, wasn't it? Not everyone can be a natural.";
    }
  } else if (wrongChoices <= 8) {
    return `Taste 101 in ${wrongChoices} tries! Are you deliberately trying every wrong option, or is this genuinely your aesthetic journey?`;
  } else {
    return `${wrongChoices} mistakes? We admire your dedication to exploring all possible bad fashion choices. Very thorough research.`;
  }
};

// Reset the form
const reset = () => {
  sleeves.value = null;
  color.value = null;
  buttons.value = null;
  material.value = null;
  fit.value = null;
  showResults.value = false;
  isComplete.value = false;
  tracker.startTracking();

  // Animation effect on reset
  setTimeout(() => {
    animateShirt();
  }, 100);
};
</script>

<style scoped>
.shirt-configurator {
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Courier New', monospace;
  color: #000;
  padding: 2rem;
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath fill='none' stroke='%23f0f0f0' stroke-width='0.5' d='M0 25h100M0 50h100M0 75h100M25 0v100M50 0v100M75 0v100'/%3E%3C/svg%3E");
  background-repeat: repeat;
}

h1 {
  font-size: 3rem;
  text-transform: lowercase;
  letter-spacing: 0.3rem;
  margin-bottom: 0;
  font-weight: normal;
  border-bottom: 2px solid #000;
  padding-bottom: 0.5rem;
  position: relative;
}

h1::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 5px;
  background-color: navy;
}

.tagline {
  font-style: italic;
  margin-top: 15px;
  color: #555;
  text-align: right;
  border-bottom: 1px dashed #000;
  padding-bottom: 10px;
}

.shirt-display {
  margin: 2rem auto;
  width: 100%;
  display: flex;
  justify-content: center;
}

.shirt-container {
  width: 300px;
  height: 400px;
  background-color: #fff;
  background-image:
    linear-gradient(#f5f5f5 1px, transparent 1px),
    linear-gradient(90deg, #f5f5f5 1px, transparent 1px);
  background-size: 10px 10px;
  border: 1px solid #000;
  position: relative;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.15);
}

.shirt-drawing {
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
}

.shirt-drawing path {
  transition: all 0.5s ease;
}

.shirt-drawing:hover {
  transform: scale(1.02);
}

.animate-shirt {
  animation: shirtPulse 0.4s ease-in-out;
}

@keyframes shirtPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.shirt-container::after {
  content: "1960";
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 10px;
  color: navy;
  font-family: "Space Mono", monospace;
  opacity: 0.7;
  font-style: italic;
}

.configuration-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.option-group {
  border: 1px solid #000;
  padding: 1rem;
  background-color: #fffef7;
  position: relative;
  margin-bottom: 0.5rem;
}

.option-group::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: navy;
  opacity: 0.6;
}

.option-group h3 {
  text-transform: uppercase;
  font-weight: normal;
  margin: -1rem -1rem 0.5rem -1rem;
  font-size: 1rem;
  background-color: navy;
  color: white;
  padding: 0.3rem 0.8rem;
  letter-spacing: 1px;
  font-family: "Courier New", monospace;
  border-bottom: 1px dashed #000;
}

.options {
  display: flex;
  flex-direction: column;
}

.options label {
  margin: 0.3rem 0;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s;
  font-size: 0.9rem;
  position: relative;
  padding-left: 25px;
}

.options label:hover {
  background-color: #f0f0f0;
}

.options label.selected {
  border: 1px solid #000;
  background-color: #f5f5f5;
  font-weight: bold;
}

.options label.selected::before {
  content: "▶";
  position: absolute;
  left: 8px;
  color: navy;
}

.options input[type="radio"] {
  margin-right: 0.5rem;
  position: absolute;
  opacity: 0;
}

.popover-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
}

.popover {
  background-color: #fffef7;
  width: 80%;
  max-width: 500px;
  border: 2px solid #000;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: popoverAppear 0.3s ease-out forwards;
  transform-origin: center;
  position: relative;
}

@keyframes popoverAppear {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.popover-header {
  background-color: navy;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000;
}

.popover-header h3 {
  margin: 0;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Space Mono", monospace;
}

.close-button {
  background: none;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  transition: all 0.2s;
}

.close-button:hover {
  background-color: #fff;
  color: navy;
  transform: rotate(90deg);
}

.popover-content {
  padding: 1.8rem;
  font-style: italic;
  font-family: "Space Mono", monospace;
  border-top: 1px dashed #000;
}

.popover-content p {
  line-height: 1.6;
  position: relative;
}

.popover-content p::before {
  font-size: 3rem;
  position: absolute;
  left: -20px;
  top: -10px;
  opacity: 0.2;
  color: navy;
}

.results {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #fffef7;
  border: 2px solid #000;
  text-align: center;
  position: relative;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  animation: resultAppear 0.5s ease-out forwards;
}

@keyframes resultAppear {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.results h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  font-family: "Space Mono", monospace;
}

.results h2::after {
  position: absolute;
  bottom: -5px;
  left: 25%;
  width: 50%;
  height: 3px;
  background-color: navy;
}

.results p {
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0.8rem 0;
}

.results button {
  margin-top: 2rem;
  padding: 0.7rem 1.5rem;
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  cursor: pointer;
  font-family: 'Space Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  transition: all 0.3s;
  position: relative;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
}

.results button:hover {
  background-color: navy;
  color: white;
  border-color: navy;
  transform: translateY(-3px);
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.3);
}

.results button:active {
  transform: translateY(0);
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
}

/* Navy blue accents */
h3, .popover-header {
  background-color: navy;
  color: white;
  padding: 0.3rem 0.5rem;
}

/* Animation for approved stamp */
.approved-stamp {
  animation: stampAppear 0.7s cubic-bezier(.17,.67,.83,.67);
  transform-origin: center;
}

@keyframes stampAppear {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.4) rotate(0deg);
  }
  75% {
    transform: scale(0.9) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(-15deg);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .configuration-options {
    grid-template-columns: 1fr;
  }

  .shirt-container {
    width: 250px;
    height: 333px;
  }

  h1 {
    font-size: 2.5rem;
  }

  .popover {
    width: 90%;
    max-width: 450px;
  }
}
</style>
