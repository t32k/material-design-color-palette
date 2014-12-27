function addHuePalette(hexColor, index, isWhite) {
  var swatchGroup = swatchesGroup.addLayerOfType('group');
  swatchGroup.setName(valueSet[index]);
  swatchGroup.frame().x = 0;
  swatchGroup.frame().y = index * 50;
  swatchGroup.frame().width = 200;
  swatchGroup.frame().height = 50;

  var colorBlock = swatchGroup.addLayerOfType('rectangle');
  colorBlock = colorBlock.embedInShapeGroup();
  colorBlock.frame().x = 0;
  colorBlock.frame().y = 0;
  colorBlock.frame().width = 200;
  colorBlock.frame().height = 50;
  colorBlock.setName(hexColor);
  var colorBlockFill = colorBlock.style().fills().addNewStylePart();
  colorBlockFill.color = MSColor.colorWithSVGString(hexColor);

  var colorName = swatchGroup.addLayerOfType('text');
  colorName.stringValue = valueSet[index];
  colorName.name = valueSet[index];
  colorName.fontPostscriptName = 'Helvetica Neue Medium';
  colorName.fontSize = 14;
  if (isWhite === 1) {
    colorName.textColor = MSColor.colorWithSVGString('#FFF');
  } else {
    colorName.textColor = MSColor.colorWithSVGString('#222');
  }
  colorName.frame().x = 10;
  colorName.frame().y = 17;

  var colorText = swatchGroup.addLayerOfType('text');
  colorText.stringValue = hexColor;
  colorText.name = hexColor;
  colorText.fontPostscriptName = 'Helvetica Neue';
  colorText.fontSize = 14;
  if (isWhite === 1) {
    colorText.textColor = MSColor.colorWithSVGString('#FFF');
  } else {
    colorText.textColor = MSColor.colorWithSVGString('#222');
  }
  colorText.frame().x = 130;
  colorText.frame().y = 17;
}


function addValuePalette(hexColor, index, isWhite) {
  var swatchGroup = swatchesGroup.addLayerOfType('group');
  swatchGroup.setName(hueSet[index]);
  swatchGroup.frame().x = index * 50;
  swatchGroup.frame().y = 0;
  swatchGroup.frame().width = 50;
  swatchGroup.frame().height = 46;

  var colorBlock = swatchGroup.addLayerOfType('rectangle');
  colorBlock = colorBlock.embedInShapeGroup();
  colorBlock.frame().x = 0;
  colorBlock.frame().y = 0;
  colorBlock.frame().width = 50;
  colorBlock.frame().height = 50;
  colorBlock.setName(hexColor);
  var colorBlockFill = colorBlock.style().fills().addNewStylePart();
  colorBlockFill.color = MSColor.colorWithSVGString(hexColor);

  var colorName = swatchGroup.addLayerOfType('text');
  colorName.stringValue = hueSet[index];
  colorName.name = hueSet[index];
  colorName.fontPostscriptName = 'Helvetica Neue Medium';
  colorName.fontSize = 8;
  if (isWhite === 1) {
    colorName.textColor = MSColor.colorWithSVGString('#FFF');
  } else {
    colorName.textColor = MSColor.colorWithSVGString('#222');
  }
  colorName.frame().x = 8;
  colorName.frame().y = 14;

  var colorText = swatchGroup.addLayerOfType('text');
  colorText.stringValue = hexColor;
  colorText.name = hexColor;
  colorText.fontPostscriptName = 'Helvetica Neue';
  colorText.fontSize = 8;
  if (isWhite === 1) {
    colorText.textColor = MSColor.colorWithSVGString('#FFF');
  } else {
    colorText.textColor = MSColor.colorWithSVGString('#222');
  }
  colorText.frame().x = 8;
  colorText.frame().y = 26;
}

function addSwatch(hexColor, index, isWhite) {
  var swatchGroup = swatchesGroup.addLayerOfType('group');
  swatchGroup.setName(swatchSet[index]);
  if (index < 4) {
    swatchGroup.frame().x = index * 100;
    swatchGroup.frame().y = 0;
  } else {
    swatchGroup.frame().x = (index - 4) * 100;
    swatchGroup.frame().y = 100;
  }

  swatchGroup.frame().width = 100;
  swatchGroup.frame().height = 46;

  var colorBlock = swatchGroup.addLayerOfType('rectangle');
  colorBlock = colorBlock.embedInShapeGroup();
  colorBlock.frame().x = 0;
  colorBlock.frame().y = 0;
  colorBlock.frame().width = 100;
  colorBlock.frame().height = 100;
  colorBlock.setName(hexColor);
  var colorBlockFill = colorBlock.style().fills().addNewStylePart();
  colorBlockFill.color = MSColor.colorWithSVGString(hexColor);

  var colorName = swatchGroup.addLayerOfType('text');
  colorName.stringValue = swatchSet[index];
  colorName.name = swatchSet[index];
  colorName.fontPostscriptName = 'Helvetica Neue';
  colorName.fontSize = 9;
  if (isWhite === 1) {
    colorName.textColor = MSColor.colorWithSVGString('#FFF');
  } else {
    colorName.textColor = MSColor.colorWithSVGString('#222');
  }
  colorName.frame().x = 8;
  colorName.frame().y = 14;

  var colorText = swatchGroup.addLayerOfType('text');
  colorText.stringValue = hexColor;
  colorText.name = hexColor;
  colorText.fontPostscriptName = 'Helvetica Neue Medium';
  colorText.fontSize = 14;
  if (isWhite === 1) {
    colorText.textColor = MSColor.colorWithSVGString('#FFF');
  } else {
    colorText.textColor = MSColor.colorWithSVGString('#222');
  }
  colorText.frame().x = 8;
  colorText.frame().y = 26;
}

function createSelect(msg, items, selectedItemIndex) {
  selectedItemIndex = selectedItemIndex || 0;

  var accessory = [[NSComboBox alloc] initWithFrame:NSMakeRect(0,0,200,25)];
  [accessory addItemsWithObjectValues:items]
  [accessory selectItemAtIndex:selectedItemIndex]

  var alert = [[NSAlert alloc] init];
  [alert setMessageText:msg]
  [alert addButtonWithTitle:'OK']
  [alert addButtonWithTitle:'Cancel']
  [alert setAccessoryView:accessory]

  var responseCode = [alert runModal];
  var sel = [accessory indexOfSelectedItem];

  return [responseCode, sel]
}