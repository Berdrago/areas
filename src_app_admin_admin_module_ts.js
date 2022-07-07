"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page */ 153);




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_0__.AdminPage
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 153);







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage]
    })
], AdminPageModule);



/***/ }),

/***/ 153:
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page.html?ngResource */ 376);
/* harmony import */ var _admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss?ngResource */ 8890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_areas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/areas.service */ 6802);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);








let AdminPage = class AdminPage {
    constructor(menucontroler, firestoreService, router, authSvc) {
        this.menucontroler = menucontroler;
        this.firestoreService = firestoreService;
        this.router = router;
        this.authSvc = authSvc;
        this.productos = [];
        this.newProducto = {
            nombre: '',
            fecha: null,
            hora: null,
            imagen: '',
            categoria: '',
            id: this.firestoreService.getId(),
            fcreacion: new Date()
        };
        this.path = 'Productos/';
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    ngOnInit() {
        this.getProductos();
    }
    //Metodo Click de menu
    //Metodo click para guardar en la base de datos
    guardarProducto() {
        this.firestoreService.createDoc(this.newProducto, this.path, this.newProducto.id);
    }
    //La notificaccion del guradado
    getProductos() {
        this.firestoreService.getCollection(this.path).subscribe(res => {
            console.log(res);
            this.productos = res;
        });
    }
    deleteProducto(producto) {
        console.log(this.deleteProducto);
        this.firestoreService.deleteDoc(this.path, producto.id);
    }
    editarProducto(producto) {
        console.log(this.editarProducto);
        this.firestoreService.updateDoc(this.path, producto.nombre, producto.id);
    }
    sendLogout() {
        this.router.navigate(['home']);
        this.authSvc.logout();
    }
};
AdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _services_areas_service__WEBPACK_IMPORTED_MODULE_2__.AreasService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
AdminPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonModal,] }]
};
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin',
        template: _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 8890:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".img {\n  display: block;\n  margin: 0px auto;\n}\n\n.bcentrado {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n.text {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  border: 10px;\n  color: white;\n}\n\n.toggle {\n  margin-left: 50%;\n  transform: translateX(-265%);\n}\n\n.sc-ion-input-md-s {\n  color: white;\n}\n\n.encabezado {\n  background-color: #ff0018;\n  border-radius: 10px;\n  margin: 10px;\n  text-align: center;\n  padding: 10px;\n}\n\n.validacion {\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFNSiIsImZpbGUiOiJhZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgfVxyXG4uYmNlbnRyYWRvICB7XHJcbiAgICB3aWR0aDogMzAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4udGV4dCB7XHJcbiAgICB3aWR0aDogMzAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvcmRlcjogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udG9nZ2xle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjY1JSk7XHJcbn1cclxuLnNjLWlvbi1pbnB1dC1tZC1ze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5lbmNhYmV6YWRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAxOCA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnZhbGlkYWNpb257XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIDtcclxufSJdfQ== */";

/***/ }),

/***/ 376:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content class=\"ion-padding\">\n  <ion-button expand=\"medium\"   color=\"danger\" (click)=\"sendLogout()\"  > \n    Cerrar Sesion\n  </ion-button>\n  <h2>Listado de Areas  </h2>\n  <ion-button id=\"open-modal\" expand=\"block\" color=\"danger\">\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\n  </ion-button>\n    <ion-item *ngFor=\"let producto of productos \"> \n      <ion-label> \n        {{producto.id}}\n      </ion-label>\n      <ion-label> \n        {{producto.nombre}}\n      </ion-label>\n      <ion-label> \n        {{producto.categoria}}\n      </ion-label>\n      <ion-label> \n        {{producto.hora}}\n      </ion-label>\n      <ion-label> \n        {{producto.fecha}}\n      </ion-label>\n      <ion-button color=\"danger\" slot=\"end\" (click)=\"deleteProducto(producto)\">\n        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon> \n      </ion-button>\n    </ion-item> \n    <ion-modal trigger=\"open-modal\" >\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"cancel()\">Cancel</ion-button>\n            </ion-buttons>\n            <ion-title class=\"validacion\" >Crear Areas Recreativas </ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n            <ion-item >\n              <ion-label class=\"normal\" id=\"nombre\" >\n                  Nombre: \n              </ion-label>\n              <ion-icon  slot=\"end\" name=\"hand-right-outline\" color=\"danger\"></ion-icon>\n              <ion-input [(ngModel)]=\"newProducto.nombre\" class=\"normal2 \"type=\"string\" placeholder=\"Ingresa Nombre Completo \"  inputmode=\"text\" > </ion-input>\n            </ion-item>\n            <ion-item >\n              <ion-label class=\"normal\">\n                Fecha de creacion de Area Recreativa\n              </ion-label>\n              <ion-input  [(ngModel)]=\"newProducto.fecha\" class=\"normal2\" type=\"date\"  >\n              </ion-input>\n            </ion-item>\n            <ion-item >\n              <ion-label class=\"normal\">\n                Hora de Creacion:\n              </ion-label>\n              <ion-input  [(ngModel)]=\"newProducto.hora\" class=\"normal2 \" type=\"time\"  >\n              </ion-input>\n            </ion-item>\n            <ion-item >\n              <ion-label class=\"normal\">\n                Imagen:\n              </ion-label>\n              <ion-input  [(ngModel)]=\"newProducto.imagen\" class=\"normal2 \" type=\"file\"  >\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-select placeholder=\"Seleccional el tipo de Area\" [multiple]=\"true\" [(ngModel)]=\"newProducto.categoria\">\n                <ion-select-option value=\"Sala\">Sala</ion-select-option>\n                <ion-select-option value=\"Cancha\">Cancha</ion-select-option>\n                <ion-select-option value=\"Pig-Pong\">Ping pong</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-button expand=\"medium\" shape=\"round\" class=\"bcentrado\" color=\"danger\"  type=\"submit\" (click)=\"guardarProducto()\" > Crear Area Recreativa  </ion-button>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map