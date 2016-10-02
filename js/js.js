function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
		console.log('User signed out.');
		$("#SignOutLink").addClass('hidden');
		$("#profile_image").addClass('hidden');
    });
  }

  
  function onSignIn(googleUser) {


  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  
	$("#abcRioButton").addClass('hidden');
	$("#SignOutLink").html('Sign Out ' + profile.getGivenName());
	$("#SignOutLink").removeClass('hidden');
	$('#profile_image').attr('src',profile.getImageUrl());
	$('#profile_image').removeClass('hidden');
}
