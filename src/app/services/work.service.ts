import { Injectable } from '@angular/core';
import { WorkCategory, Work } from '@/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  thumbnailBasePath = 'assets/works';
  categories: WorkCategory[] = [
      { id: 'design', body: 'デザイン' },
      { id: 'contest', body: 'コンテスト' },
      { id: 'ionic', body: 'angular/ionic' },
      { id: 'other', body: 'その他' }
    ];
  works: Work[] = [
      {
        id: 'procon',
        title: 'プログラミングコンテスト',
        description:
          `
          いろはにほへとチリぬるを
          いろはにほへとチリぬるを
          いろはにほへとチリぬるを
          `,
        date: new Date('20200301'),
        result: '優勝',
        thumbnail: `${this.thumbnailBasePath}/icon.jpg`,
        cateogryIds: ['contest']
      },
      {
        id: 'procon',
        title: 'プログラミングコンテスト',
        description:
          `
          いろはにほへとチリぬるを
          いろはにほへとチリぬるを
          いろはにほへとチリぬるを
          `,
        date: new Date('20200301'),
        result: '優勝',
        thumbnail: `${this.thumbnailBasePath}/icon.jpg`,
        cateogryIds: ['contest']
      },
      {
        id: 'procon',
        title: 'プログラミングコンテスト',
        description:
          `
          いろはにほへとチリぬるを
          いろはにほへとチリぬるを
          いろはにほへとチリぬるを
          `,
        date: new Date('20200301'),
        result: '優勝',
        thumbnail: `${this.thumbnailBasePath}/icon.jpg`,
        cateogryIds: ['contest']
      },
    ];


  constructor() {}

  fetchWorks(): Work[] {
    return this.works;
  }
  fetchWork(id: string): Work {
    return this.works.find(w => w.id === id);
  }
}
