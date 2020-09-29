//fetch for the list of cryptocurrency Names and ID's
function getList() {
  let idUrl = `https://api.coinpaprika.com/v1/coins`
  fetch(idUrl)
    .then(response => response.json())
    .then(responseJson => displayCryptoList(responseJson))
    .catch(err => console.error(err))
}

function getNews(data) {
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${data}-&api-key=gEpOPJ5s2vXbj7ruaA3jGrMEYkZGyj8J`
  )
    .then(response => response.json())
    .then(responseJson => { displayNews(responseJson) })
    .catch(err => console.log(err))
}

function getMoreCrypto(data) {
  console.log(data)
  let idUrl = `https://api.coinpaprika.com/v1/coins/${data}/ohlcv/latest/`
  fetch(idUrl)
    .then(response => response.json())
    .then(responseJson => displayIdDetails(responseJson))
    .catch(err => console.error(err))
}

function displayCryptoList(cryptoIdData) {
  $('#js-list-container').removeClass('hidden')

  for (let i = 0; i < 20; i++) {
    $('#js-display-id-list').append(`<li class='crypto-option'>
      <h4 class='cypto-option-news' >${cryptoIdData[i].name} </h4>
      <p class='cypto-option-ohlc' id=${cryptoIdData[i].id} class=''> OHLC</p>
      <p id=${cryptoIdData[i].name} class='news-item'>News</p>
      <div class='hidden js-crypto-pocket'></div>
    </li>`)
  }
  watchCurrencyNameClick()
  watchCurrencyIdClick()
}

function displayNews(data) {
  $('#js-display-news').empty()
  $('#js-chosen-currency-list').empty()
  $('#js-chosen-currency-container').addClass('hidden')

  for (let i = 0; i < data.response.docs.length; i++) {
    $('#js-display-news').append(`<li class=''>
      <h4>${data.response.docs[i].headline.main}</h4>
      <p>${data.response.docs[i].pub_date}</p> 
      <p>${data.response.docs[i].snippet}</p>
      <p><a href="${data.response.docs[i].web_url}" target="_blank">${data.response.docs[i].web_url}</a></p>
      <div class='hidden'></div>
    </li>`)
  }
  $('#js-news-container').removeClass('hidden')
}


function displayIdDetails(data) {
  $('#js-news-container').addClass('hidden')
  $('#js-display-news').empty()
  $('#js-chosen-currency-list').empty()
  console.log(data)
  let open = data[0].open.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  let high = data[0].high.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  let low = data[0].low.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  let close = data[0].close.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  let display = `<ul>
    <li>open: ${open}</li>
    <li>high: ${high}</li>
    <li>low: ${low}</li>
    <li>close: ${close}</li>
    </ul>`;

  $('#js-chosen-currency-container').removeClass('hidden');
  $('#js-chosen-currency-list').append(display)

}

//consider making these forms, there may be more options with each one of these as buttons.  might even use fieldsets
function watchCurrencyNameClick(event) {
  $('#js-display-id-list').on('click', `.news-item`, function (event) {
    let cryptoName = event.target.id
    getNews(cryptoName)

  })
}

function watchCurrencyIdClick(event) {
  $('#js-display-id-list').on('click', `li p`, function (event) {
    let cryptoId = event.target.id
    getMoreCrypto(cryptoId)
    $('#js-chosen-currency-list').empty()
  })
}

//work on chose feature -- consider changing to css for desired look
function watchChosenCurrency(event) {
  $('#js-display-id-list').on('click', 'li', function (event) {
    console.log('hello', event)
    event.target.toggleClass('chosen')
  })
}

//function watchForm() {
//  $('#js-form').on('submit', function (event) {
//    $('#js-display-id-list').empty();
//    $('#js-form-instructions').addClass('hidden')
//    event.preventDefault();
//    getList()
//    restart()
//  })
//}

function restart() {
  $('#js-restart').on('click', function (event) {
    event.preventDefault();
    // $('#js-form-instructions').removeClass('hidden')
    // $('#js-display-id-list').empty();
    // $('#js-list-container').addClass('hidden');
    $('#js-display-news').empty();
    $('#js-news-container').addClass('hidden');
    $('#js-chosen-currency-list').empty();
    $('#js-chosen-currency-container').addClass('hidden');
  })
}

$(getList,
  restart)