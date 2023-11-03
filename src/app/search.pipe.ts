// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'titleFilter'
// })
// export class SearchPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     if (!args) {
//       return value;
//     }
//     return value.filter((val:any) => {
//       let rVal = (val.id.toLocaleLowerCase().includes(args)) || (val.title.toLocaleLowerCase().includes(args));
//       return rVal;
//     })

//   }

// }


import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'TitleFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.title.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
