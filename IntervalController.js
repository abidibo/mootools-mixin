/**
 * IntervalController Mixin
 * @classdesc Provides methods to start, stop and resume a setInterval functionality
 */
var IntervalController = new Class({
  _started: false,
  _handler: null,
  _callback: null,
  _interval: null,
  /**
   * @summary Starts the loop
   * @memberof IntervalController.prototype
   * @param {Function} callback: the function to execute
   * @param {Number} interval the loop interval
   * @return void
   */
  startInterval: function(callback, interval) {
    this._callback = callback;
    this._interval = interval;
    this._handler = setInterval(callback, interval);
    this._started = true;
  },
  /**
   * @summary Stops the loop
   * @memberof IntervalController.prototype
   * @return void
   */
  stopInterval: function() {
    if(this._handler === null) {
      console.log("nothing to stop");
    }
    else {
      clearInterval(this._handler);
      this._handler = null;
    }
  },
  /**
   * @summary Resumes the loop
   * @memberof IntervalController.prototype
   * @return void
   */
  resumeInterval: function() {
    if(!this._started) {
      console.log("not yet started");
    }
    else if(this._handler !== null) {
      console.log("already running");
    }
    else {
      this._handler = setInterval(this._callback, this._interval);  
    }
  }
});
