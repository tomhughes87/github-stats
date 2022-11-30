
function anagramValidChecker(word1, word2) {  
    // if (word1.length != word2.length){return false}
    if (word1.split("").sort().toString() === word2.split("").sort().toString()){return true}
    else{return false}
}

const wordsToTest=[
    ['danger','garden',true],
    ["cat","dog",false],
    ["mate","team",true],
    ["lap","tap",false]
]

for (let index = 0; index < wordsToTest.length; index++) {
    const answer = anagramValidChecker(wordsToTest[index][0],wordsToTest[index][1])
    console.log('\nTesting : ', wordsToTest[index][0],wordsToTest[index][1])
    console.log(anagramValidChecker(wordsToTest[index][0],wordsToTest[index][1]))
    if (answer === wordsToTest[index][2]){console.log("test passed")}
    
}