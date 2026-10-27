# video.md

영상 룩 기준. 색 · 폰트는 `docs/design.md`에서만 가져온다. 움직임은 `docs/motion.md`.
캔버스: **16:9 · 1920×1080 · 30fps** (motion.md 30fps 환산표와 같다).
이 문서에 넣지 않는 것: 장면 순서 · 흐름 · 구성 규칙. 영상마다 레퍼런스와 비트 시트가 정한다.
숫자는 모두 1920×1080 화면에서의 px. 출처 칸에 "design.md"는 그 문서 값, "×2.8"은 Figma 값 × 2.8을 반올림한 것, "정함"은 design.md에 없어서 이 문서에서 처음 정한 값이다.

선택 (2026-10-25 사용자 답): 배경 **어두운** · 헤드라인 **단정하게** · 엔드 카드 **어두운**.

---

## 1. 텍스트 최소 크기

| 토큰 | 값 | 출처 |
|---|---|---|
| `video-text-min` | 31px | `Text/eyebrow` 11 ×2.8 |

- 영상에 보이는 모든 글자는 31px 이상이다. 이보다 작아지는 글자는 크게 키우거나 뺀다.
- 부품(`src/parts`)을 영상에 올릴 때도 같다. 5장의 `video-part-scale` 2.8이면 부품 안 가장 작은 글자(11px)가 31px이 되어 통과한다.
- 예외: 폰 화면 안의 글자(4장). 이미지 속 글자라 이 규칙 밖이다. 읽혀야 하는 내용은 부품으로 폰 밖에 키워서 보여준다.

---

## 2. 배경

| 토큰 | 값 | 가리키는 design.md 변수 | 쓰임 |
|---|---|---|---|
| `video-bg` | `#18191b` | `color-text` (`neutral-900`) | 본문 장면 바탕 |
| `video-bg-end` | `#18191b` | `color-text` (`neutral-900`) | 엔드 카드 바탕 (본문과 같은 색, 따로 바꿀 수 있게 이름만 분리) |

- 바탕은 한 가지 색이다. 그라데이션 · 무늬 · 그림자는 쓰지 않는다 (design.md에 없음).
- design.md에는 어두운 모드가 없다. 그래서 어두운 바탕은 `color-text` 값을 바탕으로 뒤집어 쓴 것이다.
- 로고는 어두운 바탕용 흰색 파일을 쓴다: `logo-logotype-white.svg` · `logo-symbol-white.svg` (design.md 6장).

---

## 3. 글자

폰트 `Pretendard`, 자간 0%, 굵기 400 · 600 · 700 (design.md 2 · 3장). 로컬 파일(A)을 쓰고 첫 프레임 전에 `document.fonts.ready`를 기다린다.

### 크기 (design.md Text 스타일 ×2.8)

| 토큰 | 크기 | 행간 | 굵기 | 원본 (Figma 크기 / 행간) |
|---|---|---|---|---|
| `video-display` | 78px | 95px | 700 | `Text/display` 28 / 34 |
| `video-title` | 67px | 90px | 600 | `Text/title` 24 / 32 |
| `video-compact` | 62px | 78px | 700 | `Text/compact-title` 22 / 28 |
| `video-section` | 56px | 78px | 700 | `Text/section` 20 / 28 |
| `video-heading` | 50px | 78px | 600 | `Text/heading` 18 / 28 |
| `video-body` | 42px | 67px | 400 | `Text/body` 15 / 24 |
| `video-list` | 42px | 62px | 600 | `Text/list-title` 15 / 22 |
| `video-label` | 39px | 56px | 600 | `Text/label` 14 / 20 |
| `video-caption` | 34px | 45px | 400 | `Text/caption` 12 / 16 |
| `video-eyebrow` | 31px | 45px | 600 | `Text/eyebrow` 11 / 16 |

- 헤드라인은 `video-display`(78px)가 가장 크다. "크고 꽉 차게"가 아니라 "단정하게"를 골랐으므로 ×2.8을 넘기는 크기는 만들지 않는다.

### 색 (어두운 바탕 위)

| 토큰 | 값 | 가리키는 design.md 변수 | 쓰임 |
|---|---|---|---|
| `video-text` | `#ffffff` | `color-bg` | 기본 글자 |
| `video-text-sub` | `#75777c` | `color-text-muted` | 보조 글자 |
| `video-text-accent` | `#edf1ff` | `color-primary-subtle` | 강조 글자 |

- `video-text-sub`는 바탕 대비가 약 3.9:1이라 31px 이상 큰 글자에만 쓴다. 본문 핵심 문장에는 쓰지 않는다.
- `color-primary` `#3759de`는 어두운 바탕 위에서 약 3.1:1이라 글자 색으로 쓰지 않는다. 면(채움)으로만 쓴다.

---

## 4. 폰 프레임

앱 화면(`src/screens` 5장, 390×844)을 영상 안에 보여주는 틀. design.md에 폰 틀 값이 없어 이 장의 숫자는 모두 "정함"이다.

| 토큰 | 값 | 출처 |
|---|---|---|
| `video-phone-scale` | 1.1 | 정함. 화면 390×844 → 429×928 |
| `video-phone-bezel` | 14px | 정함. 화면 바깥 테두리 두께 |
| `video-phone-radius` | 44px (화면) · 58px (바깥) | 정함. 바깥 = 화면 + bezel |
| `video-phone-body` | `#000000` | `color-illustration-000000` (design.md 부록) |
| `video-phone-edge` | `#75777c` 2px | `color-text-muted`. 어두운 바탕에서 틀 윤곽이 보이게 |

- 전체 크기 461×956. 1080 높이에 위아래 여백이 약 62px씩 남는다.
- 노치 · 버튼 · 반사는 그리지 않는다. 화면 이미지는 `01-home.png` ~ `05-assets.png` 그대로 넣는다 (780×1688 @2x를 429×928로 줄이면 선명하다).
- 화면 이미지를 고치거나 덧그리지 않는다.

---

## 5. parts

`src/parts`를 영상에 올릴 때의 크기와 모양. 부품 HTML은 고치지 않고 감싸기만 한다.

| 토큰 | 값 | 출처 |
|---|---|---|
| `video-part-scale` | 2.8 | ×2.8과 같은 배율로 통일 (글자가 1장의 `video-text-min`을 넘으려면 필요) |

| 부품 | Figma 크기 | 영상 크기 (×2.8) |
|---|---|---|
| `button-submit` | 350×44 | 980×123 |
| `skill-card-1~3` | 350×88 | 980×246 |
| `asset-card` | 350×74 | 980×207 |
| `stat-card` | 350×101 | 980×283 |
| `mission-card` | 350×253 | 980×708 |
| `badge-approved` | 108×32 | 302×90 |
| `brand-icon` | 98×98 | 274×274 |
| `logo` (logotype) | 149×19 | 417×53 |
| `logo` (symbol) | 100×100 | 280×280 |

- 부품 모서리 · 간격 · 선도 같은 배율이다 (`radius-card` 12 → 34, `space-content` 16 → 45 등). design.md Scale 값에 2.8을 곱한다.
- 부품은 흰 바탕이라 어두운 `video-bg` 위에서 그대로 떠 보인다. 바탕색을 덧입히지 않고 그림자도 넣지 않는다 (어두운 바탕에서 보이지 않음).
- `brand-icon`은 검정 바탕(`#000000`)이라 `video-bg`와 대비가 약하다. 둘레에 `video-phone-edge`와 같은 2px 선을 두른다.
- 가장 큰 부품(`mission-card` 980×708)도 1920×1080 안에 들어간다. 이보다 큰 부품은 만들지 않는다.
