function reverseString(message)
{
  // wirte your code here
  var reversedString = "";
  Array.from(message).forEach(function concatenateString(item)
    {reversedString = item + reversedString;}
    );
  return reversedString;
}

function palindrome(s) {
  return s == reverseString(s);
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true

