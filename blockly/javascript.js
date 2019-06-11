
Blockly.JavaScript['telecar_move'] = function(block) {
  var variable_telecar = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('telecar'), Blockly.Variables.NAME_TYPE);
  var dropdown_move = block.getFieldValue('move');
  // TODO: Assemble JavaScript into code variable.
  var code = '{0};\n'.format(telecar_move(variable_telecar, dropdown_move));
  return code;
};

Blockly.JavaScript['telecar_create'] = function(block) {
  var text_address = block.getFieldValue('address');
  // TODO: Assemble JavaScript into code variable.
  var code = telecar_create(text_address);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};