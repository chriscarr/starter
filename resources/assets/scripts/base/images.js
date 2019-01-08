import intersectionObserver from '../_utils/intersectionObserver';
import imageLoaded from '../_utils/imageLoaded';

let el = '[data-src]';

/**
 * Init
 */
function init() {
  // check for el
  if (!document.querySelector(el)) {
    return;
  }

  // observer
  let instances = intersectionObserver(el, {
    // only fire once
    once: true,
    // load image -50% in view
    rootMargin: '0% 0% 0% 0%',
    // on enter
    enter: (item) => {
      // get data-src
      let src = item.getAttribute('data-src');
      // wait until image has loaded
      imageLoaded(src).then(() => {
        // change img srcset
        item.srcset = item.getAttribute('data-srcset');
        // add class loaded
        item.classList.add('loaded');
      });
    },
    // exit: (item) => {},
  });

  // run
  instances.observe();
}

export default init;