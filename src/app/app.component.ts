import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBannerComponent } from './component/top-banner/top-banner.component';
import { FooterComponent } from "./component/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBannerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokemon-App';
}
