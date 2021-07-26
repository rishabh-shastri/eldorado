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

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getPdfLink() {
		return pdfLink;
	}

	public void setPdfLink(String pdfLink) {
		this.pdfLink = pdfLink;
	}

	public List<String> getImageLinksList() {
		return imageLinksList;
	}

	public void setImageLinksList(List<String> imageLinksList) {
		this.imageLinksList = imageLinksList;
	}

	public List<String> getVideoLinksList() {
		return videoLinksList;
	}

	public void setVideoLinksList(List<String> videoLinksList) {
		this.videoLinksList = videoLinksList;
	}
	

}
