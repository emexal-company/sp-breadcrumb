import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export function standardTemplate() {
    const classes = {
        'is-dragged': this.draged,
    };
    return html `
    ${!this.last ? html `
    <li class="spectrum-Breadcrumbs-item ${classMap(classes)}" ?multiline="${this.multiline}" ?compact="${this.compact}" ?breadcrumbtitle="${this.breadcrumbtitle}">
    ${this.icon ? html `<sp-button type="action" quiet icon="${this.icon}"></sp-button>` : html `<div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">${this.label}</div>`}
      <sp-icon class="spectrum-Icon" size="XS" name="ChevronRightSmall"></sp-icon>
    </li>` : html `
    <li class="spectrum-Breadcrumbs-item" last ?multiline="${this.multiline}" ?compact="${this.compact}" ?breadcrumbtitle="${this.breadcrumbtitle}" >
      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">${this.label}</a>
    </li> `}
    `;
}
//# sourceMappingURL=breadcrumbitem.template.js.map