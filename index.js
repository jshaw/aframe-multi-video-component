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
    duration: {type: 'number'},
    volume: {type: 'number'},
    autoplay: {type: 'boolean'}
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,
  video: null,
  combined_time: null,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    
    this.src = this.data.src.replace('#','');
    this.time = this.data.time;
    this.duration = this.data.duration;
    this.volume = this.data.volume;
    this.autoplay = this.data.autoplay;

    var el = this.el;
    var scene = this.el.sceneEl.object3D;
    var time = this.time;    

    var video_tmp = document.getElementById(this.src);
    this.video = video_tmp.cloneNode(true);

    var geometry = new THREE.PlaneGeometry( 4, 2, 1);   
    var texture = new THREE.VideoTexture( this.video );
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    var material = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide} );
    var mesh = new THREE.Mesh(geometry,  material);
    
    this.video.currentTime = this.time;
    this.video.volume = this.volume;

    if(this.autoplay == true){
      this.video.play();
    }

    el.setObject3D('mesh', mesh);

    this.updateCombinedTime();

    var ontimeupdate_handler = this.ontimeupdateHandler.bind(this);
    this.video.ontimeupdate = ontimeupdate_handler;
    this.vid_length = 0;


    var video_ready_interval_handler = this.videoReadyIntervalHandler.bind(this);
    this.i = setInterval(video_ready_interval_handler, 200);
  },

  ontimeupdateHandler: function() {
    this.timeTracking()
  },

  videoReadyIntervalHandler: function() {
    var video = this.video;
    var i = this.i;
    if(video.readyState > 0) {

        this.setVideoLength(video.duration);

        clearInterval(i);
      }
  },

  setVideoLength: function(length) {

    var current_component = this.el.getAttribute('aframe-multi-video-component');
    var current_duration = current_component.duration;

    if(typeof current_duration == null || current_duration == 0){
      this.el.setAttribute('aframe-multi-video-component.duration', length);
      
      this.vid_length = length;
      this.duration = length;

      this.updateCombinedTime();
    }    

  },

  timeTracking: function() {
    // This keeps track of the current video time and the duration of the video loop
    // if the video is to have a 10 second loop, it checks this and resets the video
    if(this.video.currentTime > this.combined_time){
      this.video.currentTime = this.time;
    }
  },

  
  updateCombinedTime: function() {
    this.combined_time = this.time + this.duration;
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
