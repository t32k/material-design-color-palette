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

function createGroup(config) {
  var group = config.parent.addLayerOfType('group');
  group.setName(config.name);
  group.frame().x = config.x;
  group.frame().y = config.y;
  group.frame().width = config.width;
  group.frame().height = config.height;
  return group;
}

function createRectangle(config) {
  var rectangle = config.parent.addLayerOfType('rectangle');
  if (rectangle.embedInShapeGroup != undefined) {
    rectangle = rectangle.embedInShapeGroup();
  } 
  rectangle.setName(config.name);
  rectangle.frame().x = config.x;
  rectangle.frame().y = config.y;
  rectangle.frame().width = config.width;
  rectangle.frame().height = config.height;
  return rectangle;
}

function createText(config) {
  var text = config.parent.addLayerOfType('text');
  text.name = config.name;
  text.stringValue = config.stringValue;
  text.fontPostscriptName = config.fontPostscriptName ;
  text.textColor = config.textColor;
  text.fontSize = config.fontSize;
  text.frame().x = config.x;
  text.frame().y = config.y;
  return text;
}

function isSelected(code) {
  return code === 1000
}
