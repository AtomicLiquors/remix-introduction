import { parseHexcode } from "@/utils";

test('parseHexcode 테스트 : 6자리 & 3자리 & 그 외 자릿수 ', () => {
  const sixDigitSubject = "bg-[#ffcc99]"
  const threeDigitSubject = "bg-[#fc9]"

  const fiveDigitSubject = "bg=[#fffff]";

  const sixDigitResult = parseHexcode(sixDigitSubject);
  const threeDigitResult = parseHexcode(threeDigitSubject);
  const fiveDigitResult = parseHexcode(fiveDigitSubject);

  expect(sixDigitResult).toBe('#ffcc99');
  expect(threeDigitResult).toBe('#ffcc99');
  expect(sixDigitResult).toEqual(threeDigitResult);

  expect(fiveDigitResult).toBe('#999999');
});