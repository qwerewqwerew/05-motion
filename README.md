# 05-motion 모션 하네스

초보자가 요청해도 영상 룩이 매번 같게 나오도록 만든 작업 틀이에요. Claude Code에서 **"모션 만들자"**라고 말하면 시작해요 (스킬 `make-video`).

## 최종 산출물: `app-intro`

앱 5화면(홈 · 스킬 · 미션 · 승인 · 자산)을 소개하는 5초 영상이에요. 1920×1080, 30fps, 150프레임.

![app-intro 미리보기](out/app-intro/preview.gif)

▶ 원본 영상: [`out/app-intro/video.mp4`](out/app-intro/video.mp4)
(미리보기 GIF는 960px · 15fps로 줄인 버전이에요.)

### 스냅보드 (장면별 정지 화면)

| 장면 1 · 미션 | 장면 2 · 승인 |
|---|---|
| ![scene-1](out/app-intro/snapboard/scene-1.png) | ![scene-2](out/app-intro/snapboard/scene-2.png) |
| **장면 3 · 자산** | **장면 4 · 브랜드** |
| ![scene-3](out/app-intro/snapboard/scene-3.png) | ![scene-4](out/app-intro/snapboard/scene-4.png) |

### critic 판정

| 단계 | 결과 |
|---|---|
| 스냅보드 | 레퍼런스 반영 17/23 = 73.9% → 사용자 예외 승인 |
| 영상 | **통과** · docs에 없는 숫자 0 · 화면에 없는 UI 0 · 레퍼런스 반영 30/36 = 83.3% |

자세한 내용: [`brief.md`](out/app-intro/brief.md) · [`refs.md`](out/app-intro/refs.md) · [`scenes.md`](out/app-intro/scenes.md) · [`verdict.md`](out/app-intro/verdict.md)

## 한 편의 흐름

```
BRIEF → 레퍼런스 정리(art-director) → 장면표(director) → 승인 1
      → 스냅보드(builder) → critic 판정 → 승인 2
      → 영상(builder) → critic 판정 → 완료 보고
```

자세한 순서는 [`.claude/skills/make-video/SKILL.md`](.claude/skills/make-video/SKILL.md)에 있어요.

## 폴더

| 위치 | 내용 |
|---|---|
| `docs/design.md` | 색 · 글자 · 간격 · 부품 · 화면 목록 |
| `docs/motion.md` | 길이 · 곡선 · Semantic · 머무는 시간 · 카메라 |
| `docs/video.md` | 캔버스 · 텍스트 최소 크기 · 배경 · 글자 크기 · 폰 프레임 · parts 크기 |
| `src/parts` · `src/screens` · `src/assets` | HTML 부품 · 화면 이미지 · 원본 파일 |
| `out/<영상이름>/` | 영상 한 편의 BRIEF와 결과 |
| `.claude/agents` | art-director · director · builder · critic |
| `.claude/skills/make-video` | 전체 순서와 승인 지점 |

## 원칙

- 매번 바뀌는 건 BRIEF와 레퍼런스뿐이에요. docs 세 문서는 고정이에요.
- docs에 없는 값은 쓰지 않아요. 필요하면 "새 후보"로 사용자에게 물어봐요.
- 레퍼런스에서는 구성 · 구도 · 카메라 · 전환 · 글자 배치 · 속도 · 길이만 참고해요. 색 · 글자 · 로고는 가져오지 않아요.

## 영상 다시 렌더하기

`render.js`는 headless Edge(Windows 기본 경로)로 `video.html`을 한 프레임씩 찍어 `out/app-intro/frames/`에 저장해요. 그다음 ffmpeg로 mp4를 만들어요.

```bash
cd out/app-intro/video-src
npm install
node render.js
ffmpeg -framerate 30 -i ../frames/f%03d.png -c:v libx264 -pix_fmt yuv420p ../video.mp4
```
