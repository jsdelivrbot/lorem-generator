String.prototype.toCapitalize = function() {

	return this.charAt(0).toUpperCase() + this.slice(1)

};

var generateLorem = function() {

	$('section').each(function() {

		var title = faker.lorem.sentence();

		$(this).find('h1').each(function() {
			$(this).text(
				title
			);
		});

		$(this).find('.slug').each(function() {
			$(this).text(
				slug(title).toLowerCase()
			);
		});

		$(this).find('.tag').each(function() {

			$(this).html('');

			var l = Math.round(2 + (Math.random() * 8));
			for(var i = 0; i < l; i++) {

				$(this).append(
					'<a>#' + faker.lorem.slug() + '</a>'
				);

			};

		});

		$(this).find('.author').each(function() {

			$(this).html(
				'by <a>' + faker.lorem.word().toCapitalize() + ' ' + faker.lorem.word().toCapitalize() + '</a>'
			);

		});

		$(this).find('.content').each(function() {

			$(this).html('');

			$(this).append(
				'<p>' + (function() {

					var text = '';

					var l = Math.round(3 + (Math.random() * 2));
					for(var i = 0; i < l; i++) {
						text += (i === 0 ? '' : ' ') + faker.lorem.paragraph();
					}

					return text;

				})() + '</p>'
			);

			var l = Math.round(4 + (Math.random() * 6));
			for(var i = 0; i < l; i++) {

				$(this).append(
					'<p>' + faker.lorem.paragraph() + '</p>'
				);

			};

		});

	});

};

$(function() {

	generateLorem();

	$('button#generate').bind('click', function() {
		generateLorem();
	});

});