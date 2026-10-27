# motion.md

출처: Carbon Design System, Motion overview (https://carbondesignsystem.com/elements/motion/overview/) · 2026-10-25
레퍼런스는 영상이 아니라 문서(모션 시스템)다. 값은 문서에서 우리 토큰 이름으로 옮겼고, "시점" 칸에는 문서의 절 이름을 적었다.
성격: **경쾌** (사용자 선택). 근거: Carbon의 Expressive 곡선을 기본으로 쓴다.
규칙: 이 문서에 있는 값만 쓴다. 없는 숫자가 필요하면 7장 "새 후보"로 물어본다.
이 문서에 넣지 않는 것: 색 · 글자 · 로고, 장면 순서 · 화면 배치(영상마다 비트 시트로).

---

## 1. Primitives

### Duration 6단계 (`motion-*`, 단위 ms)

이름은 값(ms)으로 짓는다. 기존 `space-4` · `size-44`와 같은 방식.

| Primitive | ms | 30fps 환산 | Carbon 이름 | 시점 (Carbon 문서) |
|---|---|---|---|---|
| `motion-70` | 70 | 2f | `duration-fast-01` | Duration > Duration tokens |
| `motion-110` | 110 | 3f | `duration-fast-02` | Duration > Duration tokens |
| `motion-150` | 150 | 5f | `duration-moderate-01` | Duration > Duration tokens |
| `motion-240` | 240 | 7f | `duration-moderate-02` | Duration > Duration tokens |
| `motion-400` | 400 | 12f | `duration-slow-01` | Duration > Duration tokens |
| `motion-700` | 700 | 21f | `duration-slow-02` | Duration > Duration tokens |

- 프레임 환산은 30fps 기준이다 (사용자가 따로 말하지 않아 알아서 정함, 바뀌면 이 표만 고친다).
- 위 6개 외의 길이는 쓰지 않는다. Carbon 값을 그대로 가져왔고, 경쾌함은 아래 곡선과 2장 선택으로 만든다.

### 곡선 3개 (`ease-*`, Expressive 값)

| Primitive | cubic-bezier | Carbon 이름 | 시점 (Carbon 문서) |
|---|---|---|---|
| `ease-standard` | `0.4, 0.14, 0.3, 1` | `motion(standard, expressive)` | Easing > Standard easing |
| `ease-entrance` | `0, 0, 0.3, 1` | `motion(entrance, expressive)` | Easing > Summary on easing |
| `ease-exit` | `0.4, 0.14, 1, 1` | `motion(exit, expressive)` | Easing > Exit easing |
| `ease-spring` | `0.34, 1.56, 0.64, 1` | 없음 (우리 값, 끝에서 살짝 넘쳤다 돌아옴) | Carbon 문서에 없음. 2026-10-25 사용자 승인 |

- 쓰임: standard = 처음부터 끝까지 보이는 요소가 움직일 때. exit = 요소가 화면에서 사라질 때. entrance = 문서에 쓰임 설명이 없어서 "화면에 들어올 때"로 우리가 정했다.
- Productive 곡선(`0.2,0,0.38,0.9` · `0,0,0.38,0.9` · `0.2,0,1,0.9`)은 이 서비스에서 쓰지 않는다. Style > Productive motion 참고.

---

## 2. Semantic

`semantic` 컬렉션에 두는 이름. 색과 같이 Semantic을 거쳐서 쓰고 Primitive를 직접 쓰지 않는다.

| 변수 | 길이 | 곡선 | 쓰임 | 시점 (Carbon 문서) |
|---|---|---|---|---|
| `motion-press` | `motion-70` | `ease-standard` | 버튼 · 토글 눌림 | Duration tokens: fast-01 "buttons and toggles" |
| `motion-fade` | `motion-110` | `ease-standard` | 페이드, 상태 문구 바뀜 | Duration tokens: fast-02 "fades" |
| `motion-enter` | `motion-240` | `ease-entrance` | 카드 · 배지 등장, 토스트 | Duration tokens: moderate-02 "expansion, toasts" |
| `motion-exit` | `motion-150` | `ease-exit` | 사라짐, 닫힘 | Exit easing "closing a modal or toaster" + moderate-01 |
| `motion-emphasis` | `motion-400` | `ease-standard` | 큰 확장, 중요한 순간(승인 완료) | Duration tokens: slow-01 "large expansions, important" |

- `motion-exit`의 길이 150은 Carbon이 정해 준 값이 아니라 우리가 고른 조합이다. 문서에는 exit 전용 길이가 없다.
- `motion-700`은 Semantic이 없다 (배경 딤 용도, Duration tokens: slow-02). 필요해지면 7장으로 올린다.
- 경쾌 성격: 눌림 · 등장에도 Expressive 곡선을 쓴다. 문서는 Expressive를 "significant moments, sparingly"로 안내하므로 7장 첫 항목에서 확인받는다.

---

## 3. Pattern

부품 · 화면별 연결. 파일 이름은 `design.md` 6장과 같다. 이 장은 "무엇을 어떤 Semantic으로"만 적고, 위치 · 순서는 쓰지 않는다.

### src/parts

| 파일 | 움직임 | Semantic |
|---|---|---|
| `button-submit.html` | 눌림 | `motion-press` |
| `button-submit.html` | 문구 4개(`data-state`) 바뀜 | `motion-fade` |
| `asset-card.html` | 상태 4개(`data-state`) 바뀜 | `motion-fade` |
| `skill-card-1~3.html` | 등장 | `motion-enter` |
| `mission-card.html` | 카드 등장 | `motion-enter` |
| `mission-card.html` | 진행 바 채워짐 | `motion-emphasis` |
| `stat-card.html` | 카드 등장 | `motion-enter` |
| `stat-card.html` | 숫자 바뀜 | `motion-fade` (카운트업은 7장) |
| `badge-approved.html` | 등장 | `motion-enter` |
| `brand-icon.html` · `logo.html` | 등장 | `motion-enter` |
| 모든 부품 | 사라짐 | `motion-exit` |

### src/screens

| 파일 | 움직임 | Semantic |
|---|---|---|
| `01-home` ~ `05-assets` | 화면이 들어옴 | `motion-enter` |
| `01-home` ~ `05-assets` | 앞 화면이 나감 | `motion-exit` |
| `04-approved.png` | 승인 완료 순간 | `motion-emphasis` |

- 시점 근거: 위 표의 Semantic이 가진 Carbon 시점을 그대로 따른다 (2장). Pattern 자체는 Carbon에 없고 우리가 연결한 것이다.
- 예외 하나: `badge-approved` 등장과 `04-approved` 승인 완료 순간은 `motion-emphasis`의 곡선만 `ease-spring`으로 바꾼다. 다른 곳에는 spring을 쓰지 않는다.
- 하나의 요소가 한 번에 쓰는 Semantic은 하나다. 눌림 중에 `motion-enter`를 겹치지 않는다.

---

## 4. 머무는 시간

움직임이 끝난 뒤 멈춰 있는 시간. Carbon 문서에 값이 없어 사용자가 정했다 (2026-10-25).

| 이름 | 길이 | 30fps | 쓰임 | 근거 |
|---|---|---|---|---|
| `hold-short` | 500ms | 15f | 라벨 · 숫자 한 개 | 사용자 지정 |
| `hold-normal` | 1000ms | 30f | 카드 하나, 문장 한 줄 | 사용자 지정 |
| `hold-long` | 1500ms | 45f | 완료 · 승인처럼 읽어야 하는 순간 | 알아서: normal의 1.5배 |

- 머무는 시간은 움직임 길이보다 짧게 잡지 않는다. 글자 수에 따라 어느 `hold-*`를 쓸지는 영상마다 비트 시트에서 고른다.

---

## 5. 카메라

화면 전체를 움직이는 줌 · 팬. **Carbon 문서에 값이 없다.** (카메라는 문서에 없는 개념이다.)

| 항목 | 규칙 | 상태 |
|---|---|---|
| 기본 | 고정. 카메라는 움직임이 아니라 강조에만 쓴다 | 확정 |
| 길이 | `motion-400` 또는 `motion-700`만 쓴다 | 확정 (1장 안) |
| 곡선 | `ease-standard` (화면이 처음부터 끝까지 보임) | 확정 (Standard easing 쓰임) |
| 줌 비율 · 팬 거리 | 줌 1.0 → 1.08배 이내, 팬은 화면 폭의 5% 이내 | 알아서 (Carbon에 없음) |
| 카메라 + 요소 동시 움직임 | 요소는 `motion-press` · `motion-fade`만 허용 | 확정 (겹침 방지, 우리 규칙) |

---

## 6. 쓰는 법

1. 부품은 CSS 변수 `--motion-press` 같은 Semantic 이름으로 부른다. 숫자를 직접 쓰지 않는다.
2. 길이는 CSS `transition-duration`, 곡선은 `transition-timing-function`에 Primitive 값 그대로.
3. 영상으로 렌더링할 때는 ms를 30fps 환산표로 바꾼다.
4. 한 장면에서 Semantic이 늘어나면 `motion-emphasis`는 장면당 한 번만 쓴다 (Style > Expressive "sparingly").

---

## 7. 새 후보 · 결정 기록

2026-10-25 사용자 답: "Expressive, 0.5s/1s, spring, 나머지 알아서".

| 항목 | 결정 | 누가 |
|---|---|---|
| 눌림 · 등장에도 Expressive 곡선 | 예. 1장 곡선 그대로 | 사용자 |
| `hold-short` · `hold-normal` | 500ms · 1000ms | 사용자 |
| 배지 등장 튕김 | `ease-spring`, 승인 완료 두 곳만 (3장 예외) | 사용자 + 곡선 값은 알아서 |
| 목록 등장 간격(stagger) | `motion-110` (3f). 새 길이를 만들지 않음 | 알아서 |
| 카운트업 길이 | `motion-400` 안에서 끝냄, 곡선 `ease-standard` | 알아서 |
| `hold-long` | 1500ms | 알아서 |
| 카메라 줌 · 팬 | 5장 | 알아서 |
| 영상 fps | 30 | 알아서 |
| `motion-700` Semantic | 만들지 않음. 배경 딤이 필요해지면 다시 묻는다 | 알아서 |

앞으로 이 문서에 없는 숫자가 필요하면 여기에 "새 후보"로 올려 묻는다.
