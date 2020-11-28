import { TabsPage } from './menu/tabs/tabs.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage, children: [
      {
        path: 'tabs',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'jobs',
        loadChildren: () => import('./Components/jobs/jobs.module').then( m => m.JobsPageModule)
      },
      {
        path: 'schools',
        loadChildren: () => import('./Components/schools/schools.module').then( m => m.SchoolsPageModule)
      },
      {
        path: 'business',
        loadChildren: () => import('./Components/business/business.module').then( m => m.BusinessPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./Components/news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'moghozi',
        loadChildren: () => import('./Components/moghozi/moghozi.module').then( m => m.MoghoziPageModule)
      },
      
    ]
  },
  {
    path: 'entry',
    loadChildren: () => import('./Components/entry/entry.module').then( m => m.EntryPageModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./Components/entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  },
  {
    path: 'sport',
    loadChildren: () => import('./Components/sport/sport.module').then( m => m.SportPageModule)
  },
  {
    path: 'internships',
    loadChildren: () => import('./Components/internships/internships.module').then( m => m.InternshipsPageModule)
  },
  {
    path: 'learnerships',
    loadChildren: () => import('./Components/learnerships/learnerships.module').then( m => m.LearnershipsPageModule)
  },
  {
    path: 'soccer',
    loadChildren: () => import('./Components/soccer/soccer.module').then( m => m.SoccerPageModule)
  },
  {
    path: 'rudby',
    loadChildren: () => import('./Components/rudby/rudby.module').then( m => m.RudbyPageModule)
  },
  {
    path: 'tennis',
    loadChildren: () => import('./Components/tennis/tennis.module').then( m => m.TennisPageModule)
  },
  {
    path: 'malontone',
    loadChildren: () => import('./Components/malontone/malontone.module').then( m => m.MalontonePageModule)
  },
  {
    path: 'madiboane',
    loadChildren: () => import('./Components/madiboane/madiboane.module').then( m => m.MadiboanePageModule)
  },
  {
    path: 'mmadimo',
    loadChildren: () => import('./Components/mmadimo/mmadimo.module').then( m => m.MmadimoPageModule)
  },
  {
    path: 'kgope',
    loadChildren: () => import('./Components/kgope/kgope.module').then( m => m.KgopePageModule)
  },
  {
    path: 'ramoshidi',
    loadChildren: () => import('./Components/ramoshidi/ramoshidi.module').then( m => m.RamoshidiPageModule)
  },
  {
    path: 'seabe',
    loadChildren: () => import('./Components/seabe/seabe.module').then( m => m.SeabePageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./Components/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'djs',
    loadChildren: () => import('./Components/djs/djs.module').then( m => m.DjsPageModule)
  },   {
    path: 'headlines',
    loadChildren: () => import('./Components/headlines/headlines.module').then( m => m.HeadlinesPageModule)
  },
  {
    path: 'businesses',
    loadChildren: () => import('./Components/businesses/businesses.module').then( m => m.BusinessesPageModule)
  },
  {
    path: 'politics',
    loadChildren: () => import('./Components/politics/politics.module').then( m => m.PoliticsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
