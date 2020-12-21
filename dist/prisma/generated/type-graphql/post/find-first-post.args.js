"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPostArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_order_by_input_1 = require("./post-order-by.input");
const post_scalar_field_enum_1 = require("./post-scalar-field.enum");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_where_input_1 = require("./post-where.input");
let FindFirstPostArgs = class FindFirstPostArgs {
};
__decorate([
    graphql_1.Field(() => post_where_input_1.PostWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], FindFirstPostArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(() => [post_order_by_input_1.PostOrderByInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], FindFirstPostArgs.prototype, "orderBy", void 0);
__decorate([
    graphql_1.Field(() => post_where_unique_input_1.PostWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], FindFirstPostArgs.prototype, "cursor", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], FindFirstPostArgs.prototype, "take", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], FindFirstPostArgs.prototype, "skip", void 0);
__decorate([
    graphql_1.Field(() => [post_scalar_field_enum_1.PostScalarFieldEnum], {
        nullable: true,
    }),
    __metadata("design:type", Array)
], FindFirstPostArgs.prototype, "distinct", void 0);
FindFirstPostArgs = __decorate([
    graphql_1.ArgsType()
], FindFirstPostArgs);
exports.FindFirstPostArgs = FindFirstPostArgs;
//# sourceMappingURL=find-first-post.args.js.map