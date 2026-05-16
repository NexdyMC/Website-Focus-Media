//  ================================================================ */
// Skypetcss for website */
// ================================================================ */

document.querySelectorAll("*").forEach((el) => {
  el.classList.forEach((cls) => {

    // ==============================
    // WIDTH & HEIGHT
    // ==============================

    // width
    if (cls.startsWith("w-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.width = val;
    }

    // height
    if (cls.startsWith("h-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.height = val;
    }

    // ==============================
    // Margin
    // ==============================

    if (cls.startsWith("m-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.margin = val;
    }

    // left and right
    if (cls.startsWith("mx-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) {
        el.style.marginLeft = val;
        el.style.marginRight = val;
      }
    }

    // top and bottom
    if (cls.startsWith("my-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) {
        el.style.marginTop = val;
        el.style.marginBottom = val;
      }
    }

    // top
    if (cls.startsWith("mt-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.marginTop = val;
    }
    // left
    if (cls.startsWith("ml-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.marginLeft = val;
    }
    // right
    if (cls.startsWith("mr-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.marginRight = val;
    }
    // bottom
    if (cls.startsWith("mb-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.marginBottom = val;
    }

    // ==============================
    // Padding
    // ==============================

    if (cls.startsWith("p-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.padding = val;
    }

    // left and right
    if (cls.startsWith("px-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) {
        el.style.paddingLeft = val;
        el.style.paddingRight = val;
      }
    }

    // top and bottom
    if (cls.startsWith("py-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) {
        el.style.paddingTop = val;
        el.style.paddingBottom = val;
      }
    }

    // top
    if (cls.startsWith("pt-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.paddingTop = val;
    }
    // left
    if (cls.startsWith("pl-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.paddingLeft = val;
    }
    // right
    if (cls.startsWith("pr-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.paddingRight = val;
    }
    // bottom
    if (cls.startsWith("pb-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.paddingBottom = val;
    }

    // =========================================================
    // Background Color
    // =========================================================

    // BACKGROUND COLOR
    if (cls.startsWith("bg-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.backgroundColor = val;
    }

    // BACKGROUND IMAGE
    if (cls.startsWith("bg-[url(")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      console.log(val)
      if (val) el.style.backgroundImage = val;
    }

    // TEXT COLOR
    if (cls.startsWith("color-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.color = val;
    }

    // =========================================================
    // Border
    // =========================================================

    // border-width
    if (cls.startsWith("bd-w-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.borderWidth = val;
    }
    // border-style
    if (cls.startsWith("bd-w-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.borderStyle = val;
    }
    // border-color
    if (cls.startsWith("bd-c-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.borderColor = val;
    }
    // border-radius
    if (cls.startsWith("bdrs-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.borderRadius = val;
    }

    // =========================================================
    // Font
    // =========================================================

    // FONT SIZE

    if (cls.startsWith("font-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.fontSize = val;
    }

    // Font Family
    if (cls.startsWith("family-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.fontFamily = val;
    }

    // Z Index
    if (cls.startsWith("z-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.zIndex = val;
    }

    // =========================================================
    // Position
    // =========================================================


    if (cls.startsWith("top-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.top = val;
    }
    if (cls.startsWith("bottom-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.bottom = val;
    }
    if (cls.startsWith("left-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.left = val;
    }
    if (cls.startsWith("right-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.right = val;
    }

  });
});

const element = document.getElementById('hover')
element.addEventListener('hover', () => {
  element.style.textDecoration = "undefined"
})

// variantish.js
// Simple "hover:[...]" and "active:[...]" variant emulation for classes
// Usage examples in the comments below.

const Variantish = (function () {
  const VARIANT_RE = /(hover|active):\[(.+?)\]/g;

  // parse a single bracket content like ".child->text-green font-bold" or "bg-red text-white"
  function parseBracketContent(content) {
    content = content.trim();
    // check for selector->classes form
    const selArrowIndex = content.indexOf('->');
    if (selArrowIndex !== -1) {
      const selector = content.slice(0, selArrowIndex).trim();
      const classes = content.slice(selArrowIndex + 2).trim().split(/\s+/).filter(Boolean);
      return { selector, classes };
    } else {
      const classes = content.split(/\s+/).filter(Boolean);
      return { selector: null, classes };
    }
  }

  // for an element `el` and a target selector (or null), return a NodeList or [el]
  function resolveTargets(el, selector) {
    if (!selector) return [el];
    try {
      return Array.from(el.querySelectorAll(selector));
    } catch (err) {
      console.warn('Variantish: invalid selector', selector, err);
      return [];
    }
  }

  // attach behavior for hover: add/remove classes on mouse enter/leave
  function attachHover(el, targetSelector, classes) {
    const enter = () => {
      const targets = resolveTargets(el, targetSelector);
      targets.forEach(t => t.classList.add(...classes));
    };
    const leave = () => {
      const targets = resolveTargets(el, targetSelector);
      targets.forEach(t => t.classList.remove(...classes));
    };
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    // Return a simple cleanup function in case it's needed
    return () => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }

  // attach behavior for active: pointerdown -> add classes, pointerup/pointercancel -> remove
  function attachActive(el, targetSelector, classes) {
    let pointerIsDown = false;
    const down = (e) => {
      pointerIsDown = true;
      const targets = resolveTargets(el, targetSelector);
      targets.forEach(t => t.classList.add(...classes));
    };
    const up = (e) => {
      if (!pointerIsDown) return;
      pointerIsDown = false;
      const targets = resolveTargets(el, targetSelector);
      targets.forEach(t => t.classList.remove(...classes));
    };
    el.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    // Remove on mouseleave as a safety
    el.addEventListener('mouseleave', up);
    return () => {
      el.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      el.removeEventListener('mouseleave', up);
    };
  }

  // Given an element, scan its attributes (class + data-variants) and attach handlers
  function processElement(el, options = {}) {
    const attrSources = [];
    if (el.hasAttribute('data-variants')) attrSources.push(el.getAttribute('data-variants'));
    // include class attribute too (so you can write class="hover:[bg-red] foo")
    if (el.className) attrSources.push(el.getAttribute('class'));

    const cleanupFns = [];

    for (const src of attrSources) {
      if (!src) continue;
      let m;
      // eslint-disable-next-line no-cond-assign
      while ((m = VARIANT_RE.exec(src)) !== null) {
        const variant = m[1]; // 'hover' or 'active'
        const bracketContent = m[2];
        const parsed = parseBracketContent(bracketContent);
        if (!parsed.classes.length) continue;

        if (variant === 'hover') {
          cleanupFns.push(attachHover(el, parsed.selector, parsed.classes));
        } else if (variant === 'active') {
          cleanupFns.push(attachActive(el, parsed.selector, parsed.classes));
        }
      }
    }

    return () => {
      cleanupFns.forEach(fn => {
        if (typeof fn === 'function') fn();
      });
    };
  }

  // Initialize: scan document (or root) for elements that contain the variant pattern.
  function init(root = document) {
    // naive selector: elements that contain "hover:[" or "active:["
    const nodes = Array.from(root.querySelectorAll('[data-variants], [class*="hover:["], [class*="active:["]'));
    const removers = [];
    nodes.forEach(n => {
      const remove = processElement(n);
      removers.push(remove);
    });
    // return a cleanup function to detach handlers if needed
    return () => {
      removers.forEach(r => r && r());
    };
  }

  return {
    init,
    _parseBracketContent: parseBracketContent, // exported for testing/debugging
  };
})();

// Export for module systems if present
if (typeof module !== 'undefined' && module.exports) module.exports = Variantish;
if (typeof window !== 'undefined') window.Variantish = Variantish;
