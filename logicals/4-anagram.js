//Anagram : 
//Questions to ask for clarification - Does input contain only letters ? What will be output for empty strings? Example output
//Solution one
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;

  //Time complexity : O(NlogN) + O(NlogN)
  //The time complexity of this soln is O(NlogN) because of sorting
}



//Solution two - use  objects as frequency
function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = {};
  for (const c of str1) {
    freq[c] = (freq[c] || 0) + 1;
  }
  for (const c of str2) {
    freq[c] = (freq[c] || 0) - 1;
  }

  const values = Object.values(freq);
  for (const value of values) {
    if (value !== 0) return false;
  }
  return true;

  //Time complexity : O(N) where N is length of string
}

//Solution three - using map
function isAnagram3(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const freq = new Map();
    for (const c of str1) {
        if (freq.has(c)) {
            freq.set(c, freq.get(c) + 1);
        } else {
            freq.set(c, 1);
        }
    }
    for (const c of str2) {
        if (freq.has(c)) {
      freq.set(c, freq.get(c) - 1);
    } else {
        freq.set(c, -1);
    }
  }
  
  const values = freq.values();
  for (const value of values) {
      if (value !== 0) return false;
    }
    
    return true;
}

//Solution four - using array - Assuming string contains lowercase english alphabets
function isAnagram4(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const freq = Array(26).fill(0);
    
    for (let i = 0; i < str1.length; i++) {
        freq[str1.charCodeAt(i) - "a".charCodeAt(0)]++;
        freq[str2.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    
    for (const value of freq) {
        if (value !== 0) return false;
    }
    
    return true;

    //Time complexity : O(N) 
    //This is most optimal solution for large strings
  }

const str1 = "test";
const str2 = "sett";

console.log(isAnagram4(str1, str2));
