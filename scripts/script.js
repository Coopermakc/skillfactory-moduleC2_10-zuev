
const progress_wrap = document.querySelector('.progress-wrap');
const voting = document.querySelector('.voting');
const btn_cat = document.querySelector('.but-cat');
const btn_dog = document.querySelector('.but-dog');
const btn_parr = document.querySelector('.but-parr');
const results = document.querySelector('.results');


const url = new URL('https://sf-pyw.mosyag.in/sse/vote');



// send POST request to server
const vote = (path) => {
  fetch(url+path, {
    method: 'post',
    body: {}
  })
  .then(function (response){
    console.log(response);
  });
}

//show results of voating
 const visible = () => {
  voting.style.display = 'none';
  results.style.display = 'flex';
}


btn_cat.onclick = ()=> {
  vote('/cats');
  visible();
};

btn_dog.onclick = ()=> {
  vote('/dogs');
  visible();
};

btn_parr.onclick = ()=> {
  vote('/parrots');
  visible();
};
