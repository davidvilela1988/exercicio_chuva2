import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

function viewMore(): void {
  let btnShowMore: HTMLElement | null =
    document.getElementById('btn-show-more');
  let open: HTMLElement | null = document.getElementById('open');
  let btnViewMore: HTMLElement | null =
    document.getElementById('btn-view-more');

  if (btnShowMore?.style.display === 'none') {
    btnShowMore.style.display = 'inline';
    open.style.display = 'none';
    btnViewMore.innerHTML = 'Ver mais';
  } else {
    btnShowMore.style.display = 'none';
    open.style.display = 'inline';
    btnViewMore.innerHTML = 'Ver menos';
  }
}

function show1(): void {
  let discussionOpen: HTMLElement | null =
    document.getElementById('discussion-open');
  let discussionOpened: HTMLElement | null =
    document.getElementById('discussion-opened');

  if (discussionOpen) {
    discussionOpen.style.display = 'none';
  }
  if (discussionOpened) {
    discussionOpened.style.display = 'block';
  }
}

function show2(): void {
  let discussionOpened: HTMLElement | null =
    document.getElementById('discussion-opened');
  let discussionSent: HTMLElement | null =
    document.getElementById('discussion-sent');
  let discussionSentWaiting: HTMLElement | null = document.getElementById(
    'discussion-sent-waiting'
  );

  if (discussionOpened) {
    discussionOpened.style.display = 'none';
  }
  if (discussionSent) {
    discussionSent.style.display = 'block';
  }
  if (discussionSentWaiting) {
    discussionSentWaiting.style.display = 'block';
  }
}

function show3(): void {
  let discussionSent: HTMLElement | null =
    document.getElementById('discussion-sent');
  let discussionSentWaiting: HTMLElement | null = document.getElementById(
    'discussion-sent-waiting'
  );
  let discussionOpen: HTMLElement | null =
    document.getElementById('discussion-open');

  if (discussionSent) {
    discussionSent.style.display = 'none';
  }
  if (discussionSentWaiting) {
    discussionSentWaiting.style.display = 'none';
  }
  if (discussionOpen) {
    discussionOpen.style.display = 'block';
  }
}

function showComments(): void {
  let comment: HTMLElement | null = document.getElementById('comment');
  let btnIcon1: HTMLElement | null = document.getElementById('btn-icon1');
  let btnIcon2: HTMLElement | null = document.getElementById('btn-icon2');

  if (comment?.style.display === 'inline') {
    comment.style.display = 'none';
    if (btnIcon1) {
      btnIcon1.innerHTML = '1 like';
    }
    if (btnIcon2) {
      btnIcon2.innerHTML = '1 resposta';
    }
  } else {
    if (comment) {
      comment.style.display = 'inline';
    }
    if (btnIcon1) {
      btnIcon1.innerHTML = '4 likes';
    }
    if (btnIcon2) {
      btnIcon2.innerHTML = '4 respostas';
    }
  }
}
