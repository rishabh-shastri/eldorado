package com.sapient.eldorado.services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.sapient.eldorado.entities.Product;
import com.sapient.eldorado.exceptions.EmptyFieldException;
import com.sapient.eldorado.exceptions.InvalidEntryException;

// Test Class for ProductServiceImpl
class ProductServiceImplTest {

	ProductServiceImpl productService=new ProductServiceImpl();
	
	@Test
	public void validProductDetails(){
		List<String> imageLinksList = new ArrayList<>();
		imageLinksList.add("http://www.example.com/ %26here.html"); //Adding an invalid Image URL
		
		List<String> videoLinksList = new ArrayList<>();
		videoLinksList.add("http://www.example.com/ %26here.html"); //Adding an invalid Video URL

		Product product=new Product("add87@","","Accessories",-1,-1,imageLinksList,videoLinksList,"http://www.example.com/ %26here.html");
		Exception exception = assertThrows(EmptyFieldException.class,()->productService.validateProductDetails(product)); //Testing with assertThrows
		String expectedMessage = "Desc Field";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage)); //Testing if Exception thrown is Matching Expected Exception Thrown 
	}
	
	@Test
	public void validProductName(){
		String name = ""; //Empty Product Name
		Exception exception = assertThrows(EmptyFieldException.class,()->productService.validateName(name));//Testing with assertThrows
		String expectedMessage = "Name Field";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage));//Testing if Exception thrown is Matching Expected Exception Thrown
	}
	
		
	@Test
	public void validProductDescription(){
		String desc = "";
		Exception exception = assertThrows(EmptyFieldException.class,()->productService.validateDesc(desc));//Testing with assertThrows
		String expectedMessage = "Desc Field";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage));//Testing if Exception thrown is Matching Expected Exception Thrown
	}
	@Test
	public void validProductQuantity(){
		int quantity = -1;
		Exception exception = assertThrows(InvalidEntryException.class,()->productService.validateQuantity(quantity));//Testing with assertThrows
		String expectedMessage = "Product Quantity";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage));//Testing if Exception thrown is Matching Expected Exception Thrown
	}
	@Test
	public void validProductPrice(){
		int price = -1;
		Exception exception = assertThrows(InvalidEntryException.class,()->productService.validatePrice(price));//Testing with assertThrows
		String expectedMessage = "Product Price";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage));//Testing if Exception thrown is Matching Expected Exception Thrown
	}
	
	@Test
	public void validProductImageLinks(){
		String link = "http://www.example.com/ %26here.html";
		Exception exception = assertThrows(InvalidEntryException.class,()->productService.validateImageLinks(link));//Testing with assertThrows
		String expectedMessage = "Image Links";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage));//Testing if Exception thrown is Matching Expected Exception Thrown
	}

	@Test
	public void validProductVideoLinks(){
		String link = "http://www.example.com/ %26here.html";
		Exception exception = assertThrows(InvalidEntryException.class,()->productService.validateVideoLinks(link));//Testing with assertThrows
		String expectedMessage = "Video Links";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage));//Testing if Exception thrown is Matching Expected Exception Thrown
	}

	@Test
	public void validProductPdfLinks(){
		String link = "http://www.example.com/ %26here.html";
		Exception exception = assertThrows(InvalidEntryException.class,()->productService.validatePdfLink(link));//Testing with assertThrows
		String expectedMessage = "Pdf Links";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage));//Testing if Exception thrown is Matching Expected Exception Thrown
	}
	
	@Test
	public void validProductCategory() {
		String category="";
		Exception exception = assertThrows(EmptyFieldException.class,()->productService.validateCategory(category));//Testing with assertThrows
		String expectedMessage = "Product Category ";
		String actualMessage = exception.getMessage();
		assertTrue(actualMessage.contains(expectedMessage));//Testing if Exception thrown is Matching Expected Exception Thrown
	}

}
