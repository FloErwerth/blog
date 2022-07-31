import {useMemo} from "react";

window.onload = function() {
  wrapper = document.getElementById("wrapper");
}

let lastSite = "#/";
let wrapper: HTMLElement;
const animationStepTime = 500;

export const navigateTo = (to: string): void => {
  if (window.location.hash === "#" + to || to === undefined) return;
  lastSite = "/" + window.location.hash;
  if (to === "/") {
    transitionFromEntry(wrapper).then(() => {
      window.location.href = "/#" + to;
    });
  } else {
    transitionToEntry(wrapper).then(() => {
      window.location.href = "/#" + to;
    });
  }
};

export const navigateToLastSite = () => {
  transitionFromEntry(wrapper).then(() => {
    window.location.href = lastSite;
  });
};

const transitionToEntry = (wrapper: HTMLElement) => {
  return new Promise((resolve) => {
    addClassAfter(wrapper, "content-wrapper-to-right", 0);
    removeClassAfter(wrapper, "content-wrapper-to-right", animationStepTime);
    addClassAfter(wrapper, "content-wrapper-set-left", animationStepTime);
    addClassAfter(wrapper, "content-wrapper-to-middle", animationStepTime + 10);
    removeClassAfter(
      wrapper,
      "content-wrapper-set-left",
      animationStepTime * 2
    );
    removeClassAfter(
      wrapper,
      "content-wrapper-to-middle",
      animationStepTime * 2
    );
    setTimeout(() => {
      resolve(true);
    }, animationStepTime);
  });
};

const transitionFromEntry = (wrapper: HTMLElement) => {
  return new Promise((resolve) => {
    addClassAfter(wrapper, "content-wrapper-to-left", 0);
    removeClassAfter(wrapper, "content-wrapper-to-left", animationStepTime);
    addClassAfter(wrapper, "content-wrapper-set-right", animationStepTime);
    addClassAfter(wrapper, "content-wrapper-to-middle", animationStepTime + 10);
    removeClassAfter(
      wrapper,
      "content-wrapper-set-right",
      animationStepTime * 2
    );
    removeClassAfter(
      wrapper,
      "content-wrapper-to-middle",
      animationStepTime * 2
    );
    setTimeout(() => {
      resolve(true);
    }, animationStepTime);
  });
};

type ManipulateClass = (element: HTMLElement, className: string, time: number) => void;

const removeClassAfter: ManipulateClass = (element, className, time) => {
  setTimeout(() => {
    element.classList.remove(className);
  }, time);
};

const addClassAfter: ManipulateClass = (element, className, time) => {
  setTimeout(() => {
    element.classList.add(className);
  }, time);
};