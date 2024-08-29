// 지도
var mapContainer = document.getElementById("map"),
  mapOption = {
    center: new kakao.maps.LatLng(33.44235462471831, 126.57144169440214),
    level: 3,
  };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var markerPosition = new kakao.maps.LatLng(
  33.44235462471831,
  126.57144169440214
); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);


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
    event.preventDefault();
    modal.style.display = "flex";
  });

  modalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    emailForm.submit();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const modalBtn = document.getElementById("modal-btn");

  modalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
