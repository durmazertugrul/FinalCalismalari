var total = 2,       
    array = [1, 2],
    sum,
    array_count;

while (true) {
    array_count = array.length;
    sum = array[array_count -1] + array[array_count - 2];
    if (sum < 4000000) {
        array.push(sum);
        if (sum % 2 === 0) {
            total += sum;
        }
    } else {
        break
    }
}

console.log(total);
