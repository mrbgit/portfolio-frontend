import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from '../shared/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.scss' ]
})
export class PostComponent implements OnInit {
  postId: string;
  post: Post;
  article = new Post({
    title: 'Article Title',
    subtitle: 'Article subtitle',
    author: 'Author Person',
    content: `<p>Lorem ipsum dolor sit amet, sed sollicitudin sit, risus duis erat, mattis lectus egestas diam in ut a, sagittis sapien ut mollis sed aliquam, duis vestibulum erat. Nec amet repellat a quis quis, duis risus. Ac fringilla cursus libero luctus, risus ultricies nisl duis mi facilisi, ipsum diam varius. Tincidunt purus suspendisse, nec vel pellentesque, facilisi pede blandit ante, pede sollicitudin justo dictumst praesent lorem. Hac a ante orci porttitor vestibulum, et mauris non cum non, tellus sit erat. Quis faucibus sed et. In nulla cras velit dui, vestibulum erat cursus urna. Vehicula id enim a sit volutpat suscipit, pellentesque nec justo fringilla risus mi, pede libero iaculis euismod vulputate, tortor gravida maecenas dui sagittis urna placerat, cum orci auctor. Sed odio nullam dolor dapibus, et metus nullam nulla ligula, arcu non tristique, taciti tellus iaculis est sit vestibulum suspendisse, massa aliquet facilisi.</p>
            <p>Ad lectus, eget sed enim magna non quis primis, vel sed augue sed aliquam, eu metus mi, venenatis ac integer et sollicitudin nibh lectus. Quod purus porta. Nam lectus taciti commodo justo laoreet ridiculus. Amet nulla fringilla duis in a pede, nisl auctor vulputate lobortis proin, in molestie arcu eget vestibulum est posuere, ante nulla quis et neque. Etiam suspendisse erat, porttitor donec turpis nam ultricies, vivamus ultricies lacus nullam tellus sed, erat rutrum praesent egestas tincidunt mi interdum. Vestibulum tellus aliquet nibh, viverra ea nunc urna, vel in vehicula luctus ut, sodales urna sed consequat in. Iaculis a, volutpat sapien etiam, proin deserunt duis laoreet aptent sed, odio vitae amet eleifend risus, tempor sodales bibendum. Cras vestibulum nunc ratione. Ac pellentesque interdum, vulputate montes rhoncus nascetur penatibus quis aenean. Lobortis sagittis ut sed, leo ligula a etiam enim, diam curabitur, mauris elit nulla amet in, augue mollis pellentesque phasellus volutpat. In adipiscing eget sed, suscipit aliquam, eget accumsan pretium consequat hymenaeos.</p>
            <p>Nam tortor tellus, elit metus nulla placerat. Vestibulum metus semper ipsum fusce, mauris est arcu, elit massa pretium ipsum at enim, ridiculus vel. Non nunc neque, ut id sapien amet, lacus auctor. Sed at enim mattis donec ipsum porta, eros dolor laborum. Ipsum vitae feugiat vehicula non porta vivamus, nunc vestibulum viverra condimentum dolor. Cras illo, et non ante ut. Eget velit nascetur enim phasellus leo massa, mus molestie blandit gravida nec, eleifend posuere et massa vel, sed non, in ut tempor leo.</p>
            <p>Arcu maecenas ultrices maecenas eu dui lacinia, molestie quam consequat turpis egestas nisl, ac eu nunc, sit sodales, sed scelerisque mattis nibh aliquet. A nisl metus phasellus est, laoreet est eu vestibulum dui est ullamcorper, ultricies in luctus, risus mattis interdum porta eget. Fermentum mauris sodales risus justo orci. Vulputate arcu ut, quae vestibulum elementum arcu wisi eu. In ipsum. Urna metus tortor vitae est etiam, in non tellus eget. Aliquam accumsan ac urna, nunc phasellus interdum ligula, et consectetuer aliquam scelerisque proin morbi, quisque wisi, vestibulum eu et. Massa convallis interdum purus ipsum ante, ullamcorper quis vitae lobortis, dictum risus libero fames augue eget lobortis, a magna nonummy metus congue, metus erat. Diam qui bibendum, in porta maecenas ac donec risus, erat wisi labore purus turpis accumsan leo, in iaculis massa aperiam mi a lobortis, eu lobortis. Venenatis vitae ipsum est sit.</p>
            <p>Lorem ipsum dolor sit amet, cras nec dolor commodo praesent suspendisse amet, inceptos wisi eget tristique cras, euismod vestibulum posuere sed blandit justo, ac dapibus, per morbi cursus curabitur lacinia fringilla. Potenti magna enim sem facilisi bibendum, mauris egestas a porttitor. Risus volutpat. Nulla ultrices tristique magna enim pellentesque etiam, ac imperdiet in natoque vitae laoreet ut. Orci varius vitae eleifend placerat lobortis. Donec mollis lobortis, leo sit nullam eget, et fusce venenatis turpis platea ut, lacus id. Non sed, odio iaculis. Egestas nulla sed magna amet arcu neque, fusce semper sem. Accumsan ipsum orci, vehicula lorem sapien, nec placerat netus et, mus voluptas itaque morbi, facilisis tincidunt malesuada.</p>
            <p>Wisi tincidunt orci quisque porta faucibus ut, enim lacus numquam nulla, fermentum lacinia arcu interdum interdum posuere, amet vitae tellus facilisis bibendum vitae mattis. Aliquam sociis, odio tempora, id id dapibus dictum et mi. Odio nisl dolor lorem pede, volutpat tellus morbi ridiculus adipiscing molestie, sit magnis sed arcu orci interdum, mauris ultricies nullam quam magna platea. Neque ipsum tortor, nulla massa rhoncus conubia, ultrices tristique, vitae neque urna pharetra pellentesque amet sollicitudin. Pharetra aliquet in et laoreet anim, aenean faucibus justo augue et. Nullam in, hac aenean senectus.</p>
            <p>Nulla nulla ullamcorper metus vitae, quis libero duis neque. Eu orci, sem purus nec tellus, quam pellentesque ridiculus risus metus volutpat. In at fusce, rutrum sed natoque in, phasellus massa nonummy augue. Metus tellus lacus convallis mollis lorem, curabitur in sit volutpat, porta semper vel amet venenatis quam turpis, donec scelerisque dolor. Quam est iaculis, itaque eu aptent mattis. Ligula commodo faucibus elementum. Vivamus tellus in dignissim. Elit wisi lacus aptent lobortis, tellus non in sit integer rhoncus, felis condimentum. Donec fermentum, nullam quam posuere velit ullamcorper malesuada suscipit, sed magna tristique, suscipit urna ut. Blandit neque viverra orci wisi dictum, laboriosam vitae pretium sem eu non. Sodales nascetur velit quis, tortor sapien dolor.</p>
            <p>Amet dapibus aenean justo, lectus tortor, a elit, orci et dui pede ullamcorper mauris, blandit pretium lectus morbi neque scelerisque. Et ac ornare aliquet lacinia arcu, sem turpis vitae, qui suspendisse vitae, vestibulum leo est nisl id ipsum, id vehicula praesent odio. Risus quam, sapien metus ultricies lorem, sit vivamus magna, magna duis non leo mi aenean sit, sit sed sem euismod. Condimentum justo lacus vel vitae, ipsum a odio. Tempor amet vitae et, vel penatibus eget turpis erat, integer platea rutrum placerat lacus aenean consequat, pellentesque pellentesque, curabitur amet curabitur phasellus pellentesque curabitur. Placerat id, recusandae urna aliquet tincidunt velit lacus eros, et aliquam nullam etiam eleifend leo, pariatur nibh diam laoreet egestas sit dui, praesent enim curabitur eu. Tincidunt sit aliquam a elementum ornare sodales, ligula consequat ut wisi fringilla at, quam eleifend tincidunt eros eos aenean, urna euismod sit leo ut amet enim. Suscipit voluptatum nunc, pede maecenas sed nibh magna. Per sem felis donec duis quis. A elit. Ante quis a, viverra justo suspendisse dignissim purus elit suspendisse, eget et amet posuere ultricies, pede sit, nec nunc venenatis tempus eget. Imperdiet nunc, eget sem ad, id sed massa suspendisse proin consequat commodo.</p>
      `
  });

  posts: Post[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = [ this.article ];
    this.route.params.subscribe((params: Params) => {
      this.postId = params.id;
      for (const post of this.posts) {
        if (params.id === post.uniqueTitle) {
          this.post = post;
        }
      }
    });

  }
}
