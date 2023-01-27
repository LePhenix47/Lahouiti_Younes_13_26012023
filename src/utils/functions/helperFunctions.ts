/**

 *Function that prints out a message in the console but with a simpler syntax
 */
export function log(...messages: any[]): void {
  return console.log(messages);
}

/**
 *
 *Function that formats text in 3 cases: lowercase, uppercase and titlecase
 */
export function formatText(string: string, option: string): string | never {
  let formattedOption: string = option.toLowerCase().trim();

  switch (formattedOption) {
    case "lowercase": {
      return string.toLowerCase();
    }

    case "uppercase": {
      return string.toUpperCase();
    }

    case "titlecase": {
      let stringArray = string.split(" ");
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] =
          stringArray[i].substring(0, 1).toUpperCase() +
          stringArray[i].slice(1).toLowerCase();
      }
      stringArray = stringArray.concat();
      return stringArray.toString();
    }

    default: {
      throw new Error(
        "Formatting text error: unknown option passed in argument"
      );
    }
  }
}

/**
 *Funtion that replaces letters with accents by their "non-accented" counter-part
 *ex: "crème brûlée" → "creme brulee"
 */
export function normalizeString(string: string): string | undefined {
  if (typeof string !== "string") {
    log("Value passed in argument is not a string !");
    return;
  }
  return string
    .normalize("NFD") //returns the unicode NORMALIZATION FORM of the string using a canonical DECOMPOSITION (NFD).
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 *Splits a string on a character, word or regular expression
 *ex: Split on every space → "hello world" → ["hello", "world"]
 */
export function splitString(
  string: string,
  character: string | RegExp
): string[] {
  return string.split(character);
}

/**
 *Split a string into an array separating each word with an uppercase on it
 *ex: "testColor" → ["test","Color"] → ["test", "color"] → "test-color"
 */
export function splitOnUpperCase(string: string): string {
  //Regex for all the uppercase letters
  const uppercaseLettersREGEX: RegExp = /(?=[A-Z])/;

  let newString: string[] = splitString(string, uppercaseLettersREGEX);

  for (let i = 0; i < newString.length; i++) {
    newString[i] = formatText(newString[i], "lowercase");
  }

  let formattedString: string = newString.reduce(
    (accumulated, currentValue) => {
      return accumulated + "-" + currentValue;
    }
  );

  return formattedString;
}

/**
 *Retrieves the values of an object inside an array
 */
export function getObjectValues(object: object): any[] {
  const objectIsDefined: boolean = !!object;

  if (objectIsDefined) {
    return Object.values(object);
  }
  return [];
}

/**
 *Retrieves the properties of an object inside an array
 */
export function getObjectProperties(object: object): any[] {
  const objectIsDefined: boolean = !!object;

  if (objectIsDefined) {
    return Object.keys(object);
  }
  return [];
}

/**
 *Returns a string with a '%' in the end of the number inputted
 */
export function toPercent(number: number): string {
  return number.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
}

/**
 *Formats a number by separating every thousand with a format from the user's locale
 *example:
 *The user lives in Italy and we have: const number = 1_930 → returns "1.930"
 *If they lived in the US and we have: const number = 1_930 → returns "1,930"
 */
export function numberSeparatorLocale(number: number): string {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat(undefined, {
    maximumSignificantDigits: 3,
  });

  return formatter.format(number);
}
