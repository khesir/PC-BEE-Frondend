'use client';
import {Button} from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import * as z from 'zod';

const formSchema = z.object({
	email: z.string().email({message: 'Enter a valid email address'}),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
	const [loading] = useState(false);
	const navigate = useNavigate();
	const defaultValues = {
		email: 'demo@gmail.com',
	};
	const form = useForm<UserFormValue>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const onSubmit = async (data: UserFormValue) => {
		console.log('Form submitted:', data);

		// Simulate authentication and redirect logic
		if (window.history.state && window.history.state.idx > 0) {
			navigate(-1); // Go back to the previous page
		} else {
			navigate('/dashboard'); // Otherwise, go to the /dashboard page
		}
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-2"
				>
					<FormField
						control={form.control}
						name="email"
						render={({field}) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="Enter your email..."
										disabled={loading}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button disabled={loading} className="ml-auto w-full" type="submit">
						Continue With Email
					</Button>
				</form>
			</Form>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>
		</>
	);
}
