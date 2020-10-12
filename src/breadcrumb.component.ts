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

import { customElement, property, css, query } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './breadcrumb.styles';
import standardTemplate from './breadcrumb.template';
import { BreadcrumbItem } from './breadcrumbitem.component';

@customElement('sp-breadcrumb')
export class Breadcrumb extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: Boolean }) breadcrumbtitle = false;
  @property({ type: Boolean }) multiline = false;
  @property({ type: Boolean }) compact = false;
  @property({ type: Boolean }) last = false;
  @query('slot') private slot!: HTMLElement;

  protected render() {
    return standardTemplate.call(this);
  }

  protected getSteps(): BreadcrumbItem[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => (e instanceof BreadcrumbItem)) as any as BreadcrumbItem[];
  }

  protected handleSlotChange() {
    if (this.slot) {
      const steps = this.getSteps();
      steps.forEach((step, index) => {
        step.last = (index === (steps.length - 1));
        if (this.multiline) step.multiline=true;
        if (this.compact) step.compact=true;
        if (this.breadcrumbtitle) step.breadcrumbtitle=true;
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-breadcrumb': Breadcrumb;
  }
}
