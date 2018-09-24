document.addEventListener('DOMContentLoaded', function () {
								document.removeEventListener('DOMContentLoaded', arguments.callee, false);
								document.getElementById('div_300').innerHTML = '300_111';
							}, false);