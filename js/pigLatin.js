exports.translate = function(word) {
    
    let translated =[];
    let vowels = ['a','e','i','o','u']
    let words = word.toLowerCase().split(" ")
  
    for (let i=0; i<words.length; i++) {
      let letter = words[i][0];
      if (letter == 'a' || letter == 'e' || letter =='i' || letter == 'o' || letter =='u') {
         translated.push(words[0]+"ay");
      } else {
        let specCase = 'qu'
        for (let j=0; j<words[i].length;j++) {
          let char = words[i][j]
          if (char == 'q') {
            let specCase = words[i].indexOf(char)
            specCase 
            let frontEnd = words[i].slice(specCase+2)
            let backEnd = words[i].slice(0,specCase+2)
            translated.push(frontEnd + backEnd + 'ay')
            break;
          } else {
            if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
              let indexed = words[i].indexOf(words[i][j])
              let frontEnd = words[i].slice(indexed)
              let backEnd = words[i].slice(0,indexed)
              translated.push(frontEnd + backEnd + 'ay')
              break;
            }
          }
        }
      }
    }
  
                    
let finalAnswer = translated.join(" ");
return finalAnswer;
};
