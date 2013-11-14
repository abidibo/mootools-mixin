# Mootools Mixin Collection

This is a collection of mootools reusable mixin

## IntervalController
A mixin which provides methods to start, stop and resume a setInterval functionality

    var MyClass = new Class({
        Implements: [IntervalController],
        initialize: function(button_start, button_stop, button_resume) {
            var self = this;
            button_start.addEvent('click', function() {
                self.startInterval(self.action, 2000);
            });
            button_stop.addEvent('click', function() {
                self.stopInterval();
            });
            button_resume.addEvent('click', function() {
                self.resumeInterval();
            });
        },
        action: function() {
            // do something
        }
    });

