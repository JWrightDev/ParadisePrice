import { Component } from '@angular/core';
import { Pricetable } from '../../ui/pricetable/pricetable';
import { LandscapeTable } from '../../ui/landscape-table/landscape-table';
import { Annualstable } from '../../ui/annualstable/annualstable';
import { Tropicaltable } from '../../ui/tropicaltable/tropicaltable';

@Component({
  selector: 'app-home',
  imports: [Pricetable, LandscapeTable, Annualstable, Tropicaltable],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  activeTab: string = 'large-plants';

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  getTabClasses(tabId: string): string {
    const baseClasses = 'inline-block p-4 border-b-2 rounded-t-lg';

    if (this.activeTab === tabId) {
      return `${baseClasses} text-green-600 border-green-600 active dark:text-green-500 dark:border-green-500`;
    }

    return `${baseClasses} border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`;
  }

  getTabContentClasses(tabId: string): string {
    const baseClasses = 'p-4 rounded-lg';

    if (this.activeTab === tabId) {
      return `${baseClasses} block`;
    }

    return `${baseClasses} hidden`;
  }
}
