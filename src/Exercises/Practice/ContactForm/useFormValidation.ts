export type FormData = {
    name: string;
    email: string;
    role: string;
    subscribe: boolean;
    message: string; 
}

export type FormError = Partial<Record<keyof FormData, string>>;

export const useFormValidation = (formData: FormData): FormError => {
    let error:FormError = {};
    if(!formData.name.trim()) {
        error.name = "Name is required"
    }
    if(!formData.email.trim()) {
        error.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        error.email = 'Email is invalid.';
    }
    if(!formData.role) {
        error.role = "Please select a role"
    }
    if(!formData.message.trim()) {
        error.message = "Message is required"
    }
    return error;
}