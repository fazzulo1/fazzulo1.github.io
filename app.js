$(() => {
  const getNetwork = data => {
    console.log(data.networks.length);
    console.log(data.networks[0].href);
    // console.log(data.networks[0].location.city);
    // console.log(data.networks[0].location.country);
    // console.log(data.networks[0].location.latitude);
    // console.log(data.networks[0].location.longitude);
    for (let i = 0; i < data.networks.length; i++) {
      const $list1 = $('<div>').text(
        `City:${data.networks[i].location.city},Country:${
          data.networks[i].location.country
        },LINK: ${data.networks[i].href}`
      );
      $list1.addClass('list');
      $('#providers').append($list1);
    }
  };

  const getProvider = data => {
    console.log(data.network.stations.length);
    for (let i = 0; i < data.network.stations.length; i++) {
      const $list = $('<div>').text(
        `Station:${data.network.stations[i].name}, free bikes:${
          data.network.stations[i].free_bikes
        }, free docks:${data.network.stations[i].empty_slots}`
      );
      $list.addClass('list');
      $('#providers2').append($list);
    }
    const $countryName = $('<h4>')
      .text(`City: ${data.network.location.country}`)
      .addClass('createdTitle');
    const $cityName = $('<h4>')
      .text(`City: ${data.network.location.city}`)
      .addClass('createdTitle');
    const $companyName = $('<h4>')
      .text(`Company Name: ${data.network.name}`)
      .addClass('createdTitle');
    const $numStations = $('<h4>')
      .text(`Number of Stations: ${data.network.stations.length}`)
      .addClass('createdTitle');
    $countryName.css('background-color', 'rgb(207, 187, 7)');
    $cityName.css('background-color', 'rgb(207, 187, 7)');
    $companyName.css('background-color', 'rgb(207, 187, 7)');
    $numStations.css('background-color', 'rgb(207, 187, 7)');

    $('.company').append($cityName);
    $('.company').append($companyName);
    $('.company').append($numStations);
  };

  ///////////////////////////////////////////////////////

  $('.button0').on('click', event => {
    event.preventDefault();
    // const endpoint = `https://api.citybik.es/v2/networks?`;
    const endpoint = `https://api.citybik.es/v2/networks`;
    $.ajax({ url: endpoint }).then(getNetwork); // get data asynchronously, when the data gets back, handle it
  });
  $('.container1').on('click', '.list', event => {
    event.preventDefault();
    let value = $(event.currentTarget).text();
    value = value.split(' ');
    console.log(value);
    console.log(value.length);
    const value1 = value[value.length - 1];
    console.log(value1);

    // const endpoint = `https://api.citybik.es/v2/networks?`;
    const endpoint = `https://api.citybik.es${value1}`;
    $.ajax({ url: endpoint }).then(getProvider); // get data asynchronously, when the data gets back, handle it
  });
});
