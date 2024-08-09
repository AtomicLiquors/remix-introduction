import { parseHexcode } from "@/utils";

test('6자리 & 3자리 hexcode 테스트', () => {
  const sixDigitSubject = "bg-[#ffcc99]"
  const threeDigitSubject = "bg-[#fc9]"

  const sixDigitResult = parseHexcode(sixDigitSubject);
  const threeDigitResult = parseHexcode(threeDigitSubject);

  expect(sixDigitResult).toBe('#ffcc99');
  expect(threeDigitResult).toBe('#ffcc99');
  expect(sixDigitResult).toEqual(threeDigitResult);
});