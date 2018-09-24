document.addEventListener('DOMContentLoaded', function () {
								document.removeEventListener('DOMContentLoaded', arguments.callee, false);
								document.getElementById('div_456').innerHTML = '456_111';
							}, false);