package com.sapient.eldorado.services;

import com.sapient.eldorado.entities.Product;
import com.sapient.eldorado.exceptions.EmptyFieldException;
import com.sapient.eldorado.exceptions.InvalidEntryException;

public interface ProductService {
	
	public void addProductService(Product product) throws EmptyFieldException, InvalidEntryException;


}
