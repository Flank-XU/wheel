window.dom = {
  //创建节点
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  //在后边创建同级节点
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  //在前边创建同级节点
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  //新增子节点
  append(parent, node) {
    parent.appendChild(node);
  },
  //新增父亲节点
  wrap(node, parent) {
    dom.before(node, parent);
    dom.after(parent, node);
  },
  //删除节点
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  //删除后代节点 清空子节点
  empty(node) {
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  //读取属性
  attr(node, name, value) {
    //重载
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },

  //读取文本内容
  text(node, string) {
    if (arguments.length === 2) {
      if ("inner Text" in node) {
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if ("inner Text" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  //读取HRML
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  //修改style
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

  class: {
    //添加类
    add(node, className) {
      node.classList.add(className);
    },
    //删除类
    remove(node, className) {
      node.classList.remove(className);
    },
    //是否有这个类
    has(node, className) {
      return node.classList.contains(className);
    },
  },

  //时间监听
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  //删除事件监听
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },
  // 获取标签（一个或多个）
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  //获取父元素
  parent(node) {
    return node.parentNode;
  },
  //获取子元素
  children(node) {
    return node.children;
  },
  //获取兄弟元素
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  //获取下一个元素
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  //获取哥哥节点
  previous(node) {
    let x = node.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  //遍历节点
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  //查询自己在第几个节点
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
