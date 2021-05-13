package services;

import dao.BookDao;
import models.Book;

import java.util.List;

public class BookService {
    private BookDao booksDao = new BookDao();

    public BookService() {
    }

    public Book findBook(int id) {
        return booksDao.findById(id);
    }

    public void saveBook(Book book) {
        booksDao.save(book);
    }

    public void deleteBook(Book book) {
        booksDao.delete(book);
    }

    public void updateBook(Book book) {
        booksDao.update(book);
    }

    public List<Book> findAllBooks() {
        return booksDao.findAll();
    }
}
