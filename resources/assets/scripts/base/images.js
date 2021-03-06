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
  const instances = intersectionObserver(el, {
    // only fire once
    once: true,
    // load image -50% in view
    rootMargin: '0% 0% 0% 0%',
    // on enter
    enter: (item) => {
      // get data-src
      const src = item.getAttribute('data-src');
      // get data-srcset
      const srcset = item.getAttribute('data-srcset');
      // wait until image data-src has loaded
      imageLoaded(src).then(() => {
        // change img src
        item.src = src;
        // change img srcset
        if (srcset) {
          item.srcset = srcset;
        }
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
