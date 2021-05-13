package utils;

import com.google.gson.Gson;
import models.Book;

import java.util.List;

public class SerializationUtil {
    public static String listToJson(List<Book> orders){
        Gson gson = new Gson();
        return gson.toJson(orders);
    }
}
