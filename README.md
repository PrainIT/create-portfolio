# Create Portfolio

포트폴리오 웹사이트 프로젝트 - Next.js와 Sanity CMS를 활용한 Monorepo 구조

## 프로젝트 구조

```
create-portfolio/
├── nextjs-create-portfolio/    # Next.js 프론트엔드 애플리케이션
└── studio-create-portfolio/    # Sanity Studio (CMS 관리)
```

## 기술 스택

- **Frontend**: Next.js 16, React 19, TypeScript
- **CMS**: Sanity Headless CMS
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion

## 시작하기

### 1. Next.js 개발 서버 실행

```bash
cd nextjs-create-portfolio
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 2. Sanity Studio 실행

```bash
cd studio-create-portfolio
npm install
npm run dev
```

브라우저에서 [http://localhost:3333](http://localhost:3333)을 열어 CMS 관리 인터페이스를 확인하세요.

## 환경 변수 설정

`nextjs-create-portfolio/.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_SECRET_TOKEN=your-secret-token
```

## 배포

### Vercel 배포

Next.js 앱은 Vercel을 통해 배포할 수 있습니다.

### Sanity Studio 배포

```bash
cd studio-create-portfolio
npm run deploy
```

## 주요 기능

- ✅ Sanity CMS 통합
- ✅ 동적 라우팅
- ✅ 이미지 최적화
- ✅ 반응형 디자인
- ✅ 검색 및 필터링 기능
