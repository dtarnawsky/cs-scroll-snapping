import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10', 'Card 11', 'Card 12', 'Card 13'];
  constructor(private router: Router) {
    this.cards[1] = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Lectus proin nibh nisl condimentum id venenatis. Libero nunc consequat interdum varius sit amet mattis vulputate. Nam libero justo laoreet sit amet. Nec feugiat in fermentum posuere urna. Urna duis convallis convallis tellus. Vel orci porta non pulvinar neque laoreet. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet purus gravida quis blandit turpis cursus in hac. Pharetra convallis posuere morbi leo urna molestie. Praesent semper feugiat nibh sed pulvinar proin. Pellentesque habitant morbi tristique senectus et netus et malesuada. Sed libero enim sed faucibus turpis. Enim sed faucibus turpis in. Erat imperdiet sed euismod nisi porta lorem mollis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Orci ac auctor augue mauris.
    Lobortis scelerisque fermentum dui faucibus in. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Etiam sit amet nisl purus in mollis. Vel risus commodo viverra maecenas accumsan lacus vel. Morbi tristique senectus et netus et malesuada fames. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Tortor at risus viverra adipiscing at in tellus integer feugiat. Posuere lorem ipsum dolor sit amet consectetur. Dui nunc mattis enim ut tellus elementum sagittis vitae. Ultricies leo integer malesuada nunc vel risus commodo. Tincidunt dui ut ornare lectus sit. Iaculis nunc sed augue lacus viverra vitae. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Hendrerit gravida rutrum quisque non. Cras fermentum odio eu feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
    Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Est placerat in egestas erat imperdiet sed. Ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet purus gravida quis blandit turpis cursus in. Non nisi est sit amet facilisis magna etiam tempor orci. Eu non diam phasellus vestibulum lorem. Tempus iaculis urna id volutpat. Nunc mattis enim ut tellus elementum. Varius vel pharetra vel turpis. Neque sodales ut etiam sit. Fringilla ut morbi tincidunt augue interdum velit euismod in. Blandit massa enim nec dui nunc mattis enim ut tellus. Nisl purus in mollis nunc sed. Ornare massa eget egestas purus viverra accumsan in nisl. Suscipit adipiscing bibendum est ultricies. Tellus in metus vulputate eu scelerisque felis imperdiet. Facilisis volutpat est velit egestas dui id ornare arcu odio.
    Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Ornare arcu dui vivamus arcu felis bibendum ut. Integer feugiat scelerisque varius morbi enim nunc. Tortor condimentum lacinia quis vel eros donec ac. Ut tellus elementum sagittis vitae et leo. At elementum eu facilisis sed. Egestas integer eget aliquet nibh. Egestas quis ipsum suspendisse ultrices gravida. Egestas sed sed risus pretium quam. Eu augue ut lectus arcu bibendum at. Posuere morbi leo urna molestie at. Morbi leo urna molestie at elementum eu. Proin sed libero enim sed faucibus turpis in. Turpis egestas integer eget aliquet nibh praesent tristique magna.
    Dignissim enim sit amet venenatis urna cursus eget nunc. Sem et tortor consequat id porta nibh venenatis cras sed. Augue eget arcu dictum varius duis at consectetur lorem. Sed vulputate odio ut enim blandit volutpat maecenas. Sit amet nulla facilisi morbi. Pharetra convallis posuere morbi leo urna molestie at. Fermentum posuere urna nec tincidunt praesent. Eu lobortis elementum nibh tellus. Habitant morbi tristique senectus et netus et malesuada. Faucibus et molestie ac feugiat sed. Commodo sed egestas egestas fringilla phasellus faucibus. Nulla pellentesque dignissim enim sit amet venenatis urna. Maecenas ultricies mi eget mauris pharetra et ultrices.
    `;
  }

  open(card) {
    this.router.navigateByUrl("card");
  }
}
