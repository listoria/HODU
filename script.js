﻿// 지도
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 스크롤 탑 버튼

window.onscroll = function () {
  let scrollTopBtn = document.getElementById("scrollTopBtn");
  let footer = document.querySelector("footer");
  let scrollY = window.scrollY || document.documentElement.scrollTop;
  let footerOffsetTop = footer.offsetTop;

  if (scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }

  if (window.innerHeight + scrollY > footerOffsetTop) {
    scrollTopBtn.style.bottom =
      window.innerHeight + scrollY - footerOffsetTop + 30 + "px";
  } else {
    scrollTopBtn.style.bottom = "30px";
  }
};

document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//모달창

document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("subscribeForm");
  const modal = document.getElementById("modal");
  const modalBtn = document.getElementById("modal-btn");

  emailForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 기본 제출 방지
    modal.style.display = "flex";
  });

  // 모달 창의 OK 버튼 클릭 시 폼 제출 및 모달 창 닫기
  modalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    emailForm.submit(); // 폼 제출
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const modalBtn = document.getElementById("modal-btn");

  // 모달 버튼 클릭 시 모달 닫기
  modalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 모달 바깥을 클릭 시 모달 닫기
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector("header");
//   const secondSection = document.getElementById("features");
//   const secondSectionOffset = secondSection.offsetTop;
//   let lastScrollTop = 0;

//   window.addEventListener("scroll", function () {
//     const currentScroll = window.scrollY; // pageYOffset 대신 scrollY 사용

//     if (currentScroll >= secondSectionOffset) {
//       header.classList.add("fixed");

//       if (currentScroll > lastScrollTop) {
//         // 스크롤 다운 시 헤더 표시
//         header.classList.remove("hidden");
//       } else {
//         // 스크롤 업 시 헤더 숨기기
//         header.classList.add("hidden");
//       }
//     } else {
//       // 최상단에 있을 때는 헤더를 항상 보이도록
//       header.classList.remove("fixed", "hidden");
//     }

//     // 최상단에서 헤더가 사라지지 않도록 설정
//     if (currentScroll === 0) {
//       header.classList.remove("hidden");
//     }

//     lastScrollTop = currentScroll;
//   });
// });
