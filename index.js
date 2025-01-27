/**
 * This function takes a string and generates all possible arrangements (permutations)
 * of its characters. It considers all substrings, from single characters to the entire string.
 *
 * @param {string} startStr - The input string for which to generate permutations.
 * @return {string[]} An array containing all unique permutations of the characters in the input string.
 */

let permute = function (startStr) {
  const result = []; //An array that stores all possible permutations of a given string or set of elements.
  const levels = []; //An array that stores all possible permutations of a given tree level.
  let level = 0; // Stores the tree level
  
  const backtrack = (str, path) => {
    //console.log(`${level}) ${str}`);
    if (typeof levels[level] === 'undefined') {
      levels[level] = []
    }else{
      levels[level] = [...levels[level]];
    }

    if (str.length === 0) {
      result.push(path.join(''));
      levels[level].push(path.join(''));
      return;
    }
    level++
    for (let i = 0; i < str.length; i++) {
      let newArray = str.substring(0, i).concat(str.substring(i + 1));
      let newPath = [...path, str[i]];
      backtrack(newArray, newPath);
    }
    level--
    levels[level].push(path.join(''));
    return;
  };

  backtrack(startStr, []);
  //levels[0] = [...result.map(e=>e.join(''))]
  levels.shift()
  let filteredLevels = levels.map((e,i)=>{
      let filtered = Array.from(new Set(e))
      return filtered
    }
  ).flat()
  console.log("Unfiltered:",JSON.stringify(levels))
  console.log("Filtered:",JSON.stringify(filteredLevels))
  return filteredLevels.length;
};
console.log(permute("ccb"));
