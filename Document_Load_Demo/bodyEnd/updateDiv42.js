document.addEventListener('DOMContentLoaded', function () {
								document.removeEventListener('DOMContentLoaded', arguments.callee, false);
								document.getElementById('div_42').innerHTML = '42_111';
							}, false);