$('#profile_image_preview').hide();

// For the hidden input value of image
document.getElementById('profile_image').onchange = function () {
  	$('#hidden_profile_image').val(this.value);
};

// For Visable input
document.getElementById('profile_image').onchange = function () {
  	$('#upload-file-info').val(this.value);
};

// For the preview of the image
$('#profile_image').change( function(event) {
	var x = document.getElementById("profile_image").value;
	$('#profile_image_preview').show();
    $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
});