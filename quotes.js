//Andrew Klump
//March 2015
//CMP237



var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
 console.log(text.replace(/A/g, "B"));
// // -> "I'm the cook," he said, "it's my job."



console.log(text.replace(/(^|\W)'|'(\W|$)/g, '"'));
