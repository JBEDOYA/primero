"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_orm_1 = require("../orm/usuario.orm");
var jwt = require("jsonwebtoken");
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
    }
    UsuarioController.prototype.listar = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var valor, tmp, error_1, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valor = req.headers.authorization // OJO: parsea a minusculas
                        ;
                        if (!valor) {
                            return [2 /*return*/, res.status(401).json({
                                    ok: true,
                                    mensaje: "Debes enviar el token"
                                })];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, jwt.verify(valor, "zzzzzzA123123$2aads")];
                    case 2:
                        tmp = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(401).json({
                                ok: true,
                                mensaje: "Token Invalido",
                                error: error_1
                            })];
                    case 4: return [4 /*yield*/, new usuario_orm_1.UsuarioORM().listar()];
                    case 5:
                        resp = _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                ok: true,
                                resp: resp
                            })];
                }
            });
        });
    };
    UsuarioController.prototype.insertar = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var detalle, codigo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        detalle = req.body;
                        return [4 /*yield*/, new usuario_orm_1.UsuarioORM().insertar(detalle.correo, detalle.clave, detalle.ruta)];
                    case 1:
                        codigo = _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                ok: true,
                                codigo: codigo
                            })];
                }
            });
        });
    };
    UsuarioController.prototype.recuperarPorCorreo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var detalle, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        detalle = req.body;
                        return [4 /*yield*/, new usuario_orm_1.UsuarioORM().recuperarPorCorreo(detalle.correo)];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                ok: true,
                                resp: resp
                            })];
                }
            });
        });
    };
    UsuarioController.prototype.autentica = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, resp, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        // body.email, body.password
                        if (!body) {
                            return [2 /*return*/, res.status(400).json({
                                    ok: false,
                                    mensaje: "Debe enviar el cuerpo"
                                })];
                        }
                        if (!body.email) {
                            return [2 /*return*/, res.status(400).json({
                                    ok: false,
                                    mensaje: "Debe enviar el correo"
                                })];
                        }
                        return [4 /*yield*/, new usuario_orm_1.UsuarioORM().recuperarPorCorreo(body.email)];
                    case 1:
                        resp = _a.sent();
                        if (!resp) {
                            return [2 /*return*/, res.status(400).json({
                                    ok: false,
                                    mensaje: "Error al validar - Correo invalido"
                                })];
                        }
                        if (resp[2] != body.password) {
                            return [2 /*return*/, res.status(400).json({
                                    ok: false,
                                    mensaje: "Erroral validar - Clave invalida"
                                })];
                        }
                        token = jwt.sign({ codigo: resp[0], correo: resp[1] }, "zzzzzzA123123$2aads", { expiresIn: 240 });
                        return [2 /*return*/, res.status(200).json({
                                ok: true,
                                token: token,
                                usuario: resp
                            })];
                }
            });
        });
    };
    UsuarioController.prototype.recuperar = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var detalle, reg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        detalle = req.body;
                        return [4 /*yield*/, new usuario_orm_1.UsuarioORM().recuperar(detalle.codigo)];
                    case 1:
                        reg = _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                ok: true,
                                reg: reg
                            })];
                }
            });
        });
    };
    return UsuarioController;
}());
exports.UsuarioController = UsuarioController;
