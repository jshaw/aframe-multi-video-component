# aframe-multi-video-component
AFRAME multi-video component allowing for using a single video source organized like an image sprite as textures on multiple geometries each starting at different times in the video source.

[![Version](http://img.shields.io/npm/v/aframe-multi-video-component-component.svg?style=flat-square)](https://npmjs.org/package/aframe-multi-video-component-component)
[![License](http://img.shields.io/npm/l/aframe-multi-video-component-component.svg?style=flat-square)](https://npmjs.org/package/aframe-multi-video-component-component)

AFRAME multi-video component allowing for using a single video source organized like an image sprite as textures on multiple geometries each starting at different times in the video source.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| src      |             |               |
| time     |             |               |
| duration |             |               |
| volume   |             |               |
| autoplay |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-multi-video-component-component/dist/aframe-multi-video-component-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-assets>
        <video id="video1" loop crossorigin="anonymous" webkit-playsinline playsinline>
            <source src="./assets/star_wars_opening_scene.mp4"></source>
        </video>
    </a-assets>
    <a-entity aframe-multi-video-component="src: #video1; time: 200; duration: 5; volume: 0.5; autoplay:true;"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-multi-video-component-component
```

Then require and use.

```js
require('aframe');
require('aframe-multi-video-component-component');
```
