document.addEventListener('polymer-ready', function() {
	var toggle = document.getElementById('convertToggle');
	var zawgyi = document.getElementById('zawgyiTextArea');
	var unicode = document.getElementById('unicodeTextArea');
	var zatuogrow = document.getElementById('zawgyiAutogrow');
	var uatuogrow = document.getElementById('unicodeAutogrow');

	document.getElementById('clearButton').addEventListener('click',function(){
		unicode.value='';
		zawgyi.value='';
		zawgyi.style.height = 'auto';
		unicode.style.height = 'auto';
		zatuogrow.style.height= 'auto';
		zatuogrow.style.lineHeight = 'auto';
		uatuogrows.style.lineHeight = 'auto';
		uatuogrow.style.height = 'auto';
	});
	
	document.getElementById('convertFloatButton').addEventListener('click',function(){
		if(toggle.checked){
			var text = Z1_Uni(zawgyi.value);
			unicode.value = text;
			unicode.style.height = unicode.scrollHeight + 'px';
			uatuogrow.style.height = unicode.scrollHeight + 'px';
			cordova.plugins.clipboard.copy(text);
			
		}else{
			var text = Uni_Z1(unicode.value);
			zawgyi.value = text;
			zawgyi.style.height = zawgyi.scrollHeight + 'px';
			zatuogrow.style.height = zawgyi.scrollHeight + 'px';
			cordova.plugins.clipboard.copy(text);
		}
	});
	
	document.getElementById('pasteButton').addEventListener('click',function(){
			cordova.plugins.clipboard.paste(function(text_paste){
				if(toggle.checked){
					zawgyi.value=text_paste;
					zawgyi.style.height = zawgyi.scrollHeight + 'px';
					zatuogrow.style.height = zawgyi.scrollHeight + 'px';
				}else{
					unicode.value = text_paste;
					unicode.style.height = unicode.scrollHeight + 'px';
					uatuogrow.style.height = unicode.scrollHeight + 'px';
				}
			});
	});
	
	document.getElementById('settingButton').addEventListener('click',function(){
		document.getElementById('aboutDialog').opened = true;
	});
	
});

