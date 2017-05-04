<!--9:05 10 minutes -->

# Romanize!

## Objective
Create a function that accepts an integer as an argument. It should then convert that number into its [roman numeral](https://en.wikipedia.org/wiki/Roman_numerals) equivalent.

```
2499 = MMCDXCIX
543 = DXLIII
13 = XIII
```

### Specs? (aka What's this SpecRunner.html?)

If you open `SpecRunner.html` in your browser, you can see that there are 19 specifications, 8 pass and 11 fail.  These specifications (or tests) indicate how your code should perform.  They provide examples of what output is expected for various inputs. Eight specs already pass, because the starter code supports them.

Check out `src/Roman.js`.  You can see that the specs are expecting a function called "romanize", that accepts an Arabic numeral and returns a Roman numeral.

Click on "Spec List" in the browser (`SpecRunner.html`) to see a listing of the specs. See that the numbers below 10 are passing (green)?  The specs live in spec/RomanSpec.js.

You may find `SpecRunner.html` helpful as you refactor your code to support the next range of Roman Numerals.

**Pro-Tip:** Comment out the failing specs, leaving only a single failing spec.  Just focus on one requirement at a time.

**Pro-Tip:** Beware of infinite recursion and infinite loops.  If your `SpecRunner.html` takes a very long time to load or shows the Chrome Kill/Wait dialog, you probably have something infinite in your code.

### Pairing!

Let's do a quick fist-to-five.  Pair with someone who is within one number of you.  Ideally, pair with someone you've never worked with before!

<!--9:15 5 minutes -->

### Pseudo Code!

We recommend you pseudocode for a few minutes. Start writing down/typing how to break this problem down.

### Stating the obvious

You are looking for an algorithm that will calculate a Roman numeral.  Simply creating a massive conversion chart that includes all numbers is, well, simply painful.

<!--9:20 20 minutes Code out solution -->

### Bonus

- How clear is your code?  Is it obvious where you support the subtraction cases (IV, IX, etc)?  Does your code reflect your vision of how you, personally, calculate Roman Numerals?
- Create a web page that converts roman numerals
