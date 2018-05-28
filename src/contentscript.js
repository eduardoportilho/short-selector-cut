if (window == top) {
  window.addEventListener('keyup', handleKeyPress, false);
}

const SELECTOR_CUTS = [
  {
    info: 'Ctrl + shift + C => Student name',
    ctrl: true,
    shift: true,
    meta: false,
    key: 'C',
    selector: '[class*="header--title"]'
  }
]

//debugger;
function handleKeyPress(e) {
  SELECTOR_CUTS.find(selectorCut => {
    if (
      !selectorCut.ctrl || (selectorCut.ctrl && e.ctrlKey) &&
      !selectorCut.shift || (selectorCut.shift && e.shiftKey) &&
      !selectorCut.meta || (selectorCut.meta && e.metaKey) &&
      selectorCut.key === e.shiftKey
    ) {
      const content = document.querySelector(selectorCut.selector)
      content && copyToClipboard(content.innerHTML)
      return true
    }
  })
}

function copyToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}