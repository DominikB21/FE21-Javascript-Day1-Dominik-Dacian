let sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"

let newSentence = new Array(); //creates a new array
newSentence = sentence.split('$'); //splits the string at ever "$" and outputs an array
console.log(newSentence.join(" ")); //joins the strings within the array with a space inbetween