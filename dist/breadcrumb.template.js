import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function standardTemplate() {
    const classes = {
        'spectrum-Breadcrumbs--title': this.breadcrumbtitle,
        'spectrum-Breadcrumbs--multiline': this.multiline,
        'spectrum-Breadcrumbs--compact': this.compact
    };
    return html `
<nav>
  <ul class="spectrum-Breadcrumbs ${classMap(classes)}">
  <slot @slotchange="${this.handleSlotChange}"></slot>
  <!-- <li class="spectrum-Breadcrumbs-item">A</li> 
  <li class="spectrum-Breadcrumbs-item">B</li> 
  <li class="spectrum-Breadcrumbs-item" last>C</li> -->
  </ul>
</nav>`;
}
//# sourceMappingURL=breadcrumb.template.js.map