"use strict";(()=>{var e={};e.id=760,e.ids=[760],e.modules={8013:e=>{e.exports=require("mongodb")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},5320:(e,t,n)=>{n.r(t),n.d(t,{config:()=>l,default:()=>d,routeModule:()=>c});var r={};n.r(r),n.d(r,{default:()=>u});var a=n(1802),i=n(7153),o=n(6249),s=n(5011);let u=async(e,t)=>{if("POST"===e.method)try{let n=await s.Z,r=n.db("warung");await r.collection("inventory").insertOne(e.body),t.status(200).json({status:"success"})}catch(e){t.status(500).json({status:"failed"})}},d=(0,o.l)(r,"default"),l=(0,o.l)(r,"config"),c=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/tambah_barang",pathname:"/api/tambah_barang",bundlePath:"",filename:""},userland:r})},5011:(e,t,n)=>{let r;n.d(t,{Z:()=>o});var a=n(8013);if(!process.env.MONGODB_URI)throw Error('Invalid/Missing environment variable: "MONGODB_URI"');let i=process.env.MONGODB_URI;r=new a.MongoClient(i,{}).connect();let o=r},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var n=t(t.s=5320);module.exports=n})();