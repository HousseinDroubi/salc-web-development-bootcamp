loop_1: for (let i = 0; i <= 2; i++) {
    loop_2: for (let j = 0; j <= 2; j++) {
        loop_3: for (let k = 0; k <= 2; k++) {
            if (i == j && j == k && i!= 0) {
                break loop_2;
            }
            console.log(`i=${i} - j=${j} - k=${k}`);
        }
    }
}