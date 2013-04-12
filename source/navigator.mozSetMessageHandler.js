// https://developer.mozilla.org/en-US/docs/DOM/window.navigator.mozSetMessageHandler
if(!navigator['mozSetMessageHandler']){
    navigator['mozSetMessageHandler'] = function(activity, callback){
		if(activity === 'open'){
			// TODO
			return false;
		}
	};
}