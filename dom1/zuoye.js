window.dom = {
  //查找标签
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  //样式
  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(div, 'color', red)
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //dom.style(div,'color')
        return node.style[name];
      } else if (name instanceof Object) {
        //dom.style(div,{color: red});
        const object = name;
        for (let key in Object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  //遍历标签
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
