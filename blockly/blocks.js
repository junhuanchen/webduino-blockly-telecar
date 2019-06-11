Blockly.Blocks['telecar_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("遥控车")
        .appendField(new Blockly.FieldVariable("telecar"), "telecar")
        .appendField(new Blockly.FieldDropdown([["前进 ↑","N"], ["后退 ↓","S"], ["左转 ←","W"], ["右转 →","E"]]), "move");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['telecar_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("连接到")
        .appendField(new Blockly.FieldTextInput("ws://192.168.30.139"), "address")
        .appendField("的遥控车");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};