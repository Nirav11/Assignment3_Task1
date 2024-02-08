
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
position: [
           -71.065074,
          42.365183,
          2500// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: {
          x: -71.053544,
          y: 42.331847,
          z: 2500
        },
        tilt: 0,
        heading: 0
      });
      
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [v1, v2, v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    v1.addEventListener('click', function() {
      view.goTo({
        target:camera
      });
    });

    v2.addEventListener('click', function() {
      view.goTo({
        target:camera2
      });
    });
    

v3.addEventListener('click', function() {
      view.goTo({
        position: {
          x: -71.064621,
          y: 42.350761, 
          z: 2500
        },
        tilt: 0,
        heading: 0
      });
    });

    });
