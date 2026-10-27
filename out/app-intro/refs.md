# refs: app-intro

입력: `out/app-intro/brief.md`. 레퍼런스(영상 · 문서 · 이미지) 없음, `references/` 비어 있음.
레퍼런스 관찰값이 없으므로 시점 칸은 없다. 아래는 모두 docs의 참조 위치와 항목명이다 (값은 적지 않았다).

## 뼈대

- 레퍼런스에서 가져온 뼈대 없음. 뼈대 주장이 하나도 없어서 사용자에게 물을 일도 없다.
- 장면 순서 · 화면 선택(5화면 중 어느 것, 3안)은 director 몫이다.

## 카메라

- 참조: `motion.md` 5장 (기본 고정, 강조에만 사용, 길이·곡선·비율 한도).
- 레퍼런스 카메라 관찰 없음. 쓸지는 director가 정하고, 쓰면 5장 한도 안에서만.

## 전환

- 참조: `motion.md` 3장 src/screens 표의 "화면이 들어옴" · "앞 화면이 나감" 두 줄. 체크리스트 12~13번.

## 글자 배치

- 참조: `video.md` 1장(최소 크기), 3장(크기 · 색 토큰). 체크리스트 17, 22~26번.
- 레퍼런스 글자 배치 관찰 없음. 위치 · 순서는 정하지 않는다.

## 속도 길이

- 참조 토큰: `motion.md` 1장 `motion-*` · `ease-*`, 2장 Semantic 5개, 4장 `hold-*`.
- 전체 길이는 brief 기준 5초(150f). 토큰 이름 매핑은 체크리스트 1~16번 각 줄의 출처 장에 있다.

## 체크리스트

반영률 = (영상에 반영된 항목 수) / (전체 항목 수). 항목 하나 = 확인할 것 하나.

### A. motion.md 3장 Pattern

| # | 항목 | 출처 |
|---|---|---|
| 1 | button-submit 눌림에 눌림용 Semantic | motion.md 3장 > src/parts |
| 2 | button-submit 문구 4개 바뀜에 페이드용 Semantic | motion.md 3장 > src/parts |
| 3 | asset-card 상태 4개 바뀜에 페이드용 Semantic | motion.md 3장 > src/parts |
| 4 | skill-card-1~3 등장에 등장용 Semantic | motion.md 3장 > src/parts |
| 5 | mission-card 카드 등장에 등장용 Semantic | motion.md 3장 > src/parts |
| 6 | mission-card 진행 바 채워짐에 강조용 Semantic | motion.md 3장 > src/parts |
| 7 | stat-card 카드 등장에 등장용 Semantic | motion.md 3장 > src/parts |
| 8 | stat-card 숫자 바뀜에 페이드용 Semantic (카운트업은 7장 결정 따름) | motion.md 3장 > src/parts, 7장 |
| 9 | badge-approved 등장에 등장용 Semantic | motion.md 3장 > src/parts |
| 10 | brand-icon · logo 등장에 등장용 Semantic | motion.md 3장 > src/parts |
| 11 | 부품이 사라질 때 사라짐용 Semantic | motion.md 3장 > src/parts (모든 부품) |
| 12 | 화면이 들어올 때 등장용 Semantic | motion.md 3장 > src/screens |
| 13 | 앞 화면이 나갈 때 사라짐용 Semantic | motion.md 3장 > src/screens |
| 14 | 04-approved 승인 완료 순간에 강조용 Semantic | motion.md 3장 > src/screens |
| 15 | 3장 예외: spring 곡선은 badge-approved 등장과 04-approved 승인 완료 두 곳에만 | motion.md 3장 마지막 목록(예외) |
| 16 | 한 요소는 한 번에 Semantic 하나만 (눌림 중 등장 겹침 없음) | motion.md 3장 마지막 목록 |

### B. video.md 1~5장

| # | 항목 | 출처 |
|---|---|---|
| 17 | 영상에 보이는 모든 글자가 최소 크기 토큰 이상 | video.md 1장 |
| 18 | 1장 예외: 폰 화면 안 글자는 규칙 밖, 읽혀야 하는 내용은 폰 밖 부품으로 | video.md 1장 |
| 19 | 바탕에 `video-bg`(엔드 카드는 `video-bg-end`) 사용 | video.md 2장 표 |
| 20 | 바탕 한 색, 그라데이션 · 무늬 · 그림자 없음 | video.md 2장 |
| 21 | 어두운 바탕용 흰색 로고 파일 사용 | video.md 2장, design.md 6장 |
| 22 | 폰트 Pretendard, 굵기 세 가지, 로컬 파일 사용, 첫 프레임 전 `document.fonts.ready` 대기 | video.md 3장 머리말 |
| 23 | 글자 크기를 3장 크기 토큰 표의 토큰으로만 지정 | video.md 3장 > 크기 |
| 24 | 헤드라인은 `video-display`를 넘지 않음 (단정하게) | video.md 3장 크기 아래 설명 |
| 25 | 글자 색을 `video-text` · `video-text-sub` · `video-text-accent` 중에서만 | video.md 3장 > 색 |
| 26 | `video-text-sub`는 큰 글자에만, `color-primary`는 글자색으로 쓰지 않음 | video.md 3장 > 색 아래 설명 |
| 27 | 폰 프레임에 `video-phone-*` 토큰 5종(scale · bezel · radius · body · edge) 사용 | video.md 4장 표 |
| 28 | 화면 이미지를 그대로 넣음 (수정 · 덧그림 없음, 노치 · 버튼 · 반사 없음) | video.md 4장 아래 설명 |
| 29 | 부품 배율에 `video-part-scale` 사용 | video.md 5장 표 |
| 30 | 부품 모서리 · 간격 · 선도 같은 배율 | video.md 5장 아래 설명 |
| 31 | 부품에 바탕색 덧입힘 없음, 그림자 없음 | video.md 5장 아래 설명 |
| 32 | brand-icon 둘레에 `video-phone-edge`와 같은 선 | video.md 5장 아래 설명 |
| 33 | 부품이 1920×1080 안에 들어감 (가장 큰 부품 크기를 넘지 않음) | video.md 5장 아래 설명 |

### C. design.md 6장

| # | 항목 | 출처 |
|---|---|---|
| 34 | 영상에 쓰는 부품이 src/parts 목록의 파일 이름과 일치 | design.md 6장 > src/parts |
| 35 | 영상에 쓰는 화면이 src/screens 목록의 5개 파일 중에서만, 이미지 원본 그대로 | design.md 6장 > src/screens |
| 36 | 캐릭터 · 로고 등 src/assets 원본은 감싸기만 하고 고치지 않음 | design.md 6장 > src/assets |

항목 수: 36개 (A 16 + B 17 + C 3).

## 새 후보

- 없음. 레퍼런스 관찰값이 없어 docs 토큰으로 옮길 값이 생기지 않았다.
- 참고(결정 아님): brief 메모대로 5초에 5화면은 많다. `hold-*`(motion.md 4장) 합과 150f의 관계는 director가 비트 시트에서 확인한다.
