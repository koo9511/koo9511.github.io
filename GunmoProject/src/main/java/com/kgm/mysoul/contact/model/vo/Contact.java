package com.kgm.mysoul.contact.model.vo;

public class Contact {
	private static final long serialVersionUID = 100L;
	
	private int contact_no;
	private String contact_name;
	private String contact_email;
	private String contact_phone;
	private String contact_content;
	
	public Contact() {}

	public Contact(int contact_no, String contact_name, String contact_email, String contact_phone,
			String contact_content) {
		super();
		this.contact_no = contact_no;
		this.contact_name = contact_name;
		this.contact_email = contact_email;
		this.contact_phone = contact_phone;
		this.contact_content = contact_content;
	}

	public int getContact_no() {
		return contact_no;
	}

	public void setContact_no(int contact_no) {
		this.contact_no = contact_no;
	}

	public String getContact_name() {
		return contact_name;
	}

	public void setContact_name(String contact_name) {
		this.contact_name = contact_name;
	}

	public String getContact_email() {
		return contact_email;
	}

	public void setContact_email(String contact_email) {
		this.contact_email = contact_email;
	}

	public String getContact_phone() {
		return contact_phone;
	}

	public void setContact_phone(String contact_phone) {
		this.contact_phone = contact_phone;
	}

	public String getContact_content() {
		return contact_content;
	}

	public void setContact_content(String contact_content) {
		this.contact_content = contact_content;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Contact [contact_no=" + contact_no + ", contact_name=" + contact_name + ", contact_email="
				+ contact_email + ", contact_phone=" + contact_phone + ", contact_content=" + contact_content + "]";
	}
	
	
	
}
