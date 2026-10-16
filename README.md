# 김여명 이력서 사이트

2026-10-16 최신 버전. 새 프로필 사진 적용, 설계 기록 섹션 및 학력·수상 아래 Notion 링크 삭제가 포함되어 있습니다.
HTML/CSS/JavaScript로 구성되어 있으며 별도 빌드 과정이 필요 없습니다.

## GitHub에 올리기

1. 압축을 풉니다.
2. 사용할 GitHub 저장소를 엽니다. 이전에 지정한 저장소는 DdiDding/resume입니다.
3. 파일 업로드 메뉴에서 압축을 푼 내용 전체를 올리고 커밋합니다. index.html, style.css, app.js와 assets 폴더가 저장소 최상단에 위치해야 합니다. ZIP 자체나 이를 감싼 상위 폴더를 올리지 마세요.
4. Settings → Pages → Source에서 Deploy from a branch를 선택합니다.
5. 업로드한 브랜치(예: main)와 /(root)를 선택한 후 Save를 누릅니다.
6. 배포가 끝나면 Pages 설정 화면에 표시되는 주소로 접속합니다.

DdiDding/resume을 프로젝트 사이트로 설정했다면 기본 주소는 https://ddidding.github.io/resume/ 입니다. 현재 이 ZIP을 제공한 것만으로 해당 주소가 게시된 것은 아닙니다.

## 수정할 파일

- index.html: 소개, 프로젝트, 학력·수상, 연락처
- style.css: 레이아웃과 색상
- app.js: 목차 활성화와 마우스 조명 효과
- assets/profile.png: 프로필 사진

폰트는 Google Fonts를 사용합니다. 사진과 프로젝트 이미지는 assets 폴더에 포함됩니다.
이 ZIP은 배포된 Sites 소스와 일치하도록 확인했습니다. 실제 브라우저 시각 검수는 진행하지 못했습니다.

GitHub 공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
