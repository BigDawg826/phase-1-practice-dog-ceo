console.log('%c HI', 'color: firebrick')

//Challenge #1 - create element, give it a src, slap on DOM

function fetchDawgs () {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then( resp => resp.json())
    .then(data => { 
      addImage(data) 
      fetchDawgBreeds()
  });
}
fetchDawgs()
  
  function addImage(dogObj){
   dogObj.message.forEach (url => {
    const dogPic = document.createElement('img');
    dogPic.src = url;
    document.getElementById('dog-image-container').appendChild(dogPic);
    });
  }
  
//Challenge #2 - fetch the dogs, add breeds to page in URL provided
  function fetchDawgBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
     fetch(breedUrl)
    .then( resp => resp.json())
    .then(data => addBreeds(data.message))
 }

  function addBreeds (dogObjBreed){
    for (let dogName in dogObjBreed){
    const dogBreed = document.createElement('li');
    dogBreed.textContent = dogName;
    const dog2 = document.getElementById('dog-breeds')
    dog2.append(dogBreed);
    dogBreed.addEventListener('click', (e) => e.target.style.color = 'green')
    }
  }
  const dropDown = document.querySelector('#breed-dropdown');
  dropDown.addEventListener('change', function (e){
    const breeds = document.querySelectorAll('#dog-breeds li')
    const filterBreeds = []
    for (const breed of breeds){
      if (e.target.value !== '' && breed.textContent.startsWith(e.target.value)) {
        console.log(breed.textContent)
      }
    }
console.log(e.target.value)
  })
// target the select id= 'breed-dropdown'
// add event listener to it
// event type change, console.log e.target.value

  
    
