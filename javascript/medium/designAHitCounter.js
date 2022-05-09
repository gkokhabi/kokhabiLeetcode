/*
Leetcode number: 362
Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).

Your system should accept a timestamp parameter (in seconds granularity), and you may assume that calls are being made to the system in chronological order (i.e., timestamp is monotonically increasing). Several hits may arrive roughly at the same time.

Implement the HitCounter class:

  HitCounter() Initializes the object of the hit counter system.
  void hit(int timestamp) Records a hit that happened at timestamp (in seconds). Several hits may happen at the same timestamp.
  int getHits(int timestamp) Returns the number of hits in the past 5 minutes from timestamp (i.e., the past 300 seconds).



 */

  var HitCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
        this.queue.push({
        timestamp
    })
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
      while(this.queue.length > 0 &&
            timestamp - this.queue[0].timestamp >= 300) {
          this.queue.shift();
    }
    return this.queue.length;  
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */