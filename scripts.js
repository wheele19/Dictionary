const ul = document.getElementById('data');
  const list = document.createDocumentFragment();
  let text = document.getElementById('word');
  let submit = document.getElementById('submit');

  text.addEventListener('keyup', (e) => getWord(e.target.value, e.key));
  submit.addEventListener('click', () => getWord(text.value, '1'));

  function getWord(word, key) {

    if (key === 'Enter' || key === '1') {
/*
        function removeAllChildNodes(ul) {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
        }

        removeAllChildNodes()*/


ul.innerHTML = '';
console.log(key)
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
  fetch(url)
    .then((response) => {
        console.log('derp')
      return response.json();
    })
    .then((data) => {
        data = data[0];
        console.table(data.meanings[0].definitions);
        let name = document.createElement('h2');
        ul.appendChild(name);




        data.meanings[0].definitions.forEach(function (instance) {
            let define = document.createElement('p');
    
            name.innerHTML = `${data.word}`;
            define.innerHTML = `${instance.definition}`;
            console.table(data.meanings[0].definitions[1].definition);
            ul.appendChild(define);
          });
          
          
          
          
        
    })
    .catch(function(error) {
      console.log(error);
    });

  ul.appendChild(list);
}}