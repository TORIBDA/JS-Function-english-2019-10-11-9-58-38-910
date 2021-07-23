function reverseString(message)
{
  // wirte your code here
  var reversedString = "";
  Array.from(message).forEach(function concatenateString(item)
    {reversedString = item + reversedString;}
    );
  return reversedString;
}
console.log(reverseString("hello"));