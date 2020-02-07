import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ItemMenu } from 'src/app/Models/itemeMenu';

export interface Menu{
  cat : string 
  items : ItemMenu[]
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    Menu = [
      {cat: 'home' , item :["itehm1","ithem2"]},
      {cat: 'home2', item :["itehm1","ithem2"]},
      {cat: 'home3', item :["itehm1","ithem2"]}
    ]; 
  constructor(private breakpointObserver: BreakpointObserver) {
    
  }


}
