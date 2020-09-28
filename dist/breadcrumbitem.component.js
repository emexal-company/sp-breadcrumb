import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import steplistStyles from './breadcrumbitem.styles';
import { standardTemplate } from './breadcrumbitem.template';
let BreadcrumbItem = class BreadcrumbItem extends Base {
    constructor() {
        super(...arguments);
        this.label = '';
        this.icon = '';
        this.last = false;
        this.draged = false;
        this.multiline = false;
        this.compact = false;
        this.breadcrumbtitle = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
BreadcrumbItem.componentStyles = steplistStyles;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], BreadcrumbItem.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], BreadcrumbItem.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], BreadcrumbItem.prototype, "last", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], BreadcrumbItem.prototype, "draged", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], BreadcrumbItem.prototype, "multiline", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], BreadcrumbItem.prototype, "compact", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], BreadcrumbItem.prototype, "breadcrumbtitle", void 0);
BreadcrumbItem = __decorate([
    customElement('sp-breadcrumbitem')
], BreadcrumbItem);
export { BreadcrumbItem };
//# sourceMappingURL=breadcrumbitem.component.js.map