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
import { styleMap } from 'lit-html/directives/style-map.js';

import { Breadcrumb } from './breadcrumb.component';

export default function standardTemplate(this: Breadcrumb) {

  const classes = {
    'spectrum-Breadcrumbs--title': this.breadcrumbtitle,
    'spectrum-Breadcrumbs--multiline': this.multiline,
    'spectrum-Breadcrumbs--compact': this.compact
  };

    
return html`
<nav>
  <ul class="spectrum-Breadcrumbs ${classMap(classes)}">
  <slot @slotchange="${this.handleSlotChange}"></slot>
  <!-- <li class="spectrum-Breadcrumbs-item">A</li> 
  <li class="spectrum-Breadcrumbs-item">B</li> 
  <li class="spectrum-Breadcrumbs-item" last>C</li> -->
  </ul>
</nav>`;

}
