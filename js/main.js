// https://swapi.co/api/
// people enter the title of the movie, and you return the opening crawl translateed using the second api
//
// https://api.funtranslations.com/translate/


let openingCrawl = document.querySelector('p')
const button = document.querySelector('button')
button.addEventListener("click", () =>{ //addevent is a function bc it has ()
  const userPick = document.querySelector('input').value // changed from let to const bc this does not change when its in the function
  fetch(`https://swapi.co/api/films`)
    .then(res => res.json()) // parse nasaSites as JSON (can be res.text() for plain nasaSites)
    .then(res => {
      for (let i = 0; i < res.results.length; i++) {
        if (res.results[i].title === userPick) { //loop through results; if the title of that result = user pick then print out open crawl of that result
          console.log(res.results[i].opening_crawl)
          fetch(`https://api.funtranslations.com/translate/yoda.json?text=${res.results[i].opening_crawl}`)
            .then(res => res.json())
            .then(res => {
              console.log(res.contents.translated)
              openingCrawl.innerHTML = res.contents.translated
            })
          .catch(err => {
            console.log(err)
          })
        }
      }
    })
    .catch(err =>{
      console.log(err)
    })
})
