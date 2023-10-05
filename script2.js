

function isOneEditAway(str1, str2) {
    const string1 = str1.length;
    const string2 = str2.length;
    
    
    if (Math.abs(string1 - string2) > 1) {
        return false;
    }

    let diffCount = 0;
    let i = 0;
    let j = 0;

    while (i < string1 && j < string2) {
        if (str1[i] !== str2[j]) {
            
            diffCount++;

            if (diffCount > 1) {
                return false;
            }

            if (string1 < string2) {
                j++; 
            } else if (string1 > string2) {
                i++; 
            }
        } else {
            i++;
            j++;
        }
    }
    
    if (i < string1 || j < string2) {
        diffCount++;
    }
    
    return diffCount === 1;
}

// Test cases
console.log(isOneEditAway("pale", "ple"));     
console.log(isOneEditAway("pales", "pale"));   
console.log(isOneEditAway("pale", "kale"));    
console.log(isOneEditAway("pale", "pales"));   
console.log(isOneEditAway("pale", "bake"));    
console.log(isOneEditAway("random", "randoom"));
