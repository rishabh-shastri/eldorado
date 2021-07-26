package com.sapient.eldorado.enums;

public enum Regex {
	

		IMAGEREGEX("(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)"),
		VIDEOREGEX("^((?:https?:)?\\/\\/)?((?:www|m)\\.)?((?:youtube\\.com|youtu.be))(\\/(?:[\\w-]+\\?v=|embed\\/|v\\/)?)([\\w-]+)(\\S+)?$"),
		PDFREGEX("(http(s?):)([/|.|\\w|\\s|-])*\\.(?:pdf)");

		public final String value;

		private Regex(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
}
