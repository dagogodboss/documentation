(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(8),r=(n(0),n(218)),o={title:"Payments"},c={unversionedId:"additional-features/apiato-containers/payments",id:"additional-features/apiato-containers/payments",isDocsHomePage:!1,title:"Payments",description:"- Installation",source:"@site/docs/additional-features/apiato-containers/payments.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/payments",permalink:"/docs/next/additional-features/apiato-containers/payments",editUrl:"https://github.com/apiato/documentation/tree/master/docs/additional-features/apiato-containers/payments.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618737361,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Payments"},sidebar:"docs",previous:{title:"Localization",permalink:"/docs/next/additional-features/apiato-containers/localization"},next:{title:"Settings",permalink:"/docs/next/additional-features/apiato-containers/settings"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Supported Payment Gateways",id:"available-payment-gateways",children:[]},{value:"How to charge users",id:"how-to-charge-users",children:[]},{value:"Manage Payment Accounts",id:"manage-payment-accounts",children:[]},{value:"Payment Transactions",id:"payment-transactions",children:[]},{value:"Developing own Payment Gateway Containers",id:"developing-own-payment-gateway-containers",children:[]},{value:"Mocking the real payment call for Testing",id:"mocking-the-real-payment-call-for-testing",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#installation"},"Installation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#available-payment-gateways"},"Available Payment Gateway")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#how-to-charge-users"},"How to charge users")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#manage-payment-accounts"},"Manage Payment Accounts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#payment-transactions"},"Payment Transactions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#developing-own-payment-gateway-containers"},"Developing own Payment Gateway Containers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#mocking-the-real-payment-call-for-testing"},"Mocking the real payment call for Testing"))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/vendorSection-payment\n")),Object(r.b)("p",null,"Now run ",Object(r.b)("inlineCode",{parentName:"p"},"php artisan migrate")),Object(r.b)("h2",{id:"available-payment-gateways"},"Supported Payment Gateways"),Object(r.b)("p",null,"Currently, Apiato Supports the following payment gateways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Stripe"))),Object(r.b)("p",null,"If your payment gateway is not supported, build it and contribute your container back."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For any supported gateway you want to use, set Tokens and Secrets in the ",Object(r.b)("inlineCode",{parentName:"strong"},".env"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"STRIPE_KEY=\nSTRIPE_SECRET=\n")),Object(r.b)("h2",{id:"how-to-charge-users"},"How to charge users"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"On the Model you want to charge:"),Object(r.b)("li",{parentName:"ol"},"Use the ",Object(r.b)("inlineCode",{parentName:"li"},"App\\Containers\\Payment\\Traits\\ChargeableTrait")),Object(r.b)("li",{parentName:"ol"},"add the ",Object(r.b)("inlineCode",{parentName:"li"},"\\App\\Containers\\Payment\\Contracts\\ChargeableInterface")," Interface"),Object(r.b)("li",{parentName:"ol"},"Then add this relation",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"public function paymentAccounts(): HasMany\n{\n     return $this->hasMany(PaymentAccount::class);\n}\n")))),Object(r.b)("p",null,"2) To charge a user, the user must first create a payment account (Stripe, PayPal, WePay,...). Use the respective\nendpoints to create those endpoints (",Object(r.b)("inlineCode",{parentName:"p"},"createStripeAccount"),", ...). A User may have multiple\n",Object(r.b)("inlineCode",{parentName:"p"},"PaymentAccount"),"."),Object(r.b)("p",null,"3) Then charge the user like this ",Object(r.b)("inlineCode",{parentName:"p"},"$user->charge($account, $amount);")," by providing the ",Object(r.b)("inlineCode",{parentName:"p"},"$account")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"$amount"),"."),Object(r.b)("p",null,"You can get ",Object(r.b)("inlineCode",{parentName:"p"},"$account")," from the user this way ",Object(r.b)("inlineCode",{parentName:"p"},"$user->paymentAccounts"),". This will return a Collection of all the\nuser payment accounts to select one."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"// in this example we are selecting a random payment account.\n$acccount = $user->paymentAccounts->first();\n\n$amount = 9.99;\n\n// charge the user with the 'USD' currency\n$user->charge($acccount, $amount, 'USD');\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"$user->paymentAccounts")," will return a ",Object(r.b)("em",{parentName:"p"},"generic")," ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentAccount")," which may be transformed to the dedicated\npayment account (",Object(r.b)("inlineCode",{parentName:"p"},"StripeAccount"),", ",Object(r.b)("inlineCode",{parentName:"p"},"PaypalAccount"),", ...). You can call the ",Object(r.b)("inlineCode",{parentName:"p"},"accountable()")," function on the selected\npayment in order to do this. For more information about this, we refer to the\n",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/eloquent-relationships#polymorphic-relations"},"Polymorphic Relationships")," in the\nofficial Laravel Docs."),Object(r.b)("h2",{id:"manage-payment-accounts"},"Manage Payment Accounts"),Object(r.b)("p",null,"Payment contains provides some generic routes in order to allow users to manage their own ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentAccount"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GET /user/paymentaccounts")," : Get all available ",Object(r.b)("inlineCode",{parentName:"li"},"PaymentAccount"),"s for the current ",Object(r.b)("inlineCode",{parentName:"li"},"User"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GET /user/paymentaccounts/{id}"),": Get the details of one specific ",Object(r.b)("inlineCode",{parentName:"li"},"PaymentAccount"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PATCH /user/paymentaccounts/{id}"),": Update a ",Object(r.b)("inlineCode",{parentName:"li"},"PaymentAccount")," (this route does ",Object(r.b)("strong",{parentName:"li"},"not")," update the credentials for the\ncorresponding payment gateway)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DELETE /user/paymentaccounts/{id}"),": Delete a ",Object(r.b)("inlineCode",{parentName:"li"},"PaymentAccount")," including the payment gateway details (e.g., user\ncredentials for ",Object(r.b)("inlineCode",{parentName:"li"},"Stripe"),")."),Object(r.b)("li",{parentName:"ul"},"To create a payment account use the dedicated endpoint (",Object(r.b)("inlineCode",{parentName:"li"},"createStripeAccount"),", ",Object(r.b)("inlineCode",{parentName:"li"},"createWepayAccount"),",...) provided by\nthe payment gateway container (Stripe, WePay,...). Each payment container has its own endpoint to ",Object(r.b)("inlineCode",{parentName:"li"},"create")," and\n",Object(r.b)("inlineCode",{parentName:"li"},"update")," account details, since each payment requires different data.")),Object(r.b)("h2",{id:"payment-transactions"},"Payment Transactions"),Object(r.b)("p",null,"When charging the user with a specific gateway (e.g., Paypal, Stripe, ...), the respective ",Object(r.b)("inlineCode",{parentName:"p"},"Task")," (e.g., the\n",Object(r.b)("inlineCode",{parentName:"p"},"ChargeWithStripeTask"),") should return a ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentTransaction")," model. This model, in turn,\nshould contain respective information about the transaction that was made. For example, it contains the ",Object(r.b)("inlineCode",{parentName:"p"},"status"),' (e.g., "paid")\nor a flag indicating if the ',Object(r.b)("inlineCode",{parentName:"p"},"transaction")," was successfully handled (",Object(r.b)("inlineCode",{parentName:"p"},"is_successful"),")."),Object(r.b)("p",null,'Note that some information about the transaction are "pre-filled" by the ',Object(r.b)("inlineCode",{parentName:"p"},"PaymentGateway")," itself, so you don't need\nto manually do this in your ",Object(r.b)("inlineCode",{parentName:"p"},"CargeWithXTask"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"user_id")," : The ",Object(r.b)("inlineCode",{parentName:"li"},"User")," who started this transaction (i.e., the buyer)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gateway")," : The gateway that was used for this transaction (e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"Stripe"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"amount")," : The amount the user was charged"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"currency")," : The currency the transaction was executed")),Object(r.b)("p",null,"Furthermore, the gateways may add the response from the gateway to the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," field of the ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentTransaction"),". The\n",Object(r.b)("inlineCode",{parentName:"p"},"custom"),' field, however, can be filled by the developer with own "custom" data.'),Object(r.b)("h2",{id:"developing-own-payment-gateway-containers"},"Developing own Payment Gateway Containers"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Payment"),' container acts as generic foundation to "plug in" different containers that interacts with specific\npayment gateways (e.g., ',Object(r.b)("inlineCode",{parentName:"p"},"PayPal"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Stripe"),", ...). This section introduces, how these containers shall be implemented\nin order to be used via the generic ",Object(r.b)("inlineCode",{parentName:"p"},"Payment")," container."),Object(r.b)("p",null,"In this example, we will develop a ",Object(r.b)("inlineCode",{parentName:"p"},"Foo")," container, that connects to the fictional ",Object(r.b)("inlineCode",{parentName:"p"},"FooPay")," service. As our service may\nneed to have its own ",Object(r.b)("inlineCode",{parentName:"p"},"Accounts"),", we will first need to create respective logic to add and update our ",Object(r.b)("inlineCode",{parentName:"p"},"FooAccount"),".\nImplement respective ",Object(r.b)("inlineCode",{parentName:"p"},"AddFooAccountAction")," and ",Object(r.b)("inlineCode",{parentName:"p"},"UpdateFooAccountAction")," based on the pre-shipped ",Object(r.b)("inlineCode",{parentName:"p"},"Stripe")," container."),Object(r.b)("p",null,"Basically, this provides the feature for the customer to create his own ",Object(r.b)("inlineCode",{parentName:"p"},"FooAccount")," within your own application. These\nactions must, for example, provide the functionality to store user credentials (e.g., the mail-address of the user for\nthis specific service). Please note that you do not need to provide a dedicated ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," task (as this is handled by\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"Payment")," container)."),Object(r.b)("p",null,"The most important functionality of your ",Object(r.b)("inlineCode",{parentName:"p"},"Foo")," container is how to charge the ",Object(r.b)("inlineCode",{parentName:"p"},"User")," with this service. You, therefore,\nneed to create your own ",Object(r.b)("inlineCode",{parentName:"p"},"ChargeWithFooTask"),". This class, however, needs to implement the ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentChargerInterface"),"\ndistributed via the ",Object(r.b)("inlineCode",{parentName:"p"},"Payment")," container. This interface, in turn, requires you to implement the ",Object(r.b)("inlineCode",{parentName:"p"},"charge()")," method."),Object(r.b)("p",null,"This method needs to connect to the ",Object(r.b)("inlineCode",{parentName:"p"},"FooService"),", create the payment and return a ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentTransaction")," model."),Object(r.b)("p",null,"Finally, you need to ",Object(r.b)("inlineCode",{parentName:"p"},"register")," the new service. This can be done in the ",Object(r.b)("inlineCode",{parentName:"p"},"Payment\\Configs\\vendorSection-payment.php")," file.\nFor the ",Object(r.b)("inlineCode",{parentName:"p"},"vendorSection-payment.gateways")," key, add the new entry for your ",Object(r.b)("inlineCode",{parentName:"p"},"Foo")," Payment Gateway. This may look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"    // ...\n    'foo' => [\n        'container'   => 'Foo',\n        'charge_task' => \\App\\Containers\\Foo\\Tasks\\ChargeWithFooTask::class,\n    ],\n    // ...\n")),Object(r.b)("p",null,"Basically, this entry points to the ",Object(r.b)("inlineCode",{parentName:"p"},"charger_task")," that handles, how to charge a ",Object(r.b)("inlineCode",{parentName:"p"},"User")," with the specific ",Object(r.b)("inlineCode",{parentName:"p"},"Payment Gateway"),"."),Object(r.b)("p",null,"That's all!"),Object(r.b)("h2",{id:"mocking-the-real-payment-call-for-testing"},"Mocking the real payment call for Testing"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// mock the ChargeWithStripeService external API call\n$this->mockIt(ChargeWithStripeService::class)->shouldReceive('charge')->andReturn([\n   'payment_method' => 'stripe',\n   'description' => $payId\n]);\n\n// mock the ChargeWithPaypalService external API call\n$this->mockIt(ChargeWithPaypalService::class)->shouldReceive('charge')->andReturn([\n   'payment_method' => 'paypal',\n   'description' => $payId\n]);\n")),Object(r.b)("p",null,"Checkout the ",Object(r.b)("a",{parentName:"p",href:"http://docs.apiato.io/"},"Tests Helpers")," page for more information about Testing."))}s.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||r;return n?i.a.createElement(u,c(c({ref:t},p),{},{components:n})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);