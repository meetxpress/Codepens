var odd = [1, 3, 5, 7, 8, 10, 12];
var even = [4, 6, 9, 11];
var leap = 2;
var days, months, years = 0;

function getCount(c, val) {
    if (c == 2 && val > 0 && val < 13) {
        if (odd.includes(val)) {
            if (c == 1 && val > 0 && val < 31) {
                days = val;
                console.log(new Date().getFullYear());
            }
        }
        console.log("Check=> " + c);
        console.log("Value=> " + val);
    }

    if (c == 3 && val > 0 && val < new Date().getFullYear()) {
        console.log("Check=> " + c);
        console.log("Value=> " + val);
    }

}

