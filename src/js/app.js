import * as webpFn from "./modules/fn.js";
import Swiper from "swiper/bundle";
import clickScrol from "./modules/ClickScrol.js";
import { useDynamicAdapt } from "./modules/dinamicAdapt.js";
import Burger from "./modules/burger.js";
import AnimScrol from "./modules/AnimScrol.js";

webpFn.isWebp();
useDynamicAdapt();
clickScrol();
Burger();
AnimScrol();
// ============= Swiper =====================

new Swiper(".my-slide", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // когда ширина экрана меньше 768 пикселей
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // когда ширина экрана меньше 1024 пикселей
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // и так далее
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
new Swiper(".slide-prof", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
new Swiper(".swiper-price", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // когда ширина экрана меньше 768 пикселей
    440: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // когда ширина экрана меньше 768 пикселей
    560: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    },
    // когда ширина экрана меньше 1024 пикселей
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // и так далее
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// ===================== Map ====================
ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map("map", {
    center: [54.30090643965704, 38.14444155275724],
    zoom: 16,
    controls: ["routePanelControl"],
    preventScrollZoom: true,
  });

  let placemark = new ymaps.Placemark(
    [54.30090643965704, 38.14444155275724],
    {
      hintContent: "Хинт метки",
    },
    {
      iconLayout: false,
      iconImageHref: "./img/marker-svgrepo-com.svg",
      iconImageSize: [50, 50],
      iconImageOffset: [-40, -45],
    }
  );

  let control = myMap.controls.get("routePanelControl");

  control.options.set({
    autofocus: false,
  });
  let location = ymaps.geolocation.get();

  location.then(function (res) {
    let locText = res.geoObjects.get(0).properties.get("text");

    control.routePanel.state.set({
      type: "masstransit",
      fromEnabled: true,
      from: `${locText}`,
      toEnabled: false,
      to: "54.30090643965704,38.14444155275724",
    });
  });

  // myMap.controls.remove('geolocationControl'); // удаляем
  // myMap.controls.remove('searchControl');
  // myMap.controls.remove('trafficControl');
  // myMap.controls.remove('typeSelector');
  // myMap.controls.remove('fullscreenControl');
  // myMap.controls.remove('zoomControl');
  // myMap.controls.remove('rulerControl');
  // myMap.behaviors.disable(["scrollZoom"]);

  myMap.geoObjects.add(placemark);
}
