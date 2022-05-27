const longestUncommonSubsequence = (strs = []) => {
    const strsOrderer = strs.sort( (a, b) => b.length - a.length );
    let found = false;
    let longest = 0;

    while( !found ) {
        let longestStr = strsOrderer[0];
        for(let i=1; i<strsOrderer.length; i++) {
            if( longestStr === strsOrderer[i] ) {
                found = true;
                longest = longestStr.length;
            }
        }
        found = true;
    }

    console.log( longestStr );
    return longest;
}

longestUncommonSubsequence(['abcd', 'abcdef', 'abasdasd']);