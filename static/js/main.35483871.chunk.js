(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,t,a){e.exports=a(435)},180:function(e,t,a){},181:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),l=a.n(i),c=(a(180),a(174)),o=a(67),s=a(23),d=a(24),u=a(27),h=a(25),m=a(26),p=(a(181),a(6)),g=a.n(p),b=a(19),f=a(157),v=a.n(f),y=a(158),E=a.n(y),C=a(28),k=a.n(C),D=a(153),O=a.n(D),w=a(159),P=a.n(w),j=a(69),S=a.n(j),x=a(156),B=a.n(x),I=a(51),M=a.n(I),R=a(18),N=a.n(R),A=a(35),q=a.n(A),T=a(155),W=a.n(T),G=a(42);function H(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var F=[{id:"time",numeric:!1,disablePadding:!1,label:"Timestamp"},{id:"game",disablePadding:!1,label:"Game"},{id:"revenue",disablePadding:!1,label:"Revenue"},{id:"impressions",disablePadding:!1,label:"Impressions"},{id:"ecpm",disablePadding:!1,label:"eCPM"}],J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.order,n=t.orderBy;return r.a.createElement(O.a,null,r.a.createElement(S.a,null,F.map(function(t){return r.a.createElement(k.a,{key:t.id,align:t.numeric?"right":"left",padding:t.disablePadding?"none":"default",sortDirection:n===t.id&&a},r.a.createElement(W.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(B.a,{active:n===t.id,direction:a,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(r.a.Component),L=function(e){var t=e.numSelected,a=e.classes;return r.a.createElement(M.a,{className:g()(a.root,Object(o.a)({},a.highlight,t>0))},r.a.createElement("div",{className:a.title},t>0?r.a.createElement(N.a,{color:"inherit",variant:"subtitle1"},t," selected"):r.a.createElement(N.a,{variant:"h6",id:"tableTitle"},"Nutrition")),r.a.createElement("div",{className:a.spacer}),r.a.createElement("div",{className:a.actions}))};L=Object(b.withStyles)(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(G.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(L);var U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={order:"desc",orderBy:"time",selected:[],page:0,rowsPerPage:5},a.handleRequestSort=function(e,t){var n=t,r="desc";a.state.orderBy===t&&"desc"===a.state.order&&(r="asc"),a.setState({order:r,orderBy:n})},a.handleSelectAllClick=function(e){e.target.checked?a.setState(function(e){return{selected:e.data.map(function(e){return e.id})}}):a.setState({selected:[]})},a.handleClick=function(e,t){var n=a.state.selected,r=n.indexOf(t),i=[];-1===r?i=i.concat(n,t):0===r?i=i.concat(n.slice(1)):r===n.length-1?i=i.concat(n.slice(0,-1)):r>0&&(i=i.concat(n.slice(0,r),n.slice(r+1))),a.setState({selected:i})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a.isSelected=function(e){return-1!==a.state.selected.indexOf(e)},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.classes,i=this.state,l=i.order,c=i.orderBy,o=i.selected,s=i.rowsPerPage,d=i.page,u=s-Math.min(s,a.length-d*s);return r.a.createElement(q.a,{className:n.root},r.a.createElement(L,{numSelected:o.length}),r.a.createElement("div",{className:n.tableWrapper},r.a.createElement(v.a,{className:n.table,"aria-labelledby":"tableTitle"},r.a.createElement(J,{order:l,orderBy:c,onRequestSort:this.handleRequestSort,rowCount:a.length}),r.a.createElement(E.a,null,function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(a,function(e,t){return"desc"===e?function(e,a){return H(e,a,t)}:function(e,a){return-H(e,a,t)}}(l,c)).slice(d*s,d*s+s).map(function(t){var a=e.isSelected(t.id);return r.a.createElement(S.a,{hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,key:t.id,selected:a},r.a.createElement(k.a,{component:"th",scope:"row",padding:"default"},t.time),r.a.createElement(k.a,{align:"left"},t.game),r.a.createElement(k.a,{align:"left"},t.revenue),r.a.createElement(k.a,{align:"left"},t.impressions),r.a.createElement(k.a,{align:"left"},t.ecpm))}),u>0&&r.a.createElement(S.a,{style:{height:49*u}},r.a.createElement(k.a,{colSpan:6}))))),r.a.createElement(P.a,{rowsPerPageOptions:[5,10],component:"div",count:a.length,rowsPerPage:s,page:d,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(r.a.Component),X=Object(b.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:1020},tableWrapper:{overflowX:"auto"}}})(U),Z=a(167),z=a.n(Z),K=a(173),Q=a(70),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleStartDateChange=function(e){a.props.onChange("startDate",e)},a.handleEndDateChange=function(e){a.props.onChange("endDate",e)},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Q.b,{utils:K.a},r.a.createElement(z.a,{container:!0,className:e.grid,justify:"space-around"},r.a.createElement(Q.a,{keyboard:!0,clearable:!0,variant:"outlined",disableFuture:!0,autoOk:!0,margin:"normal",label:"Start Date",maxDate:this.props.endDate,value:this.props.startDate,onChange:this.handleStartDateChange,format:"dd/MM/yyyy"}),r.a.createElement(Q.a,{keyboard:!0,clearable:!0,variant:"outlined",disableFuture:!0,autoOk:!0,margin:"normal",label:"End Date",minDate:this.props.startDate,value:this.props.endDate,onChange:this.handleEndDateChange,format:"dd/MM/yyyy"})))}}]),t}(r.a.Component),Y=Object(b.withStyles)({grid:{width:"100%"}})(V),$=a(68),_=a(168),ee=a(170),te=a.n(ee),ae=a(171),ne=a.n(ae),re=a(31),ie=a.n(re),le=a(172),ce=a.n(le),oe=a(92),se=a.n(oe),de=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={anchorEl:null,selectedIndex:0,cd:[],s:new Date,e:new Date,data:function(e){e.getContext("2d");return{datasets:[{label:"eCPM",pointBorderColor:"#000",pointBackgroundColor:"#000",pointBorderWidth:1,pointHoverRadius:4,pointHoverBorderWidth:1,pointRadius:1,fill:!0,borderWidth:2,data:a.state.cd}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{bodySpacing:4,mode:"nearest",intersect:0,position:"nearest",xPadding:10,yPadding:10,caretPadding:10},responsive:!0,scales:{yAxes:[{display:1,ticks:{display:!0,beginAtZero:!0}}],xAxes:[{type:"time",time:{unit:"day"},distribution:"linear",bounds:"data",display:1,ticks:{display:!0,source:"auto"}}]},layout:{padding:{left:0,right:8,top:16,bottom:8}}}},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuItemClick=function(e,t,n,r){a.setState({selectedIndex:t,anchorEl:null});var i=n.filter(function(e){return e.game===r[t]}),l=[],c=0;i.map(function(e){l[c]={x:new Date(e.timestamp+" 00:00:00.0"),y:e.ecpm},c+=1}),a.setState({cd:l})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleMenuItemClick=a.handleMenuItemClick.bind(Object($.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.anchorEl,n=t.selectedIndex,i=this.props.games;return r.a.createElement(te.a,null,r.a.createElement(ne.a,{title:"eCPM Trendline",action:r.a.createElement("div",null,0===i.length?null:r.a.createElement(ie.a,{"aria-owns":a?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},i[this.state.selectedIndex]),r.a.createElement(ce.a,{id:"lock-menu",anchorEl:a,open:Boolean(a),onClose:this.handleClose},i.map(function(t,a){return r.a.createElement(se.a,{key:t,disabled:0===a,selected:a===n,onClick:function(t){return e.handleMenuItemClick(t,a,e.props.chartData,e.props.games)}},t)})))}),r.a.createElement(_.a,{data:this.state.data,options:this.state.options,"max-height":300}))}}]),t}(r.a.Component),ue=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={startDate:new Date,endDate:new Date,data:[],tableData:[],uniqueGames:[],chartData:[],isLoading:!0},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"onChange",value:function(e,t){this.setState(Object(o.a)({},e,t))}},{key:"componentDidUpdate",value:function(){var e=this;fetch("http://www.mocky.io/v2/5cd04a20320000442200fc10").then(function(e){return e.json()}).then(function(t){var a=[],n=0,r=[];t.map(function(t){if(new Date(t.timestamp+" 00:00:00.0")>=e.state.startDate&&new Date(t.timestamp+" 00:00:00.0")<=e.state.endDate){var i=t.revenue/t.impressions*1e3;r.push(t),r[n].ecpm=i,a[n]={id:n+1,time:t.timestamp,game:t.game,revenue:t.revenue,impressions:t.impressions,ecpm:i},n+=1}});var i=["Select Game"].concat(Object(c.a)(new Set(r.map(function(e){return e.game}))));e.setState({uniqueGames:i,tableData:a,data:r})}).catch(function(t){return e.setState({error:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,{startDate:this.state.startDate,endDate:this.state.endDate,onChange:this.onChange.bind(this)}),r.a.createElement(de,{games:this.state.uniqueGames,chartData:this.state.data}),r.a.createElement(X,{data:this.state.tableData}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(ue,null),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.35483871.chunk.js.map