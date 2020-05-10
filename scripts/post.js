const cats = document.querySelector('.progress-bar-cat');
const dogs = document.querySelector('.progress-bar-dog');
const parrots = document.querySelector('.progress-bar-parrot');
const url = new URL('https://sf-pyw.mosyag.in/sse/vote');


const headers = new Headers({
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*'
});

const ES = new EventSource(url+'/stats', headers);


ES.onopen = event => {
  console.log(event);
}

ES.onerror = error => {
  ES.readyState ? console.error("⛔ EventSource failed: ", error) : null;
}

ES.onmessage = message => {
  let sum = 0;
  let data = JSON.parse(message.data);
  for (let key in data) {
    sum+=data[key];
  }
   voices(cats, data["cats"], sum);
   voices(dogs, data["dogs"], sum);
   voices(parrots, data["parrots"], sum);
}

//insert data in elements
const voices = (el, count, sum) =>{
  el.style.cssText = 'width: '+ count/sum*100+'%';
  el.textContent = `${count}`;
}
