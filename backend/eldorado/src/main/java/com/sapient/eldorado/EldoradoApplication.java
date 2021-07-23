package com.sapient.eldorado;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.sapient.eldorado.services.ProductService;
import com.sapient.eldorado.services.ProductServiceImpl;

@SpringBootApplication
public class EldoradoApplication {
	
	@Bean
	public ProductService getProductService() {
		return new ProductServiceImpl();
	}

	public static void main(String[] args) {
		SpringApplication.run(EldoradoApplication.class, args);
	}

}
