function romanize(arabic_numeral){
  roman_numeral = "";
  var matches = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X"
  };
  while (arabic_numeral > 0) {
    if (arabic_numeral > 100) {
      roman_numeral += "C";
      arabic_numeral -= 100;
    }
    else if (arabic_numeral > 90) {
      roman_numeral += "XC";
      arabic_numeral -= 90;
    }
    else if (arabic_numeral > 50) {
      roman_numeral += "L";
      arabic_numeral -= 50;
    }
    else if (arabic_numeral > 40) {
      roman_numeral += "XL";
      arabic_numeral -= 40;
    }
    else if (arabic_numeral > 10) {
      roman_numeral += "X";
      arabic_numeral -= 10;
    } else{
      roman_numeral += matches[arabic_numeral];
      arabic_numeral -=  arabic_numeral;
    }
  }
  return roman_numeral;  
}
