document.addEventListener('DOMContentLoaded', function () {
								document.removeEventListener('DOMContentLoaded', arguments.callee, false);
								document.getElementById('div_500').innerHTML = '500_111';
							}, false);