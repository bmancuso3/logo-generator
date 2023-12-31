// Establishing the initial Shape class & properties
class Shape {
    constructor (shapeColor, text, textColor) {
        this.shapeColor = '';
        this.text = '';
        this.textColor = '';
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    };

    setText(text) {
        this.text = text;
    };

    setTextColor(textColor) {
        this.textColor = textColor;
    };
};

// Introducing Cirle inheriting class
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};

// Introducing Square inheriting class
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="200" fill="${this.shapeColor}" /><text x="125" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};

// Introducing Triangle inheriting class
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,180 20,180" fill="${this.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};

// Exporting necessary classes
module.exports = {Circle, Square, Triangle};