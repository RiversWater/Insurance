

let title = {
  // 当绑定元素插入到 DOM 中。
  bind (el,binding) {
    document.title = el.dataset.title
  },

  update (el,binding) {
    document.title = el.dataset.title
  }
}

export default title;
