const open = require("./index");

open("http://github.com")
	.then(proc => {
		console.log("open promise resolved successfully");
		proc.on("error", err => {
			console.log("child process error event fired:", err);
		});
	})
	.catch(err => {
		console.log("open promise was rejected", err);
	});

// Wait five seconds before exiting.
setTimeout(() => {
	console.log("Exiting!");
	process.exit(0);
}, 5000);
