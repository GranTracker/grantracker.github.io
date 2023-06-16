$( document ).ready(function() {

	try {
		const hash = document.location.hash;
		if (!hash)
			return;
		console.log(`hash: "${hash}"`);
		if (!/^#[a-z0-9\-_]*$/.test(hash))
			throw new Error(`hash doesn't match regex`);

		const titleAnchor = document.querySelector(`[href="${hash}"]`);
		if (!titleAnchor)
			throw new Error(`No matching titleAnchor`);
		const panelDiv = document.querySelector(`${hash}`);
		if (!panelDiv)
			throw new Error(`No matching panelDiv`);

		console.log(`Found titleAnchor and panelDiv`);

		titleAnchor.classList.remove("collapsed");
		titleAnchor.setAttribute("aria-expanded", "true");

		panelDiv.classList.add("in");
		panelDiv.style.cssText = "";
	} catch (e) {
		console.error(e);
	}
})