const longestPalindrome = ( str ) => {
    let crossed = { 
        longest: "",
        evaluated: {},
        iterates: 0,
    }
    findLongestPalindrome( str, crossed );
    return crossed.longest;
}

const findLongestPalindrome = ( str, crossed ) => {
    const len = str.length;
    if( crossed.longest.length < len && !(str in crossed.evaluated) ) {
        crossed.evaluated[str] = true;
        crossed.iterates++;

        console.log(str, crossed.longest);
        if ( len == 1 ) {
            crossed.longest = str;
            return str;
        };
        // mayores a 1
        if( str[0] != str[len-1] ) {
            findLongestPalindrome( str.substring(0, len-1), crossed ); // subcadena izquierda
            findLongestPalindrome( str.substring(1, len), crossed ); // subcadena derecha
        } else {
            const substr = findLongestPalindrome( str.substring(1, len-1), crossed );
            if( substr.length == len-2 ) {
                crossed.longest = str;
                // si llega a este punto, termina el algoritmo
            } else {
                findLongestPalindrome( str.substring(0, len-1), crossed ); // subcadena izquierda
                findLongestPalindrome( str.substring(1, len), crossed ); // subcadena derecha
            }
        }
        return "";
    } else {
        return "";
    }
}

console.log( 1, longestPalindrome( "abcdefg" ) );
console.log( 2, longestPalindrome( "aabbaaaab" ) );
console.log( 3, longestPalindrome( "ddabbbcbbbacfg" ) );
console.log( 4, longestPalindrome( "l" ) );