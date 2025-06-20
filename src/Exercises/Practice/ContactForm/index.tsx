import { useState } from "react";
import { useFormValidation, FormData, FormError } from "./useFormValidation";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    subscribe: false,
    message: "",
  });
  const [formError, setFormError] = useState<FormError>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    const errors = useFormValidation(formData);
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }
    alert("Submitted successfully");
    setFormError({});
    setFormData({
      name: "",
      email: "",
      role: "",
      subscribe: false,
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    // console.log(name, value, type, checked);
  };
  return (
    <div className="w-screen text-center">
      <h1 className="mb-5">Contact Form</h1>
      <form onSubmit={handleSubmit} className="">
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            // value={formData.name}
            // onChange={handleChange}
            className="border ml-4 p-2"
          />
          {formError.name && (
            <p className="text-red-500 text-sm">{formError.name}</p>
          )}
        </div>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            // value={formData.email}
            // onChange={handleChange}
            className="border ml-4 p-2"
          />
          {formError.email && (
            <p className="text-red-500 text-sm">{formError.email}</p>
          )}
        </div>
        {/* Role */}
        <div className="mb-3">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border ml-4 p-2"
          >
            <option>Select a Role:</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full-Stack</option>
          </select>
          {formError.role && (
            <p className="text-red-500 text-sm">{formError.role}</p>
          )}
        </div>
        {/* Subscribe */}
        <div>
          <label htmlFor="subscribe">Subscribe</label>
          <input
            name="subscribe"
            type="checkbox"
            checked={formData.subscribe}
            onChange={handleChange}
            className="ml-5"
          />
          {formError.subscribe && (
            <p className="text-red-500 text-sm">{formError.subscribe}</p>
          )}
        </div>
        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border ml-4 p-2"
          />
          {formError.message && (
            <p className="text-red-500 text-sm">{formError.message}</p>
          )}
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
