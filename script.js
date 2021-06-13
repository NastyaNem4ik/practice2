$( document ).ready(function() {

	$('button').click(function () {
		formula1()
		formula2()
		formula3()
		formula4()
		formula5()
		formula6()
	})

	$('input').on('keyup', function () {
		let $input = $(this),
			$autoCalcInput = $('#auto_calc');

		if ($autoCalcInput.prop("checked") == false) {
			return;
		}

		switch ($input.data('formula_id')) {
			case 1:
				formula1()
				break;
			case 2:
				formula2()
				break;
			case 3:
				formula3()
				break;
			case 4:
				formula4()
				break;
			case 5:
				formula5()
				break;
			case 6:
				formula6()
				break;
		}
	});

	function formula1()
	{
		var a = $('input[name="formula1_a"]').val(),
			b = $('input[name="formula1_b"]').val(),
			angle = $('input[name="formula1_angle"]').val(),
			area = a * b * Math.sin(angle),
			h = b * Math.sin(angle);

		$('#result1-area').text(prepareAnswer(area));
		$('#result1-h').text(prepareAnswer(h));
	}

	function formula2()
	{
		var r = $('input[name="formula2_r"]').val(),
			area = Math.pow(r, 2) * Math.PI,
			l = 2 * Math.PI * r;

		$('#result2-area').text(prepareAnswer(area));
		$('#result2-l').text(prepareAnswer(l));
	}

	function formula3()
	{
		var horizontalR = $('input[name="formula3_horizontalR"]').val(),
			verticalR = $('input[name="formula3_verticalR"]').val(),
			area = Math.PI * horizontalR * verticalR,
			l = Math.PI * Math.sqrt(2 * (Math.pow(horizontalR, 2) + Math.pow(verticalR, 2)));

		$('#result3-area').text(prepareAnswer(area));
		$('#result3-l').text(prepareAnswer(l));
	}

	function formula4()
	{
		var a = $('input[name="formula4_a"]').val(),
			area = Math.pow(a, 2),
			diagonal = a * Math.sqrt(2);

		$('#result4-diagonal').text(prepareAnswer(diagonal));
		$('#result4-area').text(prepareAnswer(area));
	}

	function formula5()
	{
		var a = $('input[name="formula5_a"]').val(),
			b = $('input[name="formula5_b"]').val(),
			area = a * b,
			diagonal = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

		$('#result5-area').text(prepareAnswer(area));
		$('#result5-diagonal').text(prepareAnswer(diagonal));
	}

	function formula6()
	{
		var a = $('input[name="formula6_a"]').val(),
			b = $('input[name="formula6_b"]').val(),
			c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)),
			resultA = (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c),
			resultB = (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c),
			area = 0.5 * (a * b);

		$('#result6-c').text(prepareAnswer(c));
		$('#result6-a').text(prepareAnswer(Math.acos(resultA) * 180 / Math.PI));
		$('#result6-b').text(prepareAnswer(Math.acos(resultB) * 180 / Math.PI));
		$('#result6-area').text(prepareAnswer(area));
		$('#result6-h').text(prepareAnswer((2 * area) / c));
	}

	function prepareAnswer(number)
	{
		return number.toFixed(4)
	}
});