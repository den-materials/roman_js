var romanize = function (number) {
  var result = '';
  var mappings = [
    {arabic: 1000, roman: 'M'},
    {arabic: 900, roman: 'CM'},
    {arabic: 500, roman: 'D'},
    {arabic: 400, roman: 'CD'},
    {arabic: 100, roman: 'C'},
    {arabic: 90, roman: 'XC'},
    {arabic: 50, roman: 'L'},
    {arabic: 40, roman: 'XL'},
    {arabic: 10, roman: 'X'},
    {arabic: 9, roman: 'IX'},
    {arabic: 5, roman: 'V'},
    {arabic: 4, roman: 'IV'},
    {arabic: 1, roman: 'I'}
  ];

  // Start with the highest roman numeral,
  //   if our comparison number is bigger
  //      concatenate this Roman numeral to the result and
  //      subtract the arabic equivalent from our comparison number
  for (var i = 0; i < mappings.length; i++) {
    var mapping = mappings[i];
    while (number >= mapping.arabic) {
      result += mapping.roman;
      number -= mapping.arabic;
    }
  }

  return result;
}
