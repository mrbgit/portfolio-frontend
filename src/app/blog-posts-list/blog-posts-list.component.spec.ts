import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';

import { BlogPostsListComponent } from './blog-posts-list.component';
import { Post } from '../shared/classes/post';
import { BlogPostsService } from '../shared/services/blog-posts.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BlogPostsListComponent', () => {
  let component: BlogPostsListComponent;
  let fixture: ComponentFixture<BlogPostsListComponent>;
  const mockRouter = {
    snapshot: {},
    queryParams: {
      subscribe: () => {
        return Observable.of({
          params: {
            page: 69
          }
        });
      }
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostsListComponent],
      imports: [RouterTestingModule, PaginationModule, HttpModule, FormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockRouter },
        BlogPostsService,
        PaginationConfig,
        HttpClient,
        HttpHandler
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show jumbotrons for each blog post', fakeAsync(() => {


    component.posts = [
      new Post({
        title: 'TestArticle 1 Title',
        description: 'test article 1 despcription',
        author: 'test author1',
        image: { src: 'assets/images/woman-with-fidget-spinner.jpeg', name: 'woman with fidget spinner' },
        content: '<p>test content1</p>',
        postType: 'blogPost'
      }),
      new Post({
        title: 'TestArticle 2 Title',
        description: 'test article 2 despcription',
        author: 'test author2',
        image: { src: 'assets/images/woman-with-fidget-spinner.jpeg', name: 'woman with fidget spinner' },
        content: '<p>test content2</p>',
        postType: 'blogPost'
      }),
      new Post({
        title: 'TestArticle 3 Title',
        description: 'test article 3 despcription',
        author: 'test author3',
        image: { src: 'assets/images/woman-with-fidget-spinner.jpeg', name: 'woman with fidget spinner' },
        content: '<p>test content3</p>',
        postType: 'blogPost'
      })
    ];
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const postDebugElements = fixture.debugElement.queryAll(By.css('.post-item-card'));

    expect(postDebugElements.length).toEqual(3);
    expect(postDebugElements[0].nativeElement.children[0].querySelector('h4').innerHTML).toEqual('TestArticle 1 Title');
    expect(postDebugElements[1].nativeElement.children[0].querySelector('h4').innerHTML).toEqual('TestArticle 2 Title');
    expect(postDebugElements[2].nativeElement.children[0].querySelector('h4').innerHTML).toEqual('TestArticle 3 Title');
  }));

  it('should have a method switchPage that sets the current page and calls route.navigate and scrolls to the top of the window', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    const windowSpy = spyOn(window, 'scrollTo');

    component.switchPage({ page: 7 });
    expect(component.currentPage).toEqual(7);
    expect(navigateSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith(0, 0);
  });
});
