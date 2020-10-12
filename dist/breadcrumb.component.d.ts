import { Base } from '@spectrum/sp-base';
import { BreadcrumbItem } from './breadcrumbitem.component';
export declare class Breadcrumb extends Base {
    static componentStyles: import("lit-element").CSSResult;
    breadcrumbtitle: boolean;
    multiline: boolean;
    compact: boolean;
    last: boolean;
    private slot;
    protected render(): import("lit-element").TemplateResult;
    protected getSteps(): BreadcrumbItem[];
    protected handleSlotChange(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-breadcrumb': Breadcrumb;
    }
}
