export class InputRange {

    static create(name, min, max, step, root) {
        return new InputRange(name, min, max, step, root).render();
    }

    constructor(name, min, max, root) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.root = root;
        this.step = 1
        this.minGap = 0
    }

    createRangeInputs() {
        this.slideOne = document.createElement("input");
        this.slideOne.type = "range";
        this.slideOne.min = this.min.toString();
        this.slideOne.max = this.max.toString();
        this.slideOne.step = this.step.toString();
        this.slideOne.value = this.min.toString();

        this.slideTwo = document.createElement("input");
        this.slideTwo.type = "range";
        this.slideTwo.min = this.min.toString();
        this.slideTwo.max = this.max.toString();
        this.slideTwo.step = this.step.toString();
        this.slideTwo.value = this.max.toString();

        this.sliderTrack = document.createElement("div");
        this.sliderTrack.classList.add('slider-track');

        this.container.append(this.slideOne, this.slideTwo, this.sliderTrack);
    }

    createValuesDisplay() {
        this.displayContainer = document.createElement("div");
        this.displayContainer.classList.add("values");
        this.wrapper.appendChild(this.displayContainer);

        this.rangeOne = document.createElement("span");
        this.rangeOne.textContent = this.min.toString();

        this.dash = document.createElement("span");
        this.dash.textContent = ' / ';

        this.rangeTwo = document.createElement("span");
        this.rangeTwo.textContent = this.max.toString();

        this.displayContainer.append(this.rangeOne, this.dash, this.rangeTwo);
    }

    createContainer() {
        this.container = document.createElement("div");
        this.container.classList.add("input-container");
        this.wrapper.appendChild(this.container);
    }

    bindListeners() {
        this.slideOne.addEventListener('input', this.onSlideOneChange);
        this.slideTwo.addEventListener('input', this.onSlideTwoChange);
    }

    onSlideOneChange = () => {
        const slideOneValue = parseInt(this.slideOne.value, 10);
        const slideTwoValue = parseInt(this.slideTwo.value, 10);
        
        if (slideTwoValue - slideOneValue <= this.minGap) {
            this.slideOne.value = (slideTwoValue - this.minGap).toString();
        }
        this.rangeOne.textContent = this.slideOne.value;
        this.updateFillColor();
    }

    onSlideTwoChange = () => {
        const slideOneValue = parseInt(this.slideOne.value, 10);
        const slideTwoValue = parseInt(this.slideTwo.value, 10);
        
        if (slideTwoValue - slideOneValue <= this.minGap) {
            this.slideTwo.value = (slideOneValue + this.minGap).toString();
        }
        this.rangeTwo.textContent = this.slideTwo.value;
        this.updateFillColor();
    }

    updateFillColor() {
        const slideOneValue = parseInt(this.slideOne.value, 10);
        const slideTwoValue = parseInt(this.slideTwo.value, 10);
        const range = this.max - this.min;
        
        const percent1 = ((slideOneValue - this.min) / range) * 100;
        const percent2 = ((slideTwoValue - this.min) / range) * 100;
        
        this.sliderTrack.style.background = 
            `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }

    createWrapper() {
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("wrapper");
        this.inputName = document.createElement("h3");
        this.inputName.textContent = this.name;
        this.wrapper.appendChild(this.inputName);

        this.root.appendChild(this.wrapper);

    }

    render() {
        this.createWrapper();
        this.createValuesDisplay();
        this.createContainer();
        this.createRangeInputs();
        this.updateFillColor();
        this.bindListeners();
        return [this.slideOne, this.slideTwo];
    }
}