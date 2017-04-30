var count = 0;
function getData() {
  $.ajax({
    url: 'http://localhost:8000/data/1/',
    type: 'GET',
    dataType: 'text'
  })
  .done(function(val) {
    lists = val.split('|')
    for (var i = 0; i < lists.length; i++) {
      actData = lists[i].split(',')
      //console.log(actData);
      showOnMap(actData,lists.length);
  }
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}

function showOnMap(val,length) {
  count++;

  if (count == 1 || count == Math.floor(length/3) || Math.floor(count == length/2) || Math.floor(count == length/5) || Math.floor(count == length/7) || count == length-20){
    console.log(count);
    arr = [];
    arr.push(Number(val[2]));
    arr.push(Number(val[3]));
    console.log(arr);
    var marker = WE.marker(arr).addTo(earth);
}
}


var earth;
// function initialize() {
//   options = {sky:true}
//   earth = new WE.map('earth_div',options);
//   earth.setView([46.8011, 8.2266], 2);
//   WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//     attribution: '© OpenStreetMap contributors'
//   }).addTo(earth);
//
//   // Start a simple rotation animation
//   var before = null;
//   requestAnimationFrame(function animate(now) {
//       var c = earth.getPosition();
//       var elapsed = before? now - before: 0;
//       before = now;
//       earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
//       requestAnimationFrame(animate);
//   });
//
// }

function initialize() {
        eventlisners();
        options = {sky:true}
        earth = new WE.map('earth_div',options);
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '© OpenStreetMap contributors'
        }).addTo(earth);
        getData();
      }

function eventlisners() {
  $('#submit').click(function(event) {
    data = $('#input').val();
    //console.log(data);
    clean(data);
  });
}

function clean(csv) {
  // var data = Papa.parse(csv);
console.log(data);
  l1 = csv.split('\n')
  console.log(l1);
  for (var i = 0; i < l1.length; i++) {
    l2 = l1[i].split(',').slice(0,4)
    showOnMap(l2,l1.length)
    //console.log(l2);
  }


}
