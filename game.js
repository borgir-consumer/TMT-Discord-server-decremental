var members = 4350
var deadServer = false

function noMoreModDiscussion() {
	if (deadServer === false) {
		killServer()
	}
}

async function killServer() {
	deadServer = true
	while (members > 0) {
		members -= 1
		document.getElementById("oof").innerHTML="Your server has " + members + " members"
		await sleep(100)
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}