/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const all_exceptions_1 = __webpack_require__(40);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: { allowedHeaders: 'Content-Type, Authorization, Accept, Origin' } });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('PLC API')
        .setDescription('Practical Legal Courses Backend API Documentation')
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalFilters(new all_exceptions_1.AllExceptionsFilter());
    await app.listen(process.env.PORT || 3000);
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
const mongoose_config_service_1 = __webpack_require__(25);
const courses_module_1 = __webpack_require__(26);
const lessons_module_1 = __webpack_require__(35);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            courses_module_1.CoursesModule,
            config_module_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_module_1.MongooseModule.forRootAsync({ useClass: mongoose_config_service_1.MongooseConfigService }),
            lessons_module_1.LessonsModule
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
const users_controller_1 = __webpack_require__(16);
const mongoose_1 = __webpack_require__(11);
const user_schema_1 = __webpack_require__(14);
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
const bcrypt = __webpack_require__(12);
const mongoose_2 = __webpack_require__(13);
const user_schema_1 = __webpack_require__(14);
const create_user_dto_1 = __webpack_require__(15);
let UsersService = class UsersService {
    constructor(db) {
        this.db = db;
    }
    create(data) {
        const user = new this.db(data);
        return user.save();
    }
    registerAdmin(data) {
        const passwordHash = bcrypt.hashSync(data.password, 10);
        const user = new this.db(Object.assign(Object.assign({}, data), { role: create_user_dto_1.EUserRole.Admin, passwordHash }));
        return user.save();
    }
    async loginAdmin(data) {
        const user = await this.db.findOne({ username: data.username });
        if (user && bcrypt.compareSync(data.password, user.passwordHash)) {
            return this.db.findByIdAndUpdate(user._id, { $set: { accessToken: bcrypt.hashSync(data.password, 10) } }, { new: true });
        }
        else {
            throw new common_1.BadRequestException();
        }
    }
    async findAll(page, limit) {
        page = page - 1;
        const count = await this.db.countDocuments();
        const users = await this.db.find().sort({ updatedAt: 1 }).limit(limit).skip(limit * page);
        return {
            total: count, limit, page: page + 1,
            result: users
        };
    }
    findOne(id) {
        return this.db.findById(id).exec()
            .then(user => {
            if (user) {
                return user;
            }
            else {
                throw new common_1.NotFoundException('User was not found');
            }
        });
    }
    update(id, data) {
        return this.db.findByIdAndUpdate(id, { $set: { data } }, { new: true }).exec();
    }
    remove(id) {
        return this.db.findByIdAndDelete(id).exec();
    }
    async genCode(data) {
        const user = await this.db.findOne(data);
        if (user) {
            const code = this.getRandomInt(1000, 9999);
            setTimeout(() => {
                this.db.findByIdAndUpdate(user._id, { $set: { code: null, updatedAt: Date.now() } }).exec();
            }, 30 * 60 * 1000);
            return this.db.findByIdAndUpdate(user._id, { $set: { code, updatedAt: Date.now() } }, { new: true }).exec();
        }
    }
    async checkCode(data) {
        const user = await this.db.findOne(data);
        if (user && user.code === data.code) {
            return user;
        }
        else {
            throw new common_1.BadRequestException('Код не валідний!');
        }
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    parseModel(user) {
        return {
            id: user._id,
            updatedAt: 1610276245305,
            createdAt: 1610276245305,
            accessToken: null,
            passwordHash: '$2b$10$NJjfqVNNGLKdWDCVaem.4.lLKwyYOF1.SbaaoG2crLwWKcX/0qD12',
            haveMessages: false,
            courses: [],
            role: 'admin',
            code: null,
            status: 0,
            chat_id: null,
            phone: null,
            email: null,
            lastName: null,
            firstName: null,
            username: 'techadmin3',
        };
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");;

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("bcrypt");;

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("mongoose");;

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(11);
const mongoose = __webpack_require__(13);
let User = class User {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
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
    mongoose_1.Prop({ default: null }),
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
    mongoose_1.Schema({ versionKey: false })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),
/* 15 */
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
    EUserRole["Admin"] = "admin";
    EUserRole["Subscriber"] = "subscriber";
})(EUserRole = exports.EUserRole || (exports.EUserRole = {}));
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty({
        title: 'This is user phone number',
        default: "+380999999999",
        required: true,
        type: String
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
exports.CreateUserDto = CreateUserDto;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(4);
const express_1 = __webpack_require__(17);
const users_service_1 = __webpack_require__(10);
const create_user_dto_1 = __webpack_require__(15);
const update_user_dto_1 = __webpack_require__(18);
const swagger_1 = __webpack_require__(2);
const user_dto_1 = __webpack_require__(20);
const pagination_interface_1 = __webpack_require__(21);
const paginator_1 = __webpack_require__(22);
const register_dto_1 = __webpack_require__(23);
const check_code_dto_1 = __webpack_require__(24);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(res, user) {
        this.usersService.create(user)
            .then(user => res.status(common_1.HttpStatus.CREATED).send({ user }))
            .catch(e => console.log(e));
    }
    findAll(query, params, res) {
        this.usersService.findAll(+(query === null || query === void 0 ? void 0 : query.page) || 1, +(query === null || query === void 0 ? void 0 : query.limit) || 10)
            .then(result => res.status(common_1.HttpStatus.OK).send(result))
            .catch(e => {
            throw new common_1.InternalServerErrorException(e.message);
        });
    }
    findOne(id, res, next) {
        this.usersService.findOne(id)
            .then(user => res.status(common_1.HttpStatus.OK).send(user))
            .catch(e => next(new common_1.NotFoundException(e.message)));
    }
    update(id, data) {
        return this.usersService.update(id, data);
    }
    remove(id, res) {
        this.usersService.remove(id)
            .then(() => res.status(common_1.HttpStatus.NO_CONTENT))
            .catch(e => res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }));
    }
    registerAdmin(user, res) {
        this.usersService.registerAdmin(user)
            .then((user) => res.status(common_1.HttpStatus.CREATED).send(user))
            .catch(e => res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }));
    }
    loginAdmin(user, res) {
        this.usersService.loginAdmin(user)
            .then(user => res.status(common_1.HttpStatus.OK).send(user))
            .catch(e => res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }));
    }
    generateCode(data, res) {
        this.usersService.genCode(data)
            .then(user => res.status(common_1.HttpStatus.OK).send(user))
            .catch(e => res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: e.message, stack: e }));
    }
    checkCode(data, res) {
        this.usersService.checkCode(data)
            .then(user => res.status(common_1.HttpStatus.OK).send(user))
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
    swagger_1.ApiQuery({ name: 'page', type: Number, required: false }),
    swagger_1.ApiQuery({ name: 'limit', type: Number, required: false }),
    __param(0, common_1.Query()), __param(1, common_1.Param()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()), __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object, typeof (_e = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiNoContentResponse(),
    swagger_1.ApiNotFoundResponse(),
    swagger_1.ApiInternalServerErrorResponse(),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    common_1.Post('register'),
    swagger_1.ApiCreatedResponse({ type: user_dto_1.UserDto }),
    swagger_1.ApiInternalServerErrorResponse(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _j : Object, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "registerAdmin", null);
__decorate([
    common_1.Post('login'),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _l : Object, typeof (_m = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _m : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loginAdmin", null);
__decorate([
    common_1.Post('generate-code'),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _o : Object, typeof (_p = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _p : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "generateCode", null);
__decorate([
    common_1.Post('check-code'),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof check_code_dto_1.CheckCodeDto !== "undefined" && check_code_dto_1.CheckCodeDto) === "function" ? _q : Object, typeof (_r = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _r : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "checkCode", null);
UsersController = __decorate([
    swagger_1.ApiTags('Users'),
    common_1.Controller('users'),
    swagger_1.ApiExtraModels(pagination_interface_1.PaginatedDto),
    __metadata("design:paramtypes", [typeof (_s = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _s : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("express");;

/***/ }),
/* 18 */
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
const mapped_types_1 = __webpack_require__(19);
const swagger_1 = __webpack_require__(2);
const create_user_dto_1 = __webpack_require__(15);
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
/* 19 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");;

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
        required: false,
        readOnly: true,
        type: String,
        default: '5ff9f3e01789d3484c7dee4e'
    }),
    __metadata("design:type", String)
], UserDto.prototype, "_id", void 0);
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
/* 21 */
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
], PaginatedDto.prototype, "page", void 0);
exports.PaginatedDto = PaginatedDto;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPaginatedResponse = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const pagination_interface_1 = __webpack_require__(21);
const ApiPaginatedResponse = (model) => {
    return common_1.applyDecorators(swagger_1.ApiOkResponse({
        schema: {
            allOf: [
                { $ref: swagger_1.getSchemaPath(pagination_interface_1.PaginatedDto) },
                {
                    properties: {
                        result: {
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
/* 23 */
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
exports.RegisterDto = void 0;
const swagger_1 = __webpack_require__(2);
class RegisterDto {
}
__decorate([
    swagger_1.ApiProperty({
        default: 'techadmin',
        required: true,
        type: String
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: 'Test123!',
        required: true,
        type: String
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
exports.RegisterDto = RegisterDto;


/***/ }),
/* 24 */
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
exports.CheckCodeDto = void 0;
const swagger_1 = __webpack_require__(2);
const create_user_dto_1 = __webpack_require__(15);
class CheckCodeDto extends create_user_dto_1.CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty({
        default: "+380999999999",
        required: true,
        type: String
    }),
    __metadata("design:type", String)
], CheckCodeDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({
        default: 1234,
        required: true,
        type: Number
    }),
    __metadata("design:type", Number)
], CheckCodeDto.prototype, "code", void 0);
exports.CheckCodeDto = CheckCodeDto;


/***/ }),
/* 25 */
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
            uri: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@plc.eqrk2.mongodb.net/${process.env.DATABASE_NAME}`,
            useFindAndModify: false,
        };
    }
};
MongooseConfigService = __decorate([
    common_1.Injectable()
], MongooseConfigService);
exports.MongooseConfigService = MongooseConfigService;


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoursesModule = void 0;
const common_1 = __webpack_require__(4);
const courses_service_1 = __webpack_require__(27);
const courses_controller_1 = __webpack_require__(29);
const mongoose_1 = __webpack_require__(11);
const course_schema_1 = __webpack_require__(34);
const course_entity_1 = __webpack_require__(28);
let CoursesModule = class CoursesModule {
};
CoursesModule = __decorate([
    common_1.Module({
        controllers: [courses_controller_1.CoursesController],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: course_entity_1.Course.name, schema: course_schema_1.CourseSchema }])],
        providers: [courses_service_1.CoursesService]
    })
], CoursesModule);
exports.CoursesModule = CoursesModule;


/***/ }),
/* 27 */
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
exports.CoursesService = void 0;
const common_1 = __webpack_require__(4);
const course_entity_1 = __webpack_require__(28);
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(11);
let CoursesService = class CoursesService {
    constructor(model) {
        this.model = model;
    }
    create(createCourseDto) {
        const course = new this.model(createCourseDto);
        return course.save();
    }
    findAll() {
        return this.model.find().sort('createdAt').exec();
    }
    findOne(id) {
        return this.model.findById(id).exec()
            .then(course => {
            if (!course) {
                throw new common_1.NotFoundException('Курс не знайдений');
            }
            return course;
        });
    }
    update(id, updateCourseDto) {
        return this.model.findByIdAndUpdate(id, { $set: updateCourseDto }, { new: true }).exec();
    }
    remove(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
};
CoursesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(course_entity_1.Course.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], CoursesService);
exports.CoursesService = CoursesService;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECourseStatus = exports.Course = void 0;
class Course {
}
exports.Course = Course;
var ECourseStatus;
(function (ECourseStatus) {
    ECourseStatus[ECourseStatus["DRAFT"] = 1] = "DRAFT";
    ECourseStatus[ECourseStatus["PUBLISHED"] = 2] = "PUBLISHED";
})(ECourseStatus = exports.ECourseStatus || (exports.ECourseStatus = {}));


/***/ }),
/* 29 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoursesController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const express_1 = __webpack_require__(17);
const paginator_1 = __webpack_require__(22);
const joi_validation_pipe_1 = __webpack_require__(30);
const courses_service_1 = __webpack_require__(27);
const create_course_dto_1 = __webpack_require__(32);
const update_course_dto_1 = __webpack_require__(33);
let CoursesController = class CoursesController {
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    create(res, createCourseDto, next) {
        this.coursesService
            .create(createCourseDto)
            .then((course) => {
            res.status(common_1.HttpStatus.CREATED).send(course);
        })
            .catch((e) => next(new common_1.InternalServerErrorException(e)));
    }
    findAll() {
        return this.coursesService.findAll();
    }
    findOne(id, res, next) {
        this.coursesService
            .findOne(id)
            .then((course) => res.status(common_1.HttpStatus.OK).send(course))
            .catch((e) => next(new common_1.InternalServerErrorException(e)));
    }
    update(id, res, updateCourseDto, next) {
        this.coursesService
            .update(id, updateCourseDto)
            .then((course) => {
            if (course) {
                res.status(common_1.HttpStatus.OK).send(course);
            }
            else {
                throw new common_1.NotFoundException({ result: 'Course was not found!' });
            }
        })
            .catch((e) => next(new common_1.InternalServerErrorException(e.message)));
    }
    remove(id, res, next) {
        this.coursesService
            .remove(id)
            .then(() => res.status(common_1.HttpStatus.NO_CONTENT).send(null))
            .catch((e) => next(new common_1.InternalServerErrorException(e.message)));
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: create_course_dto_1.CreateCourseDto }),
    common_1.UsePipes(new joi_validation_pipe_1.JoiValidationPipe(create_course_dto_1.createCourseSchema)),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object, typeof (_b = typeof create_course_dto_1.CreateCourseDto !== "undefined" && create_course_dto_1.CreateCourseDto) === "function" ? _b : Object, typeof (_c = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    paginator_1.ApiPaginatedResponse(create_course_dto_1.CreateCourseDto),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: create_course_dto_1.CreateCourseDto }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object, typeof (_e = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOkResponse({ type: create_course_dto_1.CreateCourseDto }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body(new joi_validation_pipe_1.JoiValidationPipe(create_course_dto_1.createCourseSchema))),
    __param(3, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object, typeof (_g = typeof update_course_dto_1.UpdateCourseDto !== "undefined" && update_course_dto_1.UpdateCourseDto) === "function" ? _g : Object, typeof (_h = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiNoContentResponse(),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_j = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _j : Object, typeof (_k = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _k : Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "remove", null);
CoursesController = __decorate([
    swagger_1.ApiTags('Courses'),
    common_1.Controller('courses'),
    __metadata("design:paramtypes", [typeof (_l = typeof courses_service_1.CoursesService !== "undefined" && courses_service_1.CoursesService) === "function" ? _l : Object])
], CoursesController);
exports.CoursesController = CoursesController;


/***/ }),
/* 30 */
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
exports.JoiValidationPipe = void 0;
const common_1 = __webpack_require__(4);
const joi_1 = __webpack_require__(31);
let JoiValidationPipe = class JoiValidationPipe {
    constructor(_schema) {
        this._schema = _schema;
    }
    transform(value, metadata) {
        const { error } = this._schema.validate(value, { abortEarly: false });
        if (error) {
            throw new common_1.BadRequestException(error.details.map(e => ({ result: e.message, field: e.context.key })));
        }
        return value;
    }
};
JoiValidationPipe = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof joi_1.ObjectSchema !== "undefined" && joi_1.ObjectSchema) === "function" ? _a : Object])
], JoiValidationPipe);
exports.JoiValidationPipe = JoiValidationPipe;


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("@hapi/joi");;

/***/ }),
/* 32 */
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
exports.createCourseSchema = exports.CreateCourseDto = void 0;
const swagger_1 = __webpack_require__(2);
const course_entity_1 = __webpack_require__(28);
const Joi = __webpack_require__(31);
class CreateCourseDto {
}
__decorate([
    swagger_1.ApiProperty({
        required: false,
        readOnly: true,
        type: String,
    }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
        default: 'name'
    }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
        default: 'description'
    }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
        enum: course_entity_1.ECourseStatus,
        default: course_entity_1.ECourseStatus.DRAFT
    }),
    __metadata("design:type", typeof (_a = typeof course_entity_1.ECourseStatus !== "undefined" && course_entity_1.ECourseStatus) === "function" ? _a : Object)
], CreateCourseDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        required: false,
        readOnly: true,
        default: Date.now()
    }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        required: false,
        readOnly: true,
        default: Date.now()
    }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "updatedAt", void 0);
exports.CreateCourseDto = CreateCourseDto;
exports.createCourseSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null, "").optional(),
    price: Joi.number().optional().min(0),
    status: Joi.valid(course_entity_1.ECourseStatus.DRAFT, course_entity_1.ECourseStatus.PUBLISHED)
});


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCourseDto = void 0;
const create_course_dto_1 = __webpack_require__(32);
class UpdateCourseDto extends create_course_dto_1.CreateCourseDto {
}
exports.UpdateCourseDto = UpdateCourseDto;


/***/ }),
/* 34 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseSchema = exports.Course = void 0;
const mongoose_1 = __webpack_require__(11);
const mongoose = __webpack_require__(13);
let Course = class Course {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", typeof (_b = typeof mongoose !== "undefined" && (_a = mongoose.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], Course.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop({ default: null, required: true }),
    __metadata("design:type", String)
], Course.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], Course.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop({ default: Date.now() }),
    __metadata("design:type", Number)
], Course.prototype, "createdAt", void 0);
__decorate([
    mongoose_1.Prop({ default: Date.now() }),
    __metadata("design:type", Number)
], Course.prototype, "updatedAt", void 0);
Course = __decorate([
    mongoose_1.Schema({ versionKey: false })
], Course);
exports.Course = Course;
exports.CourseSchema = mongoose_1.SchemaFactory.createForClass(Course);


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LessonsModule = void 0;
const common_1 = __webpack_require__(4);
const lessons_service_1 = __webpack_require__(36);
const lessons_controller_1 = __webpack_require__(38);
const mongoose_1 = __webpack_require__(11);
const lesson_schema_1 = __webpack_require__(37);
let LessonsModule = class LessonsModule {
};
LessonsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: lesson_schema_1.Lesson.name, schema: lesson_schema_1.LessonSchema }])],
        providers: [lessons_service_1.LessonsService],
        controllers: [lessons_controller_1.LessonsController],
    })
], LessonsModule);
exports.LessonsModule = LessonsModule;


/***/ }),
/* 36 */
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
exports.LessonsService = void 0;
const common_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(11);
const mongoose_2 = __webpack_require__(13);
const lesson_schema_1 = __webpack_require__(37);
let LessonsService = class LessonsService {
    constructor(model) {
        this.model = model;
    }
    create(data) {
        const lesson = new this.model(data);
        return lesson.save();
    }
    findAll() {
        return this.model.find().sort('createdAt').exec();
    }
    async findOne(id) {
        const lesson = await this.model.findById(id).exec();
        if (!lesson) {
            throw new common_1.NotFoundException('Курс не знайдений');
        }
        return lesson;
    }
    update(id, updateCourseDto) {
        return this.model.findByIdAndUpdate(id, { $set: updateCourseDto }, { new: true }).exec();
    }
    remove(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
};
LessonsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(lesson_schema_1.Lesson.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], LessonsService);
exports.LessonsService = LessonsService;


/***/ }),
/* 37 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LessonSchema = exports.Lesson = void 0;
const mongoose_1 = __webpack_require__(11);
const mongoose = __webpack_require__(13);
const course_entity_1 = __webpack_require__(28);
let Lesson = class Lesson {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", typeof (_b = typeof mongoose !== "undefined" && (_a = mongoose.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], Lesson.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop({ default: null, required: true }),
    __metadata("design:type", String)
], Lesson.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Lesson.prototype, "context", void 0);
__decorate([
    mongoose_1.Prop({ default: null, ref: 'courses', required: true }),
    __metadata("design:type", typeof (_d = typeof mongoose !== "undefined" && (_c = mongoose.Types) !== void 0 && _c.ObjectId) === "function" ? _d : Object)
], Lesson.prototype, "courseId", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Lesson.prototype, "free", void 0);
__decorate([
    mongoose_1.Prop({ default: course_entity_1.ECourseStatus.DRAFT }),
    __metadata("design:type", Number)
], Lesson.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop({ default: Date.now() }),
    __metadata("design:type", Number)
], Lesson.prototype, "createdAt", void 0);
__decorate([
    mongoose_1.Prop({ default: Date.now() }),
    __metadata("design:type", Number)
], Lesson.prototype, "updatedAt", void 0);
Lesson = __decorate([
    mongoose_1.Schema({ versionKey: false })
], Lesson);
exports.Lesson = Lesson;
exports.LessonSchema = mongoose_1.SchemaFactory.createForClass(Lesson);


/***/ }),
/* 38 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LessonsController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const express_1 = __webpack_require__(17);
const paginator_1 = __webpack_require__(22);
const joi_validation_pipe_1 = __webpack_require__(30);
const create_lesson_1 = __webpack_require__(39);
const lessons_service_1 = __webpack_require__(36);
let LessonsController = class LessonsController {
    constructor(_ls) {
        this._ls = _ls;
    }
    create(res, createCourseDto, next) {
        this._ls
            .create(createCourseDto)
            .then((course) => {
            res.status(common_1.HttpStatus.CREATED).send(course);
        })
            .catch((e) => next(new common_1.InternalServerErrorException(e)));
    }
    findAll() {
        return this._ls.findAll();
    }
    findOne(id, res, next) {
        this._ls
            .findOne(id)
            .then((course) => res.status(common_1.HttpStatus.OK).send(course))
            .catch((e) => next(new common_1.InternalServerErrorException(e)));
    }
    update(id, res, data, next) {
        this._ls
            .update(id, data)
            .then((course) => {
            if (course) {
                res.status(common_1.HttpStatus.OK).send(course);
            }
            else {
                throw new common_1.NotFoundException({ result: 'Lesson was not found!' });
            }
        })
            .catch((e) => next(new common_1.InternalServerErrorException(e.message)));
    }
    remove(id, res, next) {
        this._ls
            .remove(id)
            .then(() => res.status(common_1.HttpStatus.NO_CONTENT).send(null))
            .catch((e) => next(new common_1.InternalServerErrorException(e.message)));
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: create_lesson_1.CreateLessonDto }),
    common_1.UsePipes(new joi_validation_pipe_1.JoiValidationPipe(create_lesson_1.createLessonSchema)),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object, typeof (_b = typeof create_lesson_1.CreateLessonDto !== "undefined" && create_lesson_1.CreateLessonDto) === "function" ? _b : Object, typeof (_c = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    paginator_1.ApiPaginatedResponse(create_lesson_1.CreateLessonDto),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: create_lesson_1.CreateLessonDto }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object, typeof (_e = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOkResponse({ type: create_lesson_1.CreateLessonDto }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body(new joi_validation_pipe_1.JoiValidationPipe(create_lesson_1.createLessonSchema))),
    __param(3, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object, typeof (_g = typeof create_lesson_1.CreateLessonDto !== "undefined" && create_lesson_1.CreateLessonDto) === "function" ? _g : Object, typeof (_h = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiNoContentResponse(),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_j = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _j : Object, typeof (_k = typeof express_1.NextFunction !== "undefined" && express_1.NextFunction) === "function" ? _k : Object]),
    __metadata("design:returntype", void 0)
], LessonsController.prototype, "remove", null);
LessonsController = __decorate([
    common_1.Controller('lessons'),
    swagger_1.ApiTags('Lessons'),
    __metadata("design:paramtypes", [typeof (_l = typeof lessons_service_1.LessonsService !== "undefined" && lessons_service_1.LessonsService) === "function" ? _l : Object])
], LessonsController);
exports.LessonsController = LessonsController;


/***/ }),
/* 39 */
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
exports.createLessonSchema = exports.CreateLessonDto = void 0;
const swagger_1 = __webpack_require__(2);
const Joi = __webpack_require__(31);
const course_entity_1 = __webpack_require__(28);
class CreateLessonDto {
}
__decorate([
    swagger_1.ApiProperty({
        required: false,
        readOnly: true,
        type: String,
    }),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: String,
        default: 'name'
    }),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
        default: null
    }),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "context", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
        enum: course_entity_1.ECourseStatus,
        default: course_entity_1.ECourseStatus.DRAFT
    }),
    __metadata("design:type", typeof (_a = typeof course_entity_1.ECourseStatus !== "undefined" && course_entity_1.ECourseStatus) === "function" ? _a : Object)
], CreateLessonDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Boolean,
        default: false
    }),
    __metadata("design:type", Boolean)
], CreateLessonDto.prototype, "free", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        required: false,
        readOnly: true,
        default: Date.now()
    }),
    __metadata("design:type", Number)
], CreateLessonDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        required: false,
        readOnly: true,
        default: Date.now()
    }),
    __metadata("design:type", Number)
], CreateLessonDto.prototype, "updatedAt", void 0);
exports.CreateLessonDto = CreateLessonDto;
exports.createLessonSchema = Joi.object({
    name: Joi.string().required(),
    context: Joi.string().allow(null, "").optional(),
    free: Joi.boolean(),
    status: Joi.valid(course_entity_1.ECourseStatus.DRAFT, course_entity_1.ECourseStatus.PUBLISHED)
});


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const common_1 = __webpack_require__(4);
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        var _a, _b;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = ((_a = exception.response) === null || _a === void 0 ? void 0 : _a.statusCode) || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = ((_b = exception.response) === null || _b === void 0 ? void 0 : _b.message) || exception.response.message;
        response.status(statusCode).json({ statusCode, message });
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;


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