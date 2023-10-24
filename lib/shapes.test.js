const { Circle, Square, Triangle } = require('./shapes');

test('Circle test', () => {
    it('should create a red circle with a white CC inside', () => {
        shape.setShapeColor('red');
        shape.setText('CC');
        shape.setTextColor('white');

        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">CC</text></svg>');
    });
});

test('Square test', () => {
    it('should create a blue square with an orange DEN inside', () => {
        shape.setShapeColor('blue');
        shape.setText('DEN');
        shape.setTextColor('orange');

        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="200" fill="blue" /><text x="125" y="125" font-size="60" text-anchor="middle" fill="orange">DEN</text></svg>');
    });
});

test('Triangle test', () => {
    it('should create a green triangle with a yellow RH inside', () => {
        shape.setShapeColor('green');
        shape.setText('RH');
        shape.setTextColor('yellow');

        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,180 20,180" fill="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="yellow">RH</text></svg>');
    });
});