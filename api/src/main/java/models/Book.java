package models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "books_table")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "number")
    private String number;

    @Column(name = "day")
    private String day;

    @Column(name = "place")
    private String place;

    public Book() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Book(int id, String number, String day, String place) {
        this.id = id;
        this.number = number;
        this.day = day;
        this.place = place;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", number='" + number + '\'' +
                ", day='" + day + '\'' +
                ", place='" + place + '\'' +
                '}';
    }
}
