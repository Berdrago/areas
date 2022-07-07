"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_user_module_ts"],{

/***/ 454:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page */ 8169);




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_0__.UserPage
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserPageRoutingModule);



/***/ }),

/***/ 8524:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 454);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page */ 8169);







let UserPageModule = class UserPageModule {
};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage]
    })
], UserPageModule);



/***/ }),

/***/ 8169:
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.html?ngResource */ 7493);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.page.scss?ngResource */ 5823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_areas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/areas.service */ 6802);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);









let UserPage = class UserPage {
  constructor(authSvc, router, alertController, firestoreService) {
    this.authSvc = authSvc;
    this.router = router;
    this.alertController = alertController;
    this.firestoreService = firestoreService;
    this.data = {
      acomp: 0,
      numsala: '',
      tiempo: '',
      motivo: ''
    };
    this.niveles = [{
      id: 1,
      nivel: '5min - 15min'
    }, {
      id: 2,
      nivel: '5min - 30min'
    }, {
      id: 3,
      nivel: '30min - 60min'
    }];
    this.productos = [];
    this.path = 'Productos/';
    this.card = [{
      img: '/assets/Bibloteca.jpg',
      titulo: 'Bibloteca Duoc ',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    }, {
      img: '/assets/Futbol.jpg',
      titulo: 'Reserva tu Cancha',
      desc: 'Siempre sabremos donde estás!'
    }];
    this.user$ = this.authSvc.afAuth.user;
  }

  sendLogout() {
    this.router.navigate(['home']);
    this.authSvc.logout();
  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.firestoreService.getCollection(this.path).subscribe(res => {
      console.log(res);
      this.productos = res;
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  presentAlert() {
    var _this = this;

    return (0,C_Users_Gary_Desktop_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Ingresa Tu informacion',
        buttons: ['Solicitar Area'],
        inputs: [{
          placeholder: 'Nomre de Usuario',
          attributes: {
            maxlength: 8
          }
        }, {
          type: 'number',
          placeholder: 'Cantidad de Acompañantes ',
          min: 1,
          max: 5
        }, {
          type: 'textarea',
          placeholder: 'Necesidad del Area',
          attributes: {
            maxlength: 60
          }
        }, {
          type: 'time',
          placeholder: 'Hora de Solicitud'
        }]
      });
      yield alert.present();
    })();
  }

};

UserPage.ctorParameters = () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _services_areas_service__WEBPACK_IMPORTED_MODULE_3__.AreasService
}];

UserPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal]
  }]
};
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-user',
  template: _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UserPage);


/***/ }),

/***/ 5823:
/*!************************************************!*\
  !*** ./src/app/user/user.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".img {\n  display: block;\n  margin: 0px auto;\n}\n\n.bcentrado {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n.text {\n  width: 300px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  border: 10px;\n  color: white;\n}\n\n.toggle {\n  margin-left: 50%;\n  transform: translateX(-265%);\n}\n\n.sc-ion-input-md-s {\n  color: white;\n}\n\n.encabezado {\n  background-color: #ff0018;\n  border-radius: 10px;\n  margin: 10px;\n  text-align: center;\n  padding: 10px;\n}\n\n.validacion {\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQU1KIiwiZmlsZSI6InVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgIH1cclxuLmJjZW50cmFkbyAge1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLnRleHQge1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBib3JkZXI6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRvZ2dsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2NSUpO1xyXG59XHJcbi5zYy1pb24taW5wdXQtbWQtc3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZW5jYWJlemFkb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMTggO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi52YWxpZGFjaW9ue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciA7XHJcbn0iXX0= */";

/***/ }),

/***/ 7493:
/*!************************************************!*\
  !*** ./src/app/user/user.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-menu></ion-menu>\n<ion-header padding >\n  <ion-toolbar *ngIf=\"user$ | async as user\">\n    <ion-title><strong>{{user.email}}</strong></ion-title>\n    <ion-button  slot='end' expand=\"medium\"   color=\"danger\" (click)=\"sendLogout()\"  > \n      Cerrar Sesion\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <ion-card *ngFor=\"let producto of productos \">\n    <ion-card-header mode=\"ios\">\n        <ion-card-title>{{producto.categoria}}</ion-card-title>\n    </ion-card-header>\n    <ion-item>\n      <ion-button fill=\"outline\" color=\"danger\"  (click)=\"presentAlert()\">Reserva</ion-button>\n    </ion-item>\n    <ion-card-content> \n      {{producto.fecha}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map