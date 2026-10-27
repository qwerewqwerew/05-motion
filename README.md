# [사이클5/1차 실험] 트랙A. 모션 하네스 제작

"모션 만들자" 한마디로 요청해도 **영상 룩이 매번 같게** 나오는 작업 틀을 만들었다.

![app-intro 미리보기](out/app-intro/preview.gif)

▶ 원본 영상: [`out/app-intro/video.mp4`](out/app-intro/video.mp4) (5초 · 1920×1080 · 30fps)

## 어떻게 만들었나

- **고정**: 색 · 글자 · 움직임 숫자는 `docs/` 세 문서(design · motion · video)에만 둔다. 문서에 없는 값은 쓰지 않고 사람에게 묻는다.
- **역할 4개**: art-director(레퍼런스 정리) → director(장면표 3안) → builder(제작) → critic(판정만, 고치지 않음)
- **승인 2번**: 장면표를 고를 때, 스냅보드(정지 화면)를 볼 때 사람이 승인한다.
- **판정 기준**: docs에 없는 숫자 0개 · 화면에 없는 UI 0개 · 레퍼런스 반영 80% 이상

## 결과: `app-intro`

앱 소개 5초 영상. 미션 → 승인 → 수익 → 브랜드 4장면.

| 장면 1 · 미션 | 장면 2 · 승인 |
|---|---|
| ![scene-1](out/app-intro/snapboard/scene-1.png) | ![scene-2](out/app-intro/snapboard/scene-2.png) |
| **장면 3 · 수익** | **장면 4 · 브랜드** |
| ![scene-3](out/app-intro/snapboard/scene-3.png) | ![scene-4](out/app-intro/snapboard/scene-4.png) |

| 단계 | 판정 |
|---|---|
| 스냅보드 | 반영 73.9%로 불합격 → 예외 승인 |
| 영상 | **통과** (docs에 없는 숫자 0 · 화면에 없는 UI 0 · 반영 83.3%) |

## 배운 점

- **잘 된 것**: 숫자를 docs에만 두고 critic이 세게 하니, 임의로 만든 값이 바로 드러났다.
- **아쉬운 것**: 정지 화면으로는 움직임을 판정할 수 없어서 스냅보드 반영률이 낮게 나왔다. docs끼리 값이 다른 곳도 2군데 찾았다.
- **다음 실험**: docs를 고치고, 레퍼런스가 있는 영상으로 다시 돌려 같은 결과가 나오는지 본다.

<details>
<summary>폴더 구조</summary>

| 위치 | 내용 |
|---|---|
| `docs/` | design · motion · video 세 문서 |
| `src/` | 부품(HTML) · 화면 이미지 · 원본 파일 |
| `out/app-intro/` | brief · refs · scenes · verdict · 스냅보드 · 영상 |
| `.claude/agents` | 역할 4개 |
| `.claude/skills/make-video` | 전체 순서와 승인 지점 |

</details>
