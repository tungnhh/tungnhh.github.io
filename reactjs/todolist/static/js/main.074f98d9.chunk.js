(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),i=a(7),c=a.n(i),r=(a(12),a(2)),o=a(3),d=a(5),l=a(4),j=(a(13),a(14),a(15),a(0)),h=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={data:t.data},s}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e="";return this.state.data.done||(e=Object(j.jsx)("img",{src:"/reactjs/todolist/assets/iconfinder_Symbol_-_Check_58687.png",alt:"Ho\xe0n th\xe0nh",width:"25",style:{cursor:"pointer"},title:"B\u1ea5m \u0111\u1ec3 ho\xe0n th\xe0nh task",onClick:function(){return t.props.completeTask(t.state.data.id)}})),Object(j.jsxs)("div",{className:"todo aligned",children:[e,Object(j.jsx)("img",{className:this.state.data.done?"noCheckDone":"",src:"/reactjs/todolist/assets/iconfinder_f-cross_256_282471.png",alt:"Ho\xe0n th\xe0nh",width:"15",style:{cursor:"pointer"},title:"B\u1ea5m \u0111\u1ec3 x\xf3a task",onClick:function(){return t.props.deleteTask(t.state.data.id)}}),"\xa0\xa0",Object(j.jsx)("span",{className:this.state.data.done?"done":"",children:this.state.data.name})]})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return{data:t.data}}}]),a}(n.a.Component),u=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).myTaskChangeHandler=function(t){s.setState({taskName:t.target.value})},s.addTask=function(){if(""!==s.state.taskName){var t=s.state.tasks.length,e=s.state.taskName;s.state.tasks.push({id:t,name:e,done:!1}),s.setState({taskName:""})}},s.deleteTask=function(t){var e=s.state.tasks.filter((function(e){return e.id!==t}));s.setState({tasks:e})},s.completeTask=function(t){var e=s.state.tasks;e.forEach((function(e){e.id===t&&(e.done=!0)})),s.setState({tasks:e})},s.state={todoListName:t.name,taskName:"",tasks:[]},s}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"todoList",children:[this.state.todoListName,Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"aligned",children:[Object(j.jsx)("img",{src:"/reactjs/todolist/assets/iconfinder_gnome-app-install_29240 (1).png",alt:"Add Task",width:"25",style:{cursor:"pointer"},title:"B\u1ea5m \u0111\u1ec3 th\xeam task",onClick:function(){return t.addTask()}}),Object(j.jsx)("input",{type:"text",value:this.state.taskName,onChange:this.myTaskChangeHandler})]}),Object(j.jsx)("ul",{style:{paddingLeft:"10px"},children:this.state.tasks.map((function(e,a){return Object(j.jsx)(h,{data:e,deleteTask:t.deleteTask,completeTask:t.completeTask},e.id)}))})]})}}]),a}(n.a.Component),b=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={taskName:"",tasks:[]},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("table",{border:"1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Nhi\u1ec7m v\u1ee5 1"}),Object(j.jsx)("th",{children:"Nhi\u1ec7m v\u1ee5 2"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{style:{verticalAlign:"top"},children:Object(j.jsx)(u,{name:"\u0110i Ch\u1ee3"})}),Object(j.jsx)("td",{style:{verticalAlign:"top"},children:Object(j.jsx)(u,{name:"\u0110i Shopping"})})]})})]})})}}]),a}(n.a.Component),m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),i(t),c(t)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.074f98d9.chunk.js.map