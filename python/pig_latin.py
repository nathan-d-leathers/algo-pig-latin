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


# note: rules of pig latin
# Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.

# Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.

# check string[o] is it is (aieou)
# if true append ay on end
# if false loop until you find a vowel, split, push to end and add, ay
