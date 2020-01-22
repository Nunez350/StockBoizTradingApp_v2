package com.collabera.stock.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stocks", schema = "stocksymbols2")
public class Stock {
		
	@Id
	private int id;
	@Column(name = "symbol")
	private String symbol;
	@Column(name = "company_name")
	private String company_name;
	
	
	
	public Stock() {
		this.id = 0;;
		this.symbol = "";
		this.company_name = "";
	}

	public Stock(int id, String symbol, String company_name) {
		this.id = id;
		this.symbol = symbol;
		this.company_name = company_name;
	}

	@Override
	public String toString() {
		return "Stock [id=" + id + ", symbol=" + symbol + ", company_name=" + company_name + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	
	

}
