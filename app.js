$(() => {
  alert(
    'To find available countries and cities where you can rent a BIKE, CLICK on the GREEN BUTTON'
  );
  const getNetwork = data => {
    for (let i = 0; i < data.networks.length; i++) {
      const $list1 = $('<div>').text(
        `City:${data.networks[i].location.city},Country:${
          data.networks[i].location.country
        },Link: ${data.networks[i].href}`
      );
      $list1.addClass('list');
      $('#providers').append($list1);
    }
  };

  const getProvider = data => {
    for (let i = 0; i < data.network.stations.length; i++) {
      const $list = $('<div>').text(
        `Station:${data.network.stations[i].name}, free bikes:${
          data.network.stations[i].free_bikes
        }, free docks:${data.network.stations[i].empty_slots}`
      );
      $list.addClass('list');
      $('#providers2').append($list);

      $('#map').empty();
      $('#map').html(
        `     <iframe class='map' 
    width="100%" 
    height="504"     
    frameborder="0" 
    scrolling="no" 
    marginheight="0" 
    marginwidth="0" 
    src='https://maps.google.com/maps?q=${data.network.stations[i].latitude},${
          data.network.stations[i].longitude
        }&hl=es;z=50&amp;output=embed'>
    </iframe>`
      );
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

  $('.button0').on('click', event => {
    event.preventDefault();
    alert(
      'To get specific stations where you can findaBIKE, read the instruction and click OK. STEP 1. Scroll down or press CTL+F to look for the bike station. STEP 2. CLICK on the corresponding square'
    );

    const endpoint = `https://api.citybik.es/v2/networks`;
    $.ajax({ url: endpoint }).then(getNetwork); // get data asynchronously, when the data gets back, handle it.
  });
  $('.container1').on('click', '.list', event => {
    event.preventDefault();
    let value1 = $(event.currentTarget).text();
    value1 = value1.split(' ');
    value1 = value1[value1.length - 1];

    const endpoint = `https://api.citybik.es${value1}`;
    $.ajax({ url: endpoint }).then(getProvider); // get data asynchronously, when the data gets back, handle it
  });
});
