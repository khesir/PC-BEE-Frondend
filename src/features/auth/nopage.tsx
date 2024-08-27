import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';

export default function NoPage() {
	const navigate = useNavigate();

	// Function to handle the button click
	const handleGoBack = () => {
		navigate(-1); // Go back one step in the history stack
	};
	return (
		<div>
			No page found
			<Button onClick={handleGoBack}>Back</Button>
		</div>
	);
}
