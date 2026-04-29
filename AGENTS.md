# AGENTS.md

## Project

- 이 저장소는 Expo + React Native + TypeScript 기반의 모바일 앱입니다.
- 제품은 사용자의 어린 시절 시기를 주제로 기사와 영상을 보여주는 추억 피드 앱입니다.

## Stack

- Expo
- React Native
- TypeScript
- Expo Router

## Goals

- 먼저 더미 데이터로 MVP를 구축합니다.
- 코드베이스를 단순하고 읽기 쉽게 유지합니다.
- 작고 재사용 가능한 컴포넌트를 우선합니다.

## Rules

- strict TypeScript를 사용합니다.
- 내비게이션에는 Expo Router를 사용합니다.
- 불필요한 라이브러리는 도입하지 않습니다.
- 큰 변경 전에 계획을 제안합니다.
- 리뷰 가능한 작은 단위로 변경합니다.
- 백엔드 연동 전에 더미 데이터를 우선합니다.
- 수정 후 무엇이 바뀌었는지 설명합니다.

## UI rules

- 깔끔한 iOS 스타일 UI를 유지합니다.
- 카드 기반 피드를 사용합니다.
- 미니멀하고 가독성 높은 레이아웃을 유지합니다.
- 과한 연출의 애니메이션은 피합니다.

## Code conventions

- 함수형 컴포넌트만 사용합니다.
- 로직이 커지면 custom hooks를 우선합니다.
- any 사용을 피합니다.
- 파일은 작고 역할이 명확하게 유지합니다.

## Workflow

- 큰 변경 전에 제안할 파일 구조를 설명합니다.
- 변경 후 검증 단계를 제공합니다.
- 작업이 모호하면 먼저 확인 질문을 하거나 짧은 계획을 제시합니다.

## Done means

- 앱이 Expo에서 실행됩니다.
- TypeScript 오류가 없습니다.
- 눈에 띄는 내비게이션 깨짐이 없습니다.

## Git Commit Message Convention

- commit을 할 때는 header에 [type] description을 작성하고, 본문에는 적절한 내용을 작성합니다. description과 본문은 기술키워드, 도구명등 영어로 표현해야하는 것은 영어로 표현하고 나머지는 한국어로 작성합니다.
- type 작성법
  - feat: 새로운 기능에 대한 commit
  - fix: bug 수정에 대한 commit
  - hotfix: hotfix bug 수정에 대한 commit
  - chore: 그 외 자잘한 수정에 대한 commit. 예, version 변경 등.
  - refactor: code refactoring에 대한 commit
  - perf: 성능 개선에 대한 commit

## Project Version Convention

- version의 최초 시작은 1.0.0으로 정합니다.
- minor version 변경인 경우 마지막 숫자를 하나 올립니다.
- hotfix version 변경인 경우 가운데 숫자를 하나 올리고, 마지막 숫자를 0으로 변경합니다.
- major version 변경인 경우 첫번째 숫자를 하나 올리고, 가운데와 마지막 숫자를 0으로 변경합니다.

## Git Strategy

- branch는 master, dev, master-dev를 기본으로 합니다.
- 일반 작업인 경우
  - 작업이 필요한 경우 dev branch에서 feature/"작업명" branch를 생성하고 그 branch에서 작업하고 commit합니다. commit할 때는 Git Commit Message Convention을 참고합니다.
  - 또 다른 작업이 필요한 경우 dev branch에서 feature/"또다른작업명" branch를 생성하고 그 branch에서 작업하고 commit합니다.
  - 작업이 완료된 경우 dev branch에서 release branch를 생성하고 완료된 작업 branch들을 release branch에 merge합니다.
  - release branch에서 검수를 하고 이상이 있는 경우 해당 작업 branch로 checkout 후 작업합니다. 그리고 다시 release branch에 merge하고 검수를 합니다.
  - 검수 후 이상이 없다면 package.json의 version을 변경하고 commit합니다. version명은 Project Version Convention을 참고합니다.
  - version 변경 후 release branch를 master-dev branch에 merge하고 최종적으로 검수합니다. 이상이 있는 경우 해당 작업branch로 checkout하고 재작업을 합니다.
  - master-dev branch에서 검수 후 이상이 없다면 release branch를 dev branch와 master branch에 merge합니다.
  - master-dev, dev, master branch 각각 origin으로 push합니다.
  - master branch에 version명으로 tag를 하고 tag역시 origin으로 push합니다.
- hotfix 작업
  - hotfix 작업이 필요한 경우 master branch에서 hotfix/"핫픽스작업명" branch를 생성하고 작업하고 commit합니다.
  - hotfix 브랜치를 master-dev 브랜치에 merge 하고 검수합니다. 검수 이상이 있는 경우 해당 branch로 돌아가 재작업을 합니다.
  - 이상이 없는 경우 해당 작업 branch에서 package.json의 version을 변경합니다.
  - version 변경 후, 해당 작업 branch를 master, dev branch에 merge 하고 master, dev, master-dev branch를 origin에 push합니다.
  - master branch에 version명으로 tag를 하고 tag역시 origin으로 push합니다.
