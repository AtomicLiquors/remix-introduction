const errorDefaultHex = "#999999";

function getLuminance(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const a = [r, g, b].map((val) =>
    val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  );

  const luminance = a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  return luminance;
}

/* 3자리 또는 6자리 HexCode를 포함한 Tailwind 클래스명에 대응 가능. */
export function parseHexcode(text: string): string {
  const match = text.match(/#([a-fA-F0-9])+/);
  if (!match) {
    console.log(`invalid hex code : ${text}`);
    return errorDefaultHex;
  }

  let hex = match[0];

  if (hex.length === 4)
    hex = "#" + hex[1].repeat(2) + hex[2].repeat(2) + hex[3].repeat(2);
  else if (hex.length !== 7) {
    console.log(`invalid hex code : ${text}`);
    hex = errorDefaultHex;
  }

  return hex;
}

export function isHexcodeLight(text: string) {
  const hex = parseHexcode(text);
  return getLuminance(hex) > 0.5;
}
