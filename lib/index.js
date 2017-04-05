const small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
const punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";
const lower = (word) => word.toLowerCase();
const upper = (word) => word.substr(0,1).toUpperCase() + word.substr(1);
const isString = (val) => {
  return typeof val === 'string' || 
    ((!!val && typeof val === 'object') &&
    Object.prototype.toString.call(val) === '[object String]');
};

module.exports = (title) => {
  if (!isString(title)) return;
	let parts = [];
  let split = /[:.;?!] |(?: |^)["Ō]/g;
  let index = 0;
	
	while (true) {
		let m = split.exec(title);
		parts
      .push(title.substring(index, m ? m.index : title.length)
			.replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, (all) => {
				return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
			})
			.replace(RegExp('\\b' + small + '\\b', 'ig'), lower)
			.replace(RegExp('^' + punct + small + '\\b', 'ig'), (all, punct, word) => {
				return punct + upper(word);
			})
			.replace(RegExp('\\b' + small + punct + '$', 'ig'), upper));
		
		index = split.lastIndex;
		
		if (m) parts.push(m[0]);
		else break;
	}
	
	return parts
    .join('')
    .replace(/ V(s?)\. /ig, 'v$1.')
		.replace(/(['Õ])S\b/ig, '$1s')
		.replace(/\b(AT&T|Q&A)\b/ig, (all) => all.toUpperCase());
};