System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let LikeComponent = class LikeComponent {
                constructor() {
                    this.isLiked = false;
                    this.likeCount = 0;
                }
                toggleFillHeart() {
                    this.isLiked = !this.isLiked;
                    if (this.isLiked === true) {
                        this.likeCount = this.likeCount + 1;
                    }
                    else {
                        this.likeCount = this.likeCount - 1;
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], LikeComponent.prototype, "isLiked", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], LikeComponent.prototype, "likeCount", void 0);
            LikeComponent = __decorate([
                core_1.Component({
                    selector: 'likes',
                    template: `
        <i class="glyphicon"
       [class.glyphicon-heart-empty]="!isLiked"
       [class.glyphicon-heart]="isLiked"
       (click)="toggleFillHeart()"></i>
       <span>{{ likeCount }}</span>
    `,
                    styles: [`
        .glyphicon-heart-empty {
            color: #ccc;
            cursor: pointer;
        }
        .glyphicon-heart {
            color: deeppink;
            cursor: pointer;
        }
    `]
                }), 
                __metadata('design:paramtypes', [])
            ], LikeComponent);
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map