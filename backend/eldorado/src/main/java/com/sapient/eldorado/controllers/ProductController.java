package com.sapient.eldorado.controllers;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.sapient.eldorado.entities.Product;
import com.sapient.eldorado.exceptions.EmptyFieldException;
import com.sapient.eldorado.exceptions.InvalidEntryException;
import com.sapient.eldorado.repositories.ProductRepository;
import com.sapient.eldorado.services.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	static Logger log = Logger.getLogger(ProductController.class.getName());

	@GetMapping("/")
	public String hello() {
		log.info("Greeting from Product Controller Hello");
		return "Hello";
	}

	@PostMapping("/admin/product")
	public void addProduct(@RequestBody Product product) {
		System.out.println(product);
		try {
			productService.addProductService(product);
			if (product != null)
				log.info("Product Added Successfully");
			else
				log.info("Product Details Not Recieved");
		} catch (EmptyFieldException e) {
			log.error(e.getMessage(), e);
		} catch (InvalidEntryException e) {
			log.error(e.getMessage(), e);
		}
	}

}
