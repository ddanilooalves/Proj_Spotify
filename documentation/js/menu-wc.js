'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">proj_spotify documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-0121d782683ff9be35d3f3d1fe53bec5002c247722c99a021225f11fc633a16f3462d4af63eca6ac9eeb4ea3571f3d17ff6870f3c79d870123e9e72a52f1d67e"' : 'data-target="#xs-controllers-links-module-AppModule-0121d782683ff9be35d3f3d1fe53bec5002c247722c99a021225f11fc633a16f3462d4af63eca6ac9eeb4ea3571f3d17ff6870f3c79d870123e9e72a52f1d67e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0121d782683ff9be35d3f3d1fe53bec5002c247722c99a021225f11fc633a16f3462d4af63eca6ac9eeb4ea3571f3d17ff6870f3c79d870123e9e72a52f1d67e"' :
                                            'id="xs-controllers-links-module-AppModule-0121d782683ff9be35d3f3d1fe53bec5002c247722c99a021225f11fc633a16f3462d4af63eca6ac9eeb4ea3571f3d17ff6870f3c79d870123e9e72a52f1d67e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-0121d782683ff9be35d3f3d1fe53bec5002c247722c99a021225f11fc633a16f3462d4af63eca6ac9eeb4ea3571f3d17ff6870f3c79d870123e9e72a52f1d67e"' : 'data-target="#xs-injectables-links-module-AppModule-0121d782683ff9be35d3f3d1fe53bec5002c247722c99a021225f11fc633a16f3462d4af63eca6ac9eeb4ea3571f3d17ff6870f3c79d870123e9e72a52f1d67e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0121d782683ff9be35d3f3d1fe53bec5002c247722c99a021225f11fc633a16f3462d4af63eca6ac9eeb4ea3571f3d17ff6870f3c79d870123e9e72a52f1d67e"' :
                                        'id="xs-injectables-links-module-AppModule-0121d782683ff9be35d3f3d1fe53bec5002c247722c99a021225f11fc633a16f3462d4af63eca6ac9eeb4ea3571f3d17ff6870f3c79d870123e9e72a52f1d67e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-1c768e382df58d4c6632ec660c82a481cf2335feee3718c349201b6446e66505f47d475350297fd812d746b9e17060ddf3e9fd0e690938102fe35a7b13f1dd8d"' : 'data-target="#xs-controllers-links-module-AuthModule-1c768e382df58d4c6632ec660c82a481cf2335feee3718c349201b6446e66505f47d475350297fd812d746b9e17060ddf3e9fd0e690938102fe35a7b13f1dd8d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-1c768e382df58d4c6632ec660c82a481cf2335feee3718c349201b6446e66505f47d475350297fd812d746b9e17060ddf3e9fd0e690938102fe35a7b13f1dd8d"' :
                                            'id="xs-controllers-links-module-AuthModule-1c768e382df58d4c6632ec660c82a481cf2335feee3718c349201b6446e66505f47d475350297fd812d746b9e17060ddf3e9fd0e690938102fe35a7b13f1dd8d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-1c768e382df58d4c6632ec660c82a481cf2335feee3718c349201b6446e66505f47d475350297fd812d746b9e17060ddf3e9fd0e690938102fe35a7b13f1dd8d"' : 'data-target="#xs-injectables-links-module-AuthModule-1c768e382df58d4c6632ec660c82a481cf2335feee3718c349201b6446e66505f47d475350297fd812d746b9e17060ddf3e9fd0e690938102fe35a7b13f1dd8d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-1c768e382df58d4c6632ec660c82a481cf2335feee3718c349201b6446e66505f47d475350297fd812d746b9e17060ddf3e9fd0e690938102fe35a7b13f1dd8d"' :
                                        'id="xs-injectables-links-module-AuthModule-1c768e382df58d4c6632ec660c82a481cf2335feee3718c349201b6446e66505f47d475350297fd812d746b9e17060ddf3e9fd0e690938102fe35a7b13f1dd8d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' : 'data-target="#xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' :
                                        'id="xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-346acc78a2f7ca0f845d02f8f97419012439fcf90e9565d9ff67b22290066db4f04fbbb550651f563f077faa5a4c57c9e2937865fb09dd4d7380617da832aa6a"' : 'data-target="#xs-controllers-links-module-UsersModule-346acc78a2f7ca0f845d02f8f97419012439fcf90e9565d9ff67b22290066db4f04fbbb550651f563f077faa5a4c57c9e2937865fb09dd4d7380617da832aa6a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-346acc78a2f7ca0f845d02f8f97419012439fcf90e9565d9ff67b22290066db4f04fbbb550651f563f077faa5a4c57c9e2937865fb09dd4d7380617da832aa6a"' :
                                            'id="xs-controllers-links-module-UsersModule-346acc78a2f7ca0f845d02f8f97419012439fcf90e9565d9ff67b22290066db4f04fbbb550651f563f077faa5a4c57c9e2937865fb09dd4d7380617da832aa6a"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-346acc78a2f7ca0f845d02f8f97419012439fcf90e9565d9ff67b22290066db4f04fbbb550651f563f077faa5a4c57c9e2937865fb09dd4d7380617da832aa6a"' : 'data-target="#xs-injectables-links-module-UsersModule-346acc78a2f7ca0f845d02f8f97419012439fcf90e9565d9ff67b22290066db4f04fbbb550651f563f077faa5a4c57c9e2937865fb09dd4d7380617da832aa6a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-346acc78a2f7ca0f845d02f8f97419012439fcf90e9565d9ff67b22290066db4f04fbbb550651f563f077faa5a4c57c9e2937865fb09dd4d7380617da832aa6a"' :
                                        'id="xs-injectables-links-module-UsersModule-346acc78a2f7ca0f845d02f8f97419012439fcf90e9565d9ff67b22290066db4f04fbbb550651f563f077faa5a4c57c9e2937865fb09dd4d7380617da832aa6a"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});