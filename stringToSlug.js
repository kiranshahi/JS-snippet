stringToSlug: function (title) {
	return title.toLowerCase().trim()
	.replace(/\s+/g, '-')           // Replace spaces with -
	.replace(/&/g, '-and-')         // Replace & with 'and'
	// comment folowing line if you want to replace all the unicharacter
	.replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g, '-') // Replace '~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/?' with - suitable for unicode character like nepali 
	// comment if you want to support uincharacter 
	.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
	.replace(/\-\-+/g, '-')         // Replace multiple - with single -
}