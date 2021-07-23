package com.sapient.eldorado.entities;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "product_details")
@Data
public class Product implements Serializable{
	@Id
	private String id;
	private String name;
	private String desc;
	private String category;
	private int price;
	private int quantity;
	private String pdfLink;
	private List<String> imageLinksList;
	private List<String> videoLinksList;
	
	public Product() {
	}
	
	public Product(String name, String desc, String category, int price, int quantity, List<String> imageLinksList,
			List<String> videoLinksList, String pdfLink) {
		super();
		this.name = name;
		this.desc = desc;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
		this.imageLinksList = imageLinksList;
		this.videoLinksList = videoLinksList;
		this.pdfLink = pdfLink;
	}
	

}
