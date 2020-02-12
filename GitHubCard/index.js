/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/dylan17th').then( response => {
container.appendChild(cardCreator(response.data))
}).catch(err => console.log(err))


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['indiMjc','	KenjiGr','jeengland','taterntots','Timgill987' ];

followersArray.forEach(item => axios.get(`https://api.github.com/users/${item}`).then( response => {
  container.appendChild(cardCreator(response.data))
  }).catch(err => console.log(err)))

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function cardCreator (obj){
//creating a div element and assigning a classes
let card = document.createElement('div');
card.classList.add('card')
let image = document.createElement('img')
let infoDiv = document.createElement('div');
infoDiv.classList.add('card-info');
let name = document.createElement('h3');
name.classList.add('name');

//creating the necccessary paragraph tags and the one anchor tag
let username = document.createElement('p');
username.classList.add('username');
let location = document.createElement('p');
let  profile = document.createElement('p');
let link = document.createElement('a')
let followers = document.createElement('p');
let following = document.createElement('p');
let bio = document.createElement('p');

//srtucturing the div 
card.appendChild(image);
card.appendChild(infoDiv);
infoDiv.appendChild(name);
infoDiv.appendChild(username)
infoDiv.appendChild(location)
infoDiv.appendChild(profile)
infoDiv.appendChild(followers)
infoDiv.appendChild(following)
profile.appendChild(link);

//assigned text content for all the variables
image.src = obj.avatar_url;
name.textContent = obj.name; 
username.textContent = obj.login; 
location.textContent = obj.location; 
link.textContent = obj.html_url; 
link.href = obj.html_url;
followers.textContent = obj.followers; 
following.textContent = obj.following; 
bio.textContent = obj.bio; 

return card 
}
const container = document.querySelector('.cards')

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
