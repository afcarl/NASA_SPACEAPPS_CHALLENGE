function getcesium() {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', 'http://cesiumjs.org/releases/1.18/Build/Cesium/Cesium.js');
  document.head.appendChild(script);
  script.onload = function() {
    console.log('cesium versoin: ' + Cesium.VERSION);
    var viewer = new Cesium.Viewer('globe');
  }
}


function startapp(){
  getcesium();
}
