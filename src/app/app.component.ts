import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'About',
      url: '/folder/About',
      icon: 'person'
    },
    {
      title: 'Skills',
      url: '/folder/Skills',
      icon: 'glasses'
    },
    {
      title: 'Experience',
      url: '/folder/Experience',
      icon: 'briefcase'
    },
    {
      title: 'Projects',
      url: '/folder/Projects',
      icon: 'rocket'
    },
    {
      title: 'Education',
      url: '/folder/Education',
      icon: 'library'
    },
    {
      title: 'Contact',
      url: '/folder/Contact',
      icon: 'mail'
    }
  ];
  public labels = ['PHP', 'Angular', 'MongoDB', 'NodeJS'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
