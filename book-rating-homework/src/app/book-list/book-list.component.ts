import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {

    public index            = 0;    

    public modelTitle       = '';
    public modelDescription = '';
    public modelAuthor      = '';

    public bookCollection = [
        {
            bookTitle: 'aaa', bookDescription: 'aa', bookAuthor: 'a', ratingList: [] as number[], averageRating: 0
        },
        {
            bookTitle: 'sss', bookDescription: 'ss', bookAuthor: 's', ratingList: [] as number[], averageRating: 0
        },
        { 
            bookTitle: 'ddd', bookDescription: 'dd', bookAuthor: 'd', ratingList: [] as number[], averageRating: 0
        },
        {
            bookTitle: 'fff', bookDescription: 'ff', bookAuthor: 'f', ratingList: [] as number[], averageRating: 0
        },
        {
            bookTitle: 'ggg', bookDescription: 'gg', bookAuthor: 'g', ratingList: [] as number[], averageRating: 0
        },

    ]

    public calculateRating(rating:number){
        this.bookCollection[this.index].ratingList.push(rating);

        let sum = 0;
        for (let i = 0; i < this.bookCollection[this.index].ratingList.length; i++) {
            sum += this.bookCollection[this.index].ratingList[i];
            console.log(this.bookCollection[this.index].ratingList[i])
        }
        this.bookCollection[this.index].averageRating = sum/this.bookCollection[this.index].ratingList.length;

        this.saveBookData();
        this.nextBook();
    }

    private nextBook(){
        this.index++;

        if (this.index >= this.bookCollection.length) {
            this.index = 0;
        }
    }

    private saveBookData(){

        this.bookCollection[this.index].bookTitle       = this.modelTitle;
        this.bookCollection[this.index].bookDescription = this.modelDescription;
        this.bookCollection[this.index].bookAuthor      = this.modelAuthor;
        this.resetModelData();
    }

    private resetModelData(){

        this.modelTitle       = '';
        this.modelDescription = '';
        this.modelAuthor      = '';

    }
}