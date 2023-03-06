import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {
  fullname:string=''

  transform(AllContact:any=[],searchkey:string,propertyName:string): any[] {
    // array after transform
    const result:any =[]
    if(!AllContact || searchkey ==''|| propertyName==''){
      return AllContact

    }
    AllContact.forEach((contact:any)=>{
      let text1=contact.firstName
      let text2=contact.lastName
      this.fullname=text1.concat(text2)

      if(this.fullname.trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
        result.push(contact)
      }
    })
    

    return result;
  }

}
