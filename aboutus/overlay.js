google.maps.__gjsload__('overlay', function(_){var Iu=_.oa("b"),Ju=_.l(),Ku=function(){var a=this.hg;if(this.getPanes()){if(this.getProjection()){if(!a.b&&this.onAdd)this.onAdd();a.b=!0;this.draw()}}else{if(a.b)if(this.onRemove)this.onRemove();else this.remove();a.b=!1}},Lu=function(a){a.hg=a.hg||new Ju;return a.hg},Mu=function(a){_.Df.call(this);this.pa=(0,_.y)(Ku,a)},Pu=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.pg()}if(b&&b instanceof _.Hd){var d=b.__gm;d.overlayLayer?a.__gmop=new Nu(b,a,d.overlayLayer):
d.b.then(function(c){c=c.xa;var e=new Ou(b,c);c.qb(e);d.overlayLayer=e;Pu(a)})}}},Nu=function(a,b,c){this.map=a;this.la=b;this.wm=c;this.Pf=!1;_.X(this.map,"Ox");_.Fm("Ox","-p",this.la);c.f.push(this);c.b&&Qu(this,c.b);c.j.Ac()},Qu=function(a,b){a.la.get("projection")!=b&&(a.la.bindTo("panes",a.map.__gm),a.la.set("projection",b))},Ou=function(a,b){this.l=a;this.j=b;this.b=null;this.f=[]};_.A(Iu,_.N);
Iu.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.F(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.b:null))};_.A(Mu,_.Df);Nu.prototype.draw=function(){this.Pf||(this.Pf=!0,this.la.onAdd&&this.la.onAdd());this.la.draw&&this.la.draw()};Nu.prototype.pg=function(){_.Gm("Ox","-p",this.la);this.la.unbindAll();this.la.set("panes",null);this.la.set("projection",null);_.Za(this.wm.f,this);this.la.onRemove?this.la.onRemove():this.la.remove();this.Pf=!1};Ou.prototype.ka=_.l();
Ou.prototype.Kb=function(a,b,c,d,e,f){var g=this.b=this.b||new _.am(this.l,this.j,_.l());g.Kb(a,b,c,d,e,f);a=_.Aa(this.f);for(b=a.next();!b.done;b=a.next())b=b.value,Qu(b,g),b.draw()};_.ce("overlay",{dk:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.Hd||a.__gmop)Pu(a);else{b=a.getMap();var c=Lu(a),d=c.Ol;c.Ol=b;d&&(c=Lu(a),(d=c.ca)&&d.unbindAll(),(d=c.fi)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.D(c.O,_.M.removeListener),c.O=null,c.Yb&&(c.Yb.pa(),c.Yb=null),_.Gm("Ox","-p",a));if(b){c=Lu(a);d=c.Yb;d||(d=c.Yb=new Mu(a));_.D(c.O||[],_.M.removeListener);var e=c.ca=c.ca||new _.Fk,f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",
f,"projectionCenterQ");e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);e=c.fi=c.fi||new Iu(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=(0,_.y)(d.S,d);c.O=[_.M.addListener(a,"panes_changed",e),_.M.addListener(f,"zoom_changed",e),_.M.addListener(f,"offset_changed",e),_.M.addListener(b,"projection_changed",e),_.M.addListener(f,"projectioncenterq_changed",e),_.M.forward(b,"forceredraw",
d)];d.S();b instanceof _.Hd&&(_.X(b,"Ox"),_.Fm("Ox","-p",a))}}}},Em:function(a){_.vn(a,{ib:function(a){return _.Nm(a.event)},Ja:function(a){return _.Km(a)},ec:function(a){return _.Lm(a)},Ua:function(a){return _.Lm(a)},La:function(a){return _.Mm(a)}}).Gc(!0)},Dm:function(a){a.addEventListener("click",_.Dc);a.addEventListener("contextmenu",_.Dc);a.addEventListener("dblclick",_.Dc);a.addEventListener("mousedown",_.Dc);a.addEventListener("mousemove",_.Dc);a.addEventListener("MSPointerDown",_.Dc);a.addEventListener("pointerdown",
_.Dc);a.addEventListener("touchstart",_.Dc);a.addEventListener("wheel",_.Dc)}});});
