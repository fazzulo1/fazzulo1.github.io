$(() => {
  const getProvider = data => {
    console.log(data.network.stations.length);
    for (let i = 0; i < data.network.stations.length; i++) {
      const $list = $('<div>').text(
        `Station:${data.network.stations[i].name}, free bikes:${
          data.network.stations[i].free_bikes
        }, free docks:${data.network.stations[i].empty_slots}`
      );
      $list.addClass('list');
      $('#providers').append($list);
    }
    const $cityName = $('<h4>')
      .text(`City: ${data.network.location.city}`)
      .addClass('createdTitle');
    const $companyName = $('<h4>')
      .text(`Company Name: ${data.network.name}`)
      .addClass('createdTitle');
    const $numStations = $('<h4>')
      .text(`Number of Stations: ${data.network.stations.length}`)
      .addClass('createdTitle');
    $companyName.css('background-color', 'rgb(207, 187, 7)');
    $cityName.css('background-color', 'rgb(207, 187, 7)');
    $numStations.css('background-color', 'rgb(207, 187, 7)');

    $('.company').append($cityName);
    $('.company').append($companyName);
    $('.company').append($numStations);
  };

  ///////////////////////////////////////////////////////
  $('.button').on('click', event => {
    event.preventDefault();
    // const endpoint = `https://api.citybik.es/v2/networks?`;
    const endpoint = `https://api.citybik.es/v2/networks/bicing`;
    $.ajax({ url: endpoint }).then(getProvider); // get data asynchronously, when the data gets back, handle it
  });
  // $('.button').on('click', event => {
  //   event.preventDefault();
  //   // const endpoint = `https://api.citybik.es/v2/networks?`;
  //   const endpoint = `https://api.citybik.es/v2/networks/citi-bike-nyc`;
  //   $.ajax({ url: endpoint }).then(getProvider); // get data asynchronously, when the data gets back, handle it
  // });
});
