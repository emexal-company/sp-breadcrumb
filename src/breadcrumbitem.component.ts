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

import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import steplistStyles from './breadcrumbitem.styles';
import { standardTemplate } from './breadcrumbitem.template';

@customElement('sp-breadcrumbitem')
export class BreadcrumbItem extends Base {
  public static componentStyles = steplistStyles;

  @property({ type: String }) public label: string = '';
  @property({ type: String }) public icon: string = '';
  @property({ type: Boolean }) public last: boolean = false;
  @property({ type: Boolean }) public draged: boolean = false;
  @property({ type: Boolean }) public multiline: boolean = false;
  @property({ type: Boolean }) public compact: boolean = false;
  @property({ type: Boolean }) public breadcrumbtitle: boolean = false;
  
  
  protected render() {
      return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-breadcrumbitem': BreadcrumbItem;
  }
}
