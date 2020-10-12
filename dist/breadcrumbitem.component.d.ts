import { Base } from '@spectrum/sp-base';
export declare class BreadcrumbItem extends Base {
    static componentStyles: import("lit-element").CSSResult;
    label: string;
    icon: string;
    last: boolean;
    draged: boolean;
    multiline: boolean;
    compact: boolean;
    breadcrumbtitle: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-breadcrumbitem': BreadcrumbItem;
    }
}
