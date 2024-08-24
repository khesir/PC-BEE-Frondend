import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

function generateCustomID(idLength : number) {
	const digits = '0123456789';
	const alphanumeric = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	let id = '';
  
	// Generate the first 5 digits
	for (let i = 0; i < 5; i++) {
	  id += digits.charAt(Math.floor(Math.random() * digits.length));
	}
  
	// Generate the alphanumeric part of the ID
	for (let i = 0; i < idLength; i++) {
	  id += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
	}
  
	return id;
  }
  
export function generateCustomUUID() {
const today = new Date();

// Extract year, day, and month
const year = today.getFullYear();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');

// Generate the custom ID
const customID = generateCustomID(5);

// Construct the final UUID pattern
const finalUUID = `${year}-${day}-${month}-${customID}`;

return finalUUID;
}