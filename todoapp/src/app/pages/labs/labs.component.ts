import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'

  
})
export class LabsComponent {
  welcome='hola!!!';
  tasks = ['Instalar el angular cli',
          'Crear una nueva app',
          'Agregar componentes',
          'Implementar routing',
          'Agregar servicios',
          'Implementar formularios',
          'Agregar estilos',
          'Implementar tests'
          ];
  name = signal('Glenda');
  age ='35';
  disabled =false;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person ={
    name: 'John Doe',
    age: 30,
    avatar:'https://www.w3schools.com/howto/img_avatar.png'
  };

  clickhandler(){
    alert('Botón presionado')
  }

  clickhandler2(){
    alert('Botón presionado 2222');
  }

  changehandler(event:Event) {
    console.log(event);
  }

  keydownhandler(event:KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  keydownhandler2(event:KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.name.set(newvalue)

    console.log(input.value);
  }

}
