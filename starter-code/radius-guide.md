# Radius Guide

## 모서리 둥글기 크기 (Border Radius Scale)
| 이름 (Name) | 픽셀 (Pixels) |
| :--- | :--- |
| radius-0 | 0 |
| radius-4 | 4px |
| radius-6 | 6px |
| radius-8 | 8px |
| radius-10 | 10px |
| radius-12 | 12px |
| radius-16 | 16px |
| radius-20 | 20px |
| radius-24 | 24px |
| radius-full | 999px |

<details>
<summary><b>Tailwind CSS 모서리 둥글기 설정 (tailwind.config.js) 복사하기</b></summary>
<br>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        '0': '0',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        'full': '999px',
      }
    }
  }
}
```

</details>
