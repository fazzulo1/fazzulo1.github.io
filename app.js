$(() => {
  const getProvider = data => {
    for (let i = 0; i < $('.text0').val(); i++) {
      console.log(data.network.stations[i]);
      console.log(data.network.stations[i].name);
      const $list = $('<h3>').text(data.network.stations[i].name);
      const $details = $('<h3>').text(
        `This station has:${
          data.network.stations[i].free_bikes
        } bikes to rent and ${
          data.network.stations[i].empty_slots
        } spots to dock your bike`
      );
      console.log(
        `This stations has:${data.network.stations[i].free_bikes} and ${
          data.network.stations[i].empty_slots
        } spots`
      );

      $('#providers').append($list);
      $('#details').append($details);
    }
  };

  ///////////////////////////////////////////////////////
  $('.button').on('click', event => {
    event.preventDefault(); // stop page from reloading

    const endpoint = `https://api.citybik.es/v2/networks/citi-bike-nyc`;
    $.ajax({ url: endpoint }).then(getProvider); // get data asynchronously, when the data gets back, handle it
  });
});
