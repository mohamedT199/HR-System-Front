"use strict";(self.webpackChunkFront=self.webpackChunkFront||[]).push([[359],{8897:(M,g,i)=>{i.d(g,{_:()=>e});var l=i(6895),r=i(8256);let e=(()=>{class d{}return d.\u0275fac=function(v){return new(v||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({imports:[l.ez]}),d})()},5381:(M,g,i)=>{i.d(g,{c:()=>r});var l=i(8256);let r=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-footer"]],decls:1,vars:0,consts:[[1,"footer"]],template:function(m,v){1&m&&l._UZ(0,"div",0)},styles:[".footer[_ngcontent-%COMP%]{z-index:-1;position:fixed;left:0;bottom:0;width:100%;height:20%;background-image:linear-gradient(180deg,white,#D21312 100%);text-align:center}"]}),e})()},5925:(M,g,i)=>{i.d(g,{S:()=>_});var l=i(529),r=i(8256),e=i(5641),d=i(805);function m(c,p){1&c&&r._UZ(0,"img",4)}function v(c,p){}let _=(()=>{class c{constructor(h){this.http=h,this.items=[]}addHeaders(){return new l.WM({"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,HEAD,OPTIONS",Authorization:localStorage.getItem("token")+""})}ngOnInit(){this.http.get("/api/userroles",{headers:this.addHeaders()}).subscribe(h=>{this.items=[{label:"Home",icon:"fas fa-home",routerLink:"/home"},{label:"Attendance",icon:"fas fa-clock",routerLink:"/attendance"},{label:"Requests",icon:"fas fa-code-pull-request",items:[{label:"My requests",icon:"fas fa-user",routerLink:"/requests/my/accepted"},{label:"Vacation request",icon:"fas fa-refresh",routerLink:"/requests/vacation"},{label:"Work From Home",icon:"fas fa-home",routerLink:"/requests/workfromhome"},{label:"Permission",icon:"fas fa-lock",routerLink:"/requests/permission"},{label:"Work leave",icon:"fas fa-mail-reply",routerLink:"/requests/workleave"}]},{label:"Setting",icon:"fas fa-cog",routerLink:"/setting"},{label:"Help",icon:"fas fa-question-circle"}],"HR"===h[0].name?this.items.push({label:"Employees Module",icon:"fas fa-users",items:[{label:"Add employee",icon:"fas fa-user-plus",routerLink:["/hr/addnewemployee"]},{label:"All Employees",icon:"fas fa-users",routerLink:["/hr/allusers"]}]}):"Manager"===h[0].name&&this.items.push({label:"Admin MOdule"},{label:"Employee Requests",icon:"fas fa-users"})})}}return c.\u0275fac=function(h){return new(h||c)(r.Y36(l.eN))},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-navbar"]],decls:4,vars:1,consts:[[1,"card"],[3,"model"],["pTemplate","start"],["pTemplate","end"],["src","assets/images/quadra%20icon.png","height","40",1,"mr-2"]],template:function(h,C){1&h&&(r.TgZ(0,"div",0)(1,"p-menubar",1),r.YNc(2,m,1,0,"ng-template",2),r.YNc(3,v,0,0,"ng-template",3),r.qZA()()),2&h&&(r.xp6(1),r.Q6J("model",C.items))},dependencies:[e.nm,d.jx],styles:["[_nghost-%COMP%]     .p-menuitem-link-active{border-bottom:2px solid #D21312}"]}),c})()},359:(M,g,i)=>{i.r(g),i.d(g,{HomeModule:()=>O});var l=i(6895),r=i(2019),e=i(8256),d=i(529),m=i(805);let v=(()=>{class o{constructor(t,n){this.http=t,this.messageService=n}addHeaders(){return new d.WM({"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,HEAD,OPTIONS",Authorization:localStorage.getItem("token")+""})}signIn(){localStorage.getItem("token"),console.log(localStorage.getItem("token")),this.http.post("api/attendant/enter",{},{headers:this.addHeaders()}).subscribe(n=>{this.messageService.add({severity:"success",summary:"Sign In Successfully",detail:"Wlecome "+n.user.name})},n=>{this.messageService.add({severity:"error",summary:"Erorr",detail:"Sorry there was an erorr please try again later"})})}signOut(){this.http.post("api/attendant/leave",{},{headers:this.addHeaders()}).subscribe(t=>{this.messageService.add({severity:"success",summary:"Sign Out Successfully",detail:"Bye Bye "+t.user.name})},t=>{this.messageService.add({severity:"error",summary:"Erorr",detail:"Sorry there was an erorr please try again later"})})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(d.eN),e.LFG(m.ez))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var _=i(5925),c=i(5381),p=i(433);function h(o,u){if(1&o&&(e.O4$(),e.TgZ(0,"text",5),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.uIk("x",50)("y",57)("fill",t.textColor)("name",t.name),e.xp6(1),e.Oqu(t.valueToDisplay())}}const C={provide:p.JU,useExisting:(0,e.Gpc)(()=>y),multi:!0};let y=(()=>{class o{constructor(t,n,a,s){this.document=t,this.renderer=n,this.cd=a,this.el=s,this.valueColor="var(--primary-color, Black)",this.rangeColor="var(--surface-border, LightGray)",this.textColor="var(--text-color-secondary, Black)",this.valueTemplate="{value}",this.size=100,this.step=1,this.min=0,this.max=100,this.strokeWidth=14,this.showValue=!0,this.readonly=!1,this.onChange=new e.vpe,this.radius=40,this.midX=50,this.midY=50,this.minRadians=4*Math.PI/3,this.maxRadians=-Math.PI/3,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}mapRange(t,n,a,s,f){return(t-n)*(f-s)/(a-n)+s}onClick(t){!this.disabled&&!this.readonly&&this.updateValue(t.offsetX,t.offsetY)}updateValue(t,n){let f=Math.atan2(this.size/2-n,t-this.size/2),R=-Math.PI/2-Math.PI/6;this.updateModel(f,R)}updateModel(t,n){let a;if(t>this.maxRadians)a=this.mapRange(t,this.minRadians,this.maxRadians,this.min,this.max);else{if(!(t<n))return;a=this.mapRange(t+2*Math.PI,this.minRadians,this.maxRadians,this.min,this.max)}let s=Math.round((a-this.min)/this.step)*this.step+this.min;this.value=s,this.onModelChange(this.value),this.onChange.emit(this.value)}onMouseDown(t){if(!this.disabled&&!this.readonly){const n=this.document.defaultView||"window";this.windowMouseMoveListener=this.renderer.listen(n,"mousemove",this.onMouseMove.bind(this)),this.windowMouseUpListener=this.renderer.listen(n,"mouseup",this.onMouseUp.bind(this)),t.preventDefault()}}onMouseUp(t){!this.disabled&&!this.readonly&&(this.windowMouseMoveListener&&(this.windowMouseMoveListener(),this.windowMouseUpListener=null),this.windowMouseUpListener&&(this.windowMouseUpListener(),this.windowMouseMoveListener=null),t.preventDefault())}onTouchStart(t){if(!this.disabled&&!this.readonly){const n=this.document.defaultView||"window";this.windowTouchMoveListener=this.renderer.listen(n,"touchmove",this.onTouchMove.bind(this)),this.windowTouchEndListener=this.renderer.listen(n,"touchend",this.onTouchEnd.bind(this)),t.preventDefault()}}onTouchEnd(t){!this.disabled&&!this.readonly&&(this.windowTouchMoveListener(),this.windowTouchEndListener(),this.windowTouchMoveListener=null,this.windowTouchEndListener=null,t.preventDefault())}onMouseMove(t){!this.disabled&&!this.readonly&&(this.updateValue(t.offsetX,t.offsetY),t.preventDefault())}onTouchMove(t){if(!this.disabled&&!this.readonly&&1==t.touches.length){const n=this.el.nativeElement.children[0].getBoundingClientRect(),a=t.targetTouches.item(0);this.updateValue(a.clientX-n.left,a.clientY-n.top)}}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}containerClass(){return{"p-knob p-component":!0,"p-disabled":this.disabled}}rangePath(){return`M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`}valuePath(){return`M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`}zeroRadians(){return this.mapRange(this.min>0&&this.max>0?this.min:0,this.min,this.max,this.minRadians,this.maxRadians)}valueRadians(){return this.mapRange(this._value,this.min,this.max,this.minRadians,this.maxRadians)}minX(){return this.midX+Math.cos(this.minRadians)*this.radius}minY(){return this.midY-Math.sin(this.minRadians)*this.radius}maxX(){return this.midX+Math.cos(this.maxRadians)*this.radius}maxY(){return this.midY-Math.sin(this.maxRadians)*this.radius}zeroX(){return this.midX+Math.cos(this.zeroRadians())*this.radius}zeroY(){return this.midY-Math.sin(this.zeroRadians())*this.radius}valueX(){return this.midX+Math.cos(this.valueRadians())*this.radius}valueY(){return this.midY-Math.sin(this.valueRadians())*this.radius}largeArc(){return Math.abs(this.zeroRadians()-this.valueRadians())<Math.PI?0:1}sweep(){return this.valueRadians()>this.zeroRadians()?0:1}valueToDisplay(){return this.valueTemplate.replace("{value}",this._value.toString())}get _value(){return null!=this.value?this.value:this.min}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.K0),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(e.SBq))},o.\u0275cmp=e.Xpm({type:o,selectors:[["p-knob"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",valueColor:"valueColor",rangeColor:"rangeColor",textColor:"textColor",valueTemplate:"valueTemplate",name:"name",size:"size",step:"step",min:"min",max:"max",strokeWidth:"strokeWidth",disabled:"disabled",showValue:"showValue",readonly:"readonly"},outputs:{onChange:"onChange"},features:[e._Bn([C])],decls:5,vars:15,consts:[[3,"ngClass","ngStyle"],["viewBox","0 0 100 100",3,"click","mousedown","mouseup","touchstart","touchend"],[1,"p-knob-range"],[1,"p-knob-value"],["text-anchor","middle","class","p-knob-text",4,"ngIf"],["text-anchor","middle",1,"p-knob-text"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.O4$(),e.TgZ(1,"svg",1),e.NdJ("click",function(s){return n.onClick(s)})("mousedown",function(s){return n.onMouseDown(s)})("mouseup",function(s){return n.onMouseUp(s)})("touchstart",function(s){return n.onTouchStart(s)})("touchend",function(s){return n.onTouchEnd(s)}),e._UZ(2,"path",2)(3,"path",3),e.YNc(4,h,2,5,"text",4),e.qZA()()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass",n.containerClass())("ngStyle",n.style),e.xp6(1),e.Udp("width",n.size+"px")("height",n.size+"px"),e.xp6(1),e.uIk("d",n.rangePath())("stroke-width",n.strokeWidth)("stroke",n.rangeColor),e.xp6(1),e.uIk("d",n.valuePath())("stroke-width",n.strokeWidth)("stroke",n.valueColor),e.xp6(1),e.Q6J("ngIf",n.showValue))},dependencies:[l.mk,l.O5,l.PC],styles:["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-name:dash-frame;animation-fill-mode:forwards;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}\n"],encapsulation:2,changeDetection:0}),o})(),T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez]}),o})();var b=i(2453);const k=[{path:"",component:(()=>{class o{constructor(t,n){this.homeService=t,this.messageService=n,this.value=10}signIn(){this.homeService.signIn()}signOut(){this.homeService.signOut()}ngAfterViewInit(){this.messageService.add({severity:"success",summary:"Success",detail:"You Are Logged In Successfully"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v),e.Y36(m.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:38,vars:14,consts:[[1,"container-fluid"],[1,"row",2,"margin-top","10vh"],[1,"col-md-8","row",2,"margin-left","20px"],[1,"col-3","knob","text-center",2,"border-color","green"],[1,"d-flex","justify-content-center",2,"height","auto"],["valueColor","green",3,"ngModel","strokeWidth","readonly","min","max","ngModelChange"],[1,"col-3","knob","text-center",2,"border-color","#D21312"],["valueColor","#D21312",3,"ngModel","strokeWidth","readonly","ngModelChange"],[1,"col-3","text-center","knob",2,"border-color","yellow"],["valueColor","yellow",3,"ngModel","strokeWidth","readonly","ngModelChange"],[1,"col-3","text-center","knob",2,"border-color","lightblue"],["valueColor","lightblue",3,"ngModel","strokeWidth","readonly","ngModelChange"],[1,"col-md-4","row"],[1,"card","text-center","container","d-block","col-12",3,"click"],[1,"card-body"],[1,"lead","display-6"],[1,"fas","fa-sign-in"],[1,"card","text-center","container","d-block","col-12",2,"margin-top","10vh",3,"click"],[1,"fas","fa-sign-out"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar")(1,"p-toast"),e.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"p-knob",5),e.NdJ("ngModelChange",function(s){return n.value=s}),e.qZA()(),e.TgZ(8,"p"),e._uU(9,"Casual vacation"),e.qZA()(),e.TgZ(10,"div",6)(11,"div",4)(12,"p-knob",7),e.NdJ("ngModelChange",function(s){return n.value=s}),e.qZA()(),e.TgZ(13,"p"),e._uU(14,"Sick leave"),e.qZA()(),e.TgZ(15,"div",8)(16,"div",4)(17,"p-knob",9),e.NdJ("ngModelChange",function(s){return n.value=s}),e.qZA()(),e.TgZ(18,"div")(19,"p"),e._uU(20,"Unpaid leave"),e.qZA()()(),e.TgZ(21,"div",10)(22,"div",4)(23,"p-knob",11),e.NdJ("ngModelChange",function(s){return n.value=s}),e.qZA()(),e.TgZ(24,"p"),e._uU(25,"Annual vacation"),e.qZA()()(),e.TgZ(26,"div",12)(27,"div",13),e.NdJ("click",function(){return n.signIn()}),e.TgZ(28,"div",14)(29,"p",15),e._UZ(30,"i",16),e._uU(31," Sign In "),e.qZA()()(),e.TgZ(32,"div",17),e.NdJ("click",function(){return n.signOut()}),e.TgZ(33,"div",14)(34,"p",15),e._uU(35,"Sign Out "),e._UZ(36,"i",18),e.qZA()()()()()(),e._UZ(37,"app-footer")),2&t&&(e.xp6(7),e.Q6J("ngModel",n.value)("strokeWidth",5)("readonly",!0)("min",0)("max",25),e.xp6(5),e.Q6J("ngModel",n.value)("strokeWidth",5)("readonly",!0),e.xp6(5),e.Q6J("ngModel",n.value)("strokeWidth",5)("readonly",!0),e.xp6(6),e.Q6J("ngModel",n.value)("strokeWidth",5)("readonly",!0))},dependencies:[_.S,c.c,y,p.JJ,p.On,b.FN],styles:[".card[_ngcontent-%COMP%]{box-shadow:2px 2px 2px 1px #d21312;cursor:pointer;transition:box-shadow 1s}.card[_ngcontent-%COMP%]:hover{box-shadow:4px 4px 4px 4px #d21312}.knob[_ngcontent-%COMP%]{border:2px solid;border-radius:20px;height:150px;margin-right:20px;width:auto}@media (max-width: 768px){.lead[_ngcontent-%COMP%]{font-size:16px}.knob[_ngcontent-%COMP%]{width:80%;margin-bottom:20px}.card[_ngcontent-%COMP%]{margin-left:10px}}"]}),o})()}];let w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.Bz.forChild(k),r.Bz]}),o})();var x=i(4649),A=i(8897);let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,w,x.W,A._,T,p.u5,b.EV]}),o})()}}]);