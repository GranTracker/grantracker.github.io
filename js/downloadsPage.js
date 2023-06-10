$( document ).ready(function() {

	function compareVersions(v1, v2) {
		v1 = v1.split(".");
		v2 = v2.split(".");
		const maxSegments = Math.max(v1.length, v2.length);

		for (let i = 0; i < maxSegments; i++) {
			const v1Part = i < v1.length ? parseInt(v1[i]) : 0;
			const v2Part = i < v2.length ? parseInt(v1[2]) : 0;

			const result = v1[i] - v2[i];
			if (result !== 0)
				return result;
		}
		return 0;
	}

	try {
		const urlParams = new URLSearchParams(window.location.search);
		const userVersion = urlParams.get("v");
		if (!userVersion)
			return;
		document.getElementById("firstTimeUserAlert").classList.add("my_hidden");
		
		const currentVersionInfo = $.getJSON("/assets/currentVersionInfo.json", function(currentVersionInfo) {
			if (compareVersions(userVersion, currentVersionInfo.appVersion) >= 0)
				return;
			
			const userVersionAlertContent = document.getElementById("userVersionAlertContent");
			var updateText = userVersionAlertContent.innerText.replace("$userVersion$", userVersion);
			userVersionAlertContent.innerText = updateText;
			document.getElementById("userVersionAlert").classList.remove("my_hidden");
		});

	} catch (e) {
		console.error(e);
	}
})