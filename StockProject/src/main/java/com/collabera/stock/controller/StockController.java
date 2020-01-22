package com.collabera.stock.controller;

import java.io.IOException;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.collabera.stock.model.Stock;
import com.collabera.stock.service.StockService;
import com.fasterxml.jackson.databind.JsonMappingException;

@RestController
public class StockController {

	@Autowired
	private StockService stockService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/stock")
	public @ResponseBody ArrayList<Stock> getRecipes() {
		return stockService.allStocks();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/stockadd")
	public @ResponseBody String getStocks() throws IOException {
		return stockService.addFromFile();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/stock{name}")
    public @ResponseBody String getCar(@PathVariable("name") String name) throws JsonMappingException {
		if(!name.equals("")) {
	        return stockService.getStock(name);                              
		}
		else {
			//return "Id is null.";
			return "Not found!";
		}
    }
	
}
