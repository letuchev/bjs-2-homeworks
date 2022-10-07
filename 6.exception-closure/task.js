function parseCount (value) {
    let number = Number.parseInt(value, 10);
    if (number) {
        return number;
    }
    throw new Error ("Невалидное значение");
}

function validateCount (value) {
    try {
        return parseCount(value);
    }
    catch (Error) {
        return Error;
    }
}




// Задание 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

    if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.c + this.b) < this.a)) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter () {
        return this.a + this.b + this.c
    }

    getArea () {
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        return parseFloat(s.toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c,);
    }
    catch (Error) {
        let badTriangle = {};
        badTriangle.getPerimeter = function() {
            return "Ошибка! Треугольник не существует";
        }
        badTriangle.getArea = function() {
            return "Ошибка! Треугольник не существует";
        }
        return badTriangle;
    }
}
    


    const Triangle1 = new Triangle(5, 6, 9);
console.log(Triangle1);
console.log (Triangle1.getPerimeter());
console.log (Triangle1.getArea());
