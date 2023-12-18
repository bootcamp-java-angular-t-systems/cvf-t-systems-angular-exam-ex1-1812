import { Routes } from '@angular/router';
import { MovieDetailComponent } from './components/character/character-detail/character-detail.component';
import { MovieListComponent } from './components/character/character-list/character-list.component';
import { SeriesDetailComponent } from './components/series/series-detail/series-detail.component';
import { SeriesListComponent } from './components/series/series-list/series-list.component';
import { MoviePopularListComponent } from './components/movies/movie-popular-list/movie-popular-list.component';

export const routes: Routes = [
    {
        path: 'movie/:id',
        component: MovieDetailComponent
    },
    {
        path: 'movies',
        component: MovieListComponent
    },
    {
        path: 'serie/:id',
        component: SeriesDetailComponent
    },
    {
        path: 'series',
        component: SeriesListComponent
    },
    {
        path: 'search/:name',
        component: MovieListComponent
    },
    {
        path: 'movies/popular',
        component: MoviePopularListComponent
    },
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
];
