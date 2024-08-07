yarn start dev
# mongodb 설치
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# mongoose 와 dotenv

yarn add mongoose dotenv

### dot.env

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/blog
```
index.js 에서 require('dotenv').config();
* .env 파일 변경할 때는 nodemon 재시작 X. 수동으로 재시작.

# 21장 백엔드 프로그래밍: Node.js의 Koa 프레임워크

__21.5 koa-router 사용하기
____21.5.3 REST API
____21.5.4 라우트 모듈화
____21.5.5 posts 라우트 생성
__21.6 정리

# 22장 mongoose를 이용한 MongoDB 연동 실습
__22.3 mongoose의 설치 및 적용
____22.3.1 .env 환경변수 파일 생성

__22.4 esm으로 ES 모듈 import/export 문법 사용하기
____22.4.1 기존 코드 ES Module 형태로 바꾸기

## 22.7 데이터 생성과 조회

__22.9 요청 검증
____22.9.1 ObjectId 검증
____22.9.2 Request Body 검증
## 22.10 페이지네이션 구현


# 23장 JWT를 통한 회원 인증 시스템 구현하기
__23.1 JWT의 이해
____23.1.1 세션 기반 인증과 토큰 기반 인증의 차이

__23.2 User 스키마/모델 만들기

____23.2.2 스태틱 메서드 만들기
__23.3 회원 인증 API 만들기
____23.3.1 회원가입 구현하기

____23.4.5 로그아웃 기능 구현하기
__23.5 posts API에 회원 인증 시스템 도입하기

***

# 24장 프런트엔드 프로젝트: 시작 및 회원 인증 구현

____24.1.2 라우터 적용
____24.1.3 스타일 설정
____24.1.4 Button 컴포넌트 만들기
____24.1.5 리덕스 적용
__24.2 회원가입과 로그인 구현
____24.2.1 UI 준비하기
____24.2.2 리덕스로 폼 상태 관리하기
____24.2.3 API 연동하기
____24.2.4 회원가입 구현
____24.2.5 로그인 구현
____24.2.6 회원 인증 에러 처리하기
__24.3 헤더 컴포넌트 생성 및 로그인 유지
____24.3.1 헤더 컴포넌트 만들기
____24.3.2 로그인 상태를 보여 주고 유지하기
____24.3.3 로그아웃 기능 구현
__24.4 정리

# 25장 프런트엔드 프로젝트: 글쓰기 기능 구현하기
__25.1 에디터 UI 구현하기
__25.2 에디터 하단 컴포넌트 UI 구현하기
____25.2.1 TagBox 만들기
__25.3 리덕스로 글쓰기 상태 관리하기
____25.3.1 EditorContainer 만들기
____25.3.2 TagBoxContainer 만들기
____25.3.3 글쓰기 API 연동하기
__25.4 정리

# 26장 프런트엔드 프로젝트: 포스트 조회 기능 구현하기
__26.1 포스트 읽기 페이지 구현하기
____26.1.1 PostViewer UI 준비하기
____26.1.2 API 연동하기
__26.2 포스트 목록 페이지 구현하기
____26.2.1 PostList UI 준비하기
____26.2.2 포스트 목록 조회 API 연동하기
____26.2.3 HTML 필터링하기
____26.2.4 페이지네이션 구현하기
__26.3 정리

# 27장 프런트엔드 프로젝트: 수정/삭제 기능 구현 및 마무리
__27.1 포스트 수정
____27.1.1 PostActionButtons 컴포넌트 만들기
____27.1.2 수정 버튼 클릭 시 글쓰기 페이지로 이동하기
__27.2 포스트 삭제
__27.3 react-helmet-async로 meta 태그 설정하기
__27.4 프로젝트 마무리
____27.4.1 프로젝트 빌드하기
____27.4.2 koa-static으로 정적 파일 제공하기
____27.4.3 더 할 수 있는 작업
__27.5 정리