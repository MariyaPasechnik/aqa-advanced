function counter (num) {
    console.log(num);
if (num <= 0) {
    return;
} else {
    counter(num - 1);
}
}
counter(5);


