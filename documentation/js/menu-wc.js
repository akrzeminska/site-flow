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
                    <a href="index.html" data-type="index-link">site-flow documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-5c8af98a503e815db33f46d0828fdfa38c7680dd10ebde0b49c5975dac7fd9d563d514d2f2d110b6c5c4d66be91f697c0ec34c1ccdd72ed326471e3a51319290"' : 'data-bs-target="#xs-components-links-module-AppModule-5c8af98a503e815db33f46d0828fdfa38c7680dd10ebde0b49c5975dac7fd9d563d514d2f2d110b6c5c4d66be91f697c0ec34c1ccdd72ed326471e3a51319290"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5c8af98a503e815db33f46d0828fdfa38c7680dd10ebde0b49c5975dac7fd9d563d514d2f2d110b6c5c4d66be91f697c0ec34c1ccdd72ed326471e3a51319290"' :
                                            'id="xs-components-links-module-AppModule-5c8af98a503e815db33f46d0828fdfa38c7680dd10ebde0b49c5975dac7fd9d563d514d2f2d110b6c5c4d66be91f697c0ec34c1ccdd72ed326471e3a51319290"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderWelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderWelcomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConstructionsModule.html" data-type="entity-link" >ConstructionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ConstructionsModule-971623f10bf714e9dc67b0fbf85b6a2f705f00c31476fe77ffb29f5fee49773d7f64b93347f50ed247f9cb273e0d70e28045c468c5a1141de3962074b114d339"' : 'data-bs-target="#xs-components-links-module-ConstructionsModule-971623f10bf714e9dc67b0fbf85b6a2f705f00c31476fe77ffb29f5fee49773d7f64b93347f50ed247f9cb273e0d70e28045c468c5a1141de3962074b114d339"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConstructionsModule-971623f10bf714e9dc67b0fbf85b6a2f705f00c31476fe77ffb29f5fee49773d7f64b93347f50ed247f9cb273e0d70e28045c468c5a1141de3962074b114d339"' :
                                            'id="xs-components-links-module-ConstructionsModule-971623f10bf714e9dc67b0fbf85b6a2f705f00c31476fe77ffb29f5fee49773d7f64b93347f50ed247f9cb273e0d70e28045c468c5a1141de3962074b114d339"' }>
                                            <li class="link">
                                                <a href="components/ConstructionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstructionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConstructionsRoutingModule.html" data-type="entity-link" >ConstructionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactsModule.html" data-type="entity-link" >ContactsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ContactsModule-cbf505287210ed40d100344654c1b81d76e8b23cdcd2124bb7a5aa56b8fd1a17002222d5724c378b4c4e8398cb4932e513658e40f430e42dc3594b696b8eea5a"' : 'data-bs-target="#xs-components-links-module-ContactsModule-cbf505287210ed40d100344654c1b81d76e8b23cdcd2124bb7a5aa56b8fd1a17002222d5724c378b4c4e8398cb4932e513658e40f430e42dc3594b696b8eea5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactsModule-cbf505287210ed40d100344654c1b81d76e8b23cdcd2124bb7a5aa56b8fd1a17002222d5724c378b4c4e8398cb4932e513658e40f430e42dc3594b696b8eea5a"' :
                                            'id="xs-components-links-module-ContactsModule-cbf505287210ed40d100344654c1b81d76e8b23cdcd2124bb7a5aa56b8fd1a17002222d5724c378b4c4e8398cb4932e513658e40f430e42dc3594b696b8eea5a"' }>
                                            <li class="link">
                                                <a href="components/AvatarUploadDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarUploadDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactAvatarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactAvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactsRoutingModule.html" data-type="entity-link" >ContactsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CostEstimatesModule.html" data-type="entity-link" >CostEstimatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CostEstimatesModule-5f4e2346469dfe002f5ad4526442d5ce8d7e5d2e786c57e4cfa51515cc8c3b5f4c1bb95666f204011dd10e75f55f01bba00662cb862ee95bfc684ca03eef1b22"' : 'data-bs-target="#xs-components-links-module-CostEstimatesModule-5f4e2346469dfe002f5ad4526442d5ce8d7e5d2e786c57e4cfa51515cc8c3b5f4c1bb95666f204011dd10e75f55f01bba00662cb862ee95bfc684ca03eef1b22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CostEstimatesModule-5f4e2346469dfe002f5ad4526442d5ce8d7e5d2e786c57e4cfa51515cc8c3b5f4c1bb95666f204011dd10e75f55f01bba00662cb862ee95bfc684ca03eef1b22"' :
                                            'id="xs-components-links-module-CostEstimatesModule-5f4e2346469dfe002f5ad4526442d5ce8d7e5d2e786c57e4cfa51515cc8c3b5f4c1bb95666f204011dd10e75f55f01bba00662cb862ee95bfc684ca03eef1b22"' }>
                                            <li class="link">
                                                <a href="components/CostEstimatesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CostEstimatesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CostEstimatesDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CostEstimatesDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CostEstimatesRoutingModule.html" data-type="entity-link" >CostEstimatesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' : 'data-bs-target="#xs-components-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' :
                                            'id="xs-components-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' }>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' : 'data-bs-target="#xs-injectables-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' :
                                        'id="xs-injectables-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStorageSeederService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStorageSeederService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' :
                                            'id="xs-pipes-links-module-SharedModule-c9e294d89227e737ab309396b0ab2a157bb225d195df575ca27911b1fa19a7ce0096d49c9083586d73dc0e94b696ef7f6c086e79dea1a0319ed476fcb28cd439"' }>
                                            <li class="link">
                                                <a href="pipes/PhoneFormatPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneFormatPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link" >TasksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TasksModule-2c82fd38eab47b3497a0e37ab3780a376005506fb87c51695e806dbc286a39806008b77fa7879fcf9ee33abd541d9accd96cbdc9195aeb7209f927b13ee31ae6"' : 'data-bs-target="#xs-components-links-module-TasksModule-2c82fd38eab47b3497a0e37ab3780a376005506fb87c51695e806dbc286a39806008b77fa7879fcf9ee33abd541d9accd96cbdc9195aeb7209f927b13ee31ae6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TasksModule-2c82fd38eab47b3497a0e37ab3780a376005506fb87c51695e806dbc286a39806008b77fa7879fcf9ee33abd541d9accd96cbdc9195aeb7209f927b13ee31ae6"' :
                                            'id="xs-components-links-module-TasksModule-2c82fd38eab47b3497a0e37ab3780a376005506fb87c51695e806dbc286a39806008b77fa7879fcf9ee33abd541d9accd96cbdc9195aeb7209f927b13ee31ae6"' }>
                                            <li class="link">
                                                <a href="components/TasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TasksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksRoutingModule.html" data-type="entity-link" >TasksRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserPanelModule.html" data-type="entity-link" >UserPanelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserPanelModule-f7fc643b7feb6539b60fa0ef6b5d6052ea440424df2a2b891c9f0e6f86b1b57590263aebd905fceab0e3b7743550b33c6b8d502367b51b77235992f26ad1fb1a"' : 'data-bs-target="#xs-components-links-module-UserPanelModule-f7fc643b7feb6539b60fa0ef6b5d6052ea440424df2a2b891c9f0e6f86b1b57590263aebd905fceab0e3b7743550b33c6b8d502367b51b77235992f26ad1fb1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserPanelModule-f7fc643b7feb6539b60fa0ef6b5d6052ea440424df2a2b891c9f0e6f86b1b57590263aebd905fceab0e3b7743550b33c6b8d502367b51b77235992f26ad1fb1a"' :
                                            'id="xs-components-links-module-UserPanelModule-f7fc643b7feb6539b60fa0ef6b5d6052ea440424df2a2b891c9f0e6f86b1b57590263aebd905fceab0e3b7743550b33c6b8d502367b51b77235992f26ad1fb1a"' }>
                                            <li class="link">
                                                <a href="components/UserPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPanelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserPanelRoutingModule.html" data-type="entity-link" >UserPanelRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstructionsLocalStorageService.html" data-type="entity-link" >ConstructionsLocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstructionsService.html" data-type="entity-link" >ConstructionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactsLocalStorageService.html" data-type="entity-link" >ContactsLocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactsService.html" data-type="entity-link" >ContactsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CostEstimatesLocalStorageService.html" data-type="entity-link" >CostEstimatesLocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CostEstimatesService.html" data-type="entity-link" >CostEstimatesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageSeederService.html" data-type="entity-link" >LocalStorageSeederService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TasksLocalStorageService.html" data-type="entity-link" >TasksLocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TasksService.html" data-type="entity-link" >TasksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link" >ThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadedFileLocalStorageService.html" data-type="entity-link" >UploadedFileLocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadedFileService.html" data-type="entity-link" >UploadedFileService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Construction.html" data-type="entity-link" >Construction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CostEstimate.html" data-type="entity-link" >CostEstimate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInfo.html" data-type="entity-link" >UserInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Work.html" data-type="entity-link" >Work</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});