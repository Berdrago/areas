"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);







let LoginPage = class LoginPage {
  constructor(authSvc, router) {
    this.authSvc = authSvc;
    this.router = router;
    this.img = '/assets/SedePN.jpg';
  }

  onLogin(email, password) {
    var _this = this;

    return (0,C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this.authSvc.login(email.value, password.value);

        if (user) {
          const isVerified = _this.authSvc.isEmailVerified(user);

          _this.redirectUser(isVerified);

          console.log(isVerified);
          console.log(user);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }

  onLoginGoogle() {
    var _this2 = this;

    return (0,C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this2.authSvc.loginGoogle();

        if (user) {
          const isVerified = _this2.authSvc.isEmailVerified(user);

          _this2.redirectUser(isVerified);

          console.log(isVerified);
          console.log(user);
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

LoginPage.ctorParameters = () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".img {\n  display: block;\n  margin: 0px auto;\n}\n\n.bcentrado {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n.text {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  border: 10px;\n  color: white;\n}\n\n.toggle {\n  margin-left: 50%;\n  transform: translateX(-265%);\n}\n\n.sc-ion-input-md-s {\n  color: white;\n}\n\n.encabezado {\n  background-color: #ff0018;\n  border-radius: 10px;\n  margin: 10px;\n  text-align: center;\n  padding: 10px;\n}\n\n.toggle {\n  margin-left: 50%;\n  transform: translateX(-265%);\n}\n\n.text2 {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  border: 10px;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4uYmNlbnRyYWRvICB7XHJcbiAgICB3aWR0aDogMzAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIFxyXG59XHJcbi50ZXh0IHtcclxuICAgIHdpZHRoOiAzMDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50b2dnbGV7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNjUlKTtcclxufVxyXG4uc2MtaW9uLWlucHV0LW1kLXN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmVuY2FiZXphZG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDE4IDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4udG9nZ2xle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjY1JSk7XHJcbn1cclxuLnRleHQyIHtcclxuICAgIHdpZHRoOiAzMDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-back-button slot=\"start\" defaultHref=\"/\" color=\"danger\" >\n      <ion-icon name=\"arrow-back-circle-outline\" color=\"danger\" > </ion-icon> \n    </ion-back-button>\n    <ion-title >\n      <a  > <img src=\"/assets/logo.png\"   style=\"width: 200px;\" class=\"img\"   alt=\"\"></a>\n    </ion-title>\n  </ion-toolbar>\n  <h3 class=\"subtitulo encabezado \" >Iniciar Sesion  </h3>\n  <form action=\"\">\n    <ion-item  class=\"text\">\n      <ion-label class=\"normal\" id=\"email\" >Email :</ion-label>\n      <ion-icon  slot=\"end\" name=\"mail-outline\" color=\"danger\"></ion-icon>\n      <ion-input class=\"normal2 \" type=\"Email\" placeholder=\"Ingresar Email \" inputmode=\"Email\"  #email required>\n      </ion-input>\n    </ion-item>\n    <br>\n    <ion-item  class=\"text\">\n      <ion-label class=\"normal\" id=\"password\" >Ingresa Contraseña :</ion-label>\n      <ion-icon  slot=\"end\" name=\"keypad-outline\" color=\"danger\"></ion-icon>\n      <ion-input class=\"normal2 \" type=\"password\" placeholder=\"Ingresar Contrseña \" inputmode=\"text\"  #password  required>\n      </ion-input>\n    </ion-item>\n    <br>\n    <ion-row class=\"ion-padding\">\n      <ion-col>\n        <ion-button expand=\"medium\" shape=\"round\" class=\"bcentrado\" color=\"success\" type=\"submit\"  (click)=\"onLogin(email, password)\"> \n          Iniciar Sesion\n          <ion-icon name=\"person-circle-outline\" slot=\"end\"></ion-icon>\n        </ion-button>\n        <ion-button expand=\"medium\" shape=\"round\" class=\"bcentrado\" color=\"danger\" type=\"reset\"   > \n          Limpiar\n          <ion-icon name=\"trash-outline\" slot=\"end\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <h3 class=\"text2\"> o </h3>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"medium\" shape=\"round\" class=\"bcentrado\" color=\"primary\" type=\"submit\"  (click)=\"onLoginGoogle()\"> \n          Iniciar Sesion Con Google\n          <ion-icon name=\"logo-google\" slot=\"end\" ></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-toggle color=\"danger\" class=\"toggle\"  ></ion-toggle>\n  <h4 style=\"text-align: center; color: red;\"  type=\"button\" [routerLink]='[\"/forgot-password\"]' > ¿Olvidaste Tu Contraseña? </h4>\n  <br> \n  <img src=\"/assets/Acreditado.jpg\"  style=\"width: 300px;\" class=\"img\"   alt=\"\">\n</ion-header>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map