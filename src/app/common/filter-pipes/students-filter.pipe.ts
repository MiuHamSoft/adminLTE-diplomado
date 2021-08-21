import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'studentsPipe'
})

export class StudentsFilterPipe implements PipeTransform {
    transform(value: Array<any>, searchValue: string) {
        if (!searchValue || searchValue.length < 3) return value;
        console.log(value.filter((v) => {
            (v.name.toLowerCase().includes(searchValue.toLowerCase())) ||
                (v.id.toLowerCase().includes(searchValue.toLowerCase()))
        }))
        return value.filter((v) => (
            (v.name.toLowerCase().includes(searchValue.toLowerCase())) ||
            (v.id.toLowerCase().includes(searchValue.toLowerCase()))
        ));
    }

}