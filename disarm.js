var boxNames = ["chest", "strongbox"];
var bagNames = ["knapsack", "satchel", "bag"];
var position = ["second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];

function getBags() {
	var matches = new MatchList();
	matches.matchRe("You are wearing (.*)\\.");
	script.put("inv");
	var match = matches.matchWait();
	var groups = match.groups();
	var items = groups.get(1).split(/(,|( and ))/);
	var counts = new Array(bagNames.length);
	for (i in bagNames) {
		counts[i] = 0;
	}
	var result = new Array();
	for (i in items) {
		for (j in bagNames) {
			if (items[i].search(new RegExp("\\b" + bagNames[j] + "\\b")) > 0) {
				if (counts[j] > 0)
					result.push(position[counts[j] - 1] + " " + bagNames[j]);
				else
					result.push(bagNames[j]);
				counts[j] += 1
			}
		}
	}
	return result;
}

function getContainedBoxes(item) {
	script.pause();
	var matches = new MatchList();
	matches.matchRe("In the .* you see (.*)\\.");
	script.put("look in my " + item);
	var match = matches.matchWait();
	var items = match.groups().get(1).split(/(,|( and ))/);
	var result = new Array();
	for (i in items) {
		for (j in boxNames) {
			if (items[i].search(new RegExp("\\b" + boxNames[j] + "\\b")) > 0) {
				result.push(boxNames[j]);
			}
		}
	}
	return result;
}

function getChest(item) {
	script.pause();
	var m = new MatchList();
	m.match("You get ");
	m.match("You are already holding that.");
	m.match("You need a free hand to pick that up.", handsfree);
	m.match("...wait", function() { getChest(item); });
	script.put("get my " + item);
	m.matchWait();
}

function unknownBox() {
	script.echo("This box needs to be added to the script!");
	script.exit();
}

function disarmBoxIdentify(item) {
	script.pause();
	var hasTrap = false;
	var m = new MatchList();
	m.match("looking into the keyhole you see ", function() { hasTrap = true; });
	m.match("You see a pin and shaft lodged into the frame of the wooden strongbox.  It looks safe enough.");
	m.match("Roundtime: ", unknownBox);
	script.put("disarm my " + item + " identify");
	m.matchWait();
	return hasTrap;
}

function disarmBoxIdentify(item) {
	script.pause();
	var m = new MatchList();
	m.match("With precise control, you shove the pin away from the tumblers and it springs upward and lodges into the frame of the wooden strongbox itself.");
	m.match("Roundtime: ", unknownBox);
	script.put("disarm my " + item);
	m.matchWait();
}

if (arguments.length > 0) {
	inventory = arguments;
} else {
	script.echo("test")
	inventory = getBags();
}


for (i in inventory) {
	var items = getContainedBoxes(inventory[i]);
	for (j in items) {
		var item = items[j];
		script.pause();
		script.put("get my " + item)
		while (disarmBoxIdentify(item)) {
			disarmBox(item);
		}
		script.pause();
		script.put("get my lockpick");
		while(pickBoxIdentify(item)) {
			pickBox(item);
		}
		script.pause();
		script.put("stow my lockpick");
		dismantleBox(item);
	}
}

