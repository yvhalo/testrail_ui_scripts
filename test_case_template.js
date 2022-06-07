name: TestCase template
description: template
author: Yvette Hernández
version: 1.0
includes: ^cases/add
excludes:

js:
$(document).ready(function() {

	var titleTemplate = "TestCase category - description"
        var actionDescription = 'La acción realizada. Por ejemplo "Se pulsa el botón, se escoge la opción, etcétera"'
        var resultDescription = 'Lo que debe ocurrir al pulsar el botón, escoger la acción, etcétera. No escribir "el usuario puede hacer...", en este caso, generar otra acción con las acciones posibles del usuario.'
	var onClick = function() {
		setTimeout(() => {
		  console.log("1 Segundo esperado")
		  $("[id^='stepContent']").attr("placeholder", actionDescription).change();
                  $("[id^='stepExpected']").attr("placeholder", resultDescription).change();
		}, 200);

	};

	$('#title').val(titleTemplate);

	$('.addStep').click(onClick);
	$("a:contains(Add the first step)").click(onClick)

});
