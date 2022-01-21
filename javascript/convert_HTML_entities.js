/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List") should return the string Schindler&apos;s List.

convertHTML("<>") should return the string &lt;&gt;.

convertHTML("abc") should return the string abc. */

/*  & -> &amp;
    < -> &lt;
    > -> &gt;
    " -> &quot;
    ' -> &apos;
*/

function convertHTML(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "&":
            result = result + "&amp;";
            break;
        case "<":
            result = result + "&lt;";
            break;
        case ">":
              result = result + "&gt;";
              break;
        case '"':
              result = result + "&quot;";
              break;
        case "'":
              result = result + "&apos;";
              break;
        default:
              result = result + str[i];
              break;
      }
  }

  return result;
}

console.log(convertHTML("Dolce & Gabbana"));