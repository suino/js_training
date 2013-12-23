var x = 0;

while(x < 10) {
    console.log(x);
    x++;
    if (x == 5) {
        break;
    }
}

x = 0;
do {
    x++;
    if (x % 5 == 0) {
        continue;
    }
    console.log(x);
} while (x < 10);
