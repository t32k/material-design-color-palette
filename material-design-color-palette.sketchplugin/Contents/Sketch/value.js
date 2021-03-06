var onRun = function(context) {
    // Require library files
    @import 'lib/colors.js'
    @import 'lib/functions.js'

    var doc = context.document;

    // Get current canvas
    var page = doc.currentPage();
    var artboard = doc.currentPage().currentArtboard();
    var canvas = artboard ? artboard : page;

    // Get value info
    var choice = createSelect('Select a color value', VALUES, 0);
    var choiceCode = choice[0];
    var valueIndex = choice[1];
    var valueName = VALUES[valueIndex];

    if (isSelected(choiceCode)) {
        var userValueSets = [];
        var swatchesGroups = [];

        if (valueName !== 'All Values') {
            VALUES[0] = valueName;
            userValueSets.push(COLOR_SETS.map(function (colorSet) {
                return colorSet[valueIndex];
            }).filter(function (e) {
                return e;
            }));
        } else {
            var allValues = 14;
            for (var i = 0; i < allValues; i++) {
                userValueSets.push(COLOR_SETS.map(function (colorSet) {
                    return colorSet[i];
                }).filter(function (e) {
                    return e;
                }));
            }
        }

        userValueSets.forEach(function (valueSet, index) {
            swatchesGroups[index] = createGroup({
                parent: canvas,
                name: 'Material ' + VALUES[index],
                x: 0, y: 60 * index,
                width: valueSet.length * 50, height: 50
            });
            valueSet.forEach(function (colorInfo, i) {
                addValuePalette(index, colorInfo[0], colorInfo[1], i);
            });
        });
    }
};
