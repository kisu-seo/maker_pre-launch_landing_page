# Spacing Guide

## 여백 크기 (Spacing Scale)
| 이름 (Name) | 픽셀 (Pixels) |
| :--- | :--- |
| spacing-0 | 0 |
| spacing-025 | 2px |
| spacing-050 | 4px |
| spacing-075 | 6px |
| spacing-100 | 8px |
| spacing-125 | 10px |
| spacing-150 | 12px |
| spacing-200 | 16px |
| spacing-250 | 20px |
| spacing-300 | 24px |
| spacing-400 | 32px |
| spacing-500 | 40px |
| spacing-600 | 48px |
| spacing-800 | 64px |
| spacing-1000 | 80px |
| spacing-1200 | 96px |
| spacing-1400 | 112px |
| spacing-1600 | 128px |
| spacing-1800 | 144px |
| spacing-2000 | 160px |

<details>
<summary><b>Tailwind CSS 여백 설정 (tailwind.config.js) 복사하기</b></summary>
<br>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      spacing: {
        '0': '0',
        '025': '2px',
        '050': '4px',
        '075': '6px',
        '100': '8px',
        '125': '10px',
        '150': '12px',
        '200': '16px',
        '250': '20px',
        '300': '24px',
        '400': '32px',
        '500': '40px',
        '600': '48px',
        '800': '64px',
        '1000': '80px',
        '1200': '96px',
        '1400': '112px',
        '1600': '128px',
        '1800': '144px',
        '2000': '160px',
      }
    }
  }
}
```

</details>
