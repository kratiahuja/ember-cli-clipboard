"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP,r=n.name,l=n.version;e["default"]=t["default"].extend({version:l,name:r})}),define("dummy/components/copy-button",["exports","ember-cli-clipboard/components/copy-button"],function(e,t){e["default"]=t["default"]}),define("dummy/components/flash-message",["exports","ember-cli-flash/components/flash-message"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({sendSuccessMessage:function(e){t["default"].get(this,"flashMessages").success("Success! Text copied to clipboard.",e)},sendErrorMessage:function(e){/iPhone|iPad/i.test(navigator.userAgent)?(e.message="iOS not supported :(",e.type="warn"):/Mac/i.test(navigator.userAgent)?(e.message="Press ⌘-c to copy (Safari)",e.type="info"):(e.message="Press Ctrl-c to copy",e.type="info"),t["default"].get(this,"flashMessages").add(e)},actions:{copyTargetSuccess:function(){this.sendSuccessMessage({copyTarget:!0})},copyTargetError:function(){this.sendErrorMessage({copyTarget:!0})},copyDirectSuccess:function(){this.sendSuccessMessage({copyDirect:!0})},copyDirectError:function(){this.sendErrorMessage({copyDirect:!0})}}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/flash/object",["exports","ember-cli-flash/flash/object"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/fa-icon",["exports","ember-cli-font-awesome/helpers/fa-icon"],function(e,t){e["default"]=t["default"],e.faIcon=t.faIcon}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){var n=a["default"].APP,r=n.name,l=n.version;e["default"]={name:"App Version",initialize:t["default"](r,l)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/initializers/flash-messages",["exports","dummy/config/environment"],function(e,t){function a(e,a){var n=t["default"].flashMessageDefaults,r=n.injectionFactories;a.register("config:flash-messages",n,{instantiate:!1}),a.inject("service:flash-messages","flashMessageDefaults","config:flash-messages"),r.forEach(function(e){a.inject(e,"flashMessages","service:flash-messages")})}e.initialize=a,e["default"]={name:"flash-messages",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/services/flash-messages",["exports","ember-cli-flash/services/flash-messages"],function(e,t){e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:23,column:10},end:{line:25,column:10}},moduleName:"dummy/templates/application.hbs"},arity:2,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            ");e.appendChild(t,a);var a=e.createElement("p"),n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[1]),0,0),n},statements:[["content","flash.message",["loc",[null,[24,15],[24,32]]]]],locals:["component","flash"],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:22,column:8},end:{line:26,column:8}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","flash-message",[],["flash",["subexpr","@mut",[["get","flash",["loc",[null,[23,33],[23,38]]]]],[],[]]],0,null,["loc",[null,[23,10],[25,28]]]]],locals:[],templates:[e]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:21,column:6},end:{line:27,column:6}},moduleName:"dummy/templates/application.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","if",[["get","flash.copyDirect",["loc",[null,[22,14],[22,30]]]]],[],0,null,["loc",[null,[22,8],[26,15]]]]],locals:["flash"],templates:[e]}}(),t=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:34,column:10},end:{line:40,column:10}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,a),n},statements:[["inline","fa-icon",["copy"],["size",2],["loc",[null,[39,12],[39,37]]]]],locals:[],templates:[]}}(),a=function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:57,column:10},end:{line:59,column:10}},moduleName:"dummy/templates/application.hbs"},arity:2,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            ");e.appendChild(t,a);var a=e.createElement("p"),n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[1]),0,0),n},statements:[["content","flash.message",["loc",[null,[58,15],[58,32]]]]],locals:["component","flash"],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:56,column:8},end:{line:60,column:8}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","flash-message",[],["flash",["subexpr","@mut",[["get","flash",["loc",[null,[57,33],[57,38]]]]],[],[]]],0,null,["loc",[null,[57,10],[59,28]]]]],locals:[],templates:[e]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:55,column:6},end:{line:61,column:6}},moduleName:"dummy/templates/application.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","if",[["get","flash.copyTarget",["loc",[null,[56,14],[56,30]]]]],[],0,null,["loc",[null,[56,8],[60,15]]]]],locals:["flash"],templates:[e]}}(),n=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:68,column:8},end:{line:74,column:8}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("          Copy URL\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:96,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("header"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","image");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("img");e.setAttribute(r,"src","clipboard-3d4fe5118fded46bf968a4ef200b470c.png"),e.setAttribute(r,"alt","clipboard"),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","install-wrapper");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("code");e.setAttribute(l,"class","install-cmd");var d=e.createTextNode("ember install ember-cli-clipboard");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h2"),r=e.createTextNode("A simple ember wrapper around ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","http://zenorocha.github.io/clipboard.js");var l=e.createTextNode("clipboard.js");e.appendChild(r,l),e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","gh-link");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/jkusa/ember-cli-clipboard");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("span"),d=e.createTextNode(" View On Github");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("main"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("section"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","container copy-direct");var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("      ");e.appendChild(r,l);var l=e.createElement("p");e.setAttribute(l,"class","container-header");var d=e.createTextNode("\n        Set Text Directly\n      ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","container-body");var d=e.createTextNode("\n        ");e.appendChild(l,d);var d=e.createElement("div");e.setAttribute(d,"class","install-wrapper");var i=e.createTextNode("\n          ");e.appendChild(d,i);var i=e.createElement("code");e.setAttribute(i,"class","install-cmd");var o=e.createTextNode("ember install ember-cli-clipboard");e.appendChild(i,o),e.appendChild(d,i);var i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("        ");e.appendChild(d,i),e.appendChild(l,d);var d=e.createTextNode("\n      ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","container-code highlight");var d=e.createTextNode("\n        ");e.appendChild(l,d);var d=e.createElement("pre"),i=e.createElement("code");e.setAttribute(i,"class","hbs");var o=e.createTextNode('{{#copy-button\n  clipboardText="ember install ember-cli-clipboard"\n  success="success"\n  error="error"\n}}');e.appendChild(i,o),e.appendChild(d,i),e.appendChild(l,d);var d=e.createTextNode("\n      ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("section"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","container copy-target");var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("      ");e.appendChild(r,l);var l=e.createElement("p");e.setAttribute(l,"class","container-header");var d=e.createTextNode("\n        Get Text From Target Element\n      ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","container-body");var d=e.createTextNode("\n        ");e.appendChild(l,d);var d=e.createElement("input");e.setAttribute(d,"id","url"),e.setAttribute(d,"type","text"),e.setAttribute(d,"value","https://github.com/jkusa/ember-cli-clipboard"),e.appendChild(l,d);var d=e.createTextNode("\n        ");e.appendChild(l,d);var d=e.createElement("div");e.setAttribute(d,"class","container-body-ctrls");var i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("        ");e.appendChild(d,i),e.appendChild(l,d);var d=e.createTextNode("\n      ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","container-code highlight");var d=e.createTextNode("\n        ");e.appendChild(l,d);var d=e.createElement("pre"),i=e.createElement("code");e.setAttribute(i,"class","hbs");var o=e.createTextNode('<input id="url" type="text" value="https://github.com/jkusa/ember-cli-clipboard">\n');e.appendChild(i,o);var o=e.createTextNode('{{#copy-button\n  clipboardTarget="#url"\n  success="success"\n  error="error"\n}}\n  Copy URL\n');e.appendChild(i,o);var o=e.createTextNode("{{/copy-button}}");e.appendChild(i,o),e.appendChild(d,i),e.appendChild(l,d);var d=e.createTextNode("\n      ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("footer"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","profile-link");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/jkusa");var l=e.createTextNode("@jkusa");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[2]),r=e.childAt(n,[1,1]),l=e.childAt(n,[3,1]),d=new Array(4);return d[0]=e.createMorphAt(r,1,1),d[1]=e.createMorphAt(e.childAt(r,[5,1]),3,3),d[2]=e.createMorphAt(l,1,1),d[3]=e.createMorphAt(e.childAt(l,[5,3]),1,1),d},statements:[["block","each",[["get","flashMessages.arrangedQueue",["loc",[null,[21,14],[21,41]]]]],[],0,null,["loc",[null,[21,6],[27,15]]]],["block","copy-button",[],["clipboardText","ember install ember-cli-clipboard","success","copyDirectSuccess","error","copyDirectError"],1,null,["loc",[null,[34,10],[40,26]]]],["block","each",[["get","flashMessages.arrangedQueue",["loc",[null,[55,14],[55,41]]]]],[],2,null,["loc",[null,[55,6],[61,15]]]],["block","copy-button",[],["clipboardTarget","#url","success","copyTargetSuccess","error","copyTargetError"],3,null,["loc",[null,[68,8],[74,24]]]]],locals:[],templates:[e,t,a,n]}}())}),define("dummy/utils/computed",["exports","ember-cli-flash/utils/computed"],function(e,t){e["default"]=t["default"]}),define("dummy/utils/object-compact",["exports","ember-cli-flash/utils/object-compact"],function(e,t){e["default"]=t["default"]}),define("dummy/utils/object-only",["exports","ember-cli-flash/utils/object-only"],function(e,t){e["default"]=t["default"]}),define("dummy/utils/object-without",["exports","ember-cli-flash/utils/object-without"],function(e,t){e["default"]=t["default"]}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-clipboard",version:"0.2.0+7acf5c9a"});