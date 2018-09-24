document.addEventListener('DOMContentLoaded', function () {
								document.removeEventListener('DOMContentLoaded', arguments.callee, false);
								document.getElementById('div_987').innerHTML = '987_111';
							}, false);