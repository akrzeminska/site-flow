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
                                            'data-bs-target="#components-links-module-AppModule-b0c741105bd3ac49608af302293adc04377cf02307f0f1920fce0083c0b3dee2f0487572003763da7cb3beced55259dcb055af059d0845fdd031e4701e6415e0"' : 'data-bs-target="#xs-components-links-module-AppModule-b0c741105bd3ac49608af302293adc04377cf02307f0f1920fce0083c0b3dee2f0487572003763da7cb3beced55259dcb055af059d0845fdd031e4701e6415e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b0c741105bd3ac49608af302293adc04377cf02307f0f1920fce0083c0b3dee2f0487572003763da7cb3beced55259dcb055af059d0845fdd031e4701e6415e0"' :
                                            'id="xs-components-links-module-AppModule-b0c741105bd3ac49608af302293adc04377cf02307f0f1920fce0083c0b3dee2f0487572003763da7cb3beced55259dcb055af059d0845fdd031e4701e6415e0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
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
                                            'data-bs-target="#components-links-module-ConstructionsModule-a47f6c39ad146abb0d580ba21540c9e155cbd3b61b980a38f1285553d357455bced05a5f1150902f0d1fa8c04026ffaf41195870d489c78fa190514e2d779899"' : 'data-bs-target="#xs-components-links-module-ConstructionsModule-a47f6c39ad146abb0d580ba21540c9e155cbd3b61b980a38f1285553d357455bced05a5f1150902f0d1fa8c04026ffaf41195870d489c78fa190514e2d779899"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConstructionsModule-a47f6c39ad146abb0d580ba21540c9e155cbd3b61b980a38f1285553d357455bced05a5f1150902f0d1fa8c04026ffaf41195870d489c78fa190514e2d779899"' :
                                            'id="xs-components-links-module-ConstructionsModule-a47f6c39ad146abb0d580ba21540c9e155cbd3b61b980a38f1285553d357455bced05a5f1150902f0d1fa8c04026ffaf41195870d489c78fa190514e2d779899"' }>
                                            <li class="link">
                                                <a href="components/ConstructionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstructionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ConstructionsModule-a47f6c39ad146abb0d580ba21540c9e155cbd3b61b980a38f1285553d357455bced05a5f1150902f0d1fa8c04026ffaf41195870d489c78fa190514e2d779899"' : 'data-bs-target="#xs-injectables-links-module-ConstructionsModule-a47f6c39ad146abb0d580ba21540c9e155cbd3b61b980a38f1285553d357455bced05a5f1150902f0d1fa8c04026ffaf41195870d489c78fa190514e2d779899"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConstructionsModule-a47f6c39ad146abb0d580ba21540c9e155cbd3b61b980a38f1285553d357455bced05a5f1150902f0d1fa8c04026ffaf41195870d489c78fa190514e2d779899"' :
                                        'id="xs-injectables-links-module-ConstructionsModule-a47f6c39ad146abb0d580ba21540c9e155cbd3b61b980a38f1285553d357455bced05a5f1150902f0d1fa8c04026ffaf41195870d489c78fa190514e2d779899"' }>
                                        <li class="link">
                                            <a href="injectables/LocalStorageSeederService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStorageSeederService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
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
                                            'data-bs-target="#components-links-module-ContactsModule-03ae29c20aa7f7ca65467fe7e84a0fe74e937c9ff1f7230a2af95235c69081906efa55aaf67c822135b64fe92466ef63585d9a18fbfe274f6c222d83b558aae1"' : 'data-bs-target="#xs-components-links-module-ContactsModule-03ae29c20aa7f7ca65467fe7e84a0fe74e937c9ff1f7230a2af95235c69081906efa55aaf67c822135b64fe92466ef63585d9a18fbfe274f6c222d83b558aae1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactsModule-03ae29c20aa7f7ca65467fe7e84a0fe74e937c9ff1f7230a2af95235c69081906efa55aaf67c822135b64fe92466ef63585d9a18fbfe274f6c222d83b558aae1"' :
                                            'id="xs-components-links-module-ContactsModule-03ae29c20aa7f7ca65467fe7e84a0fe74e937c9ff1f7230a2af95235c69081906efa55aaf67c822135b64fe92466ef63585d9a18fbfe274f6c222d83b558aae1"' }>
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
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ContactsModule-03ae29c20aa7f7ca65467fe7e84a0fe74e937c9ff1f7230a2af95235c69081906efa55aaf67c822135b64fe92466ef63585d9a18fbfe274f6c222d83b558aae1"' : 'data-bs-target="#xs-injectables-links-module-ContactsModule-03ae29c20aa7f7ca65467fe7e84a0fe74e937c9ff1f7230a2af95235c69081906efa55aaf67c822135b64fe92466ef63585d9a18fbfe274f6c222d83b558aae1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactsModule-03ae29c20aa7f7ca65467fe7e84a0fe74e937c9ff1f7230a2af95235c69081906efa55aaf67c822135b64fe92466ef63585d9a18fbfe274f6c222d83b558aae1"' :
                                        'id="xs-injectables-links-module-ContactsModule-03ae29c20aa7f7ca65467fe7e84a0fe74e937c9ff1f7230a2af95235c69081906efa55aaf67c822135b64fe92466ef63585d9a18fbfe274f6c222d83b558aae1"' }>
                                        <li class="link">
                                            <a href="injectables/LocalStorageSeederService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStorageSeederService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
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
                                            'data-bs-target="#components-links-module-CostEstimatesModule-df2bed04575ec8c21359c115f48c0e6e3aa9b7ff475272c12bf3f50c0322ba3b6b3c0da05d4e414e13ffaf9c61459ed23d64d5108e4ac654907aac65ca8efa44"' : 'data-bs-target="#xs-components-links-module-CostEstimatesModule-df2bed04575ec8c21359c115f48c0e6e3aa9b7ff475272c12bf3f50c0322ba3b6b3c0da05d4e414e13ffaf9c61459ed23d64d5108e4ac654907aac65ca8efa44"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CostEstimatesModule-df2bed04575ec8c21359c115f48c0e6e3aa9b7ff475272c12bf3f50c0322ba3b6b3c0da05d4e414e13ffaf9c61459ed23d64d5108e4ac654907aac65ca8efa44"' :
                                            'id="xs-components-links-module-CostEstimatesModule-df2bed04575ec8c21359c115f48c0e6e3aa9b7ff475272c12bf3f50c0322ba3b6b3c0da05d4e414e13ffaf9c61459ed23d64d5108e4ac654907aac65ca8efa44"' }>
                                            <li class="link">
                                                <a href="components/CostEstimatesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CostEstimatesComponent</a>
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
                                            'data-bs-target="#components-links-module-SharedModule-19771c5ddd3b44c265abb7a3cdd48b29237355213583717ffd947d9ab1a50f293682b78f2d725d206aefd5abf86300f0626c2dba38aa0602ce476012a25444d4"' : 'data-bs-target="#xs-components-links-module-SharedModule-19771c5ddd3b44c265abb7a3cdd48b29237355213583717ffd947d9ab1a50f293682b78f2d725d206aefd5abf86300f0626c2dba38aa0602ce476012a25444d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-19771c5ddd3b44c265abb7a3cdd48b29237355213583717ffd947d9ab1a50f293682b78f2d725d206aefd5abf86300f0626c2dba38aa0602ce476012a25444d4"' :
                                            'id="xs-components-links-module-SharedModule-19771c5ddd3b44c265abb7a3cdd48b29237355213583717ffd947d9ab1a50f293682b78f2d725d206aefd5abf86300f0626c2dba38aa0602ce476012a25444d4"' }>
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
                                            'data-bs-target="#pipes-links-module-SharedModule-19771c5ddd3b44c265abb7a3cdd48b29237355213583717ffd947d9ab1a50f293682b78f2d725d206aefd5abf86300f0626c2dba38aa0602ce476012a25444d4"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-19771c5ddd3b44c265abb7a3cdd48b29237355213583717ffd947d9ab1a50f293682b78f2d725d206aefd5abf86300f0626c2dba38aa0602ce476012a25444d4"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-19771c5ddd3b44c265abb7a3cdd48b29237355213583717ffd947d9ab1a50f293682b78f2d725d206aefd5abf86300f0626c2dba38aa0602ce476012a25444d4"' :
                                            'id="xs-pipes-links-module-SharedModule-19771c5ddd3b44c265abb7a3cdd48b29237355213583717ffd947d9ab1a50f293682b78f2d725d206aefd5abf86300f0626c2dba38aa0602ce476012a25444d4"' }>
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
                                            'data-bs-target="#components-links-module-TasksModule-26371412100a1ac265cee25e54ff28b5a6f2343fcd14a8451d199d642e21db2bbf8e16408e2035823d3ac1758279d7d5a37b2e32e45445f5d02ca90ae5e6c395"' : 'data-bs-target="#xs-components-links-module-TasksModule-26371412100a1ac265cee25e54ff28b5a6f2343fcd14a8451d199d642e21db2bbf8e16408e2035823d3ac1758279d7d5a37b2e32e45445f5d02ca90ae5e6c395"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TasksModule-26371412100a1ac265cee25e54ff28b5a6f2343fcd14a8451d199d642e21db2bbf8e16408e2035823d3ac1758279d7d5a37b2e32e45445f5d02ca90ae5e6c395"' :
                                            'id="xs-components-links-module-TasksModule-26371412100a1ac265cee25e54ff28b5a6f2343fcd14a8451d199d642e21db2bbf8e16408e2035823d3ac1758279d7d5a37b2e32e45445f5d02ca90ae5e6c395"' }>
                                            <li class="link">
                                                <a href="components/TasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TasksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TasksModule-26371412100a1ac265cee25e54ff28b5a6f2343fcd14a8451d199d642e21db2bbf8e16408e2035823d3ac1758279d7d5a37b2e32e45445f5d02ca90ae5e6c395"' : 'data-bs-target="#xs-injectables-links-module-TasksModule-26371412100a1ac265cee25e54ff28b5a6f2343fcd14a8451d199d642e21db2bbf8e16408e2035823d3ac1758279d7d5a37b2e32e45445f5d02ca90ae5e6c395"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TasksModule-26371412100a1ac265cee25e54ff28b5a6f2343fcd14a8451d199d642e21db2bbf8e16408e2035823d3ac1758279d7d5a37b2e32e45445f5d02ca90ae5e6c395"' :
                                        'id="xs-injectables-links-module-TasksModule-26371412100a1ac265cee25e54ff28b5a6f2343fcd14a8451d199d642e21db2bbf8e16408e2035823d3ac1758279d7d5a37b2e32e45445f5d02ca90ae5e6c395"' }>
                                        <li class="link">
                                            <a href="injectables/LocalStorageSeederService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStorageSeederService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
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
                                    <a href="injectables/UploadedFileLocalStorageService.html" data-type="entity-link" >UploadedFileLocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadedFileService.html" data-type="entity-link" >UploadedFileService</a>
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