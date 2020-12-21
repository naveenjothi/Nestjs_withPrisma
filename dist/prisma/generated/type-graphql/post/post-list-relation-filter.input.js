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
exports.PostListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
let PostListRelationFilter = class PostListRelationFilter {
};
__decorate([
    graphql_1.Field(() => post_where_input_1.PostWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], PostListRelationFilter.prototype, "every", void 0);
__decorate([
    graphql_1.Field(() => post_where_input_1.PostWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], PostListRelationFilter.prototype, "some", void 0);
__decorate([
    graphql_1.Field(() => post_where_input_1.PostWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], PostListRelationFilter.prototype, "none", void 0);
PostListRelationFilter = __decorate([
    graphql_1.InputType()
], PostListRelationFilter);
exports.PostListRelationFilter = PostListRelationFilter;
//# sourceMappingURL=post-list-relation-filter.input.js.map