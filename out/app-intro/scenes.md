# scenes: app-intro

승인 1: B안 (사용자 선택)

입력: `brief.md`(5초 = 150f, 30fps, 1920×1080) · `refs.md`(36항목) · `docs/motion.md` · `docs/video.md` · `docs/design.md` 6장.
화면 5장(`src/screens/*.png`)과 부품(`src/parts/*.html`, `_check/*.png`)은 직접 열어 확인했다.

공통: 뼈대는 refs.md에 없으므로(레퍼런스 없음) 위치는 화면 이미지 기준으로 폰은 왼쪽, 부품은 폰 오른쪽에 세로 가운데 맞춤까지만 적고, 좌표는 비트 시트에서 정한다.

---

## 계산 규칙

- 움직임 길이 (motion.md 1~2장, 30fps): `motion-enter` 7f · `motion-exit` 5f · `motion-emphasis` 12f · `motion-fade` 3f · `motion-press` 2f · stagger 3f(7장).
- 머무는 시간 (4장): `hold-short` 15f · `hold-normal` 30f · `hold-long` 45f. 머무는 시간은 직전 움직임보다 짧지 않게 (15 ≥ 12 확인).
- 앞 화면 나감(`motion-exit`)과 다음 화면 들어옴(`motion-enter`)은 겹치지 않고 차례로 놓는다고 가정했다 (새 후보 1).
- 장면당 `motion-emphasis`는 한 번 (6장 4번). 폰 안 이미지는 그대로 쓰고 고치지 않는다 (video.md 4장).
- 바탕은 `video-bg`, 폰 프레임은 `video-phone-*` 5종, 부품 배율은 `video-part-scale`(2.8). 폰 틀은 장면 사이에 계속 보이고, 화면 이미지만 들고 난다.

---

## B. 미션에서 수익까지

폰은 왼쪽, 부품은 폰 오른쪽. 부품 크기(video.md 5장): mission-card 980×708, badge-approved 302×90, stat-card 980×283, brand-icon 274×274. 폰 461×956과 mission-card 980 폭을 나란히 놓으면 합 1441로 1920 안에 들어간다 (직접 확인한 `mission-card.png`는 카드 안 진행 바 · 버튼이 부품 오른쪽에서 읽힘).

| 장면 | 길이 | 구간 | 화면 / 부품 (실제 파일) | Semantic | 카메라 |
|---|---|---|---|---|---|
| 1 | 1.4초 · 42f | 0-42 | `03-mission.png` + `mission-card.html` | 폰 `motion-enter` 7f, 카드 `motion-enter` (stagger 3f 뒤) → 합 10f, 진행 바 `motion-emphasis` 12f, `hold-short` 15f, 나감 `motion-exit` 5f (폰 · 카드 같이) | 없음 |
| 2 | 1.3초 · 39f | 42-81 | `04-approved.png` + `badge-approved.html` | 폰 `motion-enter` 7f, 승인 순간 `motion-emphasis` 12f (04 승인과 배지 등장 둘 다, 곡선만 `ease-spring`), `hold-short` 15f, 나감 `motion-exit` 5f | 없음 |
| 3 | 1.4초 · 42f | 81-123 | `05-assets.png` + `stat-card.html` | 폰 `motion-enter` 7f, 카드 `motion-enter` (stagger 3f 뒤) → 10f, 숫자 바뀜: 카운트업 12f (`motion-400` 안, `ease-standard`, 7장), `hold-short` 15f, 나감 `motion-exit` 5f | 없음 |
| 4 (엔드) | 0.9초 · 27f | 123-150 | `brand-icon.html` (바탕 `video-bg-end`) | `motion-enter` 7f, `hold-short` 15f, `motion-exit` 5f | 없음 |

- 합: 42 + 39 + 42 + 27 = **150f**. 맞음.
- badge-approved 등장 결정: motion.md 3장 예외 문장대로 `motion-emphasis`(12f)의 곡선만 `ease-spring`이다. 3장 표의 `motion-enter`(7f)가 아니다. 04 승인 순간과 같은 12f 안에서 함께 일어나므로 장면 2의 길이와 합은 변하지 않는다. `ease-spring`은 이 두 곳(배지 등장 · 04 승인 순간)에만 쓰고 다른 곳에는 쓰지 않는다.
- 화면 선택: 01-home, 02-skills는 쓰지 않는다. 03-mission 속 카드와 부품 mission-card가 같은 내용이라 폰 안(작게)과 부품(크게)에 중복된다. 어느 쪽을 먼저 보일지는 비트 시트에서 정한다.
- 쓰는 Semantic 이름: `motion-enter`, `motion-exit`, `motion-emphasis`, `motion-fade`(숫자 바뀜 시작 3f는 카운트업 12f 안에 포함, 별도 길이를 더하지 않음).
- 반영 체크리스트: **26/36** = 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36.
- 미반영: 1~4 (button-submit · asset-card · skill-card 안 씀), 21~26 (이 안은 새 글자 · 흰 로고 파일 없음).

---

## 합 검토

| 안 | 합 | 상태 |
|---|---|---|
| B | 150f | 맞음 |

## 새 후보 (docs에 없어 묻는 것)

1. 화면 전환을 "나간 뒤 들어옴"(차례로)으로 계산했다. 겹치는 크로스 전환을 쓸지.
2. 참고: 부품 html 주석이 `src/patterns/*.html`을 가리키지만 `src/`에는 `patterns` 폴더가 없다 (screens · parts · assets만 있음). 영상에는 영향 없음.
