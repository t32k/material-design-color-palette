function addSwatch(hexColor, index, isWhite) {
  var swatchGroup = swatchesGroup.addLayerOfType('group');
  swatchGroup.setName(hexColor);
  swatchGroup.frame().x = 0;
  swatchGroup.frame().y = index * 46;
  swatchGroup.frame().width = 200;
  swatchGroup.frame().height = 46;

  var colorBlock = swatchGroup.addLayerOfType('rectangle');
  colorBlock = colorBlock.embedInShapeGroup();
  colorBlock.frame().x = 0;
  colorBlock.frame().y = 0;
  colorBlock.frame().width = 200;
  colorBlock.frame().height = 46;
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
  colorName.frame().y = 15;

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
  colorText.frame().y = 15;
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