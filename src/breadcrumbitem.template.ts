/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { BreadcrumbItem } from './breadcrumbitem.component';

export function standardTemplate(this: BreadcrumbItem) {

    const classes = {
        'is-dragged': this.draged,
    };
    
    return html`
    ${!this.last? html`
    <li class="spectrum-Breadcrumbs-item ${classMap(classes)}" ?multiline="${this.multiline}" ?compact="${this.compact}" ?breadcrumbtitle="${this.breadcrumbtitle}">
    ${this.icon? html`<sp-button type="action" quiet icon="${this.icon}"></sp-button>`: html`<div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">${this.label}</div>`}
      <sp-icon class="spectrum-Icon" size="XS" name="ChevronRightSmall"></sp-icon>
    </li>` : html`
    <li class="spectrum-Breadcrumbs-item" last ?multiline="${this.multiline}" ?compact="${this.compact}" ?breadcrumbtitle="${this.breadcrumbtitle}" >
      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">${this.label}</a>
    </li> `}
    `;
}


