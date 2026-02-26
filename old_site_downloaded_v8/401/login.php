<!DOCTYPE html>
<html>
<head><script src="../gdpr/gdprscript.js"></script><title>This area is password protected [401]</title>
	<style type="text/css"></style>
	

</head>
<body style="background: #F2F2F2; text-align: center; margin: 0; padding: 0;" onload="document.getElementById('p').focus()">
<div id="login">

	<p id="title">This area is password protected</p>
	<form id="password-form" method="post">
		<p style="font-size: 14px;">Please enter the password below</p>
		<input type="password" name="p" id="p" title="p" />
		<input type="submit" id="submit-password" value="Login" />
		<input type="hidden" name="redirect" value="/members.html" />
		<input type="hidden" name="u" value="weebs" />
	</form>

</div>
<script>
	window.addEventListener("message", function(evt){
		var message = evt.data;
		if (message.action === "input-password"){
			document.getElementById('p').value = message.password;
			document.getElementById('password-form').submit();
		}
	});
</script>
</body>
</html>