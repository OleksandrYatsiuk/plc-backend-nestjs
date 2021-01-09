/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Nest JS api')
        .setDescription('The nest API description')
        .addBearerAuth()
        .setVersion('1.0')
        .addTag('users', 'Users Management')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log(`\n Application is running on: ${await app.getUrl()}`);
}
bootstrap();


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");;

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");;

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(4);
const config_module_1 = __webpack_require__(5);
const mongoose_module_1 = __webpack_require__(6);
const app_controller_1 = __webpack_require__(7);
const app_service_1 = __webpack_require__(8);
const users_module_1 = __webpack_require__(9);
const mongoose_config_service_1 = __webpack_require__(22);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            config_module_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_module_1.MongooseModule.forRootAsync({
                useClass: mongoose_config_service_1.MongooseConfigService
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, mongoose_config_service_1.MongooseConfigService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");;

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/config/dist/config.module");;

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose/dist/mongoose.module");;

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(8);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(4);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(4);
const users_service_1 = __webpack_require__(10);
const users_controller_1 = __webpack_require__(14);
const mongoose_1 = __webpack_require__(12);
const user_schema_1 = __webpack_require__(13);
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        controllers: [users_controller_1.UsersController],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }])],
        providers: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(11);
const mongoose_2 = __webpack_require__(12);
const user_schema_1 = __webpack_require__(13);
let UsersService = class UsersService {
    constructor(db) {
        this.db = db;
    }
    create(data) {
        const user = new this.db(data);
        return user.save();
    }
    findAll() {
        return this.db.find().exec();
    }
    findOne(id) {
        return this.db.findById(id).exec();
    }
    update(id, data) {
        return this.db.findByIdAndUpdate(id, { $set: { data } }, { new: true }).exec();
    }
    remove(id) {
        return this.db.findByIdAndDelete(id).exec();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");;

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(12);
const mongoose = __webpack_require__(11);
let User = class User {
};
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], User.prototype, "chat_id", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], User.prototype, "code", void 0);
__decorate([
    mongoose_1.Prop({ default: 'subscriber' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    mongoose_1.Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]),
    __metadata("design:type", Array)
], User.prototype, "courses", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "haveMessages", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "accessToken", void 0);
__decorate([
    mongoose_1.Prop({ default: Date.now() }),
    __metadata("design:type", Number)
], User.prototype, "createdAt", void 0);
__decorate([
    mongoose_1.Prop({ default: Date.now() }),
    __metadata("design:type", Number)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    mongoose_1.Schema()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(4);
const express_1 = __webpack_require__(15);
const users_service_1 = __webpack_require__(10);
const create_user_dto_1 = __webpack_require__(16);
const update_user_dto_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(2);
const user_dto_1 = __webpack_require__(19);
const pagination_interface_1 = __webpack_require__(20);
const paginator_1 = __webpack_require__(21);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(res, user) {
        this.usersService.create(user)
            .then(user => res.status(common_1.HttpStatus.CREATED).send({ user }))
            .catch(e => console.log(e));
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(id);
    }
    update(id, data) {
        return this.usersService.update(id, data);
    }
    remove(id, res) {
        this.usersService.remove(id)
            .then(() => res.status(common_1.HttpStatus.NO_CONTENT))
            .catch(e => res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }));
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object, typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    paginator_1.ApiPaginatedResponse(user_dto_1.UserDto),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiNoContentResponse(),
    swagger_1.ApiNotFoundResponse(),
    swagger_1.ApiInternalServerErrorResponse(),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    swagger_1.ApiTags('users'),
    common_1.Controller('users'),
    swagger_1.ApiExtraModels(pagination_interface_1.PaginatedDto),
    __metadata("design:paramtypes", [typeof (_h = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _h : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("express");;

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = exports.EUserRole = void 0;
const swagger_1 = __webpack_require__(2);
var EUserRole;
(function (EUserRole) {
    EUserRole["Admin"] = "Admin";
    EUserRole["Subscriber"] = "Subscriber";
})(EUserRole = exports.EUserRole || (exports.EUserRole = {}));
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user phone number',
        default: 380999999999,
        required: true,
        type: String
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(18);
const swagger_1 = __webpack_require__(2);
const create_user_dto_1 = __webpack_require__(16);
class UpdateUserDto extends mapped_types_1.PartialType(create_user_dto_1.CreateUserDto) {
}
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user name',
        required: false,
        default: null,
        type: String
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user phone number',
        default: null,
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user first name',
        default: 'email@email.co',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user phone number',
        default: 380999999999,
        required: true,
        type: String
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user chat ID number',
        default: 0,
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "chat_id", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user status',
        default: 0,
        required: false,
        readOnly: true,
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user code',
        default: null,
        readOnly: true,
        required: false,
        type: Number,
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: null,
        type: Boolean,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", Boolean)
], UpdateUserDto.prototype, "haveMessages", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: null,
        type: String,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "passwordHash", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: null,
        type: String,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "accessToken", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: Date.now(),
        type: String,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: Date.now(),
        type: String,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "updatedAt", void 0);
exports.UpdateUserDto = UpdateUserDto;


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");;

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = exports.EUserRole = void 0;
const swagger_1 = __webpack_require__(2);
var EUserRole;
(function (EUserRole) {
    EUserRole["Admin"] = "Admin";
    EUserRole["Subscriber"] = "Subscriber";
})(EUserRole = exports.EUserRole || (exports.EUserRole = {}));
class UserDto {
}
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user name',
        required: false,
        default: null,
        type: String
    }),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user phone number',
        default: null,
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user first name',
        default: 'email@email.co',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user phone number',
        default: 380999999999,
        required: true,
        type: String
    }),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user chat ID number',
        default: 0,
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "chat_id", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user status',
        default: 0,
        required: false,
        readOnly: true,
        type: Number
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user role',
        default: EUserRole.Subscriber,
        required: false,
        readOnly: true,
        type: String,
        enum: EUserRole,
        enumName: 'EUserRole'
    }),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user code',
        default: null,
        readOnly: true,
        required: false,
        type: Number,
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: null,
        type: Boolean,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", Boolean)
], UserDto.prototype, "haveMessages", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user available courses',
        default: [],
        required: false,
        readOnly: true,
        type: [String]
    }),
    __metadata("design:type", Array)
], UserDto.prototype, "courses", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: null,
        type: String,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "passwordHash", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: null,
        type: String,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "accessToken", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: Date.now(),
        type: String,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: Date.now(),
        type: String,
        readOnly: true,
        required: false,
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "updatedAt", void 0);
exports.UserDto = UserDto;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedDto = void 0;
const swagger_1 = __webpack_require__(2);
class PaginatedDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PaginatedDto.prototype, "total", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PaginatedDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PaginatedDto.prototype, "offset", void 0);
exports.PaginatedDto = PaginatedDto;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPaginatedResponse = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const pagination_interface_1 = __webpack_require__(20);
const ApiPaginatedResponse = (model) => {
    return common_1.applyDecorators(swagger_1.ApiOkResponse({
        schema: {
            allOf: [
                { $ref: swagger_1.getSchemaPath(pagination_interface_1.PaginatedDto) },
                {
                    properties: {
                        results: {
                            type: 'array',
                            items: { $ref: swagger_1.getSchemaPath(model) },
                        },
                    },
                },
            ],
        },
    }));
};
exports.ApiPaginatedResponse = ApiPaginatedResponse;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongooseConfigService = void 0;
const common_1 = __webpack_require__(4);
let MongooseConfigService = class MongooseConfigService {
    createMongooseOptions() {
        return {
            uri: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.9ab1f.mongodb.net/${process.env.DATABASE_NAME}`,
            useFindAndModify: false
        };
    }
};
MongooseConfigService = __decorate([
    common_1.Injectable()
], MongooseConfigService);
exports.MongooseConfigService = MongooseConfigService;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;