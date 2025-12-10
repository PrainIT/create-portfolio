"use client";

import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <main className="w-full">
      <NavBar
        pageName="ABOUT"
        title=""
        showBackButton={true}
        onTitleClick={() => {
          router.push("/");
        }}
        categories={[]}
      />

      {/* 검색바 - 오른쪽 위 */}
      <div className="pl-64 pr-8 py-8">
        <div className="flex justify-end mb-8">
          <div className="w-full max-w-[850px]">
            <SearchBar
              placeholder="SEARCH"
              onSearch={handleSearch}
              value={searchKeyword}
              onChange={(value) => {
                setSearchKeyword(value);
                handleSearch(value);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-white text-2xl font-bold whitespace-nowrap text-left">
            FULL CREATIVE EXECUTION - FROM A TO Z
          </h2>
          <h1 className="text-brand text-7xl font-bold whitespace-nowrap text-left">
            WHY WORK WITH
            <br />
            PRAIN GLOBAL'S CREATIVE
            <br />
            DEPARTMENT
          </h1>
        </div>

        <button className="bg-brand text-white px-8 py-4 mt-8 rounded-full whitespace-nowrap min-w-40 w-[200px] hover:opacity-80 transition-all duration-300 font-lg">
          회사소개서 다운로드
        </button>

        <div className="flex flex-col gap-4 mt-16">
          <p className="text-grey-400 text-base font-normal whitespace-nowrap text-left">
            프레인글로벌 크리에이티브팀은 브랜딩, 모션그래픽, 영상 제작, AI 등
            <br />
            각기 다른 전문성을 지닌 26명의 크리에이티브 전문가로 구성된
            팀입니다.
            <br />
            <br />
            다양한 분야의 시각과 기술이 모이면서 브랜드와 프로젝트에 가장 적합한
            솔루션을 제시합니다.
            <br />
            기획부터 디자인, 모션과 영상까지 하나의 흐름으로 연결된 원스톱
            제작이 가능하며,
            <br />
            새로운 기술과 트렌드를 적극적으로 실험하며 더 나은 크리에이티브를
            만들어갑니다.
          </p>
        </div>

        <div className="w-full h-[500px] border-2 border-grey-400 rounded-2xl mt-16">
          <Image
            src="/images/about/about-1.png"
            alt="about-1"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>

        {/* PROJECT HISTORY */}
        <div className="mt-16">
          <h3 className="text-brand text-base font-bold mb-8 whitespace-nowrap text-left">
            PROJECT HISTORY
          </h3>
          <div className="grid grid-cols-3 gap-8">
            {/* 2023 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-lg font-bold">2023</h4>
              <div className="flex flex-col gap-2 text-white text-sm">
                <p>사명 변경 홍보 영상 제작</p>
                <p>인터배터리2023 기획영상 제작</p>
              </div>
            </div>

            {/* 2024 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-lg font-bold">2024</h4>
              <div className="flex flex-col gap-2 text-white text-sm">
                <p>직원을 활용한 인터뷰, 예능, 브이로그</p>
                <p>영상 제작</p>
              </div>
            </div>

            {/* 2025 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-lg font-bold">2025</h4>
              <div className="flex flex-col gap-2 text-white text-sm">
                <p>음극재 소재 웹 드라마 제작</p>
                <p>캐즘 극복 철인3종 시리즈 제작</p>
              </div>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-full h-px bg-grey-700 my-16" />

        {/* AWARDS */}
        <div className="mb-16">
          <h3 className="text-brand text-base font-bold mb-8 whitespace-nowrap text-left">
            AWARDS
          </h3>
          <div className="flex flex-col gap-4 text-white text-sm">
            <p>2023 대한민국 소통어워즈 소셜미디어 대상 제조업부분</p>
            <p>2023 대한민국 소통어워즈 디지털콘텐츠대상 웹드라마부문</p>
            <p>2023 대한민국 소통어워즈 종합대상 국회 산자위 위원장상</p>
          </div>
        </div>

        {/* 하단 선 */}
        <div className="w-full h-px bg-grey-700 mt-12" />

        {/* 저작권 텍스트 */}
        <div className="text-center py-6">
          <p className="text-grey-500 text-sm">
            © 2025. PRAIN GLOBAL CREATIVE PART. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
