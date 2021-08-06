const findMinNumWithMaxFreq = ( arr = [] ) => {
    let maxFrec = -1;
    let minNum = Number.POSITIVE_INFINITY;

    const frec = arr.reduce( (dicc, num) => {
        if( !dicc[num] ) {
            dicc[num] = 1;
        } else {
            dicc[num]++;
        }
        if( dicc[num] >= maxFrec ) {
            maxFrec = dicc[num];
            if( minNum > num ) {
                minNum = num;
            }
        }
        return dicc;
    }, {})

    return { frec, minNum, maxFrec };
}

console.log( findMinNumWithMaxFreq([2, 3, 3, 3, 4, 4, 5, 4, 3, 1, 4]) );
console.log( findMinNumWithMaxFreq([1, 2, 3, 4]) );
console.log( findMinNumWithMaxFreq([]) );
