// https://developer.mozilla.org/en-US/docs/DOM/MozActivity
try {
    new MozActivity({});
}
catch (e) {

    /**
     * @constructor
     */
    window['MozActivity'] = function(config) {
        if (config.name === 'pick') {
            var input = document.createElement('input');
            input.type = 'file';
            if (config.data && config.data.type) {
                input.accept = config.data.type.join();
            }
            input.addEventListener('change', function(e) {
                var files = e.target.files; // FileList object
                
                if (files.length === 0) {
                    return;
                }
                
                /*
                if(file.type !== '' && !file.type.match('image.*')){
                    return;
                }
                */
                
                this.result = {
                    blob: files[0]
                };
                
                if (this.onsuccess) {
                    this.onsuccess();
                }
                
            }.bind(this), false);
            input.click();
        }
    };
    window['MozActivity'].prototype = {
        constructor: window['MozActivity']
    };
}