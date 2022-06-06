// exports.translate = function(word) {

//     translated =[];
//     vowels = ['a','e','i','o','u']
//     word.toLower().split(" ")

//     for (let i=0; i<word.length; i++) {
//         if vowels.includes(word[i]) {
//             translated.push(word[i]+"ay");
//         } else {
//             specCase= word.indexOf('q')
//             if int(specCase) > -1 {
//                 specCase+=2
//                 frontEnd = word[i].split(specCase,)
//                 backEnd = word[i].split(0,specCase)
//                 translated.push(frontEnd + backEnd + 'ay')
//             } else {
//                 for (let j=0; j<word[i].length;j++) {
//                     if vowels.includes(word[i][j]) {
//                         indexed = word[i].indexOf(word[i][j])
//                         frontEnd = word[i].split(indexed,)
//                         backEnd = word[i].split(0,indexed)
//                         translated.push(frontEnd + backEnd + 'ay')
//                     }
//                 }
//             }
//         }
//     }

//     return translated

// };




/*
working python code


def translate(word_or_phrase):
  translated = []
  vowels = ('a','e','i','o','u')
  list_of_words = word_or_phrase.lower().split(" ")

  
  for word in list_of_words:
    if word[0] in ["a", "e", "i", "u"]:
      translated.append(word + "ay")
    else:
        qu = word.find("qu")
        if int(qu) > -1:
            indexed = word.index('q')
            split_word_front = word[indexed+2:]
            split_word_back = word[:indexed+2]
            translated.append(split_word_front + split_word_back + 'ay')
        else:
          for x in word:
            if x in vowels:
                indexed = word.index(x)
                break
          split_word_front = word[indexed:]
          split_word_back = word[:indexed]
          translated.append(split_word_front + split_word_back + 'ay')
  return " ".join(translated)

 */







/*

not working js code
// problems with looping


const translate = function(word) {

    let translated =[];
    let vowels = ['a','e','i','o','u']
    let words = word.toLowerCase().split(" ")
  
    for (let i=0; i<words.length; i++) {
      let letter = words[0][i];
      if (letter == 'a' || letter == 'e' || letter =='i' || letter == 'o' || letter =='u') {
         translated.push(words[0]+"ay");
      } else {
        let specCase = 'qu'
        for (let j=0; j<words[i].length;j++) {
          let char = words[i][j]
          if (char == 'q' && char +1 == 'u') {
            let specCase = words[i].indexOf(char)
            specCase += 2
            let frontEnd = words[i].split(specCase)
            let backEnd = words[i].split(0,specCase)
            translated.push(frontEnd + backEnd + 'ay')
            break;
          } else {
            if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
              let indexed = words[i].indexOf(word[i][j])
              let frontEnd = words[i].split(indexed)
              let backEnd = words[i].split(0,indexed)
              translated.push(frontEnd + backEnd + 'ay')
              break;
            }
          }
        }
      }
    }
  
                    

return translated;
};

translate('apple bottom jeans')

*/
