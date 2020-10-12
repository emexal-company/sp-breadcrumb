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

import { customElement, LitElement, property, PropertyValues, html, css } from 'lit-element';
import { DemoBreadcrumb } from './demo-breadcrumb.component';

import '@spectrum/sp-breadcrumb';
import '@spectrum/sp-container';

import '@spectrum/sp-rule';
import '@spectrum/sp-demo';
import '@spectrum/sp-breadcrumb';

export default function template(this: DemoBreadcrumb) {
  return html`

  <sp-container>
      <sp-rule medium label="Standard"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb>
      <sp-breadcrumbitem label="Nav Root"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Dragged"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb>
      <sp-breadcrumbitem label="Nav Root"></sp-breadcrumbitem>
      <sp-breadcrumbitem draged label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Nested"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb>
      <sp-breadcrumbitem icon="FolderBreadcrumb"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Sub Item"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Nested (root visible)"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb>
      <sp-breadcrumbitem label="Sub Item"></sp-breadcrumbitem>
      <sp-breadcrumbitem icon="FolderBreadcrumb"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Multiline"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb multiline>
      <sp-breadcrumbitem label="Nav Root"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Multiline (dragged)"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb multiline>
      <sp-breadcrumbitem label="Nav Root"></sp-breadcrumbitem>
      <sp-breadcrumbitem draged label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Multiline Nested"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb multiline>
      <sp-breadcrumbitem icon="FolderBreadcrumb"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Sub Item"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Multiline Nested (root visible)"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb multiline>
      <sp-breadcrumbitem label="Sub Item"></sp-breadcrumbitem>
      <sp-breadcrumbitem icon="FolderBreadcrumb"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Compact"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb compact>
      <sp-breadcrumbitem label="Nav Root"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Compact Nested"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb compact>
      <sp-breadcrumbitem icon="FolderBreadcrumb"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Sub Item"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Compact Nested (root visible)"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb compact>
      <sp-breadcrumbitem label="Sub Item"></sp-breadcrumbitem>
      <sp-breadcrumbitem icon="FolderBreadcrumb"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Trend"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="January 2019 Assets"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
      <sp-rule medium label="Title"></sp-rule>
      <sp-demo width="400">
      <pre><sp-breadcrumb breadcrumbtitle>
      <sp-breadcrumbitem label="Home"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Playground"></sp-breadcrumbitem>
      <sp-breadcrumbitem label="Sliders"></sp-breadcrumbitem>
</sp-breadcrumb></pre>
      </sp-demo>
  </sp-container>
  `;
  
}
