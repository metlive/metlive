/**
 * Created by yangyunjie on 2017/1/18.
 */

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.getSelected(function(tab) {
		console.log(tab);
	});
});