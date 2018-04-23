var adjectives = [
 	"Black", "Red", "Green", "White", "Purple",
 	"Cruel", "Evil", "Clever", "Savage", "Wicked"
];

var descriptors = [
	"Destructor", "Terrible"
];

var names = [
	"Death", "Doom", "Vandal", "Othon", "Chaos", "Destruction"
];

var titles = [
	"Doctor", "Herr", "Colonel", "Lord", "Lady", "Frau", "Mr.", "Mister", "Mrs.", "Madam", "Mademoiselle", "Duke", "Duchess"
];

var liaison = [
	"van", "of"
];

function pickRandomInArray(array) {
	return array[Math.floor(Math.random() * array.length)];
} 

function generate() {
	var hasTitle = Math.random() < 0.2;
	var hasAdjective = Math.random() < 0.2;
	var hasDescriptor = Math.random() < 0.2;
	var hasSecondName = (!hasTitle && !hasDescriptor) || (!hasDescriptor && Math.random() < 0.5) || Math.random() < 0.2;
	var hasLiaison = hasSecondName && Math.random() < 0.2;
	
	var name = "";
	if (hasTitle) {
		name += " " + pickRandomInArray(titles);
	}
	if (hasAdjective) {
		name += " " + pickRandomInArray(adjectives);
	}
	name += " " + pickRandomInArray(adjectives.concat(names));
	if (hasLiaison) {
		name += " " + pickRandomInArray(liaison);
	}
	if (hasSecondName) {
		name += " " + pickRandomInArray(names);
	}
	if (hasDescriptor) {
		name += " " + pickRandomInArray(descriptors.concat(adjectives));
	}
	return name;
}