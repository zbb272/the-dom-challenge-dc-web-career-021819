

function init(){
  //get counter element
  const counter = document.getElementById("counter");
  //get likes ul list class
  const likes = document.querySelector("ul.likes");
  //flag option to check for pause
  var pause = false;

  //set interval for incerementing counter every 1 second
  setInterval(counterTimerCallback, 1000);

  function counterTimerCallback(){
    if(pause){
      return 0;
    }
    else{
      counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }
  }

  //minus button----------------------------------
  const minusButton = document.getElementById("-");
  minusButton.addEventListener('click', minusButtonClickHandler);

  function minusButtonClickHandler(event){
    if(pause){
      return event;
    }
    else{
      counter.innerHTML = parseInt(counter.innerHTML) - 1;
    }
  }

  //add button----------------------------------
  const addButton = document.getElementById("+");
  addButton.addEventListener('click', addButtonClickHandler);

  function addButtonClickHandler(event){
    if(pause){
      return event;
    }
    else{
      counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }
  }

  //like tracker
  let likesObject = {}

  //like button----------------------------------
  const likeButton = document.getElementById("<3");
  likeButton.addEventListener('click', likeButtonClickHandler);

  function likeButtonClickHandler(event){
    if(pause){
      return event;
    }
    else{
      if (likesObject[counter.innerHTML]){
        likesObject[counter.innerHTML] = parseInt(likesObject[counter.innerHTML]) + 1;
      }
      else {
        likesObject[counter.innerHTML] = 1;
      }

      let element = document.createElement('li');
      element.innerHTML = `${counter.innerHTML} has been liked ${likesObject[counter.innerHTML]} times`;
      console.log(likesObject)
      // element.innerHTML = `liked ${counter.innerHTML}`;
      likes.appendChild(element);
    }
  }

  //pause button----------------------------------
  const pauseButton = document.getElementById("pause");
  pauseButton.addEventListener('click', pauseButtonClickHandler);

  function pauseButtonClickHandler(event){
    pause = !pause;
    if(pause){
      pauseButton.innerHTML = "resume";
    }
    else {
      pauseButton.innerHTML = "pause";
    }
  }

  //comments-----------------------------------
  const submitButton = document.getElementById('submit');
  const inputField = document.getElementById("comment-form").querySelector("input");
  const commentDisplay = document.getElementById('list');
  let comments = document.createElement('p');
  commentDisplay.appendChild(comments);


  console.log(commentDisplay)
  console.log(inputField.value)

  submitButton.addEventListener('click', submitButtonClickHandler);

  function submitButtonClickHandler(event){
    event.preventDefault()
    if(pause){
      return event;
    }
    else {
      if(comments.innerHTML === ""){
        comments.innerHTML = inputField.value +  "<br>";
      }
      else {
        comments.innerHTML = comments.innerHTML + "<br>" + inputField.value;
      }
      inputField.value = "";
    }
  }
}

init();
