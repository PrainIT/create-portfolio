"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import React from "react";
import { motion } from "framer-motion";

const filters = [
  { name: "전체", count: 0 },
  { name: "릴스 Reels", count: 0 },
  { name: "숏품 Short-form", count: 0 },
  { name: "숏츠 Shorts", count: 0 },
  { name: "브이로그 Vlog", count: 0 },
  { name: "브랜디드 영상 Branded Film", count: 0 },
  { name: "예능 Entertainment", count: 0 },
  { name: "스케치 영상 Sketch Film", count: 0 },
  { name: "드라마 Drama", count: 0 },
  { name: "인터뷰 Interview", count: 0 },
  { name: "바이럴영상 Viral", count: 0 },
];

interface ContentCard {
  id: string;
  title: string;
  description: string;
  subDescription: string;
  number?: string;
  brand?: string;
  image?: string;
  slug?: string;
  filters?: string[];
}

interface ContentSectionProps {
  contentCards: ContentCard[];
}

export default function ContentSection({ contentCards }: ContentSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState(filters[0].name);
  const [searchKeyword, setSearchKeyword] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragThreshold = 5; // px, 이 값 이하 움직이면 클릭으로 취급

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;

    isMouseDownRef.current = true;
    setIsDragging(false); // 새 드래그 시작 시 초기화

    const rect = carouselRef.current.getBoundingClientRect();
    startXRef.current = e.pageX - rect.left;
    scrollLeftRef.current = carouselRef.current.scrollLeft;

    carouselRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !carouselRef.current) return;

    e.preventDefault();
    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const delta = x - startXRef.current;

    // threshold 이하에서는 드래그로 취급하지 않음
    if (!isDragging && Math.abs(delta) < dragThreshold) {
      return;
    }

    if (!isDragging) {
      setIsDragging(true);
    }

    const walk = delta * 1.0; // 스크롤 속도
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const endDrag = () => {
    isMouseDownRef.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "smooth";
    }
    // 드래그가 끝났다고 바로 false로 바꾸면, mouseup 시점 클릭과 엇갈릴 수 있어서
    // 필요에 따라 setTimeout으로 살짝 늦춰도 됨
    setTimeout(() => setIsDragging(false), 0);
  };

  const handleMouseUp = () => {
    endDrag();
  };

  const handleMouseLeave = () => {
    if (!isMouseDownRef.current) return;
    endDrag();
  };

  useEffect(() => {
    return () => {
      // 현재는 rAF를 사용하지 않으므로 정리할 것 없음
    };
  }, []);

  // 필터별 카운트 계산
  const filtersWithCount = useMemo(() => {
    return filters.map((filter) => {
      if (filter.name === "전체") {
        return { ...filter, count: contentCards.length };
      }
      const count = contentCards.filter((card) =>
        card.filters?.includes(filter.name)
      ).length;
      return { ...filter, count };
    });
  }, [contentCards]);

  // 필터링된 카드
  const filteredCards = useMemo(() => {
    let filtered = contentCards;

    // 필터 적용 ("전체"가 아닌 경우에만 필터링)
    if (selectedFilter && selectedFilter !== "전체") {
      filtered = filtered.filter((card) =>
        card.filters?.includes(selectedFilter)
      );
    }

    // 검색 키워드 적용
    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase();
      filtered = filtered.filter(
        (card) =>
          card.title.toLowerCase().includes(keyword) ||
          card.description.toLowerCase().includes(keyword) ||
          card.subDescription.toLowerCase().includes(keyword) ||
          card.brand?.toLowerCase().includes(keyword)
      );
    }

    return filtered;
  }, [contentCards, selectedFilter, searchKeyword]);

  return (
    <section className="w-full bg-[#1A1A1A] py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* 검색바 */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-[850px] w-full">
            <input
              type="text"
              placeholder="ENTER A KEYWORD"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full h-[120px] px-[14px] pr-[70px] rounded-full bg-[#0f0f0f] text-grey-200 text-3xl placeholder-grey-400 placeholder:text-3xl placeholder:text-white placeholder:opacity-10 text-center focus:outline-none focus:ring-2 focus:ring-brand"
              style={{
                textAlign: "center",
                lineHeight: "120px",
              }}
            />
            <button
              className="absolute right-[14px] top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-brand flex items-center justify-center hover:opacity-80 transition-opacity"
              type="button"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 19L14.65 14.65"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 필터 태그들 */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filtersWithCount.map((filter, index) => {
            const isNewRow = index > 0 && index % 5 === 0;
            return (
              <React.Fragment key={filter.name}>
                {isNewRow && <div className="w-full basis-full" />}
                <button
                  onClick={() => setSelectedFilter(filter.name)}
                  className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                    selectedFilter === filter.name
                      ? "border-brand text-brand"
                      : "border-grey-600 text-grey-600 hover:border-grey-100 hover:text-grey-100"
                  }`}
                >
                  {filter.name} {filter.count > 0 && `(${filter.count})`}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* 캐러셀 리스트 */}
        <div className="relative">
          <div
            ref={carouselRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide ${
              isDragging
                ? "cursor-grabbing snap-none"
                : "cursor-grab snap-x snap-mandatory"
            }`}
            style={{
              scrollBehavior: isDragging ? "auto" : "smooth",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {filteredCards.length > 0 ? (
              filteredCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[407px] flex-shrink-0 snap-center"
                  // 나중에 카드에 onClick 넣을 때 예시:
                  // onClick={() => {
                  //   if (isDragging) return;
                  //   // 실제 클릭 로직 (예: router.push(`/brand/${card.slug}`))
                  // }}
                >
                  <div className="bg-grey-800 rounded-2xl overflow-hidden min-h-[878px] relative">
                    {/* 카드 이미지 영역 */}
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 border-2 border-dashed border-grey-600 flex items-center justify-center">
                        <span className="text-grey-500 text-sm">
                          이미지 영역
                        </span>
                      </div>
                    )}

                    {/* 카드 텍스트 영역 - 이미지 위에 오버레이 */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {card.number && (
                        <div className="text-4xl font-bold text-white mb-4 text-center">
                          {card.number} →
                        </div>
                      )}
                      {card.brand && (
                        <div className="text-2xl font-bold text-white mb-4 text-center">
                          {card.brand}
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-grey-300 mb-1">{card.description}</p>
                      <p className="text-grey-400 text-sm">
                        {card.subDescription}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="w-full text-center py-16">
                <p className="text-grey-400 text-lg">
                  {searchKeyword
                    ? "검색 결과가 없습니다."
                    : "표시할 콘텐츠가 없습니다."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
