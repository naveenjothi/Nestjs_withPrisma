"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = void 0;
const graphql_1 = require("@nestjs/graphql");
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
graphql_1.registerEnumType(SortOrder, { name: 'SortOrder' });
//# sourceMappingURL=sort-order.enum.js.map