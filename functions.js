#import 'colors.js'

function addSwatch(hexColor, index) {
  var swatchGroup = swatchesGroup.addLayerOfType('group');
  swatchGroup.setName(hexColor);
  swatchGroup.frame().x = 0;
  swatchGroup.frame().y = index * 40;
  swatchGroup.frame().width = 200;
  swatchGroup.frame().height = 40;

  var colorBlock = swatchGroup.addLayerOfType('rectangle');
  colorBlock = colorBlock.embedInShapeGroup();
  colorBlock.frame().x = 0;
  colorBlock.frame().y = 0;
  colorBlock.frame().width = 200;
  colorBlock.frame().height = 40;
  colorBlock.setName(hexColor);
  var colorBlockFill = colorBlock.style().fills().addNewStylePart();
  colorBlockFill.color = MSColor.colorWithSVGString(hexColor);

  var colorName = swatchGroup.addLayerOfType('text');
  colorName.stringValue = colorShade[index];
  colorName.name = colorShade[index];
  colorName.fontSize = 14;
  colorName.textColor = MSColor.colorWithSVGString('#222');
  colorName.frame().x = 10;
  colorName.frame().y = 12;

  var colorText = swatchGroup.addLayerOfType('text');
  colorText.stringValue = hexColor;
  colorText.name = hexColor;
  colorText.fontSize = 14;
  colorText.textColor = MSColor.colorWithSVGString('#222');
  colorText.frame().x = 132;
  colorText.frame().y = 12;
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