import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';




import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes'; // Ensure this import is present
import { PostService } from '../../service/post.service';
@Component({
  selector: 'app-create-post',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  postForm!: FormGroup;
  tags:string[] = [];
  postService: any;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private snackBar: MatSnackBar){}

    ngOnInit(){
      this.postForm = this.fb.group({
        name: [null, Validators.required],
        content: [null, [Validators.required, Validators.maxLength(5000)]],
        img: [null, Validators.required],
        postedBy: [null, Validators.required]
      })
    }

    add(event:any) :void{
      const value = (event.value || '').trim();
      if(value){
        this.tags.push(value);
      }

      event.chipInput!.clear();
    }

    remove(tag:any){
      const index = this.tags.indexOf(tag);
      if(index>=0){
        this.tags.splice(index, 1);
      }
    }
      createPost(){
    const data = this.postForm.value;
    data.tags = this.tags;
    this.postService.createNewPost(data).subscribe((res: any)=>{
      this.snackBar.open("Post created succesfully!", "Ok");
      this.router.navigateByUrl("/");
    }, (error: any)=>{
      this.snackBar.open("Something went wrong!", "Ok!");
    })
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatLabel } from '@angular/material/form-field';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatIconModule } from '@angular/material/icon';
// import { COMMA, ENTER } from '@angular/cdk/keycodes'; // Ensure this import is present
// import { PostService } from '../../service/post.service';

// @Component({
//   selector: 'app-create-post',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatLabel,
//     MatChipsModule,
//     MatIconModule,
//   ],
//   templateUrl: './create-post.component.html',
//   styleUrl: './create-post.component.scss'
// })
// export class CreatePostComponent implements OnInit {
//   postForm!: FormGroup;
//   tags: string[] = [];

//   readonly separatorKeysCodes: number[] = [ENTER, COMMA]; // Ensure this property is declared

//   constructor(private fb: FormBuilder,
//     private router: Router,
//     private snackBar: MatSnackBar,
//     private postService: PostService) { }

//   ngOnInit() {
//     this.postForm = this.fb.group({
//       name: [null, Validators.required],
//       content: [null, [Validators.required, Validators.maxLength(5000)]],
//       img: [null, Validators.required],
//       postedBy: [null, Validators.required]
//     });
//   }

//   add(event: any): void {
//     const value = (event.value || '').trim();
//     if (value) {
//       this.tags.push(value);
//     }
//     event.chipInput!.clear();
//   }

//   remove(tag: string): void {
//     const index = this.tags.indexOf(tag);
//     if (index >= 0) {
//       this.tags.splice(index, 1);
//     }
//   }

//   createPost(){
//     const data = this.postForm.value;
//     data.tags = this.tags;
//     this.postService.createNewPost(data).subscribe(res=>{
//       this.snackBar.open("Post created succesfully!", "Ok");
//       this.router.navigateByUrl("/");
//     }, error=>{
//       this.snackBar.open("Something went wrong!", "Ok!");
//     })
//   }
// }