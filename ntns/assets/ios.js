AFRAME.registerComponent('sound', {
  schema: {
    src: { type: 'audio' },
    loop: { type: 'boolean' },
    volume: { type: 'int', default: 1 },
    fade: { type: 'int', default: 5000 },
  },

  init: function() {
    this.sound = new Howl({
      src: [ this.data.src ],
      loop: this.data.loop,
      volume: this.data.volume
    });