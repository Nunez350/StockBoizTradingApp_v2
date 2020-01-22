package com.collabera.stock.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.collabera.stock.model.Stock;
import com.collabera.stock.repository.StocksRepository;


@Service
public class StockService {
	
	@Autowired
	private StocksRepository stockRepo;
	
	public ArrayList<Stock> allStocks(){
		ArrayList<Stock> myStocks = (ArrayList<Stock>) stockRepo.findAll();
		System.out.println("Here!");
		return myStocks;
	}

	public String addFromFile() throws IOException {
		int i = 1;
        FileReader input = new FileReader("C:/Users/krugs/Desktop/nasdaqtraded2.txt");
        BufferedReader bufRead = new BufferedReader(input);
        String myLine = null;
        
        
        while ( (myLine = bufRead.readLine()) != null){
        	
        	i += 1;
        	String[] parsedString = myLine.split(", ");
        	
        	Stock newStock = new Stock();
        	newStock.setId(i);
        	newStock.setSymbol(parsedString[0]);
        	newStock.setCompany_name(parsedString[1]);
        	System.out.println(newStock.toString());
        	stockRepo.save(newStock);
        	
//        	System.out.print(parsedString[0] + " ");
//        	System.out.println(parsedString[1]);
        }
        
        return "Done!";

	}

	public String getStock(String name) {
		
		String symbol = name.toUpperCase();
		System.out.println(symbol);
				
		name = name.toLowerCase();
		name = StringUtils.capitalize(name);
		System.out.println(name);
		
		String ticker = "Nothing";
		
		ArrayList<Stock> allStocks = (ArrayList<Stock>) stockRepo.findAll();
		
		for(int i = 0; i < allStocks.size(); i++) {
			if(allStocks.get(i).getCompany_name().contains(name)) {
				ticker = allStocks.get(i).getSymbol();
			}
			else if(allStocks.get(i).getSymbol().equals(symbol)) {
				ticker = symbol;
			}
		}
		return ticker;
	}
}
