"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import WorkCard from "@/components/WorkCard";
import SearchBar from "@/components/SearchBar";

const workProjects = [
  {
    id: 1,
    title: "11번가 공식 인스타그램 운영",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 2,
    title: "제스프리 코리아 DPR",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 3,
    title: "롯데월드 공식 유튜브채널 운영",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 4,
    title: "포스코퓨처소설 운영",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 5,
    title: "지미존스 코리아 IMC 브랜딩",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 6,
    title: "틱톡 Always on amplification",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 7,
    title: "경남지역 레모나 소셜미디어 운영",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 8,
    title: "넥슨 FC온라인 FSL 소셜미디어 운영",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 9,
    title: "아스트라제네카코리아링크드인 운영",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 10,
    title: "CJ케어 마이크로바이옴",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 11,
    title: "로레알코리아 스킨수티컬즈",
    tags: ["0.5 Photo", "0.5 Video"],
  },
  {
    id: 12,
    title: "이마트24 디지털마케팅 운영",
    tags: ["0.5 Photo", "0.5 Video"],
  },
];

const workCategories = [
  {
    title: "영상 콘텐츠",
    items: [
      { label: "브랜디드 영상", value: "branded-video" },
      { label: "캠페인 영상", value: "campaign-video" },
      { label: "숏폼", value: "short-form" },
      { label: "웹예능", value: "web-entertainment" },
      { label: "스케치 영상", value: "sketch-video" },
      { label: "드라마", value: "drama" },
      { label: "인터뷰 영상", value: "interview-video" },
      { label: "모션그래픽", value: "motion-graphics" },
      { label: "뮤직비디오", value: "music-video" },
      { label: "LIVE", value: "live" },
    ],
  },
  {
    title: "디자인 콘텐츠",
    items: [
      { label: "SNS 콘텐츠", value: "sns-content" },
      { label: "브랜딩", value: "branding" },
      { label: "인포그래픽", value: "infographic" },
      { label: "포스터", value: "poster" },
      { label: "배너", value: "banner" },
      { label: "카드뉴스", value: "card-news" },
      { label: "키비주얼", value: "key-visual" },
      { label: "인쇄물", value: "print" },
      { label: "상세페이지", value: "detail-page" },
      { label: "패키지", value: "package" },
    ],
  },
  {
    title: "사진 콘텐츠",
    items: [
      { label: "제품", value: "product" },
      { label: "인물", value: "portrait" },
      { label: "스케치", value: "sketch" },
    ],
  },
  {
    title: "AI 콘텐츠",
    items: [],
  },
];

export default function WorkPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
    console.log("Selected:", value);
    // 필터링 로직 추가
  };

  const handleSearch = (keyword: string) => {
    setIsSearching(keyword.length > 0);
    console.log("Search:", keyword);
    // 검색 로직 추가
  };

  const handleTitleClick = () => {
    // 초기 상태로 리셋
    setSelectedCategory("");
    setSearchKeyword("");
    setIsSearching(false);
  };

  return (
    <main className="w-full relative">
      <div className="w-full h-px bg-grey-700 mt-12" />
      <NavBar
        pageName="WORK"
        title="전체 프로젝트"
        categories={workCategories}
        showBackButton={true}
        selectedValue={selectedCategory}
        onSelect={handleSelect}
        onTitleClick={handleTitleClick}
      />
      <div className="pl-64 pr-8 py-8">
        {/* 검색바 - 오른쪽 위 */}
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

        {/* 콘텐츠 영역 - 3열 그리드 */}
        <div className="grid grid-cols-3 gap-6">
          {workProjects.map((project) => (
            <WorkCard
              key={project.id}
              id={project.id}
              title={project.title}
              tags={project.tags}
              isSearchMode={isSearching}
            />
          ))}
        </div>
      </div>
    </main>
  );
}