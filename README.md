# aframe-multi-video-component

[![Version](http://img.shields.io/npm/v/aframe-multi-video-component-component.svg?style=flat-square)](https://npmjs.org/package/aframe-multi-video-component-component)
[![License](http://img.shields.io/npm/l/aframe-multi-video-component-component.svg?style=flat-square)](https://npmjs.org/package/aframe-multi-video-component-component)

AFRAME multi-video component allowing for using a single video source organized like an image sprite as textures on multiple geometries each starting at different times in the video source.

This is a component to help optimize webVR video displays. Instead of loading multiple video sources for each panel and having the browser have to handle and use computational resources for keeping track of these multiple video files this is a solution to get better performance by editing the video clips into a single video, loading a single video file, cloning the video source for each panel and playing the video clip within the start time for the specified duration of the video clip. 

##### Note
This component is a exploratory solution for optimizing multi-video clips on multiple plane geometries used as video displays in the VR world. There were performance issues doing this on the Samsung VR while using multiple video sources so this was used to make this a viable solution for webVR on mobile devices.


For [A-Frame](https://aframe.io). The aframe-multi-video-component was developed at [UNION Creative](http://unioncreative.com) for a webVR project.

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| src      | The #id of the video source used in this panel. | required |
| time     | Time in milliseconds where the video will start from. | 0  |
| duration | While looping the video, how long should the video play for before scrubbing back to the start time value. | Length of loaded video |
| volume   | Volume of the panel's audio. | 0.5  |
| autoplay | Auto play the video clip.    | true |

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
