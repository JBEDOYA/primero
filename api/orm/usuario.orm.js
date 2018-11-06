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
var oracledb = require("oracledb");
var UsuarioORM = /** @class */ (function () {
    function UsuarioORM() {
    }
    UsuarioORM.prototype.listar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, binds, res1, cantidad, res2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, oracledb.getConnection()];
                    case 1:
                        conn = _a.sent();
                        sql = "call PCKUSUARIO.LISTAR_USUARIO(:val1, :val2)";
                        binds = {
                            val1: {
                                dir: oracledb.BIND_OUT,
                                type: oracledb.CURSOR,
                                outFormat: oracledb.CURSOR
                            },
                            val2: {
                                dir: oracledb.BIND_OUT,
                                type: oracledb.NUMBER,
                                outFormat: oracledb.NUMBER
                            }
                        };
                        return [4 /*yield*/, conn.execute(sql, binds)];
                    case 2:
                        res1 = _a.sent();
                        return [4 /*yield*/, res1.outBinds.val2];
                    case 3:
                        cantidad = _a.sent();
                        return [4 /*yield*/, res1.outBinds.val1.getRows(cantidad)];
                    case 4:
                        res2 = _a.sent();
                        return [2 /*return*/, res2];
                }
            });
        });
    };
    UsuarioORM.prototype.insertar = function (correo, clave, ruta) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, binds, option, res, nid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, oracledb.getConnection()];
                    case 1:
                        conn = _a.sent();
                        sql = "call PCKUSUARIO.INSERTAR_USUARIO(:val1, :val2, :val3, :val4)";
                        binds = {
                            val1: correo,
                            val2: clave,
                            val3: ruta,
                            val4: {
                                dir: oracledb.BIND_OUT,
                                type: oracledb.NUMBER,
                                outFormat: oracledb.NUMBER
                            }
                        };
                        option = {
                            autoCommit: true
                        };
                        return [4 /*yield*/, conn.execute(sql, binds, option)];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.outBinds.val4];
                    case 3:
                        nid = _a.sent();
                        return [2 /*return*/, nid];
                }
            });
        });
    };
    UsuarioORM.prototype.recuperarPorCorreo = function (correo) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, binds, res1, res2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, oracledb.getConnection()];
                    case 1:
                        conn = _a.sent();
                        sql = "call PCKUSUARIO.RECUPERAR_USUARIOPORCORREO(:val1,:val2)";
                        binds = {
                            val1: correo,
                            val2: {
                                dir: oracledb.BIND_OUT,
                                type: oracledb.CURSOR,
                                outFormat: oracledb.CURSOR
                            }
                        };
                        return [4 /*yield*/, conn.execute(sql, binds)];
                    case 2:
                        res1 = _a.sent();
                        return [4 /*yield*/, res1.outBinds.val2.getRow()];
                    case 3:
                        res2 = _a.sent();
                        return [2 /*return*/, res2];
                }
            });
        });
    };
    UsuarioORM.prototype.recuperar = function (codigo) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, binds, res1, res2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, oracledb.getConnection()];
                    case 1:
                        conn = _a.sent();
                        sql = "call PCKUSUARIO.RECUPERAR_USUARIO(:val1, :val2)";
                        binds = {
                            val1: codigo,
                            val2: {
                                dir: oracledb.BIND_OUT,
                                type: oracledb.CURSOR,
                                outFormat: oracledb.CURSOR
                            }
                        };
                        return [4 /*yield*/, conn.execute(sql, binds)];
                    case 2:
                        res1 = _a.sent();
                        return [4 /*yield*/, res1.outBinds.val2.getRow()];
                    case 3:
                        res2 = _a.sent();
                        return [2 /*return*/, res2];
                }
            });
        });
    };
    return UsuarioORM;
}());
exports.UsuarioORM = UsuarioORM;
