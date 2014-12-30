#import 'lib/util.js'

// Hue Palette
function addHuePalette(hexColor, index, isWhite) {
  var swatchGroup = createGroup({
    parent: swatchesGroup,
    name: valueSet[index],
    x: 0, y: index * 50,
    width: 200, height: 50
  });

  var colorBlock = createRectangle({
    parent: swatchGroup,
    name: hexColor,
    x: 0, y: 0,
    width: 200, height: 50
  });
  var colorBlockFill = colorBlock.style().fills().addNewStylePart();
  colorBlockFill.color = MSColor.colorWithSVGString(hexColor);

  var textColor = (isWhite === 1) ? '#FFF' : '#222';

  var colorName = createText({
    parent: swatchGroup,
    stringValue: valueSet[index],
    name: valueSet[index],
    fontPostscriptName: 'Helvetica Neue Medium',
    fontSize: 14,
    textColor: MSColor.colorWithSVGString(textColor),
    x: 10, y: 17
  });
  var colorText = createText({
    parent: swatchGroup,
    stringValue: hexColor,
    name: hexColor,
    fontPostscriptName: 'Helvetica Neue',
    fontSize: 14,
    textColor: MSColor.colorWithSVGString(textColor),
    x: 130, y: 17
  });
}

// Value Palette
function addValuePalette(hexColor, index, isWhite) {
  var swatchGroup = createGroup({
    parent: swatchesGroup,
    name: hueSet[index],
    x: index * 50, y: 0,
    width: 50, height: 46
  });

  var colorBlock = createRectangle({
    parent: swatchGroup,
    name: hexColor,
    x: 0, y: 0,
    width: 50, height: 50
  });
  var colorBlockFill = colorBlock.style().fills().addNewStylePart();
  colorBlockFill.color = MSColor.colorWithSVGString(hexColor);

  var textColor = (isWhite === 1) ? '#FFF' : '#222';

  var colorName = createText({
    parent: swatchGroup,
    stringValue: hueSet[index],
    name: hueSet[index],
    fontPostscriptName: 'Helvetica Neue Medium',
    fontSize: 8,
    textColor: MSColor.colorWithSVGString(textColor),
    x: 8, y: 14
  });
  var colorText = createText({
    parent: swatchGroup,
    stringValue: hexColor,
    name: hexColor,
    fontPostscriptName: 'Helvetica Neue',
    fontSize: 8,
    textColor: MSColor.colorWithSVGString(textColor),
    x: 8, y: 26
  });
}

// Swatch Palette
function addSwatch(hexColor, index, isWhite) {
  var xPos, yPos;
  if (index < 4) {
    xPos = index * 100;
    yPos = 0;
  } else {
    xPos = (index - 4) * 100;
    yPos = 100;
  }
  var swatchGroup = createGroup({
    parent: swatchesGroup,
    name: swatchSet[index],
    x: xPos, y: yPos,
    width: 100, height: 46
  });

  var colorBlock = createRectangle({
    parent: swatchGroup,
    name: hexColor,
    x: 0, y: 0,
    width: 100, height: 100
  });
  var colorBlockFill = colorBlock.style().fills().addNewStylePart();
  colorBlockFill.color = MSColor.colorWithSVGString(hexColor);

  var textColor = (isWhite === 1) ? '#FFF' : '#222';

  var colorName = createText({
    parent: swatchGroup,
    stringValue: swatchSet[index],
    name: swatchSet[index],
    fontPostscriptName: 'Helvetica Neue',
    fontSize: 9,
    textColor: MSColor.colorWithSVGString(textColor),
    x: 8, y: 14
  });
  var colorText = createText({
    parent: swatchGroup,
    stringValue: hexColor,
    name: hexColor,
    fontPostscriptName: 'Helvetica Neue Medium',
    fontSize: 14,
    textColor: MSColor.colorWithSVGString(textColor),
    x: 8, y: 26
  });
}