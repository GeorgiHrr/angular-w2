import { Component} from "@angular/core";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {
    public isEndScreen = false;
    public isFinished = false;
    public index            = 0;

    public modelTitle       = '';
    public modelDescription = '';
    public modelAuthor      = '';

    public bookCollection = [
        {
            bookTitle: 'Еманципирана магия', 
            bookDescription: 'Еманципирана магия е роман в жанр хумористично фентъзи. Тя е третата по ред книга от поредицата на Тери Пратчет - Светът на диска.',
            bookAuthor: 'Тери Пратчет', 
            ratingList: [] as number[], 
            averageRating: 0
        },
        {
            bookTitle: 'Жътварят', 
            bookDescription: 'Жътварят е единайсeтият по ред роман от поредицата на Тери Пратчет „Светът на диска“.', 
            bookAuthor: 'Тери Пратчет', 
            ratingList: [] as number[], 
            averageRating: 0
        },
        { 
            bookTitle: 'Пътеводител на галактическия стопаджия', 
            bookDescription: 'Във всички версии, повествованието следва приключенията на Артър Дент, злочест англичанин, който заедно със своя приятел Форд Префект, извънземен от малка планета някъде около Бетелгейзе и сътрудник на Пътеводителя, успява да се спаси при разрушаването на Земята от бюрократичната извънземна раса на Вогоните. ', 
            bookAuthor: 'Дъглас Адамс', 
            ratingList: [] as number[], 
            averageRating: 0
        },
        {
            bookTitle: 'Приключенията на Шерлок Холмс', 
            bookDescription: 'Приключенията на Шерлок Холмс е първият сборник с 12 разказа на писателя Артър Конан Дойл за известния детектив Шерлок Холмс.', 
            bookAuthor: 'Артър Конан Дойл', 
            ratingList: [] as number[], 
            averageRating: 0
        },
        {
            bookTitle: 'Нарушаване на мира', 
            bookDescription: 'Когато императорско семейство бъде намерено заклано, Божиите служители са призовани да разследват. Доказателствата сочат бунтовническа група, която се опитва да всее страх в самото сърце на империята. Инспектор Khlid започва мъчителен лов за отговорните, но когато по-голяма конспирация излиза наяве, тя се бори да се довери дори на служителите около нея.', 
            bookAuthor: 'Даниел Б. Грийн', 
            ratingList: [] as number[], 
            averageRating: 0
        },
    ]

    public calculateRating(rating:number){
        this.bookCollection[this.index].ratingList.push(rating);

        let sum = 0;
        for (let i = 0; i < this.bookCollection[this.index].ratingList.length; i++) {
            sum += this.bookCollection[this.index].ratingList[i];
        }
        this.bookCollection[this.index].averageRating = sum/this.bookCollection[this.index].ratingList.length;

        this.saveBookData();
        this.nextBook();
    }

    public rateAgain(){

        this.isEndScreen = false;

    }

    public finish(){
        this.isFinished = true;
    }

    private nextBook(){
        this.index++;

        if (this.index >= this.bookCollection.length) {
            this.index = 0;
            this.isEndScreen = true;
        }
    }

    private saveBookData(){
        if(this.modelTitle != ''){
            this.bookCollection[this.index].bookTitle       = this.modelTitle;
        }
        if(this.modelDescription != ''){
            this.bookCollection[this.index].bookDescription = this.modelDescription;
        }
        if(this.modelAuthor != ''){
            this.bookCollection[this.index].bookAuthor      = this.modelAuthor;
        }
        this.resetModelData();
    }

    private resetModelData(){

        this.modelTitle       = '';
        this.modelDescription = '';
        this.modelAuthor      = '';

    }
}