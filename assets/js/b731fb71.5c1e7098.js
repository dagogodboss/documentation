(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(222)),i={title:"Data Caching"},c={unversionedId:"features/data-caching",id:"version-9.x/features/data-caching",isDocsHomePage:!1,title:"Data Caching",description:"- Enable / Disable Eloquent Query Caching",source:"@site/versioned_docs/version-9.x/features/data-caching.md",slug:"/features/data-caching",permalink:"/docs/features/data-caching",editUrl:"https://github.com/apiato/documentation/versioned_docs/version-9.x/features/data-caching.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",sidebar:"version-9.x/docs",previous:{title:"Requests Monitor",permalink:"/docs/features/requests-monitor"},next:{title:"Pagination",permalink:"/docs/features/pagination"}},s=[{value:"Enable / Disable Eloquent Query Caching",id:"enable-disable-eloquent-query-caching",children:[]},{value:"Change different caching settings",id:"change-different-caching-settings",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#change-different-caching-settings"},"Change different caching settings"))),Object(o.b)("h2",{id:"enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"By default caching is disabled.")),Object(o.b)("p",null,"To enable it, go to ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/repository.php")," config file and set ",Object(o.b)("inlineCode",{parentName:"p"},"cache")," > ",Object(o.b)("inlineCode",{parentName:"p"},"enabled  => true"),", or set it from the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file using ",Object(o.b)("inlineCode",{parentName:"p"},"ELOQUENT_QUERY_CACHE"),"."),Object(o.b)("p",null,"More details can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"here"),"."),Object(o.b)("p",null,"Users can skip the query caching and request new data by passing specific parameter to the Endpoint. Checkout the Query parameters page."),Object(o.b)("h2",{id:"change-different-caching-settings"},"Change different caching settings"),Object(o.b)("p",null,"You can use different cache setting for each repository."),Object(o.b)("p",null,"To set cache settings on each repository, first the caching must be enabled, second you need to set some properties on the repository class to override the default values."),Object(o.b)("p",null,"For an example look at the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Countries/Data/Repositories/CountryRepository.php")," class. For more details about all the properties refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"the L5 repository package documentation"),"."),Object(o.b)("p",null,"Note: you don't need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"CacheableRepository")," trait or implement the ",Object(o.b)("inlineCode",{parentName:"p"},"CacheableInterface")," since they both exist on the Abstract repository class (",Object(o.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),")."))}l.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);