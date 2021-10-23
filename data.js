var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-view",
      "name": "1 view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21044269329084742,
          "pitch": 0.10036771479661866,
          "rotation": 0,
          "target": "1-2-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-view",
      "name": "2 view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16635131706544826,
          "pitch": 0.2638655937913512,
          "rotation": 0,
          "target": "2-3-view"
        },
        {
          "yaw": 3.038369292979521,
          "pitch": 0.07160706435973907,
          "rotation": 0,
          "target": "0-1-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-view",
      "name": "3 view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6845696211725887,
          "pitch": 0.1902459440828359,
          "rotation": 0,
          "target": "1-2-view"
        },
        {
          "yaw": 0.11855974359756516,
          "pitch": -0.07101566030785378,
          "rotation": 0,
          "target": "3--4-view"
        },
        {
          "yaw": 1.882462264651025,
          "pitch": -0.12609797610089757,
          "rotation": 0,
          "target": "4-5-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3--4-view",
      "name": " 4 view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0455012522347253,
          "pitch": 0.037240947294501225,
          "rotation": 0,
          "target": "4-5-view"
        },
        {
          "yaw": -0.230139569999249,
          "pitch": 0.266071357472331,
          "rotation": 0,
          "target": "2-3-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5-view",
      "name": "5 view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4737322255413119,
          "pitch": 0.15329557878932576,
          "rotation": 0,
          "target": "3--4-view"
        },
        {
          "yaw": -0.09453319339872124,
          "pitch": 0.2121285658413008,
          "rotation": 0,
          "target": "2-3-view"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MARRIAGE HALL",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
