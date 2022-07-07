"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verify-email_verify-email_module_ts"],{

/***/ 8356:
/*!*************************************************************!*\
  !*** ./src/app/verify-email/verify-email-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageRoutingModule": () => (/* binding */ VerifyEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.page */ 8236);




const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPage
    }
];
let VerifyEmailPageRoutingModule = class VerifyEmailPageRoutingModule {
};
VerifyEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyEmailPageRoutingModule);



/***/ }),

/***/ 5938:
/*!*****************************************************!*\
  !*** ./src/app/verify-email/verify-email.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageModule": () => (/* binding */ VerifyEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email-routing.module */ 8356);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page */ 8236);







let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPageRoutingModule
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_1__.VerifyEmailPage]
    })
], VerifyEmailPageModule);



/***/ }),

/***/ 8236:
/*!***************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPage": () => (/* binding */ VerifyEmailPage)
/* harmony export */ });
/* harmony import */ var C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _verify_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page.html?ngResource */ 8745);
/* harmony import */ var _verify_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-email.page.scss?ngResource */ 3393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);







let VerifyEmailPage = class VerifyEmailPage {
  constructor(authSvc, router) {
    this.authSvc = authSvc;
    this.router = router;
    this.user$ = this.authSvc.afAuth.user;
  }

  onSendEmail(email, password) {
    var _this = this;

    return (0,C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.authSvc.sendVerifcationEmail();
      } catch (error) {
        console.log(error);
      }
    })();
  }

  sendVerifcationEmail() {
    this.router.navigate(['login']);
  }

  ngOnDestro() {
    this.authSvc.logout();
  }

};

VerifyEmailPage.ctorParameters = () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

VerifyEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-verify-email',
  template: _verify_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_verify_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], VerifyEmailPage);


/***/ }),

/***/ 3393:
/*!****************************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".img {\n  display: block;\n  margin: 0px auto;\n}\n\n.bcentrado {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n.text {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  border: 10px;\n  color: white;\n}\n\n.toggle {\n  margin-left: 50%;\n  transform: translateX(-265%);\n}\n\n.sc-ion-input-md-s {\n  color: white;\n}\n\n.encabezado {\n  background-color: #ff0018;\n  border-radius: 10px;\n  margin: 10px;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUtKIiwiZmlsZSI6InZlcmlmeS1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgfVxyXG4uYmNlbnRyYWRvICB7XHJcbiAgICB3aWR0aDogMzAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4udGV4dCB7XHJcbiAgICB3aWR0aDogMzAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvcmRlcjogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udG9nZ2xle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjY1JSk7XHJcbn1cclxuLnNjLWlvbi1pbnB1dC1tZC1ze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5lbmNhYmV6YWRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAxOCA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 8745:
/*!****************************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"titulo\" >Verificacion de Email </ion-title>\n  </ion-toolbar>\n  <ion-row *ngIf=\"user$ | async as user\">\n    <ion-col>\n      <h2 class=\"text\">Gracias Por Registrarte   </h2>\n      <ion-text color=\"primary\">\n        <h2 class=\"text\">El Email <strong>{{user.email}}</strong> debe ser Verificado </h2>\n      </ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" expand=\"medium\" shape=\"round\" class=\"bcentrado\" color=\"danger\"  (click)=\"sendVerifcationEmail()\" >Verificar Email</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n  \n";

/***/ })

}]);
//# sourceMappingURL=src_app_verify-email_verify-email_module_ts.js.map