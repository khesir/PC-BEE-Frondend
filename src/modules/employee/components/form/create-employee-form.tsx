
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserPlus2 } from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { DepartmentData, DesignationData, EmployeeStatus, EmployeeType, PayrollFrequency } from "../../constant/temp-data";
import { generateCustomUUID } from "@/lib/utils";
import { CreateEmployeeSchema } from "../../zod/schema";
import { Department, Designation } from "../../types/types";

export function CreateEmployeeForm(){
    const [uuid, setUUID] = useState<string>()
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const [isFetching, setIsFetching] = useState<boolean>(false)
	const {toast} = useToast()
	const [designation, setDesignation] = useState<Designation[]>()
	const [department, setDepartment] = useState<Department[]>()

	const form = useForm<z.infer<typeof CreateEmployeeSchema>>({
		resolver: zodResolver(CreateEmployeeSchema),
		defaultValues: {
			employee_id : uuid,
			firstname: '',
			middlename: '',
			lastname: '',
			
			// Personal Information
			birthday: '',
			gender: '',
			
			phone: '',
			email: '',
			
			// Contact Information
			addressLine: '',
			postalCode : '',
			
			// Employment
			department_id : '',
			designation_id : '',
			employee_type: '',
			employee_status: '',
			
			// Salary
			payroll_frequency: '',
			base_salary: '',
			
			pagibig_id : '',
			sssid: '',
			philhealth_id: '', 
			tin_id: ''
		}
	})
	// Load Data for for dropdown and others that is need for inputs and dropdowns
	useEffect(()=> {
		console.log('Fetching Data')
		const handleData = async () => {
			try{
				const data : Designation[] = DesignationData
				setDesignation(data)
				const dept : Department[] = DepartmentData
				setDepartment(dept)
			} catch (error){
				toast({
					variant: "destructive",
					title: "Something went wrong",
					description: (
						<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
							<code className="text-white">{JSON.stringify(error, null, 2)}</code>
						</pre>
						),
				})
			}
		}
		const fetchEmployeeID = async () => {
			const data = generateCustomUUID()
			setUUID(data)
		}
		setIsFetching(true)
		// Fetches data
		handleData()
		// Generate UUID
		fetchEmployeeID()
		setIsFetching(false)
	},[toast])

	useEffect(() => {
	if (uuid) {
		form.setValue('employee_id', uuid);
	}
	}, [uuid, form]);

	if (isFetching) {
		return <div>Loading...</div>; // Or a custom loading spinner/component
	}
	
	// Handle submit
	const handleSubmit = async (data: z.infer<typeof CreateEmployeeSchema>) => {
		console.log(data)
		setIsSubmitting(true)
		try{
			toast({
				variant:'default',
				title:'Data sent to backend',
				description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                    ),
			})
		} catch (error){
			toast({
                variant: "destructive",
                title: "Something went wrong",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(error, null, 2)}</code>
                    </pre>
                    ),
            })
		} finally {
			setIsSubmitting(false)
		}
	}
    return(
		<div className="h-full p-5">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className=""
				>
				<div className="w-full">
					{/* Company Profile */}
					<div className="w-full">

						{/* Cathegory Title */}
						<div className="border-b border-white">
							<h1 className="font-semibold text-md">Company Profile</h1>
							<span className="text-sm text-slate-300">
								This is where company necessary information
							</span>
						</div>
						{/* Inputs */}
						<div className="p-3 grid grid-cols-3 gap-x-10">
							<FormField
								control={form.control}
								name = 'employee_id'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Employee ID</FormLabel>
										<FormControl>
											<Input
												disabled={true}
												placeholder=""
												className="text-black"
												
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name = 'designation_id'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Designation</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
											<FormControl>
												<SelectTrigger className="text-black">
													<SelectValue placeholder="Choose Designation"/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{designation?.map((d,i) => (
													<SelectItem key={i} value={String(d.designation_id)}>{d.title}</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage/>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name = 'department_id'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Department</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
											<FormControl>
												<SelectTrigger className="text-black">
													<SelectValue placeholder="Choose Department"/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{department?.map((d,i) => (
													<SelectItem key={i} value={String(d.department_id)}>{d.name}</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage/>
									</FormItem>
								)}
							/>
							
							<FormField
								control={form.control}
								name = 'employee_type'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Employee Type</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
											<FormControl>
												<SelectTrigger className="text-black">
													<SelectValue placeholder="Choose Employee Type"/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{EmployeeType.map((d,i) => (
													<SelectItem key={i} value={d.value}>{d.name}</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage/>
									</FormItem>
								)}
							/>
							
							<FormField
								control={form.control}
								name = 'employee_status'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Employee Status</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
											<FormControl>
												<SelectTrigger className="text-black">
													<SelectValue placeholder="Choose Employee Status"/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{EmployeeStatus.map((d,i) => (
													<SelectItem key={i} value={d.value}>{d.name}</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
					</div>
					{/* Personal Infomation */}
					<div className="w-full">

						{/* Cathegory Title */}
						<div className="border-b border-white">
							<h1 className="font-semibold text-md">Personal Information</h1>
							<span className="text-sm text-slate-300">
								Employee's necessary informations
							</span>
						</div>
						{/* Inputs */}
						<div className="p-3 grid grid-cols-3 gap-x-10">
							<FormField
								control={form.control}
								name = 'firstname'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Firstname</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="John"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name = 'middlename'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Middlename</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="Decar"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							
							<FormField
								control={form.control}
								name = 'lastname'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Lastname</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="Doe"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							
							<FormField
								control={form.control}
								name = 'gender'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Gender</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="Male"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							
							<FormField
								control={form.control}
								name = 'birthday'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Birthday</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="12-25-2000"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name = 'phone'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Phone</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="0923 232 2321"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name = 'email'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="johndoe@gmail.com"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name = 'addressLine'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Address Line</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="Prk Banana"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name = 'postalCode'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Postal Code</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="8231"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							
						</div>
					</div>
					{/* Salary Information */}
					<div className="w-full">

						{/* Cathegory Title */}
						<div className="border-b border-white">
							<h1 className="font-semibold text-md">Salary Information</h1>
							<span className="text-sm text-slate-300">
								Employee base employee and payroll configurations, all other configurations will be set to default such as, leave limit, benifits and deductions
							</span>
						</div>
						{/* Inputs */}
						<div className="p-3 grid grid-cols-3  gap-x-10">
							<FormField
								control={form.control}
								name = 'payroll_frequency'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Payroll Frequency</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
											<FormControl>
												<SelectTrigger className="text-black">
													<SelectValue placeholder="Choose Employee Status"/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{PayrollFrequency.map((d,i) => (
													<SelectItem key={i} value={d.value}>{d.name}</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage/>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name = 'base_salary'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Base Salary</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="e.g 9999999"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							
						</div>
					</div>
					{/* Identification Finanncial Information */}
					<div className="w-full">

						{/* Cathegory Title */}
						<div className="border-b border-white">
							<h1 className="font-semibold text-md">Identification Financial Information</h1>
							<span className="text-sm text-slate-300">
								Users Tax id and other financial contribution ids
							</span>
						</div>
						{/* Inputs */}
						<div className="p-3 grid grid-cols-3  gap-x-10">
							<FormField
								control={form.control}
								name = 'pagibig_id'
								render = {({field}) => (
									<FormItem>
										<FormLabel>PAG-IBIG ID</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="2023-1-AEXP21"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name = 'sssid'
								render = {({field}) => (
									<FormItem>
										<FormLabel>SSSID</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="eg. 0012-4356789-1"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							
							<FormField
								control={form.control}
								name = 'philhealth_id'
								render = {({field}) => (
									<FormItem>
										<FormLabel>Philhealth ID</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="eg. 17-13254678-0"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name = 'tin_id'
								render = {({field}) => (
									<FormItem>
										<FormLabel>TIN ID</FormLabel>
										<FormControl>
											<Input
												disabled={isSubmitting}
												placeholder="eg. 123-456-789-000"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
					</div>
					
					{/* Submit Button */}
					<div className="w-full flex justify-end">
					<Button
						type="submit"
						className="flex"
					>
						<span className="mr-2">
						<UserPlus2/>
						</span>
						Create Employee
					</Button>
					</div>
				</div>
				</form>
			</Form>
		</div>
        
    )
}