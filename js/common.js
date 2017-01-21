chrome.tabs.getSelected(function(tab) {
	$('#qrcodess').html("");
	$('#qrcodess').qrcode({ width: 200, height: 200, text: tab.url});
});
