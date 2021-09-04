// HERE IS THE FUNCTION TO SPLIT A TEXT INTO 160 CHARACTER CHUNKS!!! 

function splitSMS(text){
let result = []
i = 0;
j = text.length
while (i <= j){
  if (j <= 160) { 
   result.push(text.split("", (j-i)).join("")) 
   break;
  } else {
    let count = 160
    while (text[count] !== " ") { count--}
    result.push(text.split("", count).join(""))
    text = text.slice(count)
    if (text.length > 160) {
      i += 160 
    } else {
      result.push(text.split("", (j-i)).join(""))
      break;
    }
  }
}
console.log(result)
}

/*

*/

let words = "I always enjoyed learning new technologies to reach and connect with audiences as a performer and musician. And when the pandemic hit I examined what I wanted the rest of my life to look like—was there a more sustainable path I could pursue, one where I could take this interest of learning new technologies and marry it with the spirit of collaboration and creativity I'd been enjoying in my career up until this point? The answer came when I was project managing developers for a digital marketing agency. It looked like magic. The work they were doing as a team in their short sprints, bringing dynamic applications to life in ever-evolving iterations fascinated me. I wanted to learn the spells to make that magic, rather than observing from the sidelines. Here was a way to create a better life for myself, while creating a greater impact on the world. I love problem-solving and debugging. I love short sprints and working hard on solo projects to pull off group goals. At the end of the day I want to look at something and say, “I made that, and it helps people.” I excelled in my bootcamp and know I have what it takes to be a major player in the field, but I have no experience in day to day large scale, team development. Your apprenticeship program would help me translate those coding skills into real-world applications in a direct and empowering way. I also recognize that I'm attempting to break into a work force and competing with more traditional candidates, 10 years my junior, carrying computer science degrees."
splitSMS(words)
// splitSMS(shortWords)