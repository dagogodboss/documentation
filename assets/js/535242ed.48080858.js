(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(221)),i={title:"Contribution Guide"},b={unversionedId:"general/contribution-guide",id:"version-9.x/general/contribution-guide",isDocsHomePage:!1,title:"Contribution Guide",description:"Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions",source:"@site/versioned_docs/version-9.x/general/contribution-guide.md",slug:"/general/contribution-guide",permalink:"/docs/general/contribution-guide",editUrl:"https://github.com/apiato/documentation/versioned_docs/version-9.x/general/contribution-guide.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618146486,formattedLastUpdatedAt:"4/11/2021",sidebar:"version-9.x/docs",previous:{title:"Frequently Asked Questions",permalink:"/docs/general/faq"},next:{title:"Upgrade Guide",permalink:"/docs/general/upgrade-guide"}},c=[{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"Versioning",id:"versioning",children:[]},{value:"Coding Standards",id:"coding-standards",children:[]},{value:"Git Branching Strategy",id:"git-branches",children:[]},{value:"Adding New Features",id:"adding-new-features",children:[]},{value:"Security Vulnerabilities",id:"security-vulnerabilities",children:[]},{value:"Contribution Guides",id:"contributing-apiato",children:[{value:"Contribution General Guidelines",id:"contribution-guidelines",children:[]},{value:"Contributing to the Apiato Project",id:"contributing-project",children:[]},{value:"Contributing to the Documentation",id:"contributing-documentation",children:[]},{value:"Contributing to the Code Generator",id:"contributing-generator",children:[]},{value:"Making a new Release (for admins)",id:"new-release",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions\nare ",Object(o.b)("strong",{parentName:"p"},"welcome")," and will be fully ",Object(o.b)("strong",{parentName:"p"},"credited"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-of-conduct"},"Code of Conduct")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#versioning"},"Versioning")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#coding-standards"},"Coding Standards")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#git-branches"},"Git Branching Strategy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#adding-new-features"},"Adding New Features")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#security-vulnerabilities"},"Security Vulnerabilities")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#contributing-apiato"},"Contribution Guides"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#contribution-guidelines"},"Contribution General Guidelines")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#contributing-project"},"Contributing to the Apiato Project")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#contributing-documentation"},"Contributing to the Documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#contributing-generator"},"Contributing to the Code Generator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#new-release"},"Making a new Release"))))),Object(o.b)("h2",{id:"code-of-conduct"},"Code of Conduct"),Object(o.b)("p",null,"Apiato follows the ",Object(o.b)("a",{parentName:"p",href:"https://www.contributor-covenant.org/version/1/4/code-of-conduct"},"Contributor Covenant")," Code of Conduct."),Object(o.b)("h2",{id:"versioning"},"Versioning"),Object(o.b)("p",null,"The project is versioned under the ",Object(o.b)("a",{parentName:"p",href:"http://semver.org/"},"Semantic Versioning")," guidelines."),Object(o.b)("h2",{id:"coding-standards"},"Coding Standards"),Object(o.b)("p",null,"The project is compliant with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md"},"PSR-1")," Coding Standard,\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md"},"PSR-2")," Coding Style and some of the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md"},"PSR-12")," Styles."),Object(o.b)("p",null,"As well as it is compliant with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md"},"PSR-4")," Autoloader.\n",Object(o.b)("em",{parentName:"p"},"If you notice any compliance oversights, you can send a pull request to address this issue.")),Object(o.b)("h2",{id:"git-branches"},"Git Branching Strategy"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch contains the upcoming Apiato release.\nWhile the other branches are for all the stable releases (",Object(o.b)("inlineCode",{parentName:"p"},"7.0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"7.1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"8.0"),"...)."),Object(o.b)("p",null,"Bug fixes should be sent to both (the latest stable branch) and to ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch, unless they fix features that exist only in the upcoming release, then they should only be sent to ",Object(o.b)("inlineCode",{parentName:"p"},"master"),"."),Object(o.b)("p",null,"Major new features (and big changes) should always be sent to the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch, which contains the upcoming release."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("p",null,"Assuming that the current stable version is ",Object(o.b)("inlineCode",{parentName:"p"},"8.0"),". The repository would have at least the following two branches ",Object(o.b)("inlineCode",{parentName:"p"},"master")," and ",Object(o.b)("inlineCode",{parentName:"p"},"8.0"),"."),Object(o.b)("p",null,"If your PR contains a major change, or a braking change, or a new Container then it must be sent to ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch.\nIf your PR fixes a bug in the existing stable release then it should be sent to the latest release branch ",Object(o.b)("inlineCode",{parentName:"p"},"8.0"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you always contribute to Apiato, it's better to use the master branch instead of the latest release\nbranch, to always have the latest features and updates and would be good to merge the latest stable branch into your master from time to time, in case it has some bug fixes.")),Object(o.b)("h2",{id:"adding-new-features"},"Adding New Features"),Object(o.b)("p",null,"If you have an idea for a new feature, it's a good idea to check out our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/issues"},"issues"),"\nor active ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/pulls"},"pull requests")," first to see if the feature is already being worked on.\nIf not, feel free to submit an issue first (proposing the new feature), asking whether the feature is beneficial to the project. Then go ahead and submit your PR to the master branch."),Object(o.b)("h2",{id:"security-vulnerabilities"},"Security Vulnerabilities"),Object(o.b)("p",null,"If you discover a security vulnerability, please email ",Object(o.b)("inlineCode",{parentName:"p"},"support@apiato.io"),"."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"contributing-apiato"},"Contribution Guides"),Object(o.b)("h3",{id:"contribution-guidelines"},"Contribution General Guidelines"),Object(o.b)("p",null,"Important things to remember when contributing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Run tests first")," before writing any line of code, run the tests ",Object(o.b)("inlineCode",{parentName:"li"},"vendor/bin/phpunit"),", and make sure all the tests are passing in your machine."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Keep your commits atomic")," Each commit should represent a single unit of change. (Also, remember to write helpful commit messages.)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Write as many tests")," Your changes must be covered with Tests (Functional or Unit). (Code without tests could be accepted in some cases)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Ensure updating the documentation")," the doc repo is there ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/apiato/documentation"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Submit one feature/change per pull request.")," If you have multiple features/changes you wish to submit, please break them up into separate pull requests.")),Object(o.b)("h3",{id:"contributing-project"},"Contributing to the Apiato Project"),Object(o.b)("p",null,"This guide will help you contribute to the Apiato project, while working on your personal project."),Object(o.b)("p",null,"If you added a feature/function to your local project or created a useful container or fixed a bug. This guide will\nshow you how to submit that change to Apiato."),Object(o.b)("h4",{id:"setup"},"SETUP"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"One time setup")),Object(o.b)("p",null,"In this scenario let's assume we have the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Apiato"),"     # is the starter/framework project"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Project-A"),"  # your personal project your building on top of apiato")),Object(o.b)("p",null,"1) Create Project A from Apiato"),Object(o.b)("p",null,"If you want to fix a bug on the latest stable release your PR should be sent to the latest stable branch, thus you need\nto pull the latest stable release of Apiato."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"composer create-project apiato/apiato project-a")),Object(o.b)("p",null,"If you want to add new features or do anything else, that should be added to the next stable release, you need to pull\nthe master branch and submit your PR there."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"composer create-project apiato/apiato project-a --stability=dev")),Object(o.b)("p",null,"2) Initialize git in Project A"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git init")),Object(o.b)("p",null,"3.a) Set up your origin remote (to point to your project private repository url)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git remote add origin git@bitbucket.org:username/repo.git")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"if you already have origin remote then update it with")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git remote set-url origin git@bitbucket.org:username/project-a.git")),Object(o.b)("p",null,"3.b) Set up an upstream remote (to point to your fork of the apiato repository)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"assuming you already forked the repository")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git remote add upstream git@github.com:username/apiato.git")),Object(o.b)("p",null,"Now you should have the following remotes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u276f git remote -vv\norigin      git@bitbucket.org:username/project-a.git (fetch)\norigin      git@bitbucket.org:username/project-a.git (push)\nupstream    git@github.com:username/apiato.git (fetch)\nupstream    git@github.com:username/apiato.git (push)\n")),Object(o.b)("p",null,"4) Do your first commit"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git add . && git commit -m 'first commit'")),Object(o.b)("p",null,"5.a) Create apiato branch"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git checkout -b apiato")),Object(o.b)("p",null,"5.b) Let the apiato branch track the upstream master branch"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git checkout apiato")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git branch --set-upstream-to upstream/master")),Object(o.b)("p",null,"Now you should have the following branches:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u276f git branch -vv\n apiato           77b4d945 [upstream/master] ...\n master           77d302aa [origin/master] ...\n")),Object(o.b)("h4",{id:"usage-contribution-steps"},"USAGE (Contribution Steps)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Must do every time before you contribute")),Object(o.b)("p",null,"1) Update remotes (fetch)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git fetch --all")),Object(o.b)("p",null,"2) Go to the apiato branch"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git checkout apiato")),Object(o.b)("p",null,"3) Sync apiato branch with upstream/master"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git reset --hard upstream/master")),Object(o.b)("p",null,"4) Now you can cherry-pick the commits you'd like to contribute"),Object(o.b)("p",null,"4.a) First go to the apiato branch"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git checkout apiato")),Object(o.b)("p",null,"4.b) Create a custom branch for your PR"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git checkout -b feature-awesome"),"  (must be created from apiato)"),Object(o.b)("p",null,"4.c) Do the cherry-picking"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git log master"),"      (copy the commit ID)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git cherry-pick {commit-ID}")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(repeat for all commits you want to submit)")),Object(o.b)("p",null,"5) Push apiato branch to the upstream"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git push upstream feature-awesome"),"   (replace feature-awesome with your custom branch name)"),Object(o.b)("p",null,"6) Create a Pull Request (PR) from your forked repository to the apiato official repository."),Object(o.b)("p",null,"Make sure you create a PR from your custom branch ",Object(o.b)("inlineCode",{parentName:"p"},"feature-awesome")," to ",Object(o.b)("inlineCode",{parentName:"p"},"master")," (or the latest stable release)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We'll do our best to merge your PR in the shortest time possible. Thanks in advance :)")),Object(o.b)("p",null,"Checkout ",Object(o.b)("a",{parentName:"p",href:"./faq"},"How to upgrade apiato"),"."),Object(o.b)("h3",{id:"contributing-documentation"},"Contributing to the Documentation"),Object(o.b)("p",null,"This documentation is built using ",Object(o.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus 2"),", a modern static website generator."),Object(o.b)("p",null,"The content lives in its own repository\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"(apiato/documentation)"),", in the ",Object(o.b)("inlineCode",{parentName:"p"},"docs/")," folder."),Object(o.b)("p",null,"All you have to do is navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"docs/")," folder, find the markdown ",Object(o.b)("inlineCode",{parentName:"p"},".md")," file that you want to update ",Object(o.b)("em",{parentName:"p"},"(all files\nare named as they are in the site menu)"),", update or add the text, the commit."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You do not need to build the site locally. Just edit the markdown files and submit your PR. GitHub will build the site for us.")),Object(o.b)("p",null,"Optionally, visit the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"(documentation repository)")," for more information on how to install it locally."),Object(o.b)("h3",{id:"contributing-generator"},"Contributing to the Code Generator"),Object(o.b)("p",null,"The Code generator is in ",Object(o.b)("inlineCode",{parentName:"p"},"/core/Generator"),".  The Core is in its own ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/core"},"repository"),"."),Object(o.b)("p",null,'Each component command, "Except the Containers Generator" must extend from the ',Object(o.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Generator\\GeneratorCommand.php"),".\nThis abstract class does all the work for you."),Object(o.b)("h4",{id:"add-new-component-generator"},"Add new component generator."),Object(o.b)("p",null,"General Info: the only function that gets called whenever a command is executed is the ",Object(o.b)("inlineCode",{parentName:"p"},"handle()")," function. This\nfunction exists on the abstract class ",Object(o.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Generator\\GeneratorCommand")," which does all the common job for all\nthe generator commands. For better understanding of how things work. Make sure you read that function."),Object(o.b)("p",null,"1 - Add create new command by copying and pasting any of the existing components commands already supported. The\n",Object(o.b)("inlineCode",{parentName:"p"},"Generator/Commands/RouteGenerator.php")," is a great example."),Object(o.b)("p",null,"For each generator you need to implement exactly one method (as it is defined in the respective interface)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"getUserInputs:"),"\nThis method reads all parameters from the command line or provides a wizard to get information from the user.\nThe available options for this generator are specified using the ",Object(o.b)("inlineCode",{parentName:"p"},"public $inputs = []")," variable in respective generator.\nNote that you do not need to specify the options for ",Object(o.b)("inlineCode",{parentName:"p"},"--container")," or ",Object(o.b)("inlineCode",{parentName:"p"},"--file"),", as both are handled directly by the\nGenerator itself. Simply add the options that are specifically needed for this generator."),Object(o.b)("p",{parentName:"li"},"Be sure to read input with the ",Object(o.b)("inlineCode",{parentName:"p"},"checkParameterOrXYZ()")," methods, as they automatically check if an option is available.\nOtherwise, they will ask the user for additional input."),Object(o.b)("p",{parentName:"li"},"The method must return an array of 3 keys:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path-parameters")," are used to replace variables within the path where the generator creates the file."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"file-parameters")," are used to replace variables within the name of the file to be created."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stub-parameters")," are used to replace variables within the stub.")))),Object(o.b)("p",null,"2 - Create the stub to be loaded in ",Object(o.b)("inlineCode",{parentName:"p"},"Generator/Stubs"),", copy any real component code and build the stub out of it."),Object(o.b)("p",null,"3 - Finally register the command in ",Object(o.b)("inlineCode",{parentName:"p"},"Generator/GeneratorsServiceProvider.php")," using ",Object(o.b)("inlineCode",{parentName:"p"},"registerGenerators"),", example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"        $this->registerGenerators([\n            ActionGenerator::class,\n            RouteGenerator::class,\n            TaskGenerator::class,\n            // ...\n        ]);\n")),Object(o.b)("p",null,"4 - Default FileName & FileExtension(optional)"),Object(o.b)("p",null,"You may provide another default filename or extension by overriding the ",Object(o.b)("inlineCode",{parentName:"p"},"getDefaultFileName()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"getDefaultFileExtension()"),"\nmethod, which simply returns a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"."),Object(o.b)("h3",{id:"new-release"},"Making a new Release (for admins)"),Object(o.b)("p",null,"1 - Merge the last ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/branches"},"stable branch")," in the master branch. (To get any new bug fixes.)\n2 - Decide on the next version number for the new release. By checking the current ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases"},"releases"),".\n3 - Update ",Object(o.b)("inlineCode",{parentName:"p"},"VERSION")," value in ",Object(o.b)("inlineCode",{parentName:"p"},"/core/Foundation/Apiato.php")," (example: ",Object(o.b)("inlineCode",{parentName:"p"},"const VERSION = '8.1.0';"),")."),Object(o.b)("h4",{id:"minor-release"},"Minor Release"),Object(o.b)("p",null,"Your PR with that minor changes should be submitted and merged into master."),Object(o.b)("p",null,"1 - Go to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases"},"releases")," and create a new one from the master branch.\n2 - Make sure you write a complete Changelog, in the release description.\n3 - If you updated the documentation and you should! then visit the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"documentation")," repository and merge the PR into master."),Object(o.b)("h4",{id:"major-release"},"Major Release"),Object(o.b)("p",null,"Master is the branch that contains all the new changes.\nSo we need to create a new branch from master then make a release from that new branch."),Object(o.b)("p",null,"1 - From master, checkout a new branch named as the version number you want to release. (Example ",Object(o.b)("inlineCode",{parentName:"p"},"8.1"),").\n2 - Go to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases"},"releases")," and create a new one from the branch created in the step above. (Example ",Object(o.b)("inlineCode",{parentName:"p"},"8.1"),").\n3 - Make sure you write a complete Changelog, in the release description.\n4 - Change the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/settings/branches"},"default branch")," on github to that new branch.\n5 - If you updated the documentation and you should! then visit the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"documentation")," repository and merge the PR into master."))}p.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,b(b({ref:t},l),{},{components:n})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);