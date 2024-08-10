(function() {
    const _console = console; 

    Object.defineProperty(window, 'console', {
        get: function() {
            if (_console._commandDisabled) {
                return {};
            }
            return _console;
        },
        // set: function(val) {
            // _console = val;
        // }
    });

    _console._commandDisabled = true;
})();