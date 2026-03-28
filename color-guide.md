# Style Guide - Colors

## Neutral
| 이름 (Name) | HEX | RGB | HSL |
| :--- | :--- | :--- | :--- |
| Neutral 900 | `#080C20` | `8, 12, 32` | `230, 60%, 8%` |
| Neutral 400 | `#777F98` | `119, 127, 152` | `227, 14%, 53%` |
| Neutral 0 | `#FFFFFF` | `255, 255, 255` | `0, 0%, 100%` |

## Cyan
| 이름 (Name) | HEX | RGB | HSL |
| :--- | :--- | :--- | :--- |
| Cyan 400 | `#3EE9E5` | `62, 233, 229` | `178, 81%, 58%` |

## Red
| 이름 (Name) | HEX | RGB | HSL |
| :--- | :--- | :--- | :--- |
| Red 400 | `#FF2965` | `255, 41, 101` | `346, 100%, 58%` |

## Blue
| 이름 (Name) | HEX | RGB | HSL |
| :--- | :--- | :--- | :--- |
| Blue 800 | `#093F68` | `9, 63, 104` | `206, 85%, 22%` |
| Blue Gray 500 | `#6B8CA4` | `107, 140, 164` | `204, 26%, 53%` |

<details>
<summary><b>Tailwind CSS 설정 (tailwind.config.js) 복사하기</b></summary>
<br>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral
        neutral900: '#080C20',
        neutral400: '#777F98',
        neutral0: '#FFFFFF',
        // Cyan
        cyan400: '#3EE9E5',
        // Red
        red400: '#FF2965',
        // Blue
        blue800: '#093F68',
        blueGray500: '#6B8CA4',
      }
    },
  },
  plugins: [],
}
```

</details>
