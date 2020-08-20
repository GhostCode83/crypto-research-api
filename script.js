function getList(){
  let idUrl = `https://api.coinpaprika.com/v1/coins`
    fetch(idUrl)
    .then(response => response.json())
    .then(responseJson => displayCryptoList(responseJson))
    .catch(err => console.error(err))
}

function getNews(data){
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${data}-&api-key=gEpOPJ5s2vXbj7ruaA3jGrMEYkZGyj8J`
  )
  .then(response => response.json())
  .then(responseJson => { displayNews(responseJson) })
  .catch(err => console.log(err))
}

function getMoreCrypto(data){
  console.log(data)
  let idUrl = `https://api.coinpaprika.com/v1/coins/${data}/ohlcv/latest/`
  fetch(idUrl)
  .then(response => response.json())
  .then(responseJson => displayIdDetails(responseJson))
  .catch(err => console.error(err))
}

function displayNews(data){
  $('#js-display-news').empty()
  for (let i  =  0;  i < data.response.docs.length; i++) {
    $('#js-display-news').append(`<li class=''>
      <h3>${data.response.docs[i].headline.main}</h3>
      <p>${data.response.docs[i].pub_date}</p> 
      <p>${data.response.docs[i].snippet}</p>
      <p><a href="${data.response.docs[i].web_url}" target="_blank">${data.response.docs[i].web_url}</a></p>
      <div class='hidden'></div>
    </li>`)
  }
   $('#js-news-container').removeClass('hidden')
}

function displayCryptoList(cryptoIdData) {
  for (let i = 0; i < 20; i++) {
    $('#js-display-id-list').append(`<li class=''>
      <h3 id=${cryptoIdData[i].name}>${cryptoIdData[i].name} News</h3>
      <p id=${cryptoIdData[i].id} class=''> ID: ${cryptoIdData[i].id}</p>
      <div class='hidden js-crypto-pocket'></div>
    </li>`)
  }
 watchCurrencyNameClick()
 watchCurrencyIdClick()
 $('#js-list-container').removeClass('hidden')
}

function displayIdDetails(data){
  console.log(data)
  let open = data[0].open.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  let high = data[0].high.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  let low = data[0].low.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  let close = data[0].close.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  let display = `<ul>
    <li>open: ${open}</li>
    <li>high: ${high}</li>
    <li>low: ${low}</li>
    <li>close: ${close}</li>
    </ul>`;

  $('#js-chosen-currency-container').removeClass('hidden');
  $('#js-chosen-currency-list').append(display)


  
}
function watchCurrencyNameClick(event){
  $('#js-display-id-list').on('click', `li h3`, function(event){
    let cryptoName = event.target.id
    getNews(cryptoName)  
    })
}

function  watchCurrencyIdClick(event){
  $('#js-display-id-list').on('click', `li p`, function(event){
    let cryptoId = event.target.id
    getMoreCrypto(cryptoId)  
  $('#js-chosen-currency-list').empty()
    })
}

//work on chose feature
function watchChosenCurrency(event){
  $('#js-display-id-list').on('click', 'li', function(event){
    event.target.toggleClass('chosen')
  })
}

function  watchForm(){
  $('#js-form').on('submit', function(event){
    $('#js-display-id-list').empty();
    event.preventDefault();
    getList()
  })
}

$(watchForm)