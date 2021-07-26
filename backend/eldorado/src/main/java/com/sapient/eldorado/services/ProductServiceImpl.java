package com.sapient.eldorado.services;

import java.util.List;
import java.util.regex.Pattern;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import com.sapient.eldorado.entities.Product;
import com.sapient.eldorado.enums.Regex;
import com.sapient.eldorado.exceptions.EmptyFieldException;
import com.sapient.eldorado.exceptions.InvalidEntryException;
import com.sapient.eldorado.repositories.ProductRepository;

public class ProductServiceImpl implements ProductService {
	@Autowired
	ProductRepository productRepository;

	static Logger log = Logger.getLogger(ProductServiceImpl.class.getName());

	@Override
	public void addProductService(Product product) throws EmptyFieldException, InvalidEntryException {
		validateProductDetails(product); // Validating Product Details Received
		productRepository
				.save(new Product(product.getName(), product.getDesc(), product.getCategory(), product.getPrice(),
						product.getQuantity(), product.getImageLinksList(), product.getVideoLinksList(), product.getPdfLink()));
	}

	public void validateProductDetails(Product product) throws EmptyFieldException, InvalidEntryException {
		String name = product.getName();
		String desc = product.getDesc();
		String category = product.getCategory();
		int price = product.getPrice();
		int quantity = product.getQuantity();
		List<String> imageLinksList = product.getImageLinksList();
		List<String> videoLinksList = product.getVideoLinksList();
		String pdfLink = product.getPdfLink();

		validateName(name);
		validateDesc(desc);
		validateCategory(category);
		validateQuantity(quantity);
		validatePrice(price);
		for(String link:imageLinksList) {
			validateImageLinks(link);
		}
		for(String link:videoLinksList) {
			validateVideoLinks(link);
		}
		validatePdfLink(pdfLink);

		log.info("Product Details Validated");
	}

	public void validateName(String name) throws EmptyFieldException, InvalidEntryException {
		if (name.isEmpty())
			throw new EmptyFieldException("Name Field ");
	}

	public void validateDesc(String desc) throws EmptyFieldException {
		if (desc.isEmpty())
			throw new EmptyFieldException("Desc Field ");
	}

	public void validateCategory(String category) throws EmptyFieldException, InvalidEntryException {
		if (category.isEmpty())
			throw new EmptyFieldException("Product Category ");
	}

	public void validatePrice(int price) throws InvalidEntryException {
		if (price < 0)
			throw new InvalidEntryException("Product Price ");
	}

	public void validateQuantity(int quantity) throws InvalidEntryException {
		if (quantity < 0)
			throw new InvalidEntryException("Product Quantity ");
	}

	public void validateImageLinks(String imageLinks) throws InvalidEntryException {
		if (!Pattern.matches(Regex.IMAGEREGEX.getValue(), imageLinks)) {
			throw new InvalidEntryException("Image Links ");
		}
			
	}

	public void validateVideoLinks(String videoLinks) throws InvalidEntryException {
		
		
		if (!Pattern.matches(Regex.VIDEOREGEX.getValue(), videoLinks))
			throw new InvalidEntryException("Video Links ");
	}

	public void validatePdfLink(String pdfLinks) throws InvalidEntryException {
		if (!Pattern.matches(Regex.PDFREGEX.getValue(), pdfLinks)) {
			throw new InvalidEntryException("Pdf Links ");
		}
			
	}

}