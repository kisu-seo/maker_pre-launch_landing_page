# Typography Guide

## 폰트 패밀리 (Font Family)
- **Manrope**

## 텍스트 프리셋 (Text Presets)
| 프리셋 (Preset) | 굵기 (Weight) | 크기 (Size) | 줄 간격 (Line Height) | 자간 (Letter Spacing) |
| :--- | :--- | :--- | :--- | :--- |
| Text Preset 1 | ExtraBold (800) | 48px | 120% | 0px |
| Text Preset 1 (Mobile) | ExtraBold (800) | 32px | 120% | 0px |
| Text Preset 2 | ExtraBold (800) | 40px | 140% | 0px |
| Text Preset 3 | ExtraBold (800) | 32px | 140% | 0px |
| Text Preset 4 | ExtraBold (800) | 18px | 140% | 0px |
| Text Preset 5 | Medium (500) | 15px | 160% | 0px |
| Text Preset 6 | ExtraBold (800) | 15px | 140% | 0px |
| Text Preset 7 | Medium (500) | 12px | 160% | 0px |

<details>
<summary><b>Tailwind CSS 폰트 설정 (tailwind.config.js) 복사하기</b></summary>
<br>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // 기본 폰트로 Manrope 설정
      },
      fontSize: {
        preset1: ['48px', { lineHeight: '120%', letterSpacing: '0px', fontWeight: '800' }],
        'preset1-mobile': ['32px', { lineHeight: '120%', letterSpacing: '0px', fontWeight: '800' }],
        preset2: ['40px', { lineHeight: '140%', letterSpacing: '0px', fontWeight: '800' }],
        preset3: ['32px', { lineHeight: '140%', letterSpacing: '0px', fontWeight: '800' }],
        preset4: ['18px', { lineHeight: '140%', letterSpacing: '0px', fontWeight: '800' }],
        preset5: ['15px', { lineHeight: '160%', letterSpacing: '0px', fontWeight: '500' }],
        preset6: ['15px', { lineHeight: '140%', letterSpacing: '0px', fontWeight: '800' }],
        preset7: ['12px', { lineHeight: '160%', letterSpacing: '0px', fontWeight: '500' }],
      }
    }
  }
}
```

</details>
