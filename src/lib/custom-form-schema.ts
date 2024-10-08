import {z} from 'zod';
import {
	basicInformationSchema,
	personalInformationSchema,
	employmentInformationSchema,
	salaryInformationSchema,
	financialInformationSchema,
} from './zod-schema';

// Used on Create Employee Form
const employeeFormSchema = z.object({
	basicInformation: basicInformationSchema,
	personalInformation: personalInformationSchema,
	employmentInformation: employmentInformationSchema,
	salaryInformation: salaryInformationSchema,
	financialInformation: financialInformationSchema,
});

// Export the schema
export {employeeFormSchema};
export type EmployeeFormSchema = z.infer<typeof employeeFormSchema>;
