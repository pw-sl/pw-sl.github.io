$(document).ready(function(){
	var _containerMenu = $('[data-container="menu"]');
	var _containerLink = $('[data-container="link"]');	
	_containerLink.click(function(){
		var _sessao = $(this).data('link');		
		function Posicao(Seletor){
			var _posicao = parseInt($('[data-container="'+Seletor+'"]').position().top);
			return _posicao;
		}		
		$('html, body').animate({scrollTop: Posicao(_sessao)}, 1000);		
		return false;
	});
});
function Alert(){
	alert ("Mensagem enviada");
}