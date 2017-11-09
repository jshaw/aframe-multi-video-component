/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	/* global AFRAME */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * Aframe Multi Video Component component for A-Frame.
	 */
	AFRAME.registerComponent('aframe-multi-video-component', {
	  dependencies: ['geometry'],
	  schema: {
	    src: {type: 'string'},
	    time: {type: 'number'},
	    volume: {type: 'number'},
	    autoplay: {type: 'boolean'}
	  },

	  /**
	   * Set if component needs multiple instancing.
	   */
	  multiple: false,

	  /**
	   * Called once when component is attached. Generally for initial setup.
	   */
	  init: function () {
	    
	    var el = this.el;
	    var scene = this.el.sceneEl.object3D;

	    console.log("this: ", this);

	    this.src = this.data.src.replace('#','');
	    this.time = this.data.time;
	    this.volume = this.data.volume;
	    this.autoplay = this.data.autoplay;

	    var video_tmp = document.getElementById(this.src);
	    var video = video_tmp.cloneNode(true);
	    var geometry = new THREE.PlaneGeometry( 4, 2, 1); 
	      
	    var texture = new THREE.VideoTexture( video );
	    texture.minFilter = THREE.LinearFilter;
	    texture.magFilter = THREE.LinearFilter;
	    texture.format = THREE.RGBFormat;

	    var material = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide} );
	    var mesh = new THREE.Mesh(geometry,  material);
	    
	    video.currentTime = this.time;
	    video.volume = this.volume;

	    if(this.autoplay == true){
	      video.play();
	    }

	    el.setObject3D('mesh', mesh);

	  },

	  /**
	   * Called when component is attached and when component data changes.
	   * Generally modifies the entity based on the data.
	   */
	  update: function (oldData) { },

	  /**
	   * Called when a component is removed (e.g., via removeAttribute).
	   * Generally undoes all modifications to the entity.
	   */
	  remove: function () { },

	  /**
	   * Called on each scene tick.
	   */
	  // tick: function (t) { },

	  /**
	   * Called when entity pauses.
	   * Use to stop or remove any dynamic or background behavior such as events.
	   */
	  pause: function () { },

	  /**
	   * Called when entity resumes.
	   * Use to continue or add any dynamic or background behavior such as events.
	   */
	  play: function () { }
	});


/***/ })
/******/ ]);