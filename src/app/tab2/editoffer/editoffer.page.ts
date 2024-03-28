import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/tab1/place.model';
import { PlaceService } from 'src/app/tab1/place.service';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.page.html',
  styleUrls: ['./editoffer.page.scss'],
})
export class EditofferPage implements OnInit {
  place: Place;
  id: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private placeService: PlaceService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('placeId');
    this.place = this.placeService.getPlace(this.id);
    console.log(this.id);
    console.log(this.place);
    
    this.form = new FormGroup({
      title: new FormControl(this.place.title, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(this.place.description, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(this.place.price, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      availableFrom: new FormControl(this.place.availableFrom.toISOString(), {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      availableTo: new FormControl(this.place.availableTo.toISOString(), {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }
  onEditOffer() {
    console.log(this.form);
    this.placeService.updateOffer(
      this.id,
      this.form.value.title,
      this.form.value.description,
      this.form.value.price,
      new Date(this.form.value.availableFrom),
      new Date(this.form.value.availableTo));
    this.form.reset();
    this.router.navigate(['/tabs/tab2']);
  }

}
