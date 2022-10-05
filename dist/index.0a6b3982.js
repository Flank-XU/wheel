//创建节点
const div = dom.create("<div>newDiv</div>");
console.log(div);
//在节点后添加同级节点
const after = dom.after(test, div);
//在节点前创建节点
const before = dom.before(test2, div);
const div3 = dom.create("<div id= 'parent'></div>");
dom.wrap(test, div3);
const nodes = dom.empty(window.empty);
console.log(nodes);
dom.attr(test, "title", "Hi, I am Frank");
const title = dom.attr(test, "title");
console.log(title);
dom.text(test, "你好，这是新的内容");
dom.text(test);

//# sourceMappingURL=index.0a6b3982.js.map
