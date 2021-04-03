/*
You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.

In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.

In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).
*/

const toFreud = (string) => {
  let array = string.split(' ');
  if(string.length === 0) {
    return '';
  }
  for(let i = 0; i < array.length; i++) {
    array[i] = 'sex';
  }
  return array.join(' ');
}