import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './breadcrumb.styles';
import standardTemplate from './breadcrumb.template';
import { BreadcrumbItem } from './breadcrumbitem.component';
let Breadcrumb = class Breadcrumb extends Base {
    constructor() {
        super(...arguments);
        this.breadcrumbtitle = false;
        this.multiline = false;
        this.compact = false;
        this.last = false;
    }
    render() {
        return standardTemplate.call(this);
    }
    getSteps() {
        return this.slot
            .assignedNodes({ flatten: true })
            .filter((e) => (e instanceof BreadcrumbItem));
    }
    handleSlotChange() {
        if (this.slot) {
            const steps = this.getSteps();
            steps.forEach((step, index) => {
                step.last = (index === (steps.length - 1));
                if (this.multiline)
                    step.multiline = true;
                if (this.compact)
                    step.compact = true;
                if (this.breadcrumbtitle)
                    step.breadcrumbtitle = true;
            });
        }
    }
};
Breadcrumb.componentStyles = labelStyles;
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Breadcrumb.prototype, "breadcrumbtitle", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Breadcrumb.prototype, "multiline", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Breadcrumb.prototype, "compact", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Breadcrumb.prototype, "last", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLElement)
], Breadcrumb.prototype, "slot", void 0);
Breadcrumb = __decorate([
    customElement('sp-breadcrumb')
], Breadcrumb);
export { Breadcrumb };
//# sourceMappingURL=breadcrumb.component.js.map