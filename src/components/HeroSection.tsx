"use client";

import { motion } from "framer-motion";

const companies = [
  { 
    name: "ZESPRI", 
    highlighted: false,
    top: "20vh",
    left: "4vw",
  },
  { 
    name: "YUHAN-KIMBERLY", 
    highlighted: false,
    top: "48%",
    left: "-14vw", // 화면 밖으로
    transform: "translateY(-50%)",
  },
  { 
    name: "ASTRAZENECA", 
    highlighted: false,
    bottom: "18vh",
    left: "14vw",
  },
  { 
    name: "POSCO FUTURE", 
    highlighted: false,
    top: "5vh",
    right: "-5vw", // 화면 밖으로
  },
  { 
    name: "JIMMY JOHN'S", 
    highlighted: true,
    top: "50%",
    right: "1.5vw",
    transform: "translateY(-30%)",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-visible">
      {/* 배경 blur 효과 */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          top: "20%",
          left: "-100px",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          bottom: "10%",
          right: "-150px",
          background: "radial-gradient(circle, rgba(255, 98, 0, 0.45) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      
      {/* 메인 텍스트 - 뒤로 이동 (z-index 낮춤) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center font-extrabold text-white"
          style={{
            fontSize: "clamp(80px, 15vw, 200px)",
            lineHeight: "1",
            maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
          }}
        >
              TOGETHER<br/>WE CREATE<br/>BETTER
        </motion.div>
      </div>

      {/* 회사 라벨들 - 앞으로 이동 (z-index 높임) */}
      <div 
        className="absolute inset-0 overflow-hidden z-20"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {companies.map((company, index) => {
          // 각 라벨마다 다른 속도 설정 
          const duration = 10 + index * 0.6;
          
          // 모두 왼쪽에서 오른쪽으로 이동
          const startX = "-80vw"; // 화면 왼쪽 밖에서 시작
          const endX = "80vw"; // 화면 오른쪽 밖으로 이동
          
          return (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20, x: startX }}
              animate={{ 
                opacity: 1, 
                y: 0,
                x: [startX, endX], // 한쪽에서 반대편으로 이동
              }}
              transition={{ 
                delay: index * 0.5 + 0.2, 
                duration: 0.2,
                x: {
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0,
                }
              }}
              className="absolute"
              style={{
                top: company.top,
                left: company.left,
                right: company.right,
                bottom: company.bottom,
                transform: company.transform,
              }}
            >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                x: company.left?.startsWith('-') ? 20 : company.right?.startsWith('-') ? -20 : 0 
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-full overflow-hidden cursor-pointer"
              style={{
                height: "77px",
                padding: "14px 21px",
                fontSize: "40px",
                borderRadius: "100px",
              }}
            >
              {/* 배경 레이어 - blur와 opacity 적용 */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    company.name === "JIMMY JOHN'S"
                      ? "rgba(255, 106, 0, 0.4)"
                      : "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  opacity: 0.8,
                }}
              />
              
              {/* 내부 광택 효과 */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: company.name === "JIMMY JOHN'S"
                    ? "inset 0px 4px 20px rgba(255, 255, 255, 0.3), inset 0px -4px 20px rgba(0, 0, 0, 0.2)"
                    : "inset 0px 4px 20px rgba(255, 255, 255, 0.3), inset 0px -4px 20px rgba(0, 0, 0, 0.5)",
                }}
              />
              
              {/* 하단 밝은 반사광 */}
              <div 
                className="absolute bottom-0 left-0 right-0 rounded-b-full pointer-events-none"
                style={{
                  height: "33%",
                  background: company.name === "JIMMY JOHN'S"
                    ? "linear-gradient(to top, rgba(255, 255, 255, 0.2), transparent)"
                    : "linear-gradient(to top, rgba(255, 255, 255, 0.2), transparent)"
                }}
              />
              
              {/* 테두리 하이라이트 */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: `
                    inset 1px 1px 1px 0 rgba(255, 255, 255, 0.8),
                    inset -1px -1px 1px 0 rgba(255, 255, 255, 0.2)
                  `
                }}
              />
              
              {/* 외부 그림자 */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                }}
              />
              
              {/* 텍스트 - blur 영향 없음 */}
              <span
                className="relative z-10 flex items-center justify-center font-bold whitespace-nowrap"
                style={{
                  height: "100%",
                  color:
                    company.name === "JIMMY JOHN'S"
                      ? "#FF6B00"
                      : "#4a4a4a",
                }}
              >
                {company.name}
              </span>
            </motion.div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}

