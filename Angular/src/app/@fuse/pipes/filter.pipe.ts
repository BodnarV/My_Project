import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, searchText: string, fieldName: string): any {
    if (!users || users.length === 0 || searchText === undefined) {
      return users;
    }
    return users.filter( value => {
      return value[fieldName].toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    } );
  }

}

