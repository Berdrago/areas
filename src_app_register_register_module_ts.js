"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 3963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 3963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 8135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 8135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);







let RegisterPage = class RegisterPage {
  constructor(authSvc, router) {
    this.authSvc = authSvc;
    this.router = router;
  }

  onRegister(email, password) {
    var _this = this;

    return (0,C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this.authSvc.register(email.value, password.value);

        if (user) {
          console.log(user);

          const isVerified = _this.authSvc.isEmailVerified(user);

          _this.redirectUser(isVerified);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }

  redirectUser(isVerified) {
    if (isVerified) {
      this.router.navigate(['user']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }

};

RegisterPage.ctorParameters = () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


/***/ }),

/***/ 6219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".img {\n  display: block;\n  margin: 0px auto;\n}\n\n.bcentrado {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n.text {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  border: 10px;\n  color: white;\n}\n\n.toggle {\n  margin-left: 50%;\n  transform: translateX(-265%);\n}\n\n.sc-ion-input-md-s {\n  color: white;\n}\n\n.encabezado {\n  background-color: #ff0018;\n  border-radius: 10px;\n  margin: 10px;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBS0oiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgIH1cclxuLmJjZW50cmFkbyAge1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLnRleHQge1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBib3JkZXI6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRvZ2dsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2NSUpO1xyXG59XHJcbi5zYy1pb24taW5wdXQtbWQtc3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZW5jYWJlemFkb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMTggO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-back-button slot=\"start\" defaultHref=\"/\" color=\"danger\" >\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"danger\" > </ion-icon> \n    </ion-back-button>\n    <ion-title >\n      <a > <img src=\"/assets/logo.png\"   style=\"width: 200px;\" class=\"img\"   alt=\"\"></a>\n    </ion-title>\n  </ion-toolbar>\n  <h3 class=\"subtitulo encabezado\">Registro de Usuario  </h3>\n  <form action=\"\">\n    <ion-item  class=\"text\">\n      <ion-label class=\"normal\" id=\"usuario\" >Nombre : </ion-label>\n      <ion-icon name=\"person-outline\" slot=\"end\" color=\"danger\"></ion-icon>\n      <ion-input class=\"normal2 \" type=\"text\" placeholder=\"Ingresar Nombre de Usuario \" inputmode=\"text\" #usuario required >\n      </ion-input>\n    </ion-item>\n    <br>\n    <ion-item  class=\"text\">\n      <ion-label class=\"normal\" id=\"email\" >Email :</ion-label>\n      <ion-icon  slot=\"end\" name=\"mail-outline\" color=\"danger\"></ion-icon>\n      <ion-input class=\"normal2 \" type=\"Email\" placeholder=\"Ingresar Email \" inputmode=\"Email\"  #email required>\n      </ion-input>\n    </ion-item>\n    <br>\n    <ion-item  class=\"text\">\n      <ion-label class=\"normal\" id=\"sede\" >Sede Duoc :</ion-label>\n      <ion-icon name=\"home-outline\" slot=\"end\" color=\"danger\"></ion-icon>\n      <ion-input class=\"normal2 \" type=\"text\" placeholder=\"Sede\" inputmode=\"text\" #sede required  ></ion-input>\n    </ion-item>\n    <br>\n    <ion-item  class=\"text\">\n      <ion-label class=\"normal\" id=\"password\" >Ingresa Contraseña :</ion-label>\n      <ion-icon  slot=\"end\" name=\"keypad-outline\" color=\"danger\"></ion-icon>\n      <ion-input class=\"normal2 \" type=\"password\" placeholder=\"Ingresar Contrseña \" inputmode=\"text\"  #password  required>\n      </ion-input>\n    </ion-item>\n    <br>\n    <ion-item  class=\"text\">\n      <ion-label class=\"normal\" id=\"password2\" >Repite Contraseña :</ion-label>   \n      <ion-icon  slot=\"end\" name=\"keypad-outline\" color=\"danger\"></ion-icon>\n      <ion-input class=\"normal2 \" type=\"password\" placeholder=\"Ingresar Contrseña \" inputmode=\"text\"  #password2 required >\n      </ion-input>\n    </ion-item>\n    <ion-row class=\"ion-padding\">\n      <ion-col>\n        <ion-button expand=\"medium\" shape=\"round\" class=\"bcentrado\" color=\"success\" type=\"submit\"  (click)=\"onRegister(email, password)\"> \n          Registrarse\n        </ion-button>\n        <ion-button expand=\"medium\" shape=\"round\" class=\"bcentrado\" color=\"danger\" type=\"reset\"   > \n          Limpiar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-header>\n  \n";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map