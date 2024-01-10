//  Uber taxi calculator

class uber {
    constructor(basicFare,  costperkilometer, costpermin) {
        this.basicFare = basicFare;
        this.costperkilometer = costperkilometer;
        this.costpermin = costpermin;
        // this.calculate = calculate;
    }


calculate(distance, timeinmins) {
    let beforeFare = this.basicFare + (distance * this.costperkilometer) + (timeinmins * this.costpermin);

    let finalAmt = beforeFare * 1;

    return finalAmt;
}
}

let  example = new uber(20, 10, 0.5);
let distance = 15;
let time = 30;

let fare = example.calculate(distance, time);
console.log("The total fare is: ", fare);